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
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.subParagraph}>
        Want to get in touch? We'd love to hear from you.
      </p>
    </div>
  );
};

export default FirstFold;
