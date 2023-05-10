import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const DocumentationPage = () => {
  return (
    <>
      <Head>
        <title>Documentation | Drunken Bytes</title>
        <meta
          name="description"
          content="Browse through our comprehensive documentation to learn more about Drunken Bytes platform, its features, and how to get started."
        />
        <meta
          name="keywords"
          content="Drunken Bytes, documentation, platform, features, tutorials, guides."
        />
        <meta property="og:title" content="Documentation | Drunken Bytes" />
        <meta
          property="og:description"
          content="Browse through our comprehensive documentation to learn more about Drunken Bytes platform, its features, and how to get started."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/documentation.png"
        />
        <meta name="twitter:title" content="Documentation | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Browse through our comprehensive documentation to learn more about Drunken Bytes platform, its features, and how to get started."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/documentation.png"
        />
        <link
          rel="canonical"
          href="https://drunkenbytes.vercel.app/documentation"
        />
        <meta
          property="og:url"
          content="https://drunkenbytes.vercel.app/documentation"
        />
      </Head>
      <FirstFold />
      <SecondFold />
    </>
  );
};

export default DocumentationPage;
