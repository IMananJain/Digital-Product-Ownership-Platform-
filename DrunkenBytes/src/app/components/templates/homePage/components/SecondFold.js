import CustomButton from "@/app/components/elements/CustomButton";
import React from "react";
import styles from "../stylesheets/secondFold.module.css";

const SecondFold = () => {
  return (
    <div className={styles.secondFold}>
      <p className={styles.subHeading}>Non-Fungible Tokens (NFTs)</p>
      <h2 className={styles.heading}>What are NFT's?</h2>
      <p className={styles.subParagraph}>
        NFTs are unique digital assets created on the blockchain. They can be
        everything from gaming items and digital art, to sports collectibles and
        real-world assets.
      </p>
      <div className={styles.mainImageDiv}>
        <img src="/images/home-page-nft.png" alt="Image" className={styles.mainImage} />
      </div>
    </div>
  );
};

export default SecondFold;
