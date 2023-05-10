import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import FirstHalfFold from "./components/FirstHalfFold";
import SecondFold from "./components/SecondFold";
import SecondHalfFold from "./components/SecondHalfFold";
import ThirdFold from "./components/ThirdFold";
import ThirdHalfFold from "./components/ThirdHalfFold";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Drunken Bytes | Products and Credentials NFT Platform for Businesses</title>
        <meta
          name="description"
          content="Drunken Bytes is an innovative platform for creating and trading NFTs. Discover unique digital assets and join the blockchain revolution today."
        />
        <meta
          name="keywords"
          content="Drunken Bytes, NFT, blockchain, digital assets, trading, marketplace."
        />
        <meta property="og:title" content="Drunken Bytes | Products and Credentials NFT Platform for Businesses" />
        <meta
          property="og:description"
          content="Drunken Bytes is an innovative platform for creating and trading NFTs. Discover unique digital assets and join the blockchain revolution today."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/home.png"
        />
        <meta name="twitter:title" content="Drunken Bytes | Products and Credentials NFT Platform for Businesses" />
        <meta
          name="twitter:description"
          content="Drunken Bytes is an innovative platform for creating and trading NFTs. Discover unique digital assets and join the blockchain revolution today."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/home.png"
        />
        <link rel="canonical" href="https://drunkenbytes.vercel.app/" />
        <meta property="og:url" content="https://drunkenbytes.vercel.app/" />
      </Head>
      <FirstFold />
      <FirstHalfFold />
      <SecondFold />
      <SecondHalfFold
        businessServed={props.businessServed}
        nftsCreated={props.nftsCreated}
        netTransactionValue={props.netTransactionValue}
      />
      <ThirdFold />
      <ThirdHalfFold />
    </>
  );
};

export default HomePage;
