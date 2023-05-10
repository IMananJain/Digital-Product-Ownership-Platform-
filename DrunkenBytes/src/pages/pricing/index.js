import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import PricingPage from '@/app/components/templates/pricingPage/PricingPage';
import baseURL from "@/app/constants/baseURL";

const Pricing = props => {
  return (
    <DefaultLayout>
      <PricingPage price={props.price}/>
    </DefaultLayout>
  );
};

export default Pricing;

export async function getStaticProps(context) {
  const config = {
    method: "GET",
    body: null,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "include"
  };
  try {
    const price = await fetch(
      `${baseURL}/nft/get-nft-generation-cost`,
      config
    );
    const priceData = await price.json();
    return {
      props: {
        price: priceData.data.transactionCost
      },
      revalidate: 10
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        price: "N/A",
      },
      revalidate: 10
    };
  }
}