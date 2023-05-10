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
      <div className={styles.mainDiv}>
        <h1 className={styles.heading}>
          Hi. We're Drunken Bytes.
        </h1>
        <p className={styles.subParagraph}>
          Drunken Bytes is a comprehensive platform that offers an end-to-end solution for creating NFTs for your Products and Documents. With our user-friendly interface, you can easily generate and distribute warranty cards that are seamlessly integrated with the blockchain. Our innovative approach ensures that using NFTs is effortless for both businesses and customers, while providing a high level of security and transparency.
        </p>
      </div>
      <div className={styles.mainImageDiv}>
        <img src="/images/about-main.png" alt="Image" className={styles.mainImage} />
      </div>
    </div>
  );
};

export default FirstFold;
