import React from "react";
import styles from "../stylesheets/firstFold.module.css";
const FirstFold = (props) => {
  return (
    <div className={styles.firstFold}
     style={{
        backgroundImage:
          "url(" +
          "/images/background/gradient-bottom-2000x1113.jpeg" +
          ")"
      }}
    >
      <h1 className={styles.heading}>{`${props.transactionData.txId.slice(0, 2)}...${props.transactionData.txId.slice(-3)}`}{" "}
          Wallet Recharge Transaction</h1>
      <p className={styles.subParagraph}>
        Details of Wallet Recharge Transaction hashed {props.transactionData.txId}
      </p>
    </div>
  );
};

export default FirstFold;
