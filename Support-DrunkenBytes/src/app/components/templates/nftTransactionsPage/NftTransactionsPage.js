import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const NftTransactionsPage = () => {
  return (
    <>
      <Head>
        <title>NFT Transactions | Support Drunken Bytes</title>
        <meta name="description" content="View all NFT transactions in one place on the Support Drunken Bytes transaction page. Keep track of your NFT sales, purchases, and transfers effortlessly."></meta>
      </Head>
      <FirstFold />
      <SecondFold />
    </>
  );
};

export default NftTransactionsPage;
