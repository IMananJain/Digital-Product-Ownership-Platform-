import React, { useEffect, useState } from "react";
import styles from "./ticketsSinglePage.module.css";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import Head from "next/head";
import SkeletonLoader from "../../modules/SkeletonLoader";
import { Button, Form, Input, Spin, notification, Modal } from "antd";
import Link from "next/link";

const ProfilePage = (props) => {
  const { sendRequest, isLoading, error } = useHttpClient();
  const [ticketData, setTicketData] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const sendFetchRequest = async () => {
      const result = await sendRequest(`/ticket/get-ticket/${props.id}`);
      setTicketData(result.ticket);
    };
    sendFetchRequest();
  }, [refresh]);

  const onFinish = async (values) => {
    try {
      const result = await sendRequest(
        `/ticket/${props.id}/reply`,
        "PUT",
        JSON.stringify({
          message: values.reply,
          status: values.status,
        })
      );
      if (!error) {
        notification.success({
          message: "Success",
          description: "Replied Successfully",
          placement: "top",
          className: "error-notification",
        });
        form.resetFields();
        setRefresh(!refresh);
      }
    } catch (err) {}
  };
  const closeTicket = async () => {
    Modal.confirm({
      title: "Confirm",
      content: `Are you sure that you want to close this ticket?`,
      okText: "Yes",
      cancelText: "No",
      className: "confirm-modal",
      async onOk() {
        try {
          await sendRequest(`/ticket/${props.id}/close/`, "PUT", JSON.stringify({
            message: "This Ticket has been closed",
            status: "Ticket closed"
          }));
          if (!error) {
            notification.success({
              message: "Success",
              description: "Ticket Closed Successfully",
              placement: "top",
              className: "error-notification",
            });
            setRefresh(!refresh);
          }
        } catch (err) {}
      },
      onCancel() {},
    });
  };
  return (
    <>
      <Head>
        <title>Ticket | Support Drunken Bytes</title>
        <meta
          name="description"
          content="View information about your ticket, chat history with support, and reply to support inquiries. Get personalized assistance for your NFT-related issues at Drunken Bytes."
        />
      </Head>
      {ticketData?.status === undefined ? (
        <SkeletonLoader />
      ) : (
        <Spin size="large" spinning={isLoading}>
          <div className={styles.profile}>
            <h1 className={styles.heading}>Ticket Conversation</h1>
            <div className={styles.informationDiv}>
              <div className={styles.information}>
                <p className={styles.title}>Created By:</p>
                <p className={styles.value}>
                  {ticketData?.createdBy?.name !== undefined ? (
                    <Link href={`/users/${ticketData.createdBy._id}`}>
                      {ticketData?.createdBy?.name}
                    </Link>
                  ) : (
                    ticketData.name
                  )}
                </p>
              </div>
              <div className={styles.information}>
                <p className={styles.title}>Subject:</p>
                <p className={styles.value}>{ticketData.subject}</p>
              </div>
              <div className={styles.information}>
                <p className={styles.title}>Ticket Open: </p>
                <p className={styles.value}>
                  {new Date(ticketData.dateCreated).getDate() +
                    "/" +
                    (new Date(ticketData.dateCreated).getMonth() + 1) +
                    "/" +
                    new Date(ticketData.dateCreated).getFullYear() +
                    " " +
                    new Date(ticketData.dateCreated).getHours() +
                    ":" +
                    new Date(ticketData.dateCreated).getMinutes() +
                    ":" +
                    new Date(ticketData.dateCreated).getSeconds()}
                </p>
              </div>
              <div className={styles.information}>
                <p className={styles.title}>Status: </p>
                <p className={styles.value}>{ticketData.status}</p>
              </div>
            </div>
            <div className={styles.conversationDiv}>
              {ticketData.conversation.map((data, idx) => {
                if (data.sentBy === "user")
                  return (
                    <div className={styles.container} key={idx}>
                      <div className={styles.nameDiv}>
                        <p className={styles.title}>
                          {data?.sender?.name ?? ticketData.name}
                        </p>
                        <p className={styles.value}>
                          {new Date(data.createdAt).getDate() +
                            "/" +
                            (new Date(data.createdAt).getMonth() + 1) +
                            "/" +
                            new Date(data.createdAt).getFullYear() +
                            " " +
                            new Date(data.createdAt).getHours() +
                            ":" +
                            new Date(data.createdAt).getMinutes() +
                            ":" +
                            new Date(data.createdAt).getSeconds()}
                        </p>
                      </div>
                      <div className={styles.messageDiv}>{data.message}</div>
                    </div>
                  );
                else
                  return (
                    <div className={styles.container} key={idx}>
                      <div className={styles.messageDiv}>{data.message}</div>
                      <div className={styles.nameDiv}>
                        <p className={styles.title}>
                          <Link href={`/support-user/${data.sender.name}`}>{data.sender.name}</Link>
                        </p>
                        <p className={styles.value}>
                          {new Date(data.createdAt).getDate() +
                            "/" +
                            (new Date(data.createdAt).getMonth() + 1) +
                            "/" +
                            new Date(data.createdAt).getFullYear() +
                            " " +
                            new Date(data.createdAt).getHours() +
                            ":" +
                            new Date(data.createdAt).getMinutes() +
                            ":" +
                            new Date(data.createdAt).getSeconds()}
                        </p>
                      </div>
                    </div>
                  );
              })}
            </div>
            {!ticketData.isSolved &&
              ticketData?.createdBy?.name !== undefined && (
                <div className={styles.replyDiv}>
                  <h2>Reply</h2>
                  <Form
                    scrollToFirstError
                    layout="vertical"
                    name="basic"
                    form={form}
                    style={{ maxWidth: "100%" }}
                    onFinish={onFinish}
                    autoComplete="on"
                    className={styles.form}
                  >
                    <Form.Item label="Message"
                      name="reply"
                      rules={[
                        {
                          required: true,
                          message: "Please input Reply Message!",
                        },
                      ]}
                    >
                      <Input.TextArea
                        className={styles.input}
                        autoSize={{ minRows: 4, maxRows: 20 }}
                      />
                    </Form.Item>
                    <Form.Item label="Status"
                      name="status"
                      rules={[
                        {
                          required: true,
                          message: "Please input Status!",
                        },
                      ]}
                    >
                      <Input
                        className={styles.input}
                      />
                    </Form.Item>
                    <Form.Item className={styles.formItem}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className={styles.button}
                      >
                        SUBMIT
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              )}
            {!ticketData.isSolved &&
              ticketData?.createdBy?.name === undefined && (
                <div className={styles.replyDiv}>
                  <p className={styles.informationParagraph}>
                    We regret to inform you that the business or person you are
                    trying to reach is not registered on our website. Therefore,
                    we advise you to contact them directly through the provided
                    email or phone number. Kindly note that once you have
                    established contact, please click the button below to close
                    this ticket. Thank you for your understanding.
                  </p>
                  <Form
                    scrollToFirstError
                    layout="vertical"
                    name="basic"
                    form={form}
                    style={{ maxWidth: "100%" }}
                    onFinish={closeTicket}
                    autoComplete="on"
                    className={styles.form}
                  >
                    <Form.Item className={styles.formItem}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className={styles.button}
                      >
                        Close Ticket
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              )}
          </div>
        </Spin>
      )}
    </>
  );
};

export default ProfilePage;
