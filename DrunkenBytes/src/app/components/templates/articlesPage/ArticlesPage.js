import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const Article = (props) => {
  return (
    <div>
      <Head>
        <title>{props.articleData.title} | Drunken Bytes</title>
        <meta name="description" content={props.articleData.description} />
        <meta
          name="keywords"
          content={`Drunken Bytes, help center, article, how to, ${props.articleData.title}`}
        />
        <meta
          property="og:title"
          content={`${props.articleData.title} | Drunken Bytes`}
        />
        <meta
          property="og:description"
          content={props.articleData.description}
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/drunken-bytes-logo-icon.png"
        />
        <meta
          name="twitter:title"
          content={`${props.articleData.title} | Drunken Bytes`}
        />
        <meta
          name="twitter:description"
          content={props.articleData.description}
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/drunken-bytes-logo-icon.png"
        />
        <link
          rel="canonical"
          href={`https://drunkenbytes.vercel.app/articles/${props.articleData.url}`}
        />
        <meta
          property="og:url"
          content={`https://drunkenbytes.vercel.app/articles/${props.articleData.url}`}
        />
      </Head>
      <FirstFold articleData={props.articleData} />
      <SecondFold articleData={props.articleData} />
    </div>
  );
};

export default Article;
