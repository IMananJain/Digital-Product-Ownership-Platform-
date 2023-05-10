import React from "react";
import styles from "../stylesheets/pricingText.module.css";

const PricingText = () => {
  return (
    <div className={styles.pricingText}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Wallet</h2>
        <p className={styles.subParagraph}>
          When you create an account with Drunken Bytes, you are given a wallet with some free credits worth 0.001 ETH. These
          credits can be used to generate Product and Credential NFT's. However, once you've used up your free credits, you'll
          need to add more funds to your wallet to continue using the service.
        </p>
        <p className={styles.subParagraph}>
          To add funds to your wallet, you can simply click on the "Add Funds" button within your account dashboard. This will
          take you to a secure payment portal where you can choose to add any amount of ETH to your wallet. Once you've added
          funds to your wallet, you can use them to generate as many Product and Credential NFT's as you need.
        </p>
        <p className={styles.subParagraph}>
          The wallet feature is designed to provide a convenient and secure way for users to manage their funds on the platform.
          It also helps to streamline the process of generating Product and Credential NFT's by keeping everything in one place.
        </p>
        <p className={styles.subParagraph}>
          Overall, the wallet feature of Drunken Bytes makes it easy and convenient to generate Product and Credential NFT's.
          With a simple payment process and a transparent record of all your transactions, you can be confident in using this
          service to protect your valuable products and provide added value to your customers.
        </p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.heading}>NFT Pricing</h2>
        <p className={styles.subParagraph}>
          Drunken Bytes uses a dynamic pricing model for Product and Credential NFT's based on the current market conditions of
          the blockchain network. The price of generating an Product and Credential NFT's can fluctuate depending on the demand
          and congestion of the blockchain network.
        </p>
        <p className={styles.subParagraph}>
          When a user creates a Product and Credential NFT's, Drunken Bytes calculates the cost of the transaction and displays
          it to the user before they confirm the transaction. The cost is based on the current gas fees of the network, which are
          charged by the miners who process the transaction.
        </p>
        <p className={styles.subParagraph}>
          In addition to the gas fees, Drunken Bytes charges a 5% commission on the total cost of generating the Product and
          Credential NFT's. This commission helps support the ongoing development and maintenance of the Drunken Bytes platform.
        </p>
        <p className={styles.subParagraph}>
          To make it easier for users to generate NFT's, Drunken Bytes provides a wallet feature that allows users to store and
          manage their cryptocurrency funds. Users are given a wallet with a certain amount of free credits, currently worth
          0.001ETH, that they can use to generate a limited number of Product and Credential NFT's. After using the free credits,
          users need to add funds to their wallet to generate additional Product and Credential NFT's.
        </p>
        <p className={styles.subParagraph}>
          Overall, the dynamic pricing model of Drunken Bytes ensures that users are charged a fair price for generating Product
          and Credential NFT's, while also providing transparency and flexibility to adapt to the constantly changing market
          conditions of the blockchain network.
        </p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.heading}>Drunken Bytes Commission</h2>
        <p className={styles.subParagraph}>
          When you generate an Product and Credential NFT's, we charge a 5% commission on the total cost of generating the NFT.
        </p>
        <p className={styles.subParagraph}>
          This helps us cover the costs of running our platform and providing you with top-notch service and support.
        </p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.heading}>Example Pricing</h2>
        <p className={styles.subParagraph}>
          Here are a few examples of what the total cost might be to generate a Product and Credential NFT on Drunken Bytes,
          including the cost of gas fees and our 5% commission fee:
        </p>
        <p className={styles.subParagraph}>
          If the total transaction cost is <strong>0.00053495378597172 ETH</strong>, the total cost would be
          <strong>0.00056170147 ETH</strong>.
        </p>
        <p className={styles.subParagraph}>Please note that these prices are for illustration purposes only and are subject to
          change based on the current network congestion and gas fees.</p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.heading}>Payment Options</h2>
        <p className={styles.subParagraph}>
          Currently we are not accepting payment in GoerliETH. You can transfer GoerliETH from any supported wallet to the drunken
          bytes wallet.
        </p>
      </div>
      <strong><p>If you have any questions about our pricing or payment options, please don't hesitate to contact us. Our customer
        support team is always available to assist you.</p></strong>
    </div>
  );
};

export default PricingText;
