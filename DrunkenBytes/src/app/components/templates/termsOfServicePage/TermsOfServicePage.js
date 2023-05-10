import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const TermsOfServicePage = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | Drunken Bytes</title>
        <meta
          name="description"
          content="Read through Drunken Bytes' terms of service page to understand our policies and guidelines. Learn how to use our platform and what we expect from our users."
        />
        <meta
          name="keywords"
          content="Drunken Bytes, terms of service, platform policies, guidelines, user expectations."
        />
        <meta property="og:title" content="Terms of Service | Drunken Bytes" />
        <meta
          property="og:description"
          content="Read through Drunken Bytes' terms of service page to understand our policies and guidelines. Learn how to use our platform and what we expect from our users."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/terms-of-service.png"
        />
        <meta name="twitter:title" content="Terms of Service | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Read through Drunken Bytes' terms of service page to understand our policies and guidelines. Learn how to use our platform and what we expect from our users."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/terms-of-service.png"
        />
        <link
          rel="canonical"
          href="https://drunkenbytes.vercel.app/terms-of-service"
        />
        <link
          rel="og:url"
          href="https://drunkenbytes.vercel.app/terms-of-service"
        />
      </Head>
      <FirstFold />
      <SecondFold />
    </>
  );
};

export default TermsOfServicePage;
