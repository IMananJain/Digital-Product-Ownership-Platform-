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
      <h1 className={styles.heading}>Create a Template</h1>
      <p className={styles.subParagraph}>
        Tired of entering same details every time you create a NFT. Add a Product Template to make NFT generation easier.
      </p>
    </div>
  );
};

export default FirstFold;
