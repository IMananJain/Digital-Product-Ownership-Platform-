import CustomButton from "@/app/components/elements/CustomButton";
import React from "react";
import styles from "../stylesheets/firstFold.module.css";
import { TypeAnimation } from "react-type-animation";
import { useWeb3Modal } from "@web3modal/react";
import { useRouter } from 'next/router'

const FirstFold = () => {
  const router = useRouter();
  const { open } = useWeb3Modal();
  const onClickHandler = async () => {
    await open();
  }

  return (
    <div className={styles.firstFold}>
      <img src="/images/background/gradient-top-center-2354x1760.png" alt="bg" className={styles.bgImage} />
      <div className={styles.mainDiv}>
        <h1 className={styles.heading}>
          NFT's you can
          <TypeAnimation
            sequence={[
              "use to grow your business",
              1000,
              "", // Deletes 'One' and types 'Two'
              500,
              "use to enhance client experience",
              1000,
              "", // Deletes 'One' and types 'Two'
              500,
              "use to verify authenticity",
              1000
            ]}
            speed={50}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className={styles.typingHeading}
            aria-label="NFT's you can use to grow your business, use to enhance client experience, and use to verify authenticity"
          />
        </h1>
        <p className={styles.subParagraph}>
          Empowering businesses with innovative solutions that leverage the power of NFTs. Our platform enables you to create NFTs for your products and documents, providing a transparent and secure way to track ownership and transfer of assets.
        </p>
        <div className={styles.buttonContainer}>
          <CustomButton type="OnlyBorder" text="Try Now" onClick={onClickHandler} />
          <CustomButton type="Gradient" text="API Documentation" onClick={() => router.push("/documentation")} />
        </div>
      </div>
      <div className={styles.mainImageDiv}>
        <img src="/images/nft.png" alt="Image" className={styles.mainImage} />
      </div>
    </div>
  );
};

export default FirstFold;
