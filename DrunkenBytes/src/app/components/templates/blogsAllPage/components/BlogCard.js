import React from "react";
import styles from "../stylesheets/blogCard.module.css";
import Link from "next/link";

const BlogCard = (props) => {
  const formatDate = (utcTimestamp) => {
    const date = new Date(utcTimestamp);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <Link className={styles.blogCard} href={`/blogs/${props.url}`}>
      <img className={styles.icon} src={props.image}></img>
      <div className={styles.blogCardContainer}>
        <p className={styles.paragraph}>{formatDate(props.updatedAt)}</p>
        <h4 className={styles.heading}>{props.title}</h4>
      </div>
    </Link>
  );
};

export default BlogCard;
