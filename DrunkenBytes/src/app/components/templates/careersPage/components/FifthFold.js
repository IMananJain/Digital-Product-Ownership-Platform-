import React from "react";
import styles from "../stylesheets/fifthFold.module.css";
import { useRouter } from 'next/router'

const FifthFold = () => {
  const router = useRouter();
  return (
    <div className={styles.fifthFold}>
      <div className={styles.textDiv}>
        <img src="/images/icon-quote.png" alt="quote-sign" className={styles.icon}/>
        <p className={styles.quote}>
        Drunken Bytes is one of the most exciting, important companies in the world right now because it's the portal to the new warranty card NFT's. If you're interested in shaping a new business model for creators, this is the team to join.
        </p>
        <div className={styles.titleDiv}>
          <p className={styles.name}>Drunken Bytes</p>
          <p className={styles.title}>CEO and Founder</p>
        </div>
      </div>
      <div className={styles.imageDiv}>
        <img src="/favicon-192x192.png" alt="drunken-bytes-logo" className={styles.image}/>
      </div>
    </div>
  );
};

export default FifthFold;
