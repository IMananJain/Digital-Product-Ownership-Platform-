import React from 'react'
import styles from "../stylesheets/performanceDisplay.module.css";

const PerformanceDisplay = (props) => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.subContainerOne} style={{backgroundColor:props.backgroundColor}}>
            <img src={props.src} alt="icon" />
        </div>
        <div className={styles.subContainerTwo}>
            <p>{props.heading}</p>
            <span>{props.value}</span>
        </div>
    </div>
  )
}

export default PerformanceDisplay