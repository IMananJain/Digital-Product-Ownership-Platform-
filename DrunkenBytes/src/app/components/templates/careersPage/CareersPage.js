import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";
import ThirdFold from "./components/ThirdFold";
import FourthFold from "./components/FourthFold";
import FifthFold from "./components/FifthFold";

const CareersPage = (props) => {
  return (
    <>
      <Head>
        <title>Careers | Drunken Bytes</title>
        <meta
          name="description"
          content="Discover exciting career opportunities with Drunken Bytes. Join our team and work with the latest technologies in a dynamic and collaborative environment."
        />
        <meta
          name="keywords"
          content="careers, job openings, employment, work, job opportunities, technology, collaboration, team, Drunken Bytes"
        />
        <meta property="og:title" content="Careers | Drunken Bytes" />
        <meta
          property="og:description"
          content="Discover exciting career opportunities with Drunken Bytes. Join our team and work with the latest technologies in a dynamic and collaborative environment."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/careers.png"
        />
        <meta name="twitter:title" content="Careers | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Discover exciting career opportunities with Drunken Bytes. Join our team and work with the latest technologies in a dynamic and collaborative environment."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/careers.png"
        />
        <link rel="canonical" href="https://drunkenbytes.vercel.app/careers" />
        <meta
          property="og:url"
          content="https://drunkenbytes.vercel.app/careers"
        />
      </Head>
      <FirstFold />
      <SecondFold />
      <ThirdFold />
      <FourthFold />
      <FifthFold />
    </>
  );
};

export default CareersPage;
