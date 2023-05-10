import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const EditTemplatePage = (props) => {
  return (
    <div>
      <Head>
        <title>Edit Template | Drunken Bytes</title>
        <meta
          name="description"
          content="Edit a template for your products and credentials on Drunken Bytes so you don't have to enter the same information every time you generate an NFT. Our user-friendly interface allows you to easily set up fields for product name, traits, and other details. Save time and streamline your NFT creation process with Drunken Bytes."
        ></meta>
        <meta
          name="keywords"
          content="Drunken Bytes, add template, edit template, NFT generation, product information, product template"
        ></meta>
        <meta property="og:title" content="Edit Template | Drunken Bytes" />
        <meta
          property="og:description"
          content="Edit a template for your products and credentials on Drunken Bytes so you don't have to enter the same information every time you generate an NFT. Our user-friendly interface allows you to easily set up fields for product name, traits, and other details. Save time and streamline your NFT creation process with Drunken Bytes."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/edit-template.png"
        />
        <meta name="twitter:title" content="Edit Template | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Edit a template for your products and credentials on Drunken Bytes so you don't have to enter the same information every time you generate an NFT. Our user-friendly interface allows you to easily set up fields for product name, traits, and other details. Save time and streamline your NFT creation process with Drunken Bytes."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/edit-template.png"
        />
        <link
          rel="canonical"
          href="https://drunkenbytes.vercel.app/template/edit"
        />
        <meta
          property="og:url"
          content="https://drunkenbytes.vercel.app/template/edit"
        />
      </Head>
      <FirstFold />
      <SecondFold templateId={props.templateId} />
    </div>
  );
};

export default EditTemplatePage;
