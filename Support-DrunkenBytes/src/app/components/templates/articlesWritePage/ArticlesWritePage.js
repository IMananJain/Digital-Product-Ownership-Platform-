import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const ArticlesWritePage = (props) => {
  return (
    <>
      <Head>
        <title>{props.mode === "write" ? "Write Article" : "Edit Article"} | Support Drunken Bytes</title>
        <meta name="description" content={props.mode === "write" ? "Write an Article" : "Edit a existing Article"}></meta>
      </Head>
      <FirstFold mode={props.mode}/>
      <SecondFold mode={props.mode} articleUrl={props.articleUrl}/>
    </>
  );
};

export default ArticlesWritePage;
