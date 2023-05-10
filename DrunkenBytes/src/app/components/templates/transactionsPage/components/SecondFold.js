import React, { useState } from "react";
import styles from "../stylesheets/secondFold.module.css";
import Link from "next/link"
const SecondFold = props => {
  
  return (
    <div className={styles.transactionsPage}
      style={{
        backgroundImage:
          "url(" +
          "/images/background/gradient-left-side.png" +
          ")"
      }}
    >
        <Link href="/transactions/nft" className={styles.linkDiv}>NFT<br/>Transactions</Link>
        <Link href="/transactions/wallet-recharge" className={styles.linkDiv}>Wallet<br/>Recharge<br/>Transactions</Link>
    </div>
  );
};

export default SecondFold;
