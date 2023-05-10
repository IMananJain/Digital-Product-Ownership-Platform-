import React from "react";
import styles from "../stylesheets/thirdHalfFold.module.css";
import CustomButton from "@/app/components/elements/CustomButton";
import { useWeb3Modal } from "@web3modal/react";
import { useRouter } from 'next/router'
import { useContext } from "react";
import AppContext from "@/app/context/AppContext";

const ThirdHalfFold = () => {
  const { loggedInDetails } = useContext(AppContext);
  const router = useRouter();
  const { open } = useWeb3Modal();
  const onClickHandler = async () => {
    if(loggedInDetails.isConnected){
      router.push("/create")
    }
    else{
      await open();
    }
  }
  return (
    <div className={styles.thirdHalfFold}>
      <h2 className={styles.subHeading}>Ready to start minting?</h2>
      <p className={styles.subParagraph}>
        Free to get started.
      </p>
      <div className={styles.buttonContainer}>
          <CustomButton type="OnlyBorder" text={"Try Now"} onClick={onClickHandler}/>
          <CustomButton type="Gradient" text="Talk to Us" onClick={()=>router.push("/contact-us")}/>
        </div>
    </div>
  );
};

export default ThirdHalfFold;
