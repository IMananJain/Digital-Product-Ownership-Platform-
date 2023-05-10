import React from "react";
import styles from "../stylesheets/fourthFold.module.css";
import CustomButton from "@/app/components/elements/CustomButton";
import { notification } from "antd";

const FourthFold = () => {
  return (
    <div className={styles.fourthFold}>
      <div className={styles.heading}>Interested in joining us?</div>
      <p className={styles.subParagraph}>
        Hop aboard and view our open positions
      </p>
      <CustomButton type="Gradient" text="See open roles" onClick={() => {
        notification.info({
          message: "Sorry",
          description: "Drunken Bytes is currently not hiring",
          placement: "top",
          className: "error-notification"
        });
      }} />
    </div>
  );
};

export default FourthFold;
