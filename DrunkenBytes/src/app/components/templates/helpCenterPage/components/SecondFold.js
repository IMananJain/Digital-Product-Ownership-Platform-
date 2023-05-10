import React, { useState } from "react";
import styles from "../stylesheets/secondFold.module.css";
import ArticleCard from "./ArticleCard";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spin } from "antd";

const SecondFold = (props) => {
  const [page, setPage] = useState(2);
  const [pageSize, setPageSize] = useState(9);
  const [articlesData, setArticlesData] = useState(props.articlesData);
  const { error, sendRequest, isLoading } = useHttpClient();
  const [hasMore, setHasMore] = useState(pageSize < props.totalArticles);

  const fetchArticles = async () => {
    const result = await sendRequest(
      `/article/get-articles?page=${page}&size=${pageSize}`
    );
    setHasMore(page * pageSize < props.totalArticles);
    setPage((prevPage) => prevPage + 1);
    setArticlesData([...articlesData, ...result.articles]);
  };

  return (
    <div className={styles.secondFold}>
      <h2 className={styles.heading}>Articles</h2>
      <InfiniteScroll
        className={styles.infiniteScrollDiv}
        dataLength={articlesData.length} //This is important field to render the next data
        next={fetchArticles}
        hasMore={hasMore}
        loader={<Spin tip="Fetching More Articles..." size="large" />}
        endMessage={
          <p style={{ textAlign: "center" }} className={styles.endMessage}>
            <b>
              {props.totalArticles === 0
                ? "No articles found."
                : "No more articles."}
            </b>
          </p>
        }
      >
        <div className={styles.articlesDiv}>
          {articlesData.map((data, idx) => {
            return (
              <ArticleCard
                key={idx}
                image={data.image}
                title={data.title}
                url={data.url}
                description={data.description}
              />
            );
          })}
        </div>
      </InfiniteScroll>
      {/* <div className={styles.articlesDiv}>
        {articlesData.map((data, idx) => {
          return (
            <ArticleCard
              key={idx}
              image={data.image}
              title={data.title}
              url={data.url}
              description={data.description}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default SecondFold;
