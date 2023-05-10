import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const HelpCenterPage = (props) => {
  return (
    <div>
      <Head>
        <title>Help Center | Support Drunken Bytes</title>
        <meta name="description" content="Looking for help with our products and services? Visit our Help Center for answers to frequently asked questions, tutorials, and guides." />
      </Head>
      <FirstFold />
      <SecondFold articlesData={props.articlesData} totalArticles={props.totalArticles}/>
    </div>
  );
};

export default HelpCenterPage;
