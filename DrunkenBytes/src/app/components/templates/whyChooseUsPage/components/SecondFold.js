import React from "react";
import styles from "../stylesheets/secondFold.module.css";


const SecondFold = props => {
  return (
    <div className={styles.secondFold}>
      {[
        {
          src: "/images/easy-to-use.png",
          alt: "transparency",
          heading: "Transparency ",
          paragraph: "We believe in being transparent with our clients throughout the entire project lifecycle. We provide regular updates and communicate clearly and honestly about the progress of your project."
        },
        {
          src: "/images/transferable.png",
          alt: "customization",
          heading: "Customization",
          paragraph: "Drunken Bytes understands that every business has unique needs and requirements, and therefore offers tailored solutions that are customized to meet the specific needs of each client."
        },
        {
          src: "/images/innovative.png",
          alt: "innovative",
          heading: "Innovative",
          paragraph: "We are constantly pushing the boundaries of what is possible in the blockchain and NFT space. We love taking on new challenges and coming up with innovative solutions to complex problems."
        },
        {
          src: "/images/cost-effective.png",
          alt: "competitive-pricing",
          heading: "Competitive Pricing",
          paragraph: "We offer competitive pricing for our services, without sacrificing quality. We believe that our clients should get the best value for their money, and we work hard to ensure that our prices are fair and reasonable."
        },
        {
          src: "/images/customer-friendly.png",
          alt: "Expertise ",
          heading: "Expertise ",
          paragraph: "Our team has years of experience in the blockchain and NFT space, and we are constantly staying up-to-date with the latest trends and technologies. We have a deep understanding of the industry, and we are confident that we can help you achieve your goals."
        },
        {
          src: "/images/customer-support.png",
          alt: "customer-service",
          heading: "Customer Service",
          paragraph: "At Drunken Bytes, we believe that great customer service is key to building lasting relationships with our clients. We are always available to answer your questions and address your concerns, and we work closely with you to ensure that you are satisfied with the final product."
        }
      ].map((data, idx)=>{
        return <div className={styles.containerDiv} key={idx}>
        <img src={data.src} alt={data.alt}/>
        <h2>{data.heading}</h2>
        <p>{data.paragraph}</p>
      </div>
      })}
    </div>
  );
};

export default SecondFold;
