import React, { useEffect, useState } from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import SkeletonLoader from "../../modules/SkeletonLoader";

const NftTransactionsSinglePage = (props) => {
  const { sendRequest } = useHttpClient();
  const [transactionData, setTransactionData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await sendRequest(
        `/nft-transaction/get-transaction?transactionHash=${props.txId}`
      );
      setTransactionData(data.transaction);
    };
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>NFT Transaction | Support Drunken Bytes</title>
        <meta
          name="description"
          content="View details of your single NFT transaction on Support Drunken Bytes transaction page. Get real-time updates and keep track of your NFT transactions."
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

export default NftTransactionsSinglePage;
