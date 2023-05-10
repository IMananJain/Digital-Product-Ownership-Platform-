import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const BlogsAllPage = (props) => {
  return (
    <div>
      <Head>
        <title>Blogs | Drunken Bytes</title>
        <meta
          name="description"
          content="Stay up-to-date with the latest news and updates on NFTs, blockchain technology, and major releases from Drunken Bytes. Explore our blog page for informative articles and insights into the latest trends in the industry"
        />
        <meta
          name="keywords"
          content="Drunken Bytes, NFTs, blockchain, technology, news, updates, blog, trends, releases, insights, informative articles."
        />
        <meta property="og:title" content="Blogs | Drunken Bytes" />
        <meta
          property="og:description"
          content="Stay up-to-date with the latest news and updates on NFTs, blockchain technology, and major releases from Drunken Bytes. Explore our blog page for informative articles and insights into the latest trends in the industry"
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/blogs.png"
        />
        <meta name="twitter:title" content="Blogs | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Stay up-to-date with the latest news and updates on NFTs, blockchain technology, and major releases from Drunken Bytes. Explore our blog page for informative articles and insights into the latest trends in the industry"
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/blogs.png"
        />
        <link rel="canonical" href="https://drunkenbytes.vercel.app/blogs" />
        <meta
          property="og:url"
          content="https://drunkenbytes.vercel.app/blogs"
        />
      </Head>
      <FirstFold />
      <SecondFold blogsData={props.blogsData} totalBlogs={props.totalBlogs} />
    </div>
  );
};

export default BlogsAllPage;
