import React from "react";
import styles from "../stylesheets/fourthFold.module.css";
import { MailFilled, LinkedinFilled } from "@ant-design/icons"

const FourthFold = () => {
  return (
    <div className={styles.fourthFold}>
      <div className={styles.heading}>Our Leadership Team</div>
      <p className={styles.subParagraph}>
        The Drunken Bytes leadership team is comprised of savvy entrepreneurs and tech industry experts, bringing decades of experience to a global company.
      </p>
      <div className={styles.mainDiv}>
        {[{
          src: "/images/profile/akshat-gadodia.png",
          name: "Akshat Gadodia",
          title: "Co-Founder",
          linkedin: "https://in.linkedin.com/in/akshat-gadodia",
          email: "mailto:akshatgadodia@gmail.com",
        },
        {
          src: "/images/profile/akshita-sharma.png",
          name: "Akshita Sharma",
          title: "Co-Founder",
          linkedin: "https://in.linkedin.com/in/akshita-sharma-a60444220",
          email: "mailto:akshitasharma407@gmail.com",
        },
        {
          src: "/images/profile/manan-jain.jpg",
          name: "Manan Jain",
          title: "Co-Founder",
          linkedin: "https://in.linkedin.com/in/manan-jain-20748a225",
          email: "mailto:mananj0201@gmail.com",
        },
        {
          src: "/images/profile/sushil-kumar-sadhnani.jpg",
          name: "Sushil Kumar Sadhnani",
          title: "Co-Founder",
          linkedin: "https://in.linkedin.com/in/sushil-kumar-sadhnani-1788a0226",
          email: "mailto:sadhnani.sushil@gmail.com",
        }].map((data, idx) => {
          return <div className={styles.personDiv} key={idx}>
            <img src={data.src} alt="person-image" className={styles.personImage} />
            <h3 className={styles.personName}>{data.name}</h3>
            <p className={styles.personTitle}>{data.title}</p>
            <div className={styles.personLinks}>
              <a href={data.email}>
                <MailFilled className={styles.personLinksDiv} />
              </a>
              <a href={data.linkedin}>
                <LinkedinFilled className={styles.personLinksDiv} />
              </a>
            </div>
          </div>
        })}
      </div>
    </div>
  );
};

export default FourthFold;
