import React from "react";
import Head from "next/head";
import FirstFold from "./components/FirstFold";
import SecondFold from "./components/SecondFold";

const CreateNftPage = () => {
  return (
    <>
      <Head>
        <title>Change Password | Support Drunken Bytes</title>
        <meta
          name="description"
          content="Securely change your profile password on Drunken Bytes platform. Keep your account safe and update your password easily."
        />
      </Head>
      <FirstFold />
      <SecondFold />
    </>
  );
};

export default CreateNftPage;
