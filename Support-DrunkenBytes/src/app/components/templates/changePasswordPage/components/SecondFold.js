import React, { useContext } from "react";
import styles from "../stylesheets/secondFold.module.css";
import { Button, Form, Input, Spin, notification } from "antd";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import AppContext from "@/app/context/AppContext";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const SecondFold = () => {
  const { error, sendRequest, isLoading } = useHttpClient();
  const [form] = Form.useForm();
  const { dispatch } = useContext(AppContext);
  const router = useRouter();

  const onFinish = async (values) => {
    try {
      if (values.newPassword !== values.confirmNewPassword) {
        notification.error({
          message: "Error",
          description:
            'Please ensure that the values entered in the "New Password" and "Confirm New Password" fields match.',
          placement: "top",
          className: "error-notification",
        });
        return null;
      }
      const result = await sendRequest(
        "/support-user/change-password",
        "POST",
        JSON.stringify({
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        })
      );
      if (!error) {
        notification.success({
          message: "Success",
          description:
            "Your password has been successfully changed. For security reasons, you will now be logged out. Please log in again using your new credentials.",
          placement: "top",
          className: "error-notification",
        });
      }
      form.resetFields();
      setTimeout(async () => {
        await sendRequest("/support-user/logout", "POST");
        if (!error) {
          dispatch({
            type: "UserLogout",
          });
          router.push("/login");
          Cookies.remove("supportUserRole");
        }
      }, 2000);
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
            className="change-password"
          >
            <Form.Item
              label="Current Password"
              required
              name="currentPassword"
              rules={[
                {
                  required: true,
                  message: "Please input Current Password!",
                },
              ]}
              className={styles.formItem}
            >
              <Input.Password
                className={styles.input}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item
              label="New Password"
              required
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "Please input New Password!",
                },
              ]}
              className={styles.formItem}
            >
              <Input.Password
                className={styles.input}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item
              label="Confirm New Password"
              required
              name="confirmNewPassword"
              rules={[
                {
                  required: true,
                  message: "Please input Confirm New Password!",
                },
              ]}
              className={styles.formItem}
            >
              <Input.Password
                className={styles.input}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <p>
              Please note that changing your password will log you out of your
              current session. After changing your password, you will need to
              log in again using your new credentials.
            </p>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.button}
              >
                Change Password
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </div>
  );
};

export default SecondFold;
