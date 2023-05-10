import React, { useState, useEffect } from "react";
import styles from "../stylesheets/secondFold.module.css";
import dynamic from "next/dynamic";

const SecondFold = (props) => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    setInitialized(true);
  }, []);
  let EditorParser = dynamic(
    () => import("@/app/components/elements/EditorParser"),
    {
      ssr: false,
    }
  );
  return (
    <div className={styles.secondFold}>
      {initialized && <EditorParser data={props.blogData.content} />}
    </div>
  );
};

export default SecondFold;
