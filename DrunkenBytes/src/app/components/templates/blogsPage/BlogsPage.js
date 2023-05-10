import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const Blog = (props) => {
  return (
    <div>
      <Head>
        <title>{props.blogData.title} | Drunken Bytes</title>
        <meta
          name="description"
          content="Stay up-to-date with the latest news and updates related to NFTs, blockchain technology, and more. Our blog provides insights into the latest trends and developments in the world of NFTs and keeps you informed about major updates from Drunken Bytes."
        />
        <meta
          name="keywords"
          content=" NFTs, blockchain technology, cryptocurrency, digital assets, Drunken Bytes, updates, news, technology, trends, insights."
        />
        <meta
          property="og:title"
          content={`${props.blogData.title} | Drunken Bytes`}
        />
        <meta
          property="og:description"
          content="Stay up-to-date with the latest news and updates related to NFTs, blockchain technology, and more. Our blog provides insights into the latest trends and developments in the world of NFTs and keeps you informed about major updates from Drunken Bytes."
        />
        <meta property="og:image" content={props.blogData.image} />
        <meta
          name="twitter:title"
          content={`${props.blogData.title} | Drunken Bytes`}
        />
        <meta
          name="twitter:description"
          content="Stay up-to-date with the latest news and updates related to NFTs, blockchain technology, and more. Our blog provides insights into the latest trends and developments in the world of NFTs and keeps you informed about major updates from Drunken Bytes."
        />
        <meta name="twitter:image" content={props.blogData.image} />
        <link
          rel="canonical"
          href={`https://drunkenbytes.vercel.app/blogs/${props.blogData.url}`}
        />
        <meta
          property="og:url"
          content={`https://drunkenbytes.vercel.app/blogs/${props.blogData.url}`}
        />
      </Head>
      <FirstFold blogData={props.blogData} />
      <SecondFold blogData={props.blogData} />
    </div>
  );
};

export default Blog;
