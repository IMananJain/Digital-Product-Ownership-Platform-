import React from "react";
import styles from "../stylesheets/secondFold.module.css";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails"

const SecondFold = props => {
  return (
    <div className={styles.secondFold}>
      <ContactDetails/>
      <ContactForm/>
    </div>
  );
};

export default SecondFold;
