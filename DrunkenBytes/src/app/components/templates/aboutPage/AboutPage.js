import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";
import ThirdFold from "./components/ThirdFold";
import FourthFold from "./components/FourthFold";
import FifthFold from "./components/FifthFold";

const AboutPage = (props) => {
  return (
    <>
      <Head>
        <title>About Drunken Bytes</title>
        <meta
          name="description"
          content="Learn about Drunken Bytes, a technology company that offers innovative solutions for businesses and individuals. Discover our mission, values, and team, and find out how we can help you achieve your goals in the digital world."
        />
        <meta
          name="keywords"
          content="Drunken Bytes, about, information, team, mission, values, services"
        />
        <meta property="og:title" content="About Drunken Bytes" />
        <meta
          property="og:description"
          content="Learn about Drunken Bytes, a technology company that offers innovative solutions for businesses and individuals. Discover our mission, values, and team, and find out how we can help you achieve your goals in the digital world."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/about.png"
        />
        <meta name="twitter:title" content="About Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Learn about Drunken Bytes, a technology company that offers innovative solutions for businesses and individuals. Discover our mission, values, and team, and find out how we can help you achieve your goals in the digital world."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/about.png"
        />
        <link rel="canonical" href="https://drunkenbytes.vercel.app/about" />
        <meta
          property="og:url"
          content="https://drunkenbytes.vercel.app/about"
        />
      </Head>
      <FirstFold />
      <SecondFold
        businessServed={props.businessServed}
        nftsCreated={props.nftsCreated}
        netTransactionValue={props.netTransactionValue}
      />
      <ThirdFold />
      <FourthFold />
      <FifthFold />
    </>
  );
};

export default AboutPage;
