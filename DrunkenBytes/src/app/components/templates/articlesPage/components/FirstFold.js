import React from "react";
import styles from "../stylesheets/firstFold.module.css";

const FirstFold = (props) => {
  function truncateText(text) {
    if (text.length <= 200) {
      return text;
    } else {
      return text.substr(0, 200) + "...";
    }
  }
  return (
    <div
      className={styles.firstFold}
      style={{
        backgroundImage:
          "url(" + "/images/background/gradient-bottom-2000x1113.jpeg" + ")",
      }}
    >
      <h1 className={styles.heading}>{props.articleData.title}</h1>
      <p className={styles.subParagraph}>
        {truncateText(props.articleData.description)}
      </p>
    </div>
  );
};

export default FirstFold;
