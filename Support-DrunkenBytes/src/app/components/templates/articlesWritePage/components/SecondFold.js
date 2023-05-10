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
  const [articleData, setArticleData] = useState({});
  const editorCore = React.useRef(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const getResult = async () => {
      const result = await sendRequest(
        `/article/article?url=${props.articleUrl}`
      );
      setArticleData(JSON.parse(result.article.content));
      setFileList([
        {
          uid: result.article.title,
          name: result.article.title,
          status: "done",
          url: result.article.image,
        },
      ]);
      form.setFieldsValue({
        title: result.article.title,
        url: result.article.url,
        description: result.article.description
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
        description: values.description
      };
      await sendRequest(
        props.mode === "write"
          ? `/article/save-article`
          : `/article/update-article`,
        props.mode === "write" ? "POST" : "PUT",
        JSON.stringify(data)
      );
      if (!error) {
        notification.success({
          message:
            props.mode === "write"
              ? "Article Created Successfully"
              : "Article Updated Successfully",
          description:
            props.mode === "write"
              ? `Article ${values.title} created successfully`
              : `Article ${values.title} updated successfully`,
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
      <div className={styles.articleDiv}>
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
                  message: "Please enter Article Title",
                },
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Article Title" className={styles.input} />
            </Form.Item>
            <Form.Item
              name="url"
              rules={[
                {
                  required: true,
                  message: "Please enter Article URL",
                },
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Article URL" className={styles.input} />
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
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input Description!",
                },
              ]}
              className={styles.formItem}
            >
              <Input.TextArea
                className={styles.input} placeholder="Description" 
                autoSize={{ minRows: 4, maxRows: 20 }}
              />
            </Form.Item>
            {(props.mode === "edit" && fileList.length > 0) && <Editor
              data={articleData}
              setData={setArticleData}
              editorCore={editorCore}
            />}
            {
              props.mode === "write" && <Editor
              data={articleData}
              setData={setArticleData}
              editorCore={editorCore}
            />}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.button}
              >
                {props.mode === "write" ? "CREATE ARTICLE" : "UPDATE ARTICLE"}
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </div>
  );
};

export default SecondFold;
