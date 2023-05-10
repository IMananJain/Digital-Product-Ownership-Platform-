import React from "react";
import styles from "../stylesheets/sideNavigation.module.css";
import {Link} from "react-scroll";
import {CaretRightOutlined} from "@ant-design/icons";

const SecondFold = props => {
  return (
      <div className={styles.menu}>
        <div className={styles.menuDiv}>
          <h2 className={styles.menuHeading}>Getting Started</h2>
          <Link to="api-access-key" spy={true} smooth={true} offset={-100} duration={500} className={styles.menuItem}>
            API Access Key <CaretRightOutlined className={styles.icon}/>
          </Link>
          <Link to="api-error" spy={true} smooth={true} offset={-100} duration={500} className={styles.menuItem}>
            API Error <CaretRightOutlined className={styles.icon}/>
          </Link>
        </div>
        <div className={styles.menuDiv}>
          <h2 className={styles.menuHeading}>API Endpoints</h2>
          <Link to="create-nft" spy={true} smooth={true} offset={-100} duration={500} className={styles.menuItem}>
            Create NFT <CaretRightOutlined className={styles.icon}/>
          </Link>
        </div>
        <div className={styles.menuDiv}>
          <h2 className={styles.menuHeading}>Code Examples</h2>
          <Link to="php" spy={true} smooth={true} offset={-100} duration={500} className={styles.menuItem}>
            PHP <CaretRightOutlined className={styles.icon}/>
          </Link>
          <Link to="python" spy={true} smooth={true} offset={-100} duration={500} className={styles.menuItem}>
            Python <CaretRightOutlined className={styles.icon}/>
          </Link>
          <Link to="nodejs" spy={true} smooth={true} offset={-100} duration={500} className={styles.menuItem}>
            Nodejs <CaretRightOutlined className={styles.icon}/>
          </Link>
          <Link to="jquery" spy={true} smooth={true} offset={-100} duration={500} className={styles.menuItem}>
            jQuery <CaretRightOutlined className={styles.icon}/>
          </Link>
          <Link to="go" spy={true} smooth={true} offset={-100} duration={500} className={styles.menuItem}>
            Go <CaretRightOutlined className={styles.icon}/>
          </Link>
          <Link to="ruby" spy={true} smooth={true} offset={-100} duration={500} className={styles.menuItem}>
            Ruby <CaretRightOutlined className={styles.icon}/>
          </Link>
        </div>
      </div>
  );
};

export default SecondFold;
