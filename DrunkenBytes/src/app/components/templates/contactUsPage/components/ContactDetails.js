import React from "react";
import styles from "../stylesheets/contactDetails.module.css";
import { Link } from "react-scroll";
import { CheckCircleTwoTone, EnvironmentFilled, MailFilled, PhoneFilled } from "@ant-design/icons";

const ContactDetails = props => {
  return (
    <div className={styles.contactDetails}>
      <h2 className={styles.heading}>We're here to help</h2>
      <p className={styles.paragraph}>
        <CheckCircleTwoTone
          twoToneColor="#4caf50"
          className={styles.checkIcon}
        />
        Find the right solution for you
      </p>
      <p className={styles.paragraph}>
        <CheckCircleTwoTone
          twoToneColor="#4caf50"
          className={styles.checkIcon}
        />
        Explain options for pricing
      </p>
      <p className={styles.paragraph}>
        <CheckCircleTwoTone
          twoToneColor="#4caf50"
          className={styles.checkIcon}
        />
        Connect you with helpful resources
      </p>
      <span className={styles.space} />
      <h2 className={styles.heading}>Points of Contact</h2>
      <div className={styles.containerDiv}>
        <div className={styles.iconDiv}>
          <EnvironmentFilled className={styles.infoIcon} />
        </div>
        <div className={styles.informationDiv}>
          <p className={styles.paragraphHead}>Address</p>
          <p className={styles.paragraph}>Jaipur, Rajasthan</p>
          <p className={styles.paragraph}>302016</p>
        </div>
      </div>
      <div className={styles.containerDiv}>
        <div className={styles.iconDiv}>
          <PhoneFilled className={styles.infoIcon} />
        </div>
        <div className={styles.informationDiv}>
          <p className={styles.paragraphHead}>Phone</p>
          <p className={styles.paragraph}>+91-12345 67890</p>
        </div>
      </div>
      <div className={styles.containerDiv}>
        <div className={styles.iconDiv}>
          <MailFilled className={styles.infoIcon} />
        </div>
        <div className={styles.informationDiv}>
          <p className={styles.paragraphHead}>Email</p>
          <p className={styles.paragraph}>bytes.drunken@hotmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
