import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import TransactionsPage from "@/app/components/templates/transactionsPage/TransactionsPage";

const Transactions = () => {
  return (
    <DefaultLayout>
      <TransactionsPage/>
    </DefaultLayout>
  );
};

export default Transactions;