import React, { useState } from "react";
import styles from "../stylesheets/secondFold.module.css";
import CustomButton from "@/app/components/elements/CustomButton";
import APIKeyTable from "./APIKeyTable";
import CreateAPIModal from "./CreateAPIModal";

const SecondFold = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [clearFilters, setClearFilter] = useState(false);

  return (
    <div className={styles.secondFold}>
    <div className={styles.buttonDiv}>
      <CreateAPIModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <CustomButton
        type="Gradient"
        text="+ &nbsp; Create New API Key"
        onClick={() => setModalOpen(true)}
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
        <APIKeyTable modalOpen={modalOpen} setModalOpen={setModalOpen} clearFilters={clearFilters}/>
      </div>
    </div>
  );
};

export default SecondFold;
