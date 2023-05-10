import React from 'react'
import { Modal } from "antd";
import styles from "./stylesheets/acceptAndSignModal.module.css";
import Image from 'next/image';
import Link from "next/link";
import CustomButton from "@/app/components/elements/CustomButton";

const AcceptAndSignModal = (props) => {
    return (
        <Modal
            title="Welcome to Drunken Bytes"
            destroyOnClose={true}
            closable={false}
            onClose={() => setLoading(false)}
            open={props.acceptModalOpen}
            className="acceptandSignModal"
            footer={null}
        >
            <div className={styles.modalText}>
                <Image
                    src="/images/drunken-bytes-logo-icon.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />
                <p>
                    By connecting your wallet and using Drunken Bytes, you agree to our{" "}
                    <Link href="/" className={styles.link}>
                        Terms and Condition
                    </Link>.
                    {" "}and{" "}
                    <Link href="/" className={styles.link}>
                        Privacy Policy
                    </Link>.
                </p>
                <div className={styles.buttonsContainer}>
                    <CustomButton type="OnlyBorder" text="Cancel" onClickHandler={props.onModalClose} disabled={props.modalLoading}/>
                    <CustomButton type="Gradient" text="Accept and Sign" onClickHandler={props.onAcceptHandler} loading={props.modalLoading}/>
                </div>
            </div>
        </Modal>
    )
}

export default AcceptAndSignModal