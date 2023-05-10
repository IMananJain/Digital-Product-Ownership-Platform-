import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const CreateTemplatePage = () => {
  return (
    <> 
    <Head>
        <title>Transactions | Support Drunken Bytes</title>
        <meta name="description" content="Explore your NFT transactions or wallet recharge transactions with Support Drunken Bytes Transactions page. Choose which transaction you want to view and manage easily."></meta>
      </Head>
      <FirstFold />
      <SecondFold/>
    </>
  )
};

export default CreateTemplatePage;
