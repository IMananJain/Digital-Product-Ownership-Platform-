import React, { useEffect, useState } from "react";
import styles from "./profilePage.module.css";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import { Image, Skeleton, Spin } from "antd";
import Head from "next/head";
import InformationDiv from "./components/InformationDiv";
import SkeletonLoader from "../../modules/SkeletonLoader";

const ProfilePage = () => {
  const { error, sendRequest, clearError, isLoading } = useHttpClient();
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    const sendFetchRequest = async () => {
      const result = await sendRequest("/user/get-user-profile");
      setProfileData(result);
    };
    sendFetchRequest();
  }, []);

  return (
    <>
      <Head>
        <title>Profile | Drunken Bytes</title>
        <meta
          name="description"
          content="Get access to your personalized profile page on Drunken Bytes. View your account information, update your profile, and manage your settings."
        />
        <meta
          name="keywords"
          content="profile page, account information, user settings, personalization, manage account, Drunken Bytes"
        />
        <meta property="og:title" content="Profile | Drunken Bytes" />
        <meta
          property="og:description"
          content="Get access to your personalized profile page on Drunken Bytes. View your account information, update your profile, and manage your settings."
        />
        <meta
          property="og:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/profile.png"
        />
        <meta name="twitter:title" content="Profile | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Get access to your personalized profile page on Drunken Bytes. View your account information, update your profile, and manage your settings."
        />
        <meta
          name="twitter:image"
          content="https://drunkenbytes.vercel.app/images/page-shots/profile.png"
        />
        <link rel="canonical" href="https://drunkenbytes.vercel.app/profile" />
        <link rel="og:url" href="https://drunkenbytes.vercel.app/profile" />
      </Head>
      {profileData?.user?.logo === undefined ? (
        <SkeletonLoader />
      ) : (
        <div className={styles.profile}>
          <h1 className={styles.heading}>Drunken Bytes Profile</h1>
          <p className={styles.paragraph}>
            Here you can find your profile information
          </p>
          <div className={styles.profileDiv}>
            <div className={styles.headerDiv}>
              <strong>User Profile</strong>
            </div>
            <div className={styles.contentDiv}>
              <div className={styles.imageDiv}>
                <Image
                  width={200}
                  src={profileData?.user.logo}
                  alt="brand-logo"
                  placeholder={
                    <Skeleton.Avatar
                      shape="circle"
                      active
                      block
                      size={200}
                      className={styles.logoSkeleton}
                    />
                  }
                />
              </div>
              <div className={styles.informationDiv}>
                <div className={styles.informationContent}>
                  <p>Business Name</p>
                  <p>{profileData?.user.name}</p>
                </div>
                <div className={styles.informationContent}>
                  <p>Wallet Address</p>
                  <p>{profileData?.user.accountAddress}</p>
                </div>
                <div className={styles.informationContent}>
                  <p>Business Email</p>
                  <p>{profileData?.user.email}</p>
                </div>
                <div className={styles.informationContent}>
                  <p>Wallet Balance</p>
                  <p>{profileData?.user.walletBalance} ETH</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tilesDiv}>
            <InformationDiv
              title="Commission Charged"
              content={`${profileData?.user?.commissionPercent}%`}
            />
            <InformationDiv title="NFT Generated" content={profileData?.nft} />
            <InformationDiv
              title="Pending Transactions"
              content={profileData?.pendingTransactions}
            />
            <InformationDiv
              title="ETH Spent"
              content={Number(profileData?.value).toFixed(5)}
            />
            <InformationDiv
              title="Last Transaction Value"
              content={`${Number(profileData?.lastTransactionValue).toFixed(
                8
              )} ETH`}
            />
            <InformationDiv
              title="Total Issues"
              content={profileData?.totalIssues}
            />
            <InformationDiv
              title="Active Issues"
              content={profileData?.activeIssues}
            />
            <InformationDiv
              title="Solved Issues"
              content={profileData?.solvedIssues}
            />
            <InformationDiv
              title="Active API Keys"
              content={profileData?.apiKey}
            />
            <InformationDiv
              title="Templates Generated"
              content={profileData?.templates}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
