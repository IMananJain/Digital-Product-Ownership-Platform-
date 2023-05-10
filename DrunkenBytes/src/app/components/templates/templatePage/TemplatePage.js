import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const TemplatesPage = () => {
  return (
    <>
      <Head>
        <title>Templates | Drunken Bytes</title>
        <meta
          name="description"
          content="Explore and manage your NFT templates on the Drunken Bytes platform. Easily create and edit templates for your products and credentials."
        ></meta>
        <meta
          name="keywords"
          content="Drunken Bytes, NFT templates, manage templates, create templates, edit templates, product templates, credential templates."
        />
        <meta property="og:title" content="Templates | Drunken Bytes" />
        <meta
          property="og:description"
          content="Explore and manage your NFT templates on the Drunken Bytes platform. Easily create and edit templates for your products and credentials."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/template.png"
        />
        <meta name="twitter:title" content="Templates | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Explore and manage your NFT templates on the Drunken Bytes platform. Easily create and edit templates for your products and credentials."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/template.png"
        />
        <link rel="canonical" href="https://drunkenbytes.vercel.app/template" />
        <link rel="og:url" href="https://drunkenbytes.vercel.app/template" />
      </Head>
      <FirstFold />
      <SecondFold />
    </>
  );
};

export default TemplatesPage;
