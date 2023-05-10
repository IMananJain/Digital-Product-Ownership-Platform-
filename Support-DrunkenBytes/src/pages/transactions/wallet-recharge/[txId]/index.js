import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import WalletRechargeTransactionSinglePage from "@/app/components/templates/walletRechargeTransactionSinglePage/WalletRechargeTransactionSinglePage";

const WalletTransaction = (props) => {
  return (
    <DefaultLayout>
      <WalletRechargeTransactionSinglePage txId={props.txId} />
    </DefaultLayout>
  );
};

export default WalletTransaction;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          txId: "0xa046091545e6daaa542e80e86fe7798a2e349da98628706e42ccd56259eca762",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      txId: params.txId,
    },
  };
}
