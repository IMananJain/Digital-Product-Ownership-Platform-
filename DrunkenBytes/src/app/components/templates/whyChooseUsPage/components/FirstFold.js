import React from "react";
import styles from "../stylesheets/firstFold.module.css";

const FirstFold = () => {
  return (
    <div className={styles.firstFold}
      style={{
        backgroundImage:
          "url(" +
          "/images/background/gradient-bottom-2000x1113.jpeg" +
          ")"
      }}>
      <div className={styles.mainDiv} id="main-div">
        <h1 className={styles.heading}>
          Why Choose Us?
        </h1>
        <p className={styles.subParagraph}>
          Drunken Bytes is a leading provider of NFT creation services, dedicated to helping businesses unlock the potential of 
          blockchain technology. With our innovative platform, businesses can easily create product and credentials NFTs, allowing 
          them to add value to their offerings and establish trust with their customers. Our team of experts is committed to 
          delivering quality solutions that meet the unique needs of our clients, while providing exceptional value and 
          unparalleled customer support.
        </p>
      </div>
      <div className={styles.mainImageDiv} id="main-image-div">
        <img src="/images/why-choose-us.png" alt="Image" className={styles.mainImage} />
      </div>
    </div>
  );
};

export default FirstFold;
