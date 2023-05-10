import React from "react";
import styles from "../stylesheets/firstFold.module.css";
const FirstFold = (props) => {
  return (
    <div className={styles.firstFold}
     style={{
        backgroundImage:
          "url(" +
          "/images/background/gradient-bottom-2000x1113.jpeg" +
          ")"
      }}
    >
      <h1 className={styles.heading}>{`${props.userData.name}`}</h1>
      <p className={styles.subParagraph}>
        Details of User - {props.userData.name}
      </p>
    </div>
  );
};

export default FirstFold;
