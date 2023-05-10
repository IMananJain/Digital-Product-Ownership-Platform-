import React from "react";
import styles from "../stylesheets/secondHalfFold.module.css";

const SecondHalfFold = (props) => {
  return (
    <div className={styles.secondHalfFold}>
      <h2 className={styles.subHeading}>Trusted By Many</h2>
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
              value: `${Number(props.netTransactionValue).toFixed(
                5
              )} ETH`,
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

export default SecondHalfFold;
