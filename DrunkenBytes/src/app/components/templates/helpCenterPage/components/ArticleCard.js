import React from 'react'
import styles from "../stylesheets/articleCard.module.css";
import Link from "next/link";

const ArticleCard = (props) => {
    function truncateText(text) {
        if (text.length <= 200) {
          return text;
        } else {
          return text.substr(0, 200) + "...";
        }
      }
    return (
        <Link className={styles.articleCard} href={`/articles/${props.url}`}>
            <img className={styles.icon} src={props.image}></img>
            <h4 className={styles.heading}>{props.title}</h4>
            <p className={styles.paragraph}>{truncateText(props.description)}</p>
        </Link>
    )
}

export default ArticleCard