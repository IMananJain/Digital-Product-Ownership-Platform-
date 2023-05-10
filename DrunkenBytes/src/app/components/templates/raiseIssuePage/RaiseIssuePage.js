import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const RaiseIssuePage = (props) => {
  return (
    <>
      <Head>
        <title>Raise Issue | Drunken Bytes</title>
        <meta
          name="description"
          content="The Drunken Bytes Raise Issue page is your source for getting in touch with your nft creator. Whether you have a question, feedback, or need support, we're here to help. Fill out our contact form."
        />
        <meta
          name="keywords"
          content="Drunken Bytes, issue, raise issue, support, feedback, email, phone, get in touch, reach out."
        />
        <meta property="og:title" content="Raise Issue | Drunken Bytes" />
        <meta
          property="og:description"
          content="The Drunken Bytes Raise Issue page is your source for getting in touch with your nft creator. Whether you have a question, feedback, or need support, we're here to help. Fill out our contact form."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/raise-issue.png"
        />
        <meta name="twitter:title" content="Raise Issue | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="The Drunken Bytes Raise Issue page is your source for getting in touch with your nft creator. Whether you have a question, feedback, or need support, we're here to help. Fill out our contact form."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/raise-issue.png"
        />
        <link
          rel="canonical"
          href="https://drunkenbytes.vercel.app/raise-issue"
        />
        <link rel="og:url" href="https://drunkenbytes.vercel.app/raise-issue" />
      </Head>
      <FirstFold />
      <SecondFold hasTokenId={props.hasTokenId} tokenId={props.tokenId} />
    </>
  );
};

export default RaiseIssuePage;
