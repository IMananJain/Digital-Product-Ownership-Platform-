import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Drunken Bytes</title>
        <meta
          name="description"
          content="The Drunken Bytes Contact Us page is your source for getting in touch with our team. Whether you have a question, feedback, or need support, we're here to help. Fill out our contact form or reach out to us via email or phone."
        />
        <meta
          name="keywords"
          content="Drunken Bytes, contact, contact us, support, feedback, email, phone, get in touch, reach out."
        />
        <meta property="og:title" content="Contact Us | Drunken Bytes" />
        <meta
          property="og:description"
          content="The Drunken Bytes Contact Us page is your source for getting in touch with our team. Whether you have a question, feedback, or need support, we're here to help. Fill out our contact form or reach out to us via email or phone."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/contact-us.png"
        />
        <meta name="twitter:title" content="Contact Us | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="The Drunken Bytes Contact Us page is your source for getting in touch with our team. Whether you have a question, feedback, or need support, we're here to help. Fill out our contact form or reach out to us via email or phone."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/contact-us.png"
        />
        <link
          rel="canonical"
          href="https://drunkenbytes.vercel.app/contact-us"
        />
        <meta
          property="og:url"
          content="https://drunkenbytes.vercel.app/contact-us"
        />
      </Head>
      <FirstFold />
      <SecondFold />
    </>
  );
};

export default ContactUsPage;
