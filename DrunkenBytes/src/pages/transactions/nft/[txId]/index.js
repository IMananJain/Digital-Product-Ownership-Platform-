import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import NftTransactionsSinglePage from '@/app/components/templates/nftTransactionsSinglePage/NftTransactionsSinglePage';

const NftTransaction = (props) => {
  return (
    <DefaultLayout>
      <NftTransactionsSinglePage txId={props.txId}/>
    </DefaultLayout>
  );
};

export default NftTransaction;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { txId: "0xff06018521475d2874ba0053a1b7bf1f045d840f742f002f402799ef76c35dae" } }
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      txId  : params.txId
    },
  };
}

