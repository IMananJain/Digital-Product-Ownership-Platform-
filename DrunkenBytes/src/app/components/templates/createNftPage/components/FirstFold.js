import React from "react";
import styles from "../stylesheets/firstFold.module.css";

const FirstFold = () => {
  return (
    <div className={styles.firstFold}
      style={{
        backgroundImage:
          "url(" +
          "/images/background/gradient-bottom-2000x1113.jpeg" +
          ")"
      }}
    >
      <h1 className={styles.heading}>Create NFT</h1>
      <p className={styles.subParagraph}>Design and Customize Your Own NFTs with Drunken Bytes</p>
    </div>
  );
};

export default FirstFold;
