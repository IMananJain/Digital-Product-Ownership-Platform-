import React from "react";
import styles from "../stylesheets/secondFold.module.css";

const SecondFold = (props) => {
  return (
    <div className={styles.secondFold}>
      <h2 className={styles.subHeading}>About Drunken Bytes</h2>
      <div className={styles.statsContainer}>
        {[
          {
            heading: "Business Served",
            value: props.businessServed,
          },
          {
            heading: "NFT's Created",
            value: `${props.nftsCreated}`,
          },
          {
            heading: "Net Transaction Value",
            value: `${Number(props.netTransactionValue).toFixed(5)} ETH`,
          }].map((data, idx) => {
            return (
              <div className={styles.stats} key={idx}>
                <p className={styles.statsHead}>{data.value}</p>
                <span className={styles.statsValue}>{data.heading}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SecondFold;
