import React from "react";
import styles from "../stylesheets/secondFold.module.css";
import Link from "next/link";
import { Image, Spin, Tabs } from "antd";
import NftTable from "./NftTable";
import WalletRechargeTable from "./WalletRechargeTable";
import APIKeyTable from "./APIKeyTable";
import TemplateTable from "./TemplateTable";
import IssuesTable from "./IssuesTable";
const SecondFold = (props) => {
  return (
    <div className={`${styles.secondFold}`}>
      <div className={styles.buttonDiv}>
        <Image
          width={200}
          src={props.userData.logo}
          alt="user-logo"
          placeholder={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Spin />
            </div>
          }
        />
      </div>
      <div className={styles.detailsDiv}>
      <div className={styles.detail}>
          <p className={styles.title}>ID: </p>
          <p className={styles.value}>{props.userData._id}</p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Name: </p>
          <p className={styles.value}>{props.userData.name}</p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Email: </p>
          <p className={styles.value}>{props.userData.email}</p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Account Address: </p>
          <p className={styles.value}>{props.userData.accountAddress}</p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Wallet Balance: </p>
          <p className={styles.value}>{props.userData.walletBalance}</p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Commission Percent: </p>
          <p className={styles.value}>{props.userData.commissionPercent}</p>
        </div>
        {props.userData.verified ? (
          <div className={styles.detail}>
            <p className={styles.title}>Verified By: </p>
            <p className={styles.value}>
              <Link href={`/support-user/${props.userData.verifiedBy._id}`}>
                {props.userData.verifiedBy.name}
              </Link>
            </p>
          </div>
        ) : (
          <div className={styles.detail}>
            <p className={styles.title}>Verified By: </p>
            <p className={styles.value}>Not Verified Yet</p>
          </div>
        )}
      </div>
      <Tabs
        className={`${styles.tabs} tab-pane`}
        defaultActiveKey="1" centered
        items={[
          { key: "1", label: "NFT Transactions", children: <NftTable id={props.userData._id}/> },
          { key: "2", label: "Wallet Recharge Transactions", children: <WalletRechargeTable id={props.userData._id}/> },
          { key: "3", label: "API Keys", children: <APIKeyTable id={props.userData._id}/> },
          { key: "4", label: "Templates", children: <TemplateTable id={props.userData._id}/> },
          { key: "5", label: "Issues", children: <IssuesTable id={props.userData._id}/> },
        ]}
      />
    </div>
  );
};

export default SecondFold;
