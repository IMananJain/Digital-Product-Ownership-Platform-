import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const HelpCenterPage = (props) => {
  return (
    <div>
      <Head>
        <title>Help Center | Drunken Bytes</title>
        <meta
          name="description"
          content="Looking for help with our products and services? Visit our Help Center for answers to frequently asked questions, tutorials, and guides."
        />
        <meta
          name="keywords"
          content="Drunken Bytes, help center, customer support, FAQs, tutorials, guides."
        />
        <meta property="og:title" content="Drunken Bytes" />
        <meta
          property="og:description"
          content="Looking for help with our products and services? Visit our Help Center for answers to frequently asked questions, tutorials, and guides."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/help-center.png"
        />
        <meta name="twitter:title" content="Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Looking for help with our products and services? Visit our Help Center for answers to frequently asked questions, tutorials, and guides."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/help-center.png"
        />
        <link
          rel="canonical"
          href="https://drunkenbytes.vercel.app/help-center"
        />
        <meta
          property="og:url"
          content="https://drunkenbytes.vercel.app/help-center"
        />
        <meta
          property="og:url"
          content="https://drunkenbytes.vercel.app/help-center"
        />
      </Head>
      <FirstFold />
      <SecondFold
        articlesData={props.articlesData}
        totalArticles={props.totalArticles}
      />
    </div>
  );
};

export default HelpCenterPage;
