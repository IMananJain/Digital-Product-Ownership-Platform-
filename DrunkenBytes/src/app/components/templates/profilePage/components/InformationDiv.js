import React from 'react'
import styles from "../stylesheets/informationDiv.module.css";
import Link from 'next/link';

const InformationDiv = (props) => {
  return (
    <div className={styles.mainDiv}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.content}>{props.content}</p>
        {
            props.hasLink && <Link href={props.link} className={styles.link}>{props.linkContent}</Link>
        }
    </div>
  )
}

export default InformationDiv