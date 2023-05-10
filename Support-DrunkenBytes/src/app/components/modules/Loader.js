import React, {useContext} from "react";
import styles from "./stylesheets/loader.module.css";

const Loader = ({isLoading}) => {
  return (
    <div className={isLoading ? styles.loadingPage : styles.hide}>
      <div className={styles.wrapper}>
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.shadow} />
        <div className={styles.shadow} />
        <div className={styles.shadow} />
        <span>Loading</span>
      </div>
    </div>
  );
};

export default Loader;
