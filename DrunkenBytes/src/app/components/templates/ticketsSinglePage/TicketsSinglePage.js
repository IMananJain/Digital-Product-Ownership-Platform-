import React, { useEffect, useState } from "react";
import styles from "./ticketsSinglePage.module.css";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import Head from "next/head";
import SkeletonLoader from "../../modules/SkeletonLoader";
import { Button, Form, Input, Spin, notification } from "antd";

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
        setRefresh(true);
      }
    } catch (err) {}
  };

  return (
    <>
      <Head>
        <title>Ticket | Drunken Bytes</title>
        <meta
          name="description"
          content="View information about your ticket, chat history with support, and reply to support inquiries. Get personalized assistance for your NFT-related issues at Drunken Bytes."
        />
        <meta
          name="keywords"
          content="Drunken Bytes tickets, NFT support, ticket information, chat history, support inquiries, personalized assistance, NFT issues, customer support, NFT queries, ticket management, support replies"
        />
        <meta property="og:title" content="Ticket | Drunken Bytes" />
        <meta
          property="og:description"
          content="View information about your ticket, chat history with support, and reply to support inquiries. Get personalized assistance for your NFT-related issues at Drunken Bytes."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/ticket.png"
        />
        <meta name="twitter:title" content="Ticket | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="View information about your ticket, chat history with support, and reply to support inquiries. Get personalized assistance for your NFT-related issues at Drunken Bytes."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/ticket.png"
        />
        <link rel="canonical" href="https://drunkenbytes.vercel.app/tickets" />
        <link rel="og:url" href="https://drunkenbytes.vercel.app/tickets" />
      </Head>
      {ticketData?.status === undefined ? (
        <SkeletonLoader />
      ) : (
        <Spin size="large" spinning={isLoading}>
          <div className={styles.profile}>
            <h1 className={styles.heading}>Ticket Conversation</h1>
            <div className={styles.informationDiv}>
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
                        <p className={styles.title}>{data.sender.name}</p>
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
                        <p className={styles.title}>Drunken Bytes</p>
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
            {!ticketData.isSolved && (
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
                  <Form.Item
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
          </div>
        </Spin>
      )}
    </>
  );
};

export default ProfilePage;
