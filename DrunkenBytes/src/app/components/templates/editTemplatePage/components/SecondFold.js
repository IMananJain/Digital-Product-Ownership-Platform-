import React, { useState, useEffect } from "react";
import styles from "../stylesheets/secondFold.module.css";
import { Button, Form, Input, Spin, Select, notification } from "antd";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons"
import { useRouter } from 'next/router'

const SecondFold = props => {
  const router = useRouter()
  const { error, sendRequest, clearError, isLoading } = useHttpClient();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [traits, setTraits] = useState([{ key: '', value: '' }]);
  const [nftType, setNftType] = useState('product');

  useEffect(()=>{
    const fetchData = async () => {
      const id = props.templateId;
      const result = await sendRequest(`/template/get-template/${id}`);
      form.setFieldsValue({ productName: result.template.name, nftType: result.template.nftType });
      setTraits(result.template.traits);
      setLoading(false);
    }
    fetchData();
  },[])

  // Handle form input change
  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...traits];
    list[index][name] = value;
    setTraits(list);
  };

  // Handle add button click
  const handleAddField = () => {
    // Add new empty key-value pair to form data state
    setTraits([...traits, { key: '', value: '' }]);
  };

  // Handle remove button click
  const handleRemoveField = (index) => {
    // Remove key-value pair from form data state at specified index
    const list = [...traits];
    list.splice(index, 1);
    form.setFieldsValue({ [`value-${index}`]: '', [`key-${index}`]: '' });
    setTraits(list);
  };

  const onFinish = async values => {
    try {
      const result = await sendRequest(
        `/template/${props.templateId}`,
        "PUT",
        JSON.stringify({
          name: values.productName,
          nftType,
          traits
        })
      );
      if (!error) {
        notification.success({
          message: "Success",
          description: "Template Updated Successfully",
          placement: "top",
          className: "error-notification"
        });
      // form.resetFields();
      // setTraits([{ key: '', value: '' }]);
      setInterval(await router.push("/template"),2000);
      }
    } catch (err) { }
  };
  return (
    <div className={styles.createNft}
      style={{
        backgroundImage:
          "url(" +
          "/images/background/gradient-left-side.png" +
          ")"
      }}
    >
      <div className={styles.loginDiv}>
        <Spin size="large" spinning={isLoading || loading}>
        {!loading && 
          <Form
            scrollToFirstError
            layout="vertical"
            name="basic"
            form={form}
            style={{ maxWidth: "100%" }}
            className="create-nft-form"
            onFinish={onFinish}
            autoComplete="on"
            initialValues={{
              nftType: nftType
            }}
          >
            <Form.Item
              label="Template Name" required
              name="productName"
              rules={[
                {
                  required: true,
                  message: "Please input Template Name!"
                }
              ]}
              className={styles.formItem}
            >
              <Input placeholder="Enter Template Name" className={styles.input} />
            </Form.Item>
            <Form.Item
              label="NFT Type" required
              name="nftType"
              className={styles.formItem}
            >
              <Select
                // defaultValue={nftType}
                className={styles.input}
                onChange={(value) => setNftType(value)}
                options={[
                  {
                    value: 'product',
                    label: 'Product NFT',
                  },
                  {
                    value: 'document',
                    label: 'Document NFT',
                  },
                  {
                    value: 'other',
                    label: 'Other',
                  },
                ]}
              />
            </Form.Item>
            <div className={styles.traitContainer}>
              <div className={styles.titleContainer}>
                <h2>Traits</h2>
                <Button type="primary" onClick={() => handleAddField()} className={styles.deleteButton}>
                  <PlusOutlined style={{ color: "black" }} size="large" />
                </Button>
              </div>
              {
                traits.map((field, index) => {
                  return <div className={styles.formItemContainer}>
                    <Form.Item
                      label="Trait Type" required
                      name={`key-${index}`}
                      initialValue={field.key}
                      rules={[
                        {
                          required: true,
                          message: "Please input Trait Type!"
                        }
                      ]}
                    >
                      <Input placeholder="Enter Trait Type" className={styles.input} id={`key-${index}`}
                        name="key"
                        value={field.key} onChange={(e) => handleInputChange(e, index)} />
                    </Form.Item>
                    <Form.Item
                      label="Trait Value"
                      name={`value-${index}`}
                      className={styles.formItem}
                      initialValue={field.value}
                      tooltip="Only Enter Default Values"
                    >
                      <Input placeholder="Enter Default Trait Value" className={styles.input} id={`value-${index}`}
                        name="value"
                        value={field.value}
                        onChange={(e) => handleInputChange(e, index)} />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" onClick={() => handleRemoveField(index)} className={styles.deleteButton}>
                        <DeleteOutlined style={{ color: "black" }} />
                      </Button>
                    </Form.Item>
                  </div>
                })
              }
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.button}>
                Update Template
              </Button>
            </Form.Item>
          </Form>
        }
        </Spin>
      </div>
    </div>
  );
};

export default SecondFold;
