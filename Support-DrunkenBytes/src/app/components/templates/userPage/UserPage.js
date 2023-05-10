import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const UserPage = () => {
  return (
    <>
      <Head>
        <title>Users | Support Drunken Bytes</title>
        <meta name="description" content="View all your NFT transactions in one place on the Drunken Bytes transaction page. Keep track of your NFT sales, purchases, and transfers effortlessly."></meta>
      </Head>
      <FirstFold />
      <SecondFold />
    </>
  );
};

export default UserPage;
