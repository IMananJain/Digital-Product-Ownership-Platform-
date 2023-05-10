import React from "react";
import styles from "../stylesheets/secondFold.module.css";
import DocumentationText from "./DocumentationText";
import SideNavigation from "./SideNavigation"

const SecondFold = props => {
  return (
    <div className={styles.secondFold}>
      <SideNavigation/>
      <DocumentationText/>
    </div>
  );
};

export default SecondFold;
