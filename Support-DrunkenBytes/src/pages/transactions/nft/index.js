import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import NftTransactionsPage from "@/app/components/templates/nftTransactionsPage/NftTransactionsPage";

const NftTransaction = () => {
  return (
    <DefaultLayout>
      <NftTransactionsPage/>
    </DefaultLayout>
  );
};

export default NftTransaction;