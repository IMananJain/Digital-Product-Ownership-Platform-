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
        <title>Wallet Recharge Transaction | Support Drunken Bytes</title>
        <meta
          name="description"
          content="View details of a single wallet recharge transaction on Drunken Bytes. Get transaction ID, status, date, amount, and other relevant information."
        ></meta>
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
