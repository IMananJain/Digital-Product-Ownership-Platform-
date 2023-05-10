import React from "react";
import styles from "../stylesheets/messageDisplay.module.css";
import { Avatar } from "antd";
import Link from "next/link";

const MessageDisplay = props => {
  const ColorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
  let style;
  if (props.isRead) style = `${styles.mainDiv} ${styles.read}`;
  else style = `${styles.mainDiv}`;
  return (
    <Link href={`/tickets/${props.id}`} className={style}>
      <div className={styles.insideDiv}>
        <Avatar
          style={{
            backgroundColor:
              ColorList[Math.floor(Math.random() * ColorList.length)],
            verticalAlign: "middle"
          }}
          className={styles.avatar}
        >
          {props.messageBy?.charAt(0).toUpperCase()}
        </Avatar>
        <div className={styles.textDiv}>
          <p>
            {props.messageBy && props.messageBy}
          </p>
          <span>
            {props.subject}
          </span>
        </div>
      </div>
      <p className={styles.date}>
        {new Date(props.date).toDateString()}
      </p>
    </Link>
  );
};

export default MessageDisplay;
