import React from "react";
import styles from "./holdPage.module.css";
import Head from "next/head";
import CustomButton from "@/app/components/elements/CustomButton";
import { useWeb3Modal } from "@web3modal/react";

const HoldPage = () => {
  const { open } = useWeb3Modal();

  const onClickHandler = async () => {
    await open();
  };

  return (
    <div className={styles.hold}>
      <Head>
        <title>Hold Up | Drunken Bytes</title>
        <meta
          name="description"
          content="Drunken Bytes Hold Page: Please Log in to Access Authenticated Pages. Our platform provides advanced security features to protect your information. Create an account or log in to continue browsing our website."
        />
        <meta
          name="keywords"
          content="Drunken Bytes, hold page, authentication, login, account, website security"
        />
        <meta property="og:title" content="Hold Up | Drunken Bytes" />
        <meta
          property="og:description"
          content="Drunken Bytes Hold Page: Please Log in to Access Authenticated Pages. Our platform provides advanced security features to protect your information. Create an account or log in to continue browsing our website."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/hold.png"
        />
        <meta name="twitter:title" content="Hold Up | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Drunken Bytes Hold Page: Please Log in to Access Authenticated Pages. Our platform provides advanced security features to protect your information. Create an account or log in to continue browsing our website."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/hold.png"
        />
        <link rel="canonical" href="https://drunkenbytes.vercel.app/hold" />
        <meta
          property="og:url"
          content="https://drunkenbytes.vercel.app/hold"
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
        The page you're trying to access requires connected wallet. Please
        connect your wallet first.
      </p>
      <CustomButton
        type="Gradient"
        text="CONNECT WALLET"
        onClickHandler={onClickHandler}
      />
    </div>
  );
};

export default HoldPage;
