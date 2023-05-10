import React, {useEffect} from "react";
import styles from "./dashboardPage.module.css";
import PerformanceDisplay from "./components/PerformanceDisplay";
import { useContext, useState } from "react";
import Chart from "react-google-charts";
import AppContext from "@/app/context/AppContext";
import MessageDisplay from "./components/MessageDisplay";
import NewsDisplay from "./components/NewsDisplay";
import { ReloadOutlined } from "@ant-design/icons";
import Head from "next/head";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import OverflowScrolling from "react-overflow-scrolling";

const Dashboard = props => {
  const { error, sendRequest, isLoading } = useHttpClient();
  const { loggedInDetails } = useContext(AppContext);
  const [messagesData, setMessagesData] = useState([]);
  const [messagesPage, setMessagesPage] = useState(2);
  const [newsData, setNewsData] = useState(props.props.newsData);
  const [nextNewsPage, setNextNewsPage] = useState(props.props.nextNewsPage);
  const [loadMoreDisabled, setLoadMoreDisabled] = useState(false);

  useEffect(()=>{
    const getMessagesByRole = async() => {
      const tickets = await sendRequest(`/ticket/get-all-tickets?sort="{}"&page=1&size=10`);
      if(tickets.totalTickets <= 10){
        setLoadMoreDisabled(true);
      }
      setMessagesData([...tickets.tickets]);
    }
    getMessagesByRole();
  },[])

  const loadMoreMessagesHandler = async () => {
    const messages = await sendRequest(
      `/ticket/get-all-tickets?sort="{}"&page=${messagesPage}&size=10`
    );
    if (tickets.totalTickets < messagesPage*10) {
      setLoadMoreDisabled(true);
    }
    setMessagesData([...messagesData, ...tickets.tickets]);
    setMessagesPage(messagesPage + 1);
  };

  const refreshMessagesHandler = async () => {
    const tickets = await sendRequest(`/ticket/get-all-tickets?sort="{}"&page=1&size=10`);
    if(tickets.totalTickets <= 10){
      setLoadMoreDisabled(true);
    }
    setMessagesData([...tickets.tickets]);
  };

  const loadMoreNewsHandler = async () => {
    const news = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_1687132c8ca395f4ec465de59f74769d975ae&q=technology%20blockchain%20AND%20nft&language=en&page=${nextNewsPage}`
    );
    const newNews = await news.json();
    setNewsData([...newNews.results]);
    setNextNewsPage(newNews.nextPage);
  };



  return (
    <div className={styles.dashboard}>
      <Head>
        <title>Support Dashboard | Drunken Bytes</title>
        <meta name="description" content="Welcome to the Drunken Bytes Support Dashboard, the go-to destination for Drunken Bytes support users. Access resources, log support tickets, and stay up-to-date on product announcements and company news. Join the Drunken Bytes community today." />
      </Head>
      <div className={styles.performanceDiv}>
        <span>Business Performance</span>
        <hr />
        <div className={styles.performanceContainer}>
          {[
            {
              src: "/images/business-served-icon.png",
              heading: "Business Served",
              value: props.props.businessServed,
              backgroundColor: "#f6ba28"
            },
            {
              src: "/images/nfts-created.png",
              heading: "NFT's Created",
              value: `${props.props.nftsCreated}`,
              backgroundColor: "#dd3d63"
            },
            {
              src: "/images/net-transaction-value-icon.png",
              heading: "Net Transaction Value",
              value: `${Number(props.props.netTransactionValue).toFixed(
                5
              )} ETH`,
              backgroundColor: "#55ce8e"
            }
          ].map((data, idx) => {
            return (
              <PerformanceDisplay
                key={idx}
                src={data.src}
                heading={data.heading}
                value={data.value}
                backgroundColor={data.backgroundColor}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.middleContainer}>
        {loggedInDetails.role === "EDITOR"
          && <div className={styles.middleDiv}>
              <span>
                Latest News{" "}
                <ReloadOutlined
                  className={styles.reloadIcon}
                  onClick={loadMoreNewsHandler}
                />
              </span>
              <hr />
              <div
                className={`${styles.middleDivContainer} ${styles.newsContainer}`}
              >
                <OverflowScrolling className={styles.overflowScrolling}>
                  {newsData.map((data, idx) => {
                    return (
                      <NewsDisplay
                        key={idx}
                        title={data.title}
                        link={data.link}
                      />
                    );
                  })}
                </OverflowScrolling>
              </div>
            </div>
          }
          {(loggedInDetails.role === "ADMIN" || loggedInDetails.role === "SUPPORT")
            && <div className={styles.middleDiv}>
              <span>Goerli Stats</span>
              <hr />
              <div className={styles.middleDivContainer}>
                <div className={styles.stats}>
                  {[
                    {
                      name: "Gas Price",
                      value: props.props.gasPrice
                    },
                    {
                      name: "Avg Block Time",
                      value: props.props.avgBlockTime
                    },
                    { name: "Gas Limit", value: `${props.props.gasLimit}` }
                  ].map((data, idx) => {
                    return (
                      <div className={styles.statsDiv} key={idx}>
                        <p>
                          {data.name}
                        </p>
                        <span>
                          {data.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <Chart
                  width={"100%"}
                  height={400}
                  chartType="CandlestickChart"
                  loader={<div>Loading Chart</div>}
                  data={props.props.chartData}
                  options={{
                    legend: "none"
                  }}
                  className={styles.chart}
                />
              </div>
            </div>}
        <div className={styles.middleDiv}>
          <span>
            Tickets
            <ReloadOutlined
              className={styles.reloadIcon}
              onClick={refreshMessagesHandler}
            />
          </span>
          <hr />
          <div
            className={`${styles.middleDivContainer} ${styles.messagesContainer}`}
          >
            <OverflowScrolling className={styles.overflowScrolling}>
              {messagesData.map((data, idx) => {
                return (
                  <MessageDisplay
                    key={idx}
                    date={data.dateCreated}
                    messageBy={data.createdBy?.name ?? data.name}
                    subject={data.subject}
                    id={data._id}
                    isRead={data.isSolved}
                  />
                );
              })}
              <button
                onClick={loadMoreMessagesHandler}
                className={styles.loadMoreButton}
                disabled={loadMoreDisabled}
              >
                {loadMoreDisabled
                  ? "No More Tickets"
                  : "Load More Tickets..."}
              </button>
            </OverflowScrolling>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
