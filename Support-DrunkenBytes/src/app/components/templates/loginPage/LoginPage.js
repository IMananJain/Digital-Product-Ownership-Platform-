import React, { useContext, useState } from "react";
import styles from "./loginPage.module.css";
import Image from "next/image";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import AppContext from "@/app/context/AppContext";
import Cookies from "js-cookie";
import Loader from "@/app/components/modules/Loader";
import Head from "next/head";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { error, sendRequest } = useHttpClient();
  const { dispatch } = useContext(AppContext);
  const onFinish = async values => {
    setIsLoading(true);
    try {
      const loginResult = await sendRequest(
        "/support-user/login",
        "POST",
        JSON.stringify({
          email: values.email,
          password: values.password
        })
      );
      if (!error) {
        Cookies.set('db_s_userRole', loginResult.role , { expires: 7 })
        const role = loginResult.role;
        dispatch({
          type: "UserLogin",
          payload: { role }
        });
        router.push('/');
      }
    } catch (err) {}
    setIsLoading(false);
  };
  return (
    <div className={styles.supportLogin}>
      <Head>
        <title>Support Login | Drunken Bytes</title>
        <meta property="description" content="Log in to Drunken Bytes Support platform, exclusively for the company personnel. Access the tools and resources you need to provide exceptional customer support and enhance your team's productivity. Securely log in and get started now."/>
      </Head>
      <Loader isLoading={isLoading} />
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/drunken-bytes-logo-icon.png"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles.loginDiv}>
          <h1>Login to Drunken Bytes</h1>
          <Form
            name="basic"
            style={{ maxWidth: "100%" }}
            onFinish={onFinish}
            autoComplete="on"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid Email!"
                },
                {
                  required: true,
                  message: "Please input your Email!"
                }
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Email" className={styles.input} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" }
              ]}
              className={styles.formItem}
            >
              <Input.Password placeholder="Password" className={styles.input} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.button}
              >
                LOGIN
              </Button>
            </Form.Item>
          </Form>
          <p>
            Read our{" "}
            <Link href="https://drunkenbytes.vercel.app/terms-of-service" className={styles.link}>
              Terms & Conditions
            </Link>,{" "}
            <Link href="https://drunkenbytes.vercel.app/privacy-policy" className={styles.link}>
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="https://drunkenbytes.vercel.app/cookies-policy" className={styles.link}>
              Cookie Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
