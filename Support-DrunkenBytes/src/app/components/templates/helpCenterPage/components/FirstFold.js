import CustomButton from "@/app/components/elements/CustomButton";
import React from "react";
import styles from "../stylesheets/firstFold.module.css";
import {Link} from "react-scroll";
const FirstFold = () => {
  return (
    <div className={styles.firstFold} style={{
      backgroundImage:
        "url(" + "/images/background/gradient-bottom-2000x1113.jpeg" + ")",
    }}>
      <div className={styles.mainDiv}>
        <h1 className={styles.heading}>Help Center</h1>
        <p className={styles.subParagraph}>Get answers straight from the Drunken Bytes team.</p>
      </div>
      <img src="/images/help-center-icon.png" alt=""/>
    </div>
  );
};

export default FirstFold;
