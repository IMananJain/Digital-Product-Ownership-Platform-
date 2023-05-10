import React, { useEffect, useState } from "react";
import styles from "./walletPage.module.css";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import { Skeleton } from "antd";
import CustomButton from "@/app/components/elements/CustomButton";
import AddMoneyModal from "./components/AddMoneyModal";
import Head from "next/head";
import WalletRechargeTable from "./components/WalletRechargeTable";

const WalletPage = () => {
  const { error, sendRequest, clearError, isLoading } = useHttpClient();
  const [profileData, setProfileData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [clearFilters, setClearFilter] = useState(false);

  useEffect(() => {
    const sendFetchRequest = async () => {
      const result = await sendRequest("/user/get-user-profile");
      setProfileData(result.user);
      if (error) clearError();
    };
    sendFetchRequest();
  }, [modalOpen]);

  return (
    <div className={styles.profile}>
      <Head>
        <title>Wallet | Drunken Bytes</title>
        <meta
          name="description"
          content="Manage your wallet securely on Drunken Bytes wallet page. Easily transfer your eth from your crypto wallet to Drunken Bytes Wallet. Keep your transactions safe with our state-of-the-art security features."
        />
        <meta
          name="keywords"
          content="Drunken Bytes wallet, cryptocurrency wallet, secure transactions, Drunken Bytes"
        />
        <meta property="og:title" content="Wallet | Drunken Bytes" />
        <meta
          property="og:description"
          content="Manage your wallet securely on Drunken Bytes wallet page. Easily transfer your eth from your crypto wallet to Drunken Bytes Wallet. Keep your transactions safe with our state-of-the-art security features."
        />
        <meta property="og:image" content="https://drunkenbytes.vercel.app/images/page-shots/wallet.png" />
        <meta name="twitter:title" content="Wallet | Drunken Bytes" />
        <meta
          name="twitter:description"
          content="Manage your wallet securely on Drunken Bytes wallet page. Easily transfer your eth from your crypto wallet to Drunken Bytes Wallet. Keep your transactions safe with our state-of-the-art security features."
        />
        <meta name="twitter:image" content="https://drunkenbytes.vercel.app/images/page-shots/wallet.png" />
        <link rel="canonical" href="https://drunkenbytes.vercel.app/wallet" />
        <link rel="og:url" href="https://drunkenbytes.vercel.app/wallet" />
      </Head>
      <AddMoneyModal
        open={modalOpen}
        setOpen={setModalOpen}
        accountAddress={profileData.accountAddress}
      />
      <h1 className={styles.heading}>Drunken Bytes Wallet</h1>
      <p className={styles.paragraph}>
        Here you can find your wallet information
      </p>
      <div className={styles.profileDiv}>
        <div className={styles.contentDiv}>
          {profileData.walletBalance === undefined ? (
            <Skeleton.Input active block style={{ marginBottom: "10px" }} />
          ) : (
            <h2>{profileData.walletBalance} ETH</h2>
          )}
          <p>Current Wallet Balance</p>
        </div>
        <CustomButton
          type="Gradient"
          text="+ &nbsp; Add Money to Wallet"
          onClick={() => setModalOpen(true)}
        />
      </div>
      <div className={styles.clearFilterButton}>
        <CustomButton
          type="Gradient"
          text="Clear All Filter"
          onClickHandler={() => {
            setClearFilter(!clearFilters);
          }}
        />
      </div>
      <div className="profile-tabs tab-pane">
        <WalletRechargeTable open={modalOpen} clearFilters={clearFilters}/>
      </div>
    </div>
  );
};

export default WalletPage;
