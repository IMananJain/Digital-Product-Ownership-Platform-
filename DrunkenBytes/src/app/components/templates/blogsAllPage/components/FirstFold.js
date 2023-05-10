import React from "react";
import styles from "../stylesheets/firstFold.module.css";

const FirstFold = () => {
  return (
    <div
      className={styles.firstFold}
      style={{
        backgroundImage:
          "url(" + "/images/background/gradient-bottom-2000x1113.jpeg" + ")",
      }}
    >
      <h1 className={styles.heading}>
        News and Insight from the Drunken Bytes Team
      </h1>
      <p className={styles.subParagraph}>
        Updates, stories, and tips on everything in between—all in one place.
        <br />
        Drunken Bytes Blog
      </p>
    </div>
  );
};

export default FirstFold;
