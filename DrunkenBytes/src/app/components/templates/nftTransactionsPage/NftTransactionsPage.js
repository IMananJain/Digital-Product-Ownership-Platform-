import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const NftTransactionsPage = () => {
  return (
    <>
      <Head>
        <title>NFT Transactions | Drunken Bytes</title>
        <meta
          name="description"
          content="View all your NFT transactions in one place on the Drunken Bytes transaction page. Keep track of your NFT sales, purchases, and transfers effortlessly."
        ></meta>
        <meta
          name="keywords"
          content="Drunken Bytes, NFT transactions, transaction history, NFT sales, NFT purchases, NFT transfers."
        />
        <meta property="og:title" content="NFT Transactions | Drunken Bytes" />
        <meta
          property="og:description"
          content="View all your NFT transactions in one place on the Drunken Bytes transaction page. Keep track of your NFT sales, purchases, and transfers effortlessly."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/nft-transactions.png"
        />
        <meta name="twitter:title" content="NFT Transactions | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="View all your NFT transactions in one place on the Drunken Bytes transaction page. Keep track of your NFT sales, purchases, and transfers effortlessly."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/nft-transactions.png"
        />
        <link
          rel="canonical"
          href="https://drunkenbytes.vercel.app/transactions/nft"
        />
        <meta
          property="og:url"
          content="https://drunkenbytes.vercel.app/transactions/nft"
        />
      </Head>
      <FirstFold />
      <SecondFold />
    </>
  );
};

export default NftTransactionsPage;
