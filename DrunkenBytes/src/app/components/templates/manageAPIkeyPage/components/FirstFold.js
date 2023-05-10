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
      <h1 className={styles.heading}>Manage API Keys</h1>
      <p className={styles.subParagraph}>
      Manage API keys to access the platform's features and services with control and security.
      </p>
    </div>
  );
};

export default FirstFold;
