import React from "react";
import styles from "../stylesheets/secondFold.module.css";
import { Tag } from "antd";
import CustomButton from "@/app/components/elements/CustomButton"
const SecondFold = props => {
  return (
    <div className={`${styles.secondFold}`}>
      <div className={styles.buttonDiv}>
          <CustomButton type="Gradient" onClickHandler={()=>window.open(`https://sepolia.etherscan.io/tx/${props.transactionData.txId}`, '_blank')} text="View transaction on Etherscan" />
      </div>
      <div className={styles.detailsDiv}>
        <div className={styles.detail}>
          <p className={styles.title}>Transaction Hash: </p>
          <p className={styles.value}>
            {props.transactionData.txId}
          </p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Date Crated: </p>
          <p className={styles.value}>
            {new Date(props.transactionData.dateCreated).getDate() +
              "/" +
              (new Date(props.transactionData.dateCreated).getMonth() + 1) +
              "/" +
              new Date(props.transactionData.dateCreated).getFullYear() +
              " " +
              new Date(props.transactionData.dateCreated).getHours() +
              ":" +
              new Date(props.transactionData.dateCreated).getMinutes() +
              ":" +
              new Date(props.transactionData.dateCreated).getSeconds()}
          </p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Value: </p>
          <p className={styles.value}>
            {`${props.transactionData.value} ETH`}
          </p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Status: </p>
          <p className={styles.value}>
            {
              <Tag
                color={
                  props.transactionData.status === "Success"
                    ? "green"
                    : props.transactionData.status === "Pending"
                      ? "geekblue"
                      : "volcano"
                }
              >
                {props.transactionData.status.toUpperCase()}
              </Tag>
            }
          </p>
        </div>   
      </div>
    </div>
  );
};

export default SecondFold;
