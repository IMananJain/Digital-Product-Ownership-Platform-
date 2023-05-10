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
      <div className={styles.mainDiv} id="main-div">
        <h1 className={styles.heading}>
          Frequently Asked Questions (FAQ)
        </h1>
        <p className={styles.subParagraph}>
          Welcome to the Drunken Bytes FAQ page. Here, you'll find answers to some of the most common questions we receive about 
          our platform and services. If you don't see an answer to your question below, please don't hesitate to contact us for 
          further assistance.
        </p>
      </div>
      <div className={styles.mainImageDiv} id="main-image-div">
        <img src="/images/faq.png" alt="Image" className={styles.mainImage} />
      </div>
    </div>
  );
};

export default FirstFold;
