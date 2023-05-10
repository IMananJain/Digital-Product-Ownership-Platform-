import React from "react";
import styles from "../stylesheets/firstHalfFold.module.css";
import * as AntdIcons from '@ant-design/icons';
import {DollarCircleFilled} from "@ant-design/icons"
const FirstHalfFold = () => {
  return (
    <div className={styles.firstHalfFold}>
      <div className={styles.mainDiv} id="main-div">
       {
        [
          {
            src:"NotificationFilled",
            heading:"Added Value for Customers",
            content: "Businesses can offer unique NFT assets of their products and certificates to customers, increasing their purchase value and uniqueness."
          },
          {
            src:"DollarCircleFilled",
            heading:"New revenue streams",
            content: "By allowing customers to trade or sell their NFTs, businesses can tap into a new ecosystem of value."
          },
          {
            src:"ToolFilled",
            heading:"Secure and tamper-proof",
            content: "By using blockchain technology, our platform ensures that the NFTs are unique and can't be duplicated or tampered with."
          },
          {
            src:"CustomerServiceFilled",
            heading:"Customer Support",
            content: "Drunken Bytes provides excellent customer support to ensure a positive experience for users, especially for those new to blockchain technology."
          }
        ].map((data,idx)=>{
          const AntdIcon = AntdIcons[data.src];
          return <div className={styles.containerDiv} key={idx}>
            <div className={styles.headerDiv}>
            <AntdIcon className={styles.icon}/>
              <span className={styles.heading}>{data.heading}</span>
            </div>
            <p className={styles.content}>{data.content}</p>
          </div>
        })
       }
      </div>
    </div>
  );
};

export default FirstHalfFold;
