import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const WhyChooseUsPage = () => {
  return (
    <>
      <Head>
        <title>Why Choose Drunken Bytes</title>
        <meta
          name="description"
          content="Discover why Drunken Bytes is the perfect platform for creating, selling and managing your NFTs. Learn about our innovative features and services and why you should choose us as your trusted partner for NFTs."
        />
        <meta
          name="keywords"
          content="Drunken Bytes, NFTs, Non-fungible tokens, blockchain, marketplace, create NFTs, sell NFTs, manage NFTs, digital assets."
        />
        <meta property="og:title" content="Why Choose Drunken Bytes" />
        <meta
          property="og:description"
          content="Drunken Bytes, NFTs, Non-fungible tokens, blockchain, marketplace, create NFTs, sell NFTs, manage NFTs, digital assets."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/why-choose-us.png"
        />
        <meta name="twitter:title" content="Why Choose Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Drunken Bytes, NFTs, Non-fungible tokens, blockchain, marketplace, create NFTs, sell NFTs, manage NFTs, digital assets."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/why-choose-us.png"
        />
        <link
          rel="canonical"
          href="https://drunkenbytes.vercel.app/why-choose-us"
        />
        <link
          rel="og:url"
          href="https://drunkenbytes.vercel.app/why-choose-us"
        />
      </Head>
      <FirstFold />
      <SecondFold />
    </>
  );
};

export default WhyChooseUsPage;
