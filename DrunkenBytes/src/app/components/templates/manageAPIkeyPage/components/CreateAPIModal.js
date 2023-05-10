import React, { useState } from "react";
import styles from "../stylesheets/createAPIModal.module.css";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import { Button, Form, Input, Spin, Modal, notification } from "antd";
import { CopyOutlined } from "@ant-design/icons";

const CreateAPIModal = (props) => {
  const { error, sendRequest, isLoading } = useHttpClient();
  const [form] = Form.useForm();
  const [result, setResult] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [apiKey, setApiKey] = useState(null);

  const onFinish = async (values) => {
    try {
      const result = await sendRequest(
        `/api-key/generate-api-key`,
        "POST",
        JSON.stringify({
          name: values.apiKeyName,
        })
      );
      if (!error) {
        setResult(true);
        setApiKey(result.apiKey);
        setAccessToken(result.accessToken);
        form.resetFields();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      title={result ? "API Key Generated Successfully" : "Create an API Key"}
      closable={true}
      onCancel={() => {
        Modal.confirm({
          title: "Confirm",
          content: `Please confirm that you want to close the modal. Your API key secret will not be recoverable once closed, and any unsaved changes will be lost.`,
          okText: "Yes",
          cancelText: "No",
          className: "confirm-modal",
          onOk() {
            props.setModalOpen(false);
            setResult(false);
          },
          onCancel() {},
        });
      }}
      destroyOnClose
      open={props.modalOpen}
      className="createAPIModal"
      footer=""
    >
      <div className={styles.loginDiv}>
        {result ? (
          <div className={styles.display}>
            <div className={styles.info}>
              API key is generate successfully, Please keep access token in safe
              place, you will not be able to retrieved access token or api
              secret later.
            </div>
            <Form
              scrollToFirstError
              layout="vertical"
              style={{ maxWidth: "100%" }}
              className={`${styles.form} createApiModalForm`}
              initialValues={{
                apiKey: apiKey,
                accessToken: accessToken,
              }}
            >
              <Form.Item
                label={
                  <div className={styles.label}>
                    API Key
                    <Button
                      className={styles.copyButton}
                      onClick={() => {
                        navigator.clipboard
                          .writeText(apiKey)
                          .then(() => {
                            notification.info({
                              message: "Text Copied!",
                              description:
                                "Text is successfully copied to clipboard",
                              placement: "topRight",
                              className: "error-notification",
                            });
                          })
                          .catch((error) => {
                            notification.error({
                              message: "Oops!",
                              description: error,
                              placement: "topRight",
                              className: "error-notification",
                            });
                          });
                      }}
                    >
                      <CopyOutlined />
                    </Button>
                  </div>
                }
                name="apiKey"
                className={styles.formItem}
              >
                <Input.TextArea
                  placeholder="Enter API Key Name"
                  className={styles.input}
                  rows={2}
                  readOnly
                />
              </Form.Item>
              <Form.Item
                label={
                  <div className={styles.label}>
                    API Secret
                    <Button
                      className={styles.copyButton}
                      onClick={() => {
                        navigator.clipboard
                          .writeText(accessToken)
                          .then(() => {
                            notification.info({
                              message: "Text Copied!",
                              description:
                                "Text is successfully copied to clipboard",
                              placement: "topRight",
                              className: "error-notification",
                            });
                          })
                          .catch((error) => {
                            notification.error({
                              message: "Oops!",
                              description: error,
                              placement: "topRight",
                              className: "error-notification",
                            });
                          });
                      }}
                    >
                      <CopyOutlined />
                    </Button>
                  </div>
                }
                name="accessToken"
                className={styles.formItem}
                initialValue={accessToken}
              >
                <Input.TextArea
                  placeholder="Enter API Key Name"
                  className={styles.input}
                  rows={9}
                  readOnly
                />
              </Form.Item>
            </Form>
          </div>
        ) : (
          <Spin size="large" spinning={isLoading}>
            <Form
              scrollToFirstError
              layout="vertical"
              name="basic"
              form={form}
              style={{ maxWidth: "100%" }}
              className={styles.form}
              onFinish={onFinish}
              autoComplete="on"
            >
              <Form.Item
                label="API Key Name"
                required
                name="apiKeyName"
                rules={[
                  {
                    required: true,
                    message: "Please input API Key Name!",
                  },
                ]}
                className={styles.formItem}
              >
                <Input
                  placeholder="Enter API Key Name"
                  className={styles.input}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.button}
                >
                  Create API KEY
                </Button>
              </Form.Item>
            </Form>
          </Spin>
        )}
      </div>
    </Modal>
  );
};

export default CreateAPIModal;
