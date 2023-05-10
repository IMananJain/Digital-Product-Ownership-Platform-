import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import Dashboard from "@/app/components/templates/dashboardPage/DashboardPage";
import baseURL from "@/app/constants/baseURL";

const Home = props => {
  return (
    <DefaultLayout>
      <Dashboard props={props} />
    </DefaultLayout>
  );
};

export default Home;
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
    const gas = await fetch(
      `https://api.owlracle.info/v3/goerli/gas?apikey=bf6e75b6686345f982f91bfedf1eb244&feeinusd=false&eip1559=false`,
      config
    );
    const gasData = await gas.json();
    const news = await fetch(
      "https://newsdata.io/api/1/news?apikey=pub_1687132c8ca395f4ec465de59f74769d975ae&q=technology%20blockchain%20AND%20nft&language=en"
    );
    const newsData = await news.json();
    const gasHistory = await fetch(
      "https://api.owlracle.info/v3/goerli/history?apikey=bf6e75b6686345f982f91bfedf1eb244&candles=10",
      config
    );
    const gasHistoryData = await gasHistory.json();
    const chartData = [["time", "gas price", "open", "close", "high"]];
    for (let i = 9; i >= 0; i--) {
      const data = gasHistoryData[i];
      const dataObject = [
        new Date(data.timestamp).toLocaleTimeString(),
        data.gasPrice.low,
        data.gasPrice.open,
        data.gasPrice.close,
        data.gasPrice.high
      ];
      chartData.push(dataObject);
    }
    return {
      props: {
        businessServed: performanceData.data.businessServed,
        nftsCreated: performanceData.data.nftsCreated,
        netTransactionValue: `${performanceData.data.netTransactionValue}`,
        chartData: chartData,
        gasPrice: `${Number(gasData.speeds[3].gasPrice).toFixed(2)} gwei`,
        avgBlockTime: `${Number(gasData.avgTime).toFixed(2)} min`,
        gasLimit: 30000000,
        newsData: newsData.results,
        nextNewsPage: newsData.nextPage
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
        chartData: [],
        gasPrice: "N/A",
        avgBlockTime: "N/A",
        gasLimit: "N/A",
        messagesData: []
      },
      revalidate: 60
    };
  }
}
