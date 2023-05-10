import React, { useState, useEffect } from "react";
import styles from "../stylesheets/secondFold.module.css";
import dynamic from "next/dynamic";
let EditorParser = dynamic(
  () => import("@/app/components/elements/EditorParser"),
  { ssr: false }
);

const SecondFold = (props) => {
  const [initialized, setInitialized] = useState(false);
  
  useEffect(() => {
    setInitialized(true);
  }, []);

  return (
    <div className={styles.secondFold}>
      {initialized && (
        <EditorParser data={JSON.parse(props.articleData.content)} />
      )}
    </div>
  );
};

export default SecondFold;
