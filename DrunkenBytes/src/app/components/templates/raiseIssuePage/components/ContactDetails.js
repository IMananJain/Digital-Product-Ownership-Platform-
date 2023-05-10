import React from "react";
import styles from "../stylesheets/contactDetails.module.css";
import { Button, Form, Input, Spin, Select, notification  } from "antd";
import { CheckCircleTwoTone} from "@ant-design/icons";
import { useHttpClient } from "@/app/hooks/useHttpClient";

const ContactDetails = props => {
  const { error, sendRequest, isLoading } = useHttpClient();
  const [form] = Form.useForm();

  const onFinish = async values => {
    try {
      const result = await sendRequest(
        `/issue/get-issue-status/${values.tokenId}`
      );
      if (!error) {
        if(result.issue.isSolved)
          notification.success({
            message: "Success",
            description: "Your Issue is solved and closed",
            placement: "top",
            className: "error-notification"
          });
        else
          notification.info({
            message: "Processing...",
            description: "Your Issue is still in processing. For further information please contact your NFT creator.",
            placement: "top",
            className: "error-notification"
          });
        form.resetFields();
      }
    } catch (err) { }
  };

  return (
    <div className={styles.contactDetails}>
      <h2 className={styles.heading}>We're here to help</h2>
      <p className={styles.paragraph}>
        <CheckCircleTwoTone
          twoToneColor="#4caf50"
          className={styles.checkIcon}
        />
        Find the right solution for you
      </p>
      <p className={styles.paragraph}>
        <CheckCircleTwoTone
          twoToneColor="#4caf50"
          className={styles.checkIcon}
        />
        Explain options for pricing
      </p>
      <p className={styles.paragraph}>
        <CheckCircleTwoTone
          twoToneColor="#4caf50"
          className={styles.checkIcon}
        />
        Connect you with helpful resources
      </p>
      <span className={styles.space} />
      <h2 className={styles.heading}>Check Issue Status</h2>
      <Spin size="large" spinning={isLoading}>
      <Form
        name="status-check-form"
        id="status-check-form"
        form={form}
        style={{ maxWidth: "100%" }}
        onFinish={onFinish}
        autoComplete="on"
        layout="vertical"
      >
        <Form.Item
          name="tokenId" label="Token ID"
          rules={[
            {
              required: true,
              message: "Please input Token Id"
            }
          ]}
          className={styles.formItem}
        >
          <Input placeholder="Enter NFT Token ID" className={styles.input} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.button}>
            Check Status
          </Button>
        </Form.Item>
      </Form>
      </Spin>
    </div>
  );
};

export default ContactDetails;
