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
      <h1 className={styles.heading}>Issues Raised</h1>
      <p className={styles.subParagraph}>
        View all NFT related issue that are raised by your clients and customers here.
      </p>
    </div>
  );
};

export default FirstFold;
