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
        <h1 className={styles.heading}>Cookies Policy</h1>
        <p className={styles.subParagraph}>Last Revised - March 4, 2023</p>
    </div>
  );
};

export default FirstFold;
