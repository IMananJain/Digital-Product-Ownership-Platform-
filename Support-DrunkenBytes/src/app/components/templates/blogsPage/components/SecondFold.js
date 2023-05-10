import React, { useState, useEffect, useContext } from "react";
import styles from "../stylesheets/secondFold.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { EditOutlined } from "@ant-design/icons";
import AppContext from "@/app/context/AppContext";

const SecondFold = (props) => {
  const [initialized, setInitialized] = useState(false);
  const { loggedInDetails } = useContext(AppContext);
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
      <div className={styles.editDiv}>
        {loggedInDetails.role === "EDITOR" ||
          (loggedInDetails.role === "ADMIN" && (
            <Link href={`/blogs/edit/${props.blogData.url}`}>
              <EditOutlined className={styles.editIcon} />
            </Link>
          ))}
      </div>
      {initialized && <EditorParser data={props.blogData.content} />}
    </div>
  );
};

export default SecondFold;
