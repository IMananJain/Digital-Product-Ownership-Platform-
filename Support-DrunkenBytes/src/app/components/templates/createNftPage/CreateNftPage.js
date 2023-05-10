import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const CreateNftPage = () => {
  return (
    <> 
    <Head>
        <title>Create NFT | Drunken Bytes</title>
        <meta name="description" content="Create your own unique NFTs on Drunken Bytes. Our user-friendly platform allows you to easily generate and manage your digital assets. Start minting now!" />
      </Head>
      <FirstFold />
      <SecondFold/>
    </>
  )
};

export default CreateNftPage;
