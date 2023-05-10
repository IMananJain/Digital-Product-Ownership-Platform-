import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import WalletPage from '@/app/components/templates/walletPage/WalletPage';

const Wallet = props => {
  return (
    <DefaultLayout>
      <WalletPage/>
    </DefaultLayout>
  );
};

export default Wallet;