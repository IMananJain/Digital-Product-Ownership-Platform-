import React, { useEffect, useState } from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import SkeletonLoader from "../../modules/SkeletonLoader";

const WalletRechargeTransactionSinglePage = (props) => {
  const { sendRequest } = useHttpClient();
  const [transactionData, setTransactionData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await sendRequest(
        `/wallet-transaction/get-transaction?transactionHash=${props.txId}`
      );
      setTransactionData(data.transaction);
    };
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Wallet Recharge Transaction | Drunken Bytes</title>
        <meta
          name="description"
          content="View details of a single wallet recharge transaction on Drunken Bytes. Get transaction ID, status, date, amount, and other relevant information."
        ></meta>
        <meta
          name="keywords"
          content="wallet recharge transaction, single transaction, transaction ID, transaction status, transaction date, transaction amount, Drunken Bytes."
        ></meta>
        <meta
          property="og:title"
          content="Wallet Recharge Transaction | Drunken Bytes"
        />
        <meta
          property="og:description"
          content="View details of a single wallet recharge transaction on Drunken Bytes. Get transaction ID, status, date, amount, and other relevant information."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/wallet-recharge-transaction.png"
        />
        <meta
          name="twitter:title"
          content="Wallet Recharge Transaction | Drunken Bytes"
        />
        <meta
          name="twitter:description"
          content="View details of a single wallet recharge transaction on Drunken Bytes. Get transaction ID, status, date, amount, and other relevant information."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/wallet-recharge-transaction.png"
        />
        <link
          rel="canonical"
          href="https://drunkenbytes.vercel.app/transactions/wallet-recharge/"
        />
        <link
          rel="og:url"
          href="https://drunkenbytes.vercel.app/transactions/wallet-recharge"
        />
      </Head>
      {transactionData?.txId === undefined ? (
        <SkeletonLoader />
      ) : (
        <>
          <FirstFold transactionData={transactionData} />
          <SecondFold transactionData={transactionData} />
        </>
      )}
    </>
  );
};

export default WalletRechargeTransactionSinglePage;
