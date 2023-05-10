import React from "react";
import styles from "../stylesheets/fifthFold.module.css";
import { useRouter } from 'next/router'
import CustomButton from "@/app/components/elements/CustomButton";

const FifthFold = () => {
  const router = useRouter();
  
  return (
    <div className={styles.fifthFold}>
        <div className={styles.heading}>Interested in Joining Us?</div>
        <p className={styles.subParagraph}>Hop aboard and view our open positions</p>
        <CustomButton type="Gradient" text="See open roles" onClick={()=>router.push("/careers")}/>
    </div>
  );
};

export default FifthFold;
