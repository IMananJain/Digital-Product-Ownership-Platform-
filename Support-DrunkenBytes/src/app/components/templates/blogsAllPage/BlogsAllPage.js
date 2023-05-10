import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from './components/SecondFold';

const BlogsAllPage = (props) => {
  return (
    <div>
      <Head>
        <title>Blogs | Support Drunken Bytes</title>
        <meta name="description" content="Stay up-to-date with the latest news and updates related to NFTs, blockchain technology, and more. Our blog provides insights into the latest trends and developments in the world of NFTs and keeps you informed about major updates from Drunken Bytes." />
      </Head>
      <FirstFold />
      <SecondFold blogsData={props.blogsData} totalBlogs={props.totalBlogs}/>
    </div>
  );
};

export default BlogsAllPage;
