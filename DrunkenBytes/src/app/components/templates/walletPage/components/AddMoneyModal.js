import React, { useState } from "react";
import { Modal, Input, notification } from "antd";
import styles from "../stylesheets/addMoneyModal.module.css";
import CustomButton from "@/app/components/elements/CustomButton";
import { MoneyCollectOutlined } from "@ant-design/icons";
import {
  useSendTransaction,
  usePrepareSendTransaction,
  useWaitForTransaction,
} from "wagmi";
import { BigNumber } from "ethers";
import { ethers } from "ethers";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import { BLOCK_EXPLORER_URL } from "@/app/constants/constants";

const AddMoneyModal = (props) => {
  const { error, sendRequest } = useHttpClient();
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [hash, setHash] = useState(null);

  const verifyTransaction = async (hash) => {
    setLoading(true);
    try {
      await sendRequest(
        "/wallet-transaction/verify-transaction",
        "POST",
        JSON.stringify({
          txId: hash,
        })
      );
      if (!error) {
        setAmount("");
        notification.success({
          message: "Success",
          description: "Balance Added Successfully",
          placement: "top",
          // duration: null,
          className: "error-notification",
        });
        props.setOpen(false);
      }
    } catch (err) {}
    setLoading(false);
  };

  const { config } = usePrepareSendTransaction({
    request: {
      to: "0xdCFF746b4EBa3446c2ec3794A0961785c7c93013",
      value: BigNumber.from("10000000000000000"),
    },
  });
  const { sendTransaction } = useSendTransaction({
    config,
    onMutate({ args, overrides }) {
      setLoading(true);
    },
    onSuccess(data) {
      setHash(data.hash);
    },
    onError(error) {
      notification.error({
        message: "Error",
        description: error.message,
        placement: "top",
        // duration: null,
        className: "error-notification",
      });
      setAmount("");
    },
    onSettled(data, error) {
      setLoading(false);
    },
  });
  const { isLoading } = useWaitForTransaction({
    hash: hash,
    onSuccess(data) {
      setLoading(true);
      verifyTransaction(data.transactionHash);
      setLoading(false);
    },
    onError(error) {
      notification.error({
        message: "Error",
        description: error.message,
        placement: "top",
        // duration: null,
        className: "error-notification",
      });
      setAmount("");
    },
  });
  const addAmount = async () => {
    if (amount === null || amount === undefined || amount === "") {
      notification.error({
        message: "Error",
        description: "Amount cannot be empty",
        placement: "top",
        className: "error-notification",
      });
      return null;
    }
    Modal.confirm({
      title: "Confirm",
      content: `Confirm adding ${amount} to Drunken Bytes wallet?`,
      okText: "Yes",
      cancelText: "No",
      className:"confirm-modal",
      onOk() {
        // Handle OK button click
        setLoading(true);
        sendTransaction({
          recklesslySetUnpreparedRequest: {
            to: "0xdCFF746b4EBa3446c2ec3794A0961785c7c93013",
            value: ethers.utils.parseUnits(amount, 18),
          },
        });
        setLoading(false);
      },
      onCancel() {
        props.setOpen(false);
        setAmount("");
      },
    });
  };

  return (
    <Modal
      title="Add Money to Wallet"
      destroyOnClose={true}
      closable={false}
      onClose={() => {
        props.setOpen(false);
        setAmount("");
      }}
      open={props.open}
      className="addMoneyModal"
      footer={null}
    >
      <div className={styles.modalText}>
        <Input
          type="number"
          size="large"
          placeholder="Enter Amount in ETH"
          prefix={<MoneyCollectOutlined />}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          min="0.000001"
        />
        {(loading || isLoading) && (
          <div>
            <p>Please Wait. While we are processing your transaction.</p>
            {isLoading && (
              <p>
                <a href={`${BLOCK_EXPLORER_URL}/${hash}`} target="_blank">
                  View on Block Explorer
                </a>
              </p>
            )}
          </div>
        )}
        <div className={styles.buttonsContainer}>
          <CustomButton
            type="OnlyBorder"
            text="Cancel"
            onClickHandler={() => props.setOpen(false)}
            disabled={loading || isLoading}
          />
          <CustomButton
            type="Gradient"
            text="Add"
            onClickHandler={addAmount}
            loading={loading || isLoading}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddMoneyModal;
