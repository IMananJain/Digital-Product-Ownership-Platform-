import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const NftTransactionsPage = () => {
  return (
    <>
      <Head>
        <title>Issues Raised | Drunken Bytes</title>
        <meta
          name="description"
          content="Get help with issues raised by your clients. Drunken Bytes provides a platform for businesses to view and resolve customer issues efficiently."
        ></meta>
        <meta
          name="keywords"
          content="Drunken Bytes, issue resolution, customer support, business solutions, client management."
        ></meta>
        <meta property="og:title" content="Issues Raised | Drunken Bytes" />
        <meta
          property="og:description"
          content="Get help with issues raised by your clients. Drunken Bytes provides a platform for businesses to view and resolve customer issues efficiently."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/issues.png"
        />
        <meta name="twitter:title" content="Issues Raised | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Get help with issues raised by your clients. Drunken Bytes provides a platform for businesses to view and resolve customer issues efficiently."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/issues.png"
        />
        <link rel="canonical" href="https://drunkenbytes.vercel.app/issues" />
        <meta
          property="og:url"
          content="https://drunkenbytes.vercel.app/issues"
        />
      </Head>
      <FirstFold />
      <SecondFold />
    </>
  );
};

export default NftTransactionsPage;
