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
        <title>NFT Transaction | Drunken Bytes</title>
        <meta
          name="description"
          content="View details of your single NFT transaction on Drunken Bytes transaction page. Get real-time updates and keep track of your NFT transactions."
        ></meta>
        <meta
          name="keywords"
          content="Drunken Bytes, NFT, transaction, details, real-time updates, track"
        />
        <meta property="og:title" content="NFT Transaction | Drunken Bytes" />
        <meta
          property="og:description"
          content="View details of your single NFT transaction on Drunken Bytes transaction page. Get real-time updates and keep track of your NFT transactions."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/nft-transaction.png"
        />
        <meta name="twitter:title" content="NFT Transaction | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="View details of your single NFT transaction on Drunken Bytes transaction page. Get real-time updates and keep track of your NFT transactions."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/nft-transaction.png"
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
