import React, { useContext } from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const TermsOfServicePage = () => {
  return (
    <div>
      <Head>
        <title>Cookies Policy | Drunken Bytes</title>
        <meta
          name="description"
          content="Learn about Drunken Bytes' cookie policy and how we use cookies to enhance your browsing experience. Find out how to manage cookies on our website."
        />
        <meta
          name="keywords"
          content="Drunken Bytes, cookie policy, cookies, online privacy, data collection, website cookies, cookie management, cookie consent"
        />
        <meta property="og:title" content="Cookies Policy | Drunken Bytes" />
        <meta
          property="og:description"
          content="Learn about Drunken Bytes' cookie policy and how we use cookies to enhance your browsing experience. Find out how to manage cookies on our website."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/cookies-policy.png"
        />
        <meta name="twitter:title" content="Cookies Policy | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Learn about Drunken Bytes' cookie policy and how we use cookies to enhance your browsing experience. Find out how to manage cookies on our website."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/cookies-policy.png"
        />
        <link
          rel="canonical"
          href="https://drunkenbytes.vercel.app/cookies-policy"
        />
        <meta
          property="og:url"
          content="https://drunkenbytes.vercel.app/cookies-policy"
        />
      </Head>
      <FirstFold />
      <SecondFold />
    </div>
  );
};

export default TermsOfServicePage;
