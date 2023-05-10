import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import AboutPage from '@/app/components/templates/aboutPage/AboutPage';
import baseURL from "@/app/constants/baseURL";
const About = props => {
  return (
    <DefaultLayout>
      <AboutPage businessServed={props.businessServed} nftsCreated={props.nftsCreated} netTransactionValue={props.netTransactionValue}/>
    </DefaultLayout>
  );
};

export default About;


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
    const performance = await fetch(
      `${baseURL}/admin-dashboard/get-performance-data`,
      config
    );
    const performanceData = await performance.json();
    return {
      props: {
        businessServed: performanceData.data.businessServed,
        nftsCreated: performanceData.data.nftsCreated,
        netTransactionValue: `${performanceData.data.netTransactionValue}`,
      },
      revalidate: 60
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        businessServed: "N/A",
        nftsCreated: "N/A",
        netTransactionValue: "N/A",
      },
      revalidate: 60
    };
  }
}
