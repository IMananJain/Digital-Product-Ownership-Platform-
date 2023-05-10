import React, { useState } from "react";
import styles from "../stylesheets/secondFold.module.css";
import NftTable from "./NftTable";
import CustomButton from "@/app/components/elements/CustomButton";

const SecondFold = () => {
  const [clearFilters, setClearFilter] = useState(false);
  return (
    <div className={`${styles.secondFold} tab-pane`}>
      <div className={styles.clearFilterButton}>
        <CustomButton
          type="Gradient"
          text="Clear All Filter"
          onClickHandler={() => {
            setClearFilter(!clearFilters);
          }}
        />
      </div>
      <NftTable clearFilters={clearFilters} />
    </div>
  );
};

export default SecondFold;
