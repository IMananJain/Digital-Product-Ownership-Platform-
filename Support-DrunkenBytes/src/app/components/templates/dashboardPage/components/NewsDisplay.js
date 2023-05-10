import React from "react";
import styles from "../stylesheets/newsDisplay.module.css";

const NewsDisplay = props => {
  return (
    <a href={props.link} className={styles.mainDiv} target="_blank">
      <div className={styles.textDiv}>
        <p>{props.title}</p>
      </div>
    </a>
  );
};

export default NewsDisplay;
