import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const TicketsPage = () => {
  return (
    <>
      <Head>
        <title>Tickets | Support Drunken Bytes</title>
        <meta name="description" content="View and track your raised tickets and their status on the Support Drunken Bytes Tickets page. Stay updated on your NFT, wallet, and other inquiries with our efficient ticket management system."></meta>
      </Head>
      <FirstFold />
      <SecondFold />
    </>
  );
};

export default TicketsPage;
