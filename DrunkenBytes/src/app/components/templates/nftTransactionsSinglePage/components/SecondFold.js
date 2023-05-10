import React from "react";
import styles from "../stylesheets/secondFold.module.css";
import {
  CONTRACT_ADDRESS,
  BLOCK_EXPLORER_URL,
  OPENSEA_URL,
} from "@/app/constants/constants";
import { Tag, Table } from "antd";
import CustomButton from "@/app/components/elements/CustomButton";
const SecondFold = (props) => {
  return (
    <div className={`${styles.secondFold}`}>
      <div className={styles.buttonDiv}>
        <CustomButton
          type="Gradient"
          onClickHandler={() =>
            window.open(
              `${BLOCK_EXPLORER_URL}/${props.transactionData.txId}`,
              "_blank"
            )
          }
          text="View transaction on Etherscan"
        />
        <CustomButton
          type="Gradient"
          onClickHandler={() =>
            window.open(
              `${OPENSEA_URL}/${CONTRACT_ADDRESS}/${props.transactionData.tokenId}`,
              "_blank"
            )
          }
          text="View NFT on OpenSea"
        />
      </div>
      <div className={styles.detailsDiv}>
        <div className={styles.detail}>
          <p className={styles.title}>Transaction Hash: </p>
          <p className={styles.value}>{props.transactionData.txId}</p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Token ID: </p>
          <p className={styles.value}>{props.transactionData.tokenId}</p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Receiver Name: </p>
          <p className={styles.value}>{props.transactionData.receiverName}</p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Receiver Email: </p>
          <p className={styles.value}>{props.transactionData.receiverEmail}</p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Receiver Wallet Address: </p>
          <p className={styles.value}>
            {props.transactionData.receiverWalletAddress}
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
          <p className={styles.value}>{`${props.transactionData.value} ETH`}</p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Transaction Type: </p>
          <p className={styles.value}>
            {
              <Tag
                color={
                  props.transactionData.transactionType === "Mint"
                    ? "green"
                    : "volcano"
                }
              >
                {props.transactionData.transactionType.toUpperCase()}
              </Tag>
            }
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
        <div className={styles.detail}>
          <p className={styles.title}>NFT Name: </p>
          <p className={styles.value}>{props.transactionData.nftName}</p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>NFT Type: </p>
          <p className={styles.value}>{props.transactionData.nftType}</p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Custom Image Used: </p>
          <p className={styles.value}>
            {props.transactionData.useCustomImage.toString()}
          </p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Transferable: </p>
          <p className={styles.value}>
            {props.transactionData.isTransferable.toString()}
          </p>
        </div>
        <div className={styles.detail}>
          <p className={styles.title}>Burnable: </p>
          <p className={styles.value}>
            {props.transactionData.isBurnable.toString()}
          </p>
        </div>
        {props.transactionData.isBurnable && (
          <div className={styles.detail}>
            <p className={styles.title}>Burnable: </p>
            <p className={styles.value}>
              {new Date(props.transactionData.burnAfter).getDate() +
                "/" +
                (new Date(props.transactionData.burnAfter).getMonth() + 1) +
                "/" +
                new Date(props.transactionData.burnAfter).getFullYear() +
                " " +
                new Date(props.transactionData.burnAfter).getHours() +
                ":" +
                new Date(props.transactionData.burnAfter).getMinutes() +
                ":" +
                new Date(props.transactionData.burnAfter).getSeconds()}
            </p>
          </div>
        )}
        {props.transactionData.traits.length >= 0 && (
          <div className={styles.detail}>
            <p className={styles.title}>NFT Traits: </p>
            <p className={`${styles.value} tab-pane`}>
              <Table
                size="small"
                dataSource={props.transactionData.traits}
                bordered
                columns={[
                  {
                    title: "Key",
                    dataIndex: "key",
                    key: "key",
                  },
                  {
                    title: "Value",
                    dataIndex: "value",
                    key: "value",
                  },
                ]}
                scroll={{
                  x: "max-content",
                }}
              />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondFold;
