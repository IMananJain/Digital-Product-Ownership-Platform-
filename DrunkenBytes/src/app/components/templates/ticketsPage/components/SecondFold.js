import styles from "../stylesheets/secondFold.module.css";
import TicketTable from "./TicketTable";
import React, { useState } from "react";
import CustomButton from "@/app/components/elements/CustomButton";
import { useRouter } from "next/router";

const SecondFold = (props) => {
  const [clearFilters, setClearFilter] = useState(false);
  const router = useRouter();

  return (
    <div className={`${styles.secondFold} tab-pane`}>
      <div className={styles.buttonDiv}>
        <CustomButton
          type="Gradient"
          text="+ &nbsp; Create New Ticket"
          onClick={() => router.push("/contact-us")}
        />
        <CustomButton
          type="Gradient"
          text="Clear All Filter"
          onClickHandler={() => {
            setClearFilter(!clearFilters);
          }}
        />
      </div>
      <TicketTable clearFilters={clearFilters} />
    </div>
  );
};

export default SecondFold;
