import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const Article = (props) => {
  return (
    <div>
      <Head>
        <title>{props.articleData.title} | Support Drunken Bytes</title>
        <meta name="description" content={props.articleData.description} />
      </Head>
      <FirstFold articleData={props.articleData} />
      <SecondFold articleData={props.articleData} />
    </div>
  );
};

export default Article;
