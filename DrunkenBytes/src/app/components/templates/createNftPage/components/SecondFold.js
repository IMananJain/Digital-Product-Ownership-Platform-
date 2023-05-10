import React, { useState, useEffect } from "react";
import styles from "../stylesheets/secondFold.module.css";
import {
  Button,
  Form,
  Input,
  Spin,
  Switch,
  Upload,
  Modal,
  Select,
  DatePicker,
  notification,
} from "antd";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import CreateNftModal from "./CreateNFTModal";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const SecondFold = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const { error, sendRequest, clearError, isLoading } = useHttpClient();
  const [openModal, setOpenModal] = useState(false);
  const [transactionID, setTransactionID] = useState("");
  const [form] = Form.useForm();
  const [traits, setTraits] = useState([]);
  const [nftType, setNftType] = useState("product");
  const [templateType, setTemplateType] = useState("db_defaultTemplate");
  const [transferable, setTransferable] = useState(true);
  const [burnable, setBurnable] = useState(false);
  const [useCustomImage, setUseCustomImage] = useState(false);
  const [userTemplates, setUserTemplates] = useState([]);
  const [templateOptions, setTemplateOptions] = useState([
    {
      value: "db_defaultTemplate",
      label: "Default Template",
    },
    {
      value: "db_customTemplate",
      label: "Custom Template",
    },
  ]);

  useEffect(() => {
    const getTemplates = async () => {
      try {
        const result = await sendRequest(
          "/template?filters={}&sort={}&page=1&size=1000"
        );
        if (!error) {
          setUserTemplates(result.templates);
          result.templates.map((data, idx) => {
            setTemplateOptions((prevArray) => {
              if (prevArray.some((obj) => obj.value === data._id)) {
                return prevArray;
              } else {
                return [
                  ...prevArray,
                  {
                    value: data._id,
                    label: data.name,
                  },
                ];
              }
            });
          });
        }
      } catch (err) {}
    };
    getTemplates();
  }, []);

  const resetTraitsFields = async () => {
    const fields = await form.getFieldsValue();
    const keys = Object.keys(fields).filter((name) => name.startsWith("key"));
    form.resetFields(keys);
    const values = Object.keys(fields).filter((name) =>
      name.startsWith("value")
    );
    form.resetFields(values);
  };

  useEffect(() => {
    const changeTraitsAccordingToTemplate = async () => {
      if (templateType === "db_customTemplate") {
        return null;
      } else if (templateType === "db_defaultTemplate") {
        await resetTraitsFields();
        if (nftType === "product") {
          const traits = [
            { key: "Product Id", value: "" },
            { key: "Brand Name", value: "" },
          ];
          setTraits(traits);
          traits.map((data, idx) => {
            form.setFieldsValue({ [`key-${idx}`]: data.key });
            form.setFieldsValue({ [`value-${idx}`]: data.value });
          });
        } else if (nftType === "document") {
          const traits = [
            { key: "Document ID", value: "" },
            { key: "Document Type", value: "" },
          ];
          setTraits(traits);
          traits.map((data, idx) => {
            form.setFieldsValue({ [`key-${idx}`]: data.key });
            form.setFieldsValue({ [`value-${idx}`]: data.value });
          });
        } else if (nftType === "other") {
          const traits = [{ key: "", value: "" }];
          setTraits(traits);
          traits.map((data, idx) => {
            form.setFieldsValue({ [`key-${idx}`]: data.key });
            form.setFieldsValue({ [`value-${idx}`]: data.value });
          });
        }
      } else {
        await resetTraitsFields();
        const data = userTemplates.find((item) => item._id === templateType);
        form.setFieldsValue({ templateType: data.name });
        form.setFieldsValue({ nftType: data.nftType });
        setTraits(data.traits);
        data.traits.map((data, idx) => {
          form.setFieldsValue({ [`key-${idx}`]: data.key });
          form.setFieldsValue({ [`value-${idx}`]: data.value });
        });
      }
    };
    changeTraitsAccordingToTemplate();
  }, [templateType, nftType]);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

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

  // Handle form input change
  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...traits];
    list[index][name] = value;
    setTraits(list);
  };

  // Handle add button click
  const handleAddField = () => {
    // Add new empty key-value pair to form data state
    setTraits([...traits, { key: "", value: "" }]);
    form.setFieldsValue({ templateType: "db_customTemplate" });
    setTemplateType("db_customTemplate");
  };

  // Handle remove button click
  const handleRemoveField = (index) => {
    // Remove key-value pair from form data state at specified index
    const list = [...traits];
    list.splice(index, 1);
    setTraits(list);
    form.setFieldsValue({ templateType: "db_customTemplate" });
    setTemplateType("db_customTemplate");
  };

  const onFinish = async (values) => {
    if (useCustomImage && fileList.length == 0) {
      notification.error({
        message: "Image Not Uploaded",
        description:
          "You have opted for custom Image Option. But it seems you have not uploaded the image. Either Upload Image or select use auto-generated Image",
        placement: "top",
        className: "error-notification",
      });
    }
    try {
      const result = await sendRequest(
        "/nft/mint-nft",
        "POST",
        JSON.stringify({
          receiverName: values.receiverName,
          receiverEmail: values.receiverEmail,
          receiverWalletAddress: values.receiverWalletAddress,
          nftType,
          nftName: values.nftName,
          useCustomImage,
          imageBase64: useCustomImage
            ? await getBase64(fileList[0].originFileObj)
            : null,
          isTransferable: !transferable,
          isBurnable: burnable,
          burnAfter: burnable ? values.burnAfter.$d : null,
          traits,
        })
      );
      if (!error) {
        setTransactionID(result.txId);
        setOpenModal(true);
        form.resetFields();
        setTraits([{ key: "", value: "" }]);
        setBurnable(false);
        setFileList([]);
        setNftType("product");
        setTemplateType("db_defaultTemplate");
        setTransferable(true);
        setUseCustomImage(false);
        form.setFieldsValue({ templateType: "db_defaultTemplate" });
        form.setFieldsValue({ nftype: "product" });
      }
    } catch (err) {}
  };

  return (
    <div
      className={styles.createNft}
      style={{
        backgroundImage:
          "url(" + "/images/background/gradient-left-side.png" + ")",
      }}
    >
      <CreateNftModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        transactionID={transactionID}
      />
      <div className={styles.loginDiv}>
        <Spin size="large" spinning={isLoading}>
          <Form
            scrollToFirstError
            layout="vertical"
            name="basic"
            form={form}
            style={{ maxWidth: "100%" }}
            onFinish={onFinish}
            autoComplete="on"
            className="create-nft-form"
            initialValues={{
              burnAfter: undefined,
              nftType,
              templateType,
            }}
          >
            <Form.Item
              label="Receiver Name"
              required
              name="receiverName"
              rules={[
                {
                  required: true,
                  message: "Please input Receiver Name!",
                },
              ]}
              className={styles.formItem}
            >
              <Input
                placeholder="Enter Receiver Name"
                className={styles.input}
              />
            </Form.Item>
            <Form.Item
              label="Receiver Email"
              required
              name="receiverEmail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid Email!",
                },
                {
                  required: true,
                  message: "Please input Receiver Email!",
                },
              ]}
              className={styles.formItem}
            >
              <Input
                placeholder="Enter Receiver Email"
                className={styles.input}
              />
            </Form.Item>

            <Form.Item
              label="Receiver Wallet Address"
              required
              name="receiverWalletAddress"
              rules={[
                {
                  required: true,
                  message: "Please input Receiver Wallet Address!",
                },
                {
                  pattern: new RegExp(/(\b0x[a-f0-9A-F]{40}\b)/g),
                  message: "Please input valid Wallet Address!",
                },
              ]}
              className={styles.formItem}
            >
              <Input
                placeholder="Enter Receiver Wallet Address"
                className={styles.input}
              />
            </Form.Item>

            <Form.Item
              label="Template Type"
              required
              name="templateType"
              className={styles.formItem}
            >
              <Select
                className={styles.input}
                onChange={(value) => setTemplateType(value)}
                options={templateOptions}
                aria-label="select-template-type"
              />
            </Form.Item>

            <Form.Item
              label="NFT Type"
              required
              name="nftType"
              className={styles.formItem}
            >
              <Select
                className={styles.input}
                onChange={(value) => setNftType(value)}
                aria-label="select-nft-type"
                options={[
                  {
                    value: "product",
                    label: "Product NFT",
                  },
                  {
                    value: "document",
                    label: "Document NFT",
                  },
                  {
                    value: "other",
                    label: "Other",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="NFT Name"
              required
              name="nftName"
              rules={[
                {
                  required: true,
                  message: "Please input NFT Name!",
                },
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Enter NFT Name" className={styles.input} />
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
              <Switch
                onChange={() => setUseCustomImage(!useCustomImage)}
                checked={useCustomImage}
                aria-label="useCustomImage"
              />{" "}
              &nbsp;
              {useCustomImage ? (
                "I want to provide my own NFT Image"
              ) : (
                <span>
                  Use{" "}
                  <a
                    href="https://drunkenbytes.vercel.app//images/NFTImage.png"
                    target="_blank"
                  >
                    Drunken Bytes NFT Image
                  </a>
                </span>
              )}
              <br />
              {useCustomImage && (
                <>
                  <br />
                  <Upload
                    accept="image/*"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    // customRequest={({ onSuccess }) => onSuccess("ok")}
                    beforeUpload={() => {
                      return false;
                    }}
                    disabled={!useCustomImage}
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
                </>
              )}
            </Form.Item>
            <Form.Item valuePropName="transferableChecked">
              <Switch
                onChange={() => setTransferable(!transferable)}
                checked={transferable}
                aria-label="transferable"
              />{" "}
              &nbsp; NFT is {transferable ? "transferable" : "not transferable"}
            </Form.Item>
            <Form.Item valuePropName="burnableChecked">
              <Switch
                onChange={() => setBurnable(!burnable)}
                checked={burnable}
                aria-label="burnable"
              />{" "}
              &nbsp; NFT is {burnable ? "not permanent" : "permanent"}
            </Form.Item>
            {burnable && (
              <Form.Item
                label="Burn After"
                required={burnable}
                name="burnAfter"
                rules={[
                  {
                    required: true,
                    message: "Please enter Date To Burn NFT After",
                  },
                ]}
                className={styles.formItem}
              >
                <DatePicker
                  className={styles.input}
                  disabledDate={(current) => {
                    return current && current < Date.now();
                  }}
                />
              </Form.Item>
            )}
            <div className={styles.traitContainer}>
              <div className={styles.titleContainer}>
                <h2>Traits</h2>
                <Button
                  type="primary"
                  onClick={() => handleAddField()}
                  className={styles.deleteButton}
                  aria-label="add-trait"
                >
                  <PlusOutlined style={{ color: "black" }} size="large" />
                </Button>
              </div>
              {traits.map((field, index) => {
                return (
                  <div className={styles.formItemContainer} key={index}>
                    <Form.Item
                      label="Trait Type"
                      required
                      key={`key-${index}`}
                      name={`key-${index}`}
                      // initialValue={field.key}
                      rules={[
                        {
                          required: true,
                          message: "Please input Trait Type!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter Trait Type"
                        className={styles.input}
                        id={`key-${index}`}
                        name="key"
                        key={`input-key-${index}`}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Trait Value"
                      required
                      name={`value-${index}`}
                      key={`value-${index}`}
                      initialValue={field.value}
                      rules={[
                        {
                          required: true,
                          message: "Please input Trait Value!",
                        },
                      ]}
                      className={styles.formItem}
                    >
                      <Input
                        placeholder="Enter Trait Value"
                        className={styles.input}
                        id={`value-${index}`}
                        name="value"
                        key={`input-value-${index}`}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        onClick={() => handleRemoveField(index)}
                        className={styles.deleteButton}
                        aria-label="delete-trait"
                      >
                        <DeleteOutlined style={{ color: "black" }} />
                      </Button>
                    </Form.Item>
                  </div>
                );
              })}
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.button}
              >
                CREATE WARRANTY CARD NFT
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </div>
  );
};

export default SecondFold;
