import CustomButton from "@/app/components/elements/CustomButton";
import React from "react";
import styles from "../stylesheets/thirdFold.module.css";
import { useRouter } from 'next/router'

const ThirdFold = () => {
  const router = useRouter();
  return (
    <div className={styles.thirdFold}>
      <h2 className={styles.heading}>Get started with Products and Credentials NFT</h2>
      <div className={styles.div}>
        <div className={styles.contentDiv}>
          <h3 className={styles.subHeading}>Create, distribute and integrate Products and Credentials  NFTs</h3>
          <p className={styles.subParagraph}>
            Drunken Bytes allows users to easily create, distribute, and integrate your Product NFTs and Document NFTs. This innovative solution saves time and resources for businesses, while providing an added layer of value and security for customers.
          </p>
          <CustomButton type="Gradient" text="Learn More" onClick={()=>router.push("/why-choose-us")}/>
        </div>

        <div className={styles.mainImageDiv} id="main-image-div">
          <img src="/images/home-get-started.png" alt="Image" className={styles.mainImage} />
        </div>
      </div>
    </div>
  );
};

export default ThirdFold;
