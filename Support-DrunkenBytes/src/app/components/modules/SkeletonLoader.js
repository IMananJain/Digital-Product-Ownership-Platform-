import React from "react";
import styles from "./stylesheets/skeletonLoader.module.css";
import { Spin } from "antd";

const SkeletonLoader = () => {
  return (
    <div className={styles.skeletonDiv}>
      <Spin size="large" tip="Fetching your details..." />
    </div>
  );
};
export default SkeletonLoader;
