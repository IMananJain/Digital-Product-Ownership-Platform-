import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const BlogsWritePage = (props) => {
  return (
    <>
      <Head>
        <title>{props.mode === "write" ? "Write Blog" : "Edit Blog"} | Support Drunken Bytes</title>
        <meta name="description" content="Stay up-to-date with the latest news and updates related to NFTs, blockchain technology, and more. Our blog provides insights into the latest trends and developments in the world of NFTs and keeps you informed about major updates from Drunken Bytes."></meta>
      </Head>
      <FirstFold mode={props.mode}/>
      <SecondFold mode={props.mode} blogUrl={props.blogUrl}/>
    </>
  );
};

export default BlogsWritePage;
