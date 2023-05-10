import React from "react";
import styles from "../stylesheets/secondFold.module.css";
import { Collapse } from "antd";

const SecondFold = () => {
  const { Panel } = Collapse;
  return (
    <div className={styles.secondFold}>
      <div className={styles.mainDiv}>
        <Collapse ghost expandIconPosition="end" size="large">
          {[
            {
              header: "What is Drunken Bytes?",
              paragraph:
                "Drunken Bytes is a platform that enables businesses to create NFTs for their physical and digital products, as well as their documents such as certificates and diplomas. NFTs are unique digital assets that are stored on the blockchain, making them immutable, verifiable and secure. With Drunken Bytes, businesses can leverage the power of NFTs to revolutionize their customer experience and trust in their products.",
            },
            {
              header: "How do I create an account on Drunken Bytes?",
              paragraph:
                "To create an account on Drunken Bytes, simply visit our website and click on the Avatar button (present on the top right of the screen). You will be prompted to enter your details and provide some information about your business. Once you submit your registration request, our sales team will review and verify it within 1-2 working days. If your request is approved, you will receive an email with instructions on how to complete your account setup.",
            },
            {
              header:
                "What is the benefit of using NFTs for my business products and documents?",
              paragraph:
                "Using NFTs for your business products and documents can provide a range of benefits, including increased security, transparency, and authenticity. NFTs can also help to build trust and loyalty with customers by providing a verifiable record of ownership and authenticity. Additionally, NFTs can be used to create unique, personalized experiences for customers, such as limited edition products and collectibles.",
            },
            {
              header: "What are NFTs and how do they work?",
              paragraph:
                "NFTs, or non-fungible tokens, are unique digital assets that are stored on the blockchain. Unlike fungible tokens such as cryptocurrencies, NFTs cannot be exchanged for another asset of equal value, making them unique and valuable. NFTs are created by using smart contracts on the blockchain, which enable businesses to verify the authenticity and ownership of their products and documents.",
            },
            {
              header:
                "What should I do if my NFT details are not properly visible on OpenSea?",
              paragraph: `If you encounter this issue, you can try refreshing your NFT metadata by clicking on the three dots on the right side of the NFT image and selecting "Refresh Metadata". Please note that this may take some time. If the issue persists even after refreshing the metadata, we suggest that you raise an issue or generate a ticket to report the problem to our support team. We will do our best to address the issue and provide you with a resolution as soon as possible.`,
            },
            {
              header:
                "Can I create NFTs for both physical and digital products on Drunken Bytes?",
              paragraph:
                "Yes, you can create NFTs for both physical and digital products on Drunken Bytes. Our platform allows you to upload images and other media files for your products, which will be used to create a unique NFT that represents your product on the blockchain.",
            },
            {
              header:
                "What type of documents can I create NFTs for on Drunken Bytes?",
              paragraph:
                "You can create NFTs for a wide range of documents on Drunken Bytes, including certificates, diplomas, licenses, contracts, and more. By creating an NFT for your document, you can verify its authenticity and ownership, making it more secure and trustworthy.",
            },
            {
              header: "What is the process for creating NFTs on Drunken Bytes?",
              paragraph:
                "To create an NFT on Drunken Bytes, you can either fill out a form on our website or use our API-based solution to create an NFT directly in your existing application. Once you have provided the necessary information and media files for your product or document, our platform will generate a unique NFT that is stored on the blockchain.",
            },
            {
              header:
                "Will Drunken Bytes integrate with my current tech stack?",
              paragraph:
                "Drunken Bytes provides an API-based solution that can be integrated with your current tech stack. Our API documentation includes detailed instructions on how to implement our NFT-based solutions into your existing applications. If you have any questions or concerns about integrating with our platform, please contact our support team at support@drunkenbytes.com.",
            },
            {
              header: "How do I recharge my wallet on Drunken Bytes?",
              paragraph:
                "To recharge your wallet on Drunken Bytes, simply log in to your account and click on the Avatar button and then select wallet option. You can then choose the amount of ETH you want to add to your wallet and complete the transaction using your preferred payment method.",
            },
            {
              header:
                "How is the price for generating an NFT calculated on Drunken Bytes?",
              paragraph:
                "The price for generating an NFT on Drunken Bytes is based on the gas price of the blockchain at the time of generation, as well as a 5% commission fee charged by our platform on the total transaction cost.",
            },
            {
              header: "How secure is my data on Drunken Bytes?",
              paragraph:
                "We take the security and privacy of your data very seriously on Drunken Bytes. Our platform uses advanced encryption and security measures to protect your data and ensure that it is not compromised. Additionally, our smart contracts and blockchain technology provide an extra layer of security and immutability for your NFTs and documents.",
            },
            {
              header: "How long does it take to mint an NFT on Drunken Bytes?",
              paragraph:
                "The time it takes to mint an NFT on Drunken Bytes depends on several factors, such as the size and complexity of the file, as well as network congestion. However, in general, it should only take a few minutes to mint an NFT on our platform.",
            },
            {
              header: "Can I cancel a transaction after creating an NFT?",
              paragraph:
                "Once an NFT is created and the transaction is confirmed on the blockchain, it cannot be canceled. However, you can transfer the ownership of the NFT to another wallet address if you have enabled NFT transfer during creation.",
            },
            {
              header:
                "How can I contact Drunken Bytes customer support if I have any issues or questions?",
              paragraph:
                "You can contact Drunken Bytes customer support by sending an email to our support team at support@drunkenbytes.com or by filling out the contact form on our website.",
            },
            {
              header:
                "What is the process for verifying my business during registration?",
              paragraph:
                "When you register your business on Drunken Bytes, our sales team will verify your information to ensure that your business is legitimate and not fraudulent. This may involve requesting additional documentation or information from you.",
            },
            {
              header:
                "How long does it take for my business registration to be approved on Drunken Bytes?",
              paragraph:
                "The approval process for business registration typically takes 1-2 working days. Our sales team will contact you if additional information or documentation is required.",
            },
            {
              header: "Can I cancel a registration request on Drunken Bytes?",
              paragraph:
                "Yes, you can cancel a registration request on Drunken Bytes by sending an email to our support team at support@drunkenbytes.com. However, if your request has already been processed, it cannot be canceled.",
            },
            {
              header:
                "How can I learn more about NFTs and blockchain technology?",
              paragraph:
                "If you want to learn more about NFTs and blockchain technology, there are many resources available online, including educational courses, forums, and blogs. You can also follow us on social media for updates and insights into the latest developments in the field.",
            },
          ].map((data, idx) => {
            return (
              <Panel header={data.header} key={idx}>
                <p>{data.paragraph}</p>
              </Panel>
            );
          })}
        </Collapse>
      </div>
    </div>
  );
};

export default SecondFold;
