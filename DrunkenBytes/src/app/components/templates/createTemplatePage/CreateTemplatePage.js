import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const CreateTemplatePage = () => {
  return (
    <>
      <Head>
        <title>Create Template | Drunken Bytes</title>
        <meta
          name="description"
          content="Create a template for your products on Drunken Bytes so you don't have to enter the same information every time you generate an NFT. Our user-friendly interface allows you to easily set up fields for product name, traits, and other details. Save time and streamline your NFT creation process with Drunken Bytes."
        ></meta>
        <meta
          name="keywords"
          content="Drunken Bytes, add product, create template, NFT generation, product information, product template"
        />
        <meta property="og:title" content="Create Template | Drunken Bytes" />
        <meta
          property="og:description"
          content="Create a template for your products on Drunken Bytes so you don't have to enter the same information every time you generate an NFT. Our user-friendly interface allows you to easily set up fields for product name, traits, and other details. Save time and streamline your NFT creation process with Drunken Bytes."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/create-template.png"
        />
        <meta name="twitter:title" content="Create Template | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Create a template for your products on Drunken Bytes so you don't have to enter the same information every time you generate an NFT. Our user-friendly interface allows you to easily set up fields for product name, traits, and other details. Save time and streamline your NFT creation process with Drunken Bytes."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/create-template.png"
        />
        <link
          rel="canonical"
          href="https://drunkenbytes.vercel.app/template/create"
        />
        <meta
          property="og:url"
          content="https://drunkenbytes.vercel.app/template/create"
        />
      </Head>
      <FirstFold />
      <SecondFold />
    </>
  );
};

export default CreateTemplatePage;
