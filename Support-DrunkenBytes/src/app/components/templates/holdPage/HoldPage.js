import React from "react";
import styles from "./holdPage.module.css";
import Head from "next/head";
import CustomButton from "@/app/components/elements/CustomButton";
import { useRouter } from "next/router";

const HoldPage = () => {
  const router = useRouter();

  const onClickHandler = async () => {
    router.back();
  };

  return (
    <div className={styles.hold}>
      <Head>
        <title>Hold Up | SupportDrunken Bytes</title>
        <meta
          name="description"
          content="Drunken Bytes Hold Page: Please Log in to Access Authenticated Pages. Our platform provides advanced security features to protect your information. Create an account or log in to continue browsing our website."
        />
      </Head>
      <h1 className={styles.heading}>Hold Up!</h1>
      <div className={styles.imageContainer}>
        <img
          src="/images/hold-page-image.png"
          alt="Hold Up Image"
          className={styles.img}
        />
      </div>
      <p className={styles.subParagraph}>
        We apologize, but it seems that you do not have sufficient permission to
        access this page. Kindly navigate back and if you believe this is an
        error, please reach out to your administrator for assistance.
      </p>
      <CustomButton
        type="Gradient"
        text="GO BACK"
        onClickHandler={onClickHandler}
      />
    </div>
  );
};

export default HoldPage;
