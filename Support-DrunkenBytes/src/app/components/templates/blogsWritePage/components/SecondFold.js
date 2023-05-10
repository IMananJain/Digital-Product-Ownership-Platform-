import styles from "../stylesheets/secondFold.module.css";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import { uploadImage } from "@/app/utils/uploadImage";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, notification, Spin, Button, Form, Input } from "antd";
let Editor = dynamic(() => import("@/app/components/modules/Editor"), {
  ssr: false,
});

const SecondFold = (props) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const { error, sendRequest, isLoading } = useHttpClient();
  const [blogData, setBlogData] = useState({});
  const editorCore = React.useRef(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const getResult = async () => {
      const result = await sendRequest(
        `/blog/blog?url=${props.blogUrl}`
      );
      // setBlogData(JSON.parse(result.blog.content));
      setBlogData(result.blog.content);
      setFileList([
        {
          uid: result.blog.title,
          name: result.blog.title,
          status: "done",
          url: result.blog.image,
        },
      ]);
      form.setFieldsValue({
        title: result.blog.title,
        url: result.blog.url,
      });
    };
    if (props.mode === "edit") {
      getResult();
    }
  }, []);

  const onFinish = async (values) => {
    try {
      const savedData = await editorCore.current.save();
      if (fileList.length === 0) {
        notification.error({
          message: "Image Required",
          description: `Main Image Required`,
          placement: "top",
          className: "error-notification",
        });
        return;
      }
      const data = {
        title: values.title,
        url: values.url,
        content: JSON.stringify(savedData),
        image: fileList[0].url,
      };
      await sendRequest(
        props.mode === "write"
          ? `/blog/save-blog`
          : `/blog/update-blog`,
        props.mode === "write" ? "POST" : "PUT",
        JSON.stringify(data)
      );
      if (!error) {
        notification.success({
          message:
            props.mode === "write"
              ? "Blog Created Successfully"
              : "Blog Updated Successfully",
          description:
            props.mode === "write"
              ? `Blog ${values.title} created successfully`
              : `Blog ${values.title} updated successfully`,
          placement: "top",
          className: "error-notification",
        });
        if (props.mode === "write") {
          form.resetFields();
          setFileList([]);
          await editorCore.current.clear();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    setPreviewImage(file.url);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadMainImage = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;
    try {
      const res = await uploadImage(file, "resources");
      onSuccess("Ok");
      setFileList([
        {
          uid: file.uid,
          name: file.name,
          status: "done",
          url: res.file.url,
        },
      ]);
    } catch (err) {
      console.log(err);
      onError({ err });
    }
  };
  const removeMainImage = async (file) => {
    console.log(file);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div className={styles.secondFold}>
      <div className={styles.blogDiv}>
        <Spin size="large" spinning={isLoading}>
          <Form
            name="basic"
            form={form}
            style={{ maxWidth: "100%" }}
            onFinish={onFinish}
            autoComplete="on"
          >
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please enter Blog Title",
                },
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Blog Title" className={styles.input} />
            </Form.Item>
            <Form.Item
              name="url"
              rules={[
                {
                  required: true,
                  message: "Please enter Blog URL",
                },
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Blog URL" className={styles.input} />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter Main Photo",
                },
              ]}
              className={styles.formItem}
            >
              <Upload
                accept="image/*"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                customRequest={uploadMainImage}
                onRemove={removeMainImage}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{
                    width: "100%",
                  }}
                  src={previewImage}
                />
              </Modal>
            </Form.Item>
            {(props.mode === "edit" && fileList.length > 0) && <Editor
              data={blogData}
              setData={setBlogData}
              editorCore={editorCore}
            />}
            {
              props.mode === "write" && <Editor
              data={blogData}
              setData={setBlogData}
              editorCore={editorCore}
            />}
            
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.button}
              >
                {props.mode === "write" ? "CREATE BLOG" : "UPDATE BLOG"}
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </div>
  );
};

export default SecondFold;
