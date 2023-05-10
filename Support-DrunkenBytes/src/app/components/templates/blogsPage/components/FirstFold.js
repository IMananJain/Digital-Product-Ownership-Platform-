import React from "react";
import styles from "../stylesheets/firstFold.module.css";

const FirstFold = (props) => {
  const formatDate = (utcTimestamp) => {
    const date = new Date(utcTimestamp);
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    return `${month} ${day}, ${year}`;
  };
  return (
    <div className={styles.firstFold}
      style={{
        backgroundImage:
          "url(" +
          "/images/background/gradient-bottom-2000x1113.jpeg" +
          ")"
      }}
    >
      <div className={styles.mainDiv} id="main-div">
      <p className={styles.subParagraph}>
      {formatDate(props.blogData.updatedAt)}
        </p>
        <h1 className={styles.heading}>
          {props.blogData.title}
        </h1>
        <p className={styles.subParagraph}>
         Written by Drunken Bytes Team
        </p>
      </div>
      <div className={styles.mainImageDiv} id="main-image-div">
        <img src={props.blogData.image} alt="blog-title-image" className={styles.mainImage} />
      </div>
    </div>
  );
};

export default FirstFold;
