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
      <h1 className={styles.heading}>Transactions</h1>
      <p className={styles.subParagraph}>
        View all your transactions here.
      </p>
    </div>
  );
};

export default FirstFold;
