import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import WalletRechargeTransactionPage from "@/app/components/templates/walletRechargeTransactionPage/WalletRechargeTransactionPage";

const WalletRechargeTransaction = () => {
  return (
    <DefaultLayout>
      <WalletRechargeTransactionPage/>
    </DefaultLayout>
  );
};

export default WalletRechargeTransaction;