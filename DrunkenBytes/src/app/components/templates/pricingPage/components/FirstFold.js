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
      <h1 className={styles.heading}>Pricing</h1>
      <p className={styles.subParagraph}>
        At Drunken Bytes, we believe in providing a transparent and fair pricing model for our users. We offer a flexible payment 
        system that allows you to pay for what you use, with no hidden fees or surprise charges.
      </p>
    </div>
  );
};

export default FirstFold;
