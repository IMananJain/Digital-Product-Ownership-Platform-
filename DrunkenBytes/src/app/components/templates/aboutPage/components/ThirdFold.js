import React from "react";
import styles from "../stylesheets/thirdFold.module.css";

const ThirdFold = () => {
  return (
    <div className={styles.thirdFold}>
      <div className={styles.mainImageDiv} id="main-image-div">
        <img src="/images/about-who.png" alt="Image" className={styles.mainImage} />
      </div>
      <div className={styles.mainDiv} id="main-div">
        <div className={styles.heading}>
          Who We Are
        </div>
        <p className={styles.subParagraph}>
          We are a platform that empowers businesses to create NFTs of their products, certificates, and documents. Our mission is to provide a unique and valuable asset to customers that increases the value of their purchases.
        </p>
        <p className={styles.subParagraph}>
          At Drunken Bytes, we believe in the power of blockchain technology to transform the way we verify authenticity and ownership. By leveraging the security and transparency of the blockchain, we enable businesses to create NFTs that can be easily verified and authenticated by customers and third parties.
        </p>
        <p className={styles.subParagraph}>
          Our platform is designed to be user-friendly and accessible to businesses of all sizes. We provide a range of tools and resources to help businesses create, manage, and distribute their NFTs. Our team is dedicated to providing exceptional customer service and support to ensure that our users have the best possible experience.
        </p>
        <p className={styles.subParagraph}>
          We are committed to driving innovation and pushing the boundaries of what is possible with blockchain technology. We believe that NFTs have the potential to revolutionize the way we buy, sell, and own assets, and we are excited to be at the forefront of this transformation.
        </p>
      </div>
    </div>
  );
};

export default ThirdFold;
