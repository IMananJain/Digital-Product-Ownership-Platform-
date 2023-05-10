import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const WalletRechargeTransactionPage = props => {
  return (
    <div>
      <Head>
        <title>Wallet Recharge Transactions | Support Drunken Bytes</title>
        <meta name="description" content="The Drunken Bytes transaction page displays all your wallet recharge transactions. Stay updated on the status of your transactions and manage them efficiently."></meta>
      </Head>
      <FirstFold />
      <SecondFold />
    </div>
  );
};

export default WalletRechargeTransactionPage;
