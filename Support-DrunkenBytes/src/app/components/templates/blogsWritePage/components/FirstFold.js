import React from "react";
import styles from "../stylesheets/firstFold.module.css";

const FirstFold = (props) => {
  return (
    <div
      className={styles.firstFold}
      style={{
        backgroundImage:
          "url(" + "/images/background/gradient-bottom-2000x1113.jpeg" + ")",
      }}
    >
      <h1 className={styles.heading}>
        {props.mode === "write" ? "Write a Blog" : "Edit Blog"}
      </h1>
      <p className={styles.subParagraph}>
        {props.mode === "write" ? "Write whats on your mind." : "Edit existing blogs with ease."}
      </p>
    </div>
  );
};

export default FirstFold;
