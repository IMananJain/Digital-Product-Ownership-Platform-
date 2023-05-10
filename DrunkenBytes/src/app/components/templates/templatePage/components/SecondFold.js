import React, {useState} from "react";
import styles from "../stylesheets/secondFold.module.css";
import TemplateTable from "./TemplateTable";
import CustomButton from "@/app/components/elements/CustomButton";
import { useRouter } from "next/router";

const SecondFold = (props) => {
  const router = useRouter();
  const [clearFilters, setClearFilter] = useState(false);

  return (
    <div className={styles.secondFold}>
      <div className={styles.buttonDiv}>
        <CustomButton
          type="Gradient"
          text="+ &nbsp; Create New Template"
          onClick={() => router.push("/template/create")}
        />
        <CustomButton
          type="Gradient"
          text="Clear All Filter"
          onClickHandler={() => {
            setClearFilter(!clearFilters);
          }}
        />
      </div>
      <div className={`${styles.tableContainer} profile-tabs tab-pane`}>
        <TemplateTable clearFilters={clearFilters} />
      </div>
    </div>
  );
};

export default SecondFold;
