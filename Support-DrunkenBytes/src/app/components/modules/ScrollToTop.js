import styles from "./stylesheets/scrollToTop.module.css";
import React, { useState, useEffect } from "react";
import { UpOutlined, CaretUpOutlined } from "@ant-design/icons";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const changeClass = () => {
    if (window.scrollY >= 30) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeClass);
    return () => window.removeEventListener("scroll", changeClass);
  });
  return (
    <div
      type="button"
      className={isVisible ? styles.scrollToTop : styles.scrollToTopHidden}
      onClick={() => {
        console.log("CLICKED")
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Scroll to Top"
    >
        {/* <UpOutlined className={styles.icon}/> */}
        <CaretUpOutlined className={styles.icon}/>
    </div>
  );
};

export default ScrollToTop;
