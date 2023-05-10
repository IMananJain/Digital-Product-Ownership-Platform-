import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const ManageAPIkeyPage = () => {
  return (
    <>
      <Head>
        <title>Manage API Keys | Drunken Bytes</title>
        <meta
          name="description"
          content="The Drunken Bytes API Keys Management page allows businesses to easily manage their API keys, including creating new keys, disabling existing keys, and viewing usage statistics."
        ></meta>
        <meta
          name="keywords"
          content="Drunken Bytes, API Keys, Management, Create, Disable, Usage Statistics"
        />
        <meta property="og:title" content="Manage API Keys | Drunken Bytes" />
        <meta
          property="og:description"
          content="The Drunken Bytes API Keys Management page allows businesses to easily manage their API keys, including creating new keys, disabling existing keys, and viewing usage statistics."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/api-keys.png"
        />
        <meta name="twitter:title" content="Manage API Keys | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="The Drunken Bytes API Keys Management page allows businesses to easily manage their API keys, including creating new keys, disabling existing keys, and viewing usage statistics."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/api-keys.png"
        />
        <link rel="canonical" href="https://drunkenbytes.vercel.app/api-keys" />
        <meta
          property="og:url"
          content="https://drunkenbytes.vercel.app/api-keys"
        />
      </Head>
      <FirstFold />
      <SecondFold />
    </>
  );
};

export default ManageAPIkeyPage;
