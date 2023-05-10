import React, { useState, useEffect } from 'react'
import { Button, Form, Input, Spin, Upload, Modal, notification } from "antd";
import styles from "./stylesheets/registerModal.module.css";
import CustomButton from "@/app/components/elements/CustomButton";
import { useDisconnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { uploadImage, deleteImage } from "@/app/utils/uploadImage"
import { useHttpClient } from "@/app/hooks/useHttpClient";
import { PlusOutlined } from "@ant-design/icons"

const RegisterModal = (props) => {
    const { open } = useWeb3Modal();
    const { disconnect } = useDisconnect();
    const [informationRead, setInformationRead] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);
    const { error, sendRequest, clearError, isLoading } = useHttpClient();
    const [form] = Form.useForm();
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if (props.address !== undefined) {
            form.setFieldsValue({ accountAddress: props.address });
            setIsConnected(true);
            setFileList([]);
        }
    }, [props])

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        setPreviewImage(file.url);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const uploadMainImage = async options => {
        const { onSuccess, onError, file, onProgress } = options;
        try {
            const res = await uploadImage(file, props.address, "users")
            onSuccess("Ok");
            setFileList([{
                uid: file.uid,
                name: file.name,
                status: 'done',
                url: res.file.url
            }])
        } catch (err) {
            console.log(err);
            onError({ err });
        }
    };
    const removeMainImage = async (file) => {
        deleteImage(props.address, "users");
    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload Logo
            </div>
        </div>
    );

    const onFinish = async values => {
        try {
            const result = await sendRequest(
                "/user/user-register-request",
                "POST",
                JSON.stringify({
                    accountAddress: props.address,
                    logo: fileList[0].url,
                    name: values.name,
                    email: values.email,
                })
            );
            if (!error) {
                props.setOpenModal(false);
                form.resetFields();
                disconnect();
                notification.success({
                    message: "Success",
                    description: "Account Registration Request has been generated successfully",
                    placement: "top",
                    // duration: null,
                    className: "error-notification"
                });
            }
            clearError();
        } catch (err) { }
    };



    const onClose = () => {
        disconnect();
        props.setOpenModal(false);
        setInformationRead(false);
    }
    return (
        <Modal
            title="Welcome to Drunken Bytes"
            destroyOnClose
            closable
            centered
            keyboard
            onCancel={onClose}
            open={props.openModal}
            className="registerModal"
            footer={null}
        >
            <div className={styles.modalText}>
                {!informationRead && <>
                    <p>
                        Thank you for considering Drunken Bytes for your business needs! We're excited to help you create NFTs for your products and documents, and we look forward to working with you.
                    </p>
                    <p>Before you begin the registration process, please note that our sales team reviews and verifies all registration requests to ensure that they are legitimate and not fraudulent. As a result, your registration request may take 1-2 working days to be processed.
                    </p><p>
                        We apologize for any inconvenience this may cause, but we believe that this process is necessary to ensure the safety and security of our platform. If you have any questions or concerns about the registration process, please feel free to contact our customer support team, who will be happy to assist you.
                    </p><p>Thank you for your patience and understanding, and we look forward to welcoming you to the Drunken Bytes community!
                    </p>
                    {!isConnected && <p className={styles.warning}>It seems your wallet is not connected. Please Connect you wallet before procedding.</p>}
                    <div className={styles.buttonsContainer}>
                        <CustomButton type="Gradient" text="Cancel" onClickHandler={onClose} />
                        {!isConnected && <CustomButton type="Gradient" text="Connect Wallet" onClickHandler={async () => await open()} />}
                        {isConnected && <CustomButton type="Gradient" text="Proceed" onClickHandler={() => { setInformationRead(true) }} />}
                    </div>
                </>}
                {informationRead && <div className={styles.formDiv}>
                    <Spin size="large" spinning={isLoading}>
                        <Form
                            scrollToFirstError
                            layout="vertical"
                            name="basic"
                            form={form}
                            style={{ maxWidth: "100%" }}
                            onFinish={onFinish}
                            autoComplete="on"
                            className={styles.form}
                            disabled={!isConnected}
                        >
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter Main Photo"
                                    }
                                ]}
                                className={styles.formUploadItem}>
                                <Upload
                                    accept="image/*"
                                    listType="picture-circle"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                    customRequest={uploadMainImage}
                                    onRemove={removeMainImage}
                                >
                                    {fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                                    <img
                                        alt="example"
                                        style={{
                                            width: '100%',
                                        }}
                                        src={previewImage}
                                    />
                                </Modal>
                            </Form.Item>
                            <Form.Item
                                label="Business Wallet Address" required
                                name="accountAddress"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input Receiver Wallet Address!"
                                    },
                                    {
                                        pattern: new RegExp(/(\b0x[a-f0-9A-F]{40}\b)/g),
                                        message: "Please input valid Wallet Address!"
                                    }
                                ]}
                                className={styles.formItem}
                            >
                                <Input
                                    placeholder="Enter Receiver Wallet Address"
                                    className={styles.input} disabled
                                />
                            </Form.Item>

                            <Form.Item
                                label="Business Name" required
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input Business Name!"
                                    }
                                ]}
                                className={styles.formItem}
                            >
                                <Input placeholder="Enter Business Name" className={styles.input} />
                            </Form.Item>
                            <Form.Item
                                label="Business Email" required
                                name="email"
                                rules={[
                                    {
                                        type: "email",
                                        message: "The input is not valid Email!"
                                    },
                                    {
                                        required: true,
                                        message: "Please input Business Email!"
                                    }
                                ]}
                                className={styles.formItem}
                            >
                                <Input placeholder="Enter Business Email" className={styles.input} />
                            </Form.Item>
                            <div className={styles.buttonsContainer}>
                                <Form.Item className={styles.buttonCancel}>
                                    {/* <Button type="primary" onClick={onClose} className={styles.button}>
                                        Cancel
                                    </Button> */}
                                    <CustomButton type="Gradient" text="Cancel" onClickHandler={onClose} />

                                </Form.Item>
                                <Form.Item className={styles.buttonRegister}>
                                    {/* <Button type="primary" htmlType="submit" className={styles.button}>
                                        Register
                                    </Button> */}
                                    <CustomButton type="Gradient" text="Register" onClickHandler={() => { }} htmlType="submit" />
                                </Form.Item>

                            </div>
                        </Form>
                    </Spin>
                </div>}

            </div>
        </Modal>
    )
}

export default RegisterModal