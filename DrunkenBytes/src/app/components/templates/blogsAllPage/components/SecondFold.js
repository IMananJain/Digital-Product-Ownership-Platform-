import React, { useState } from "react";
import styles from "../stylesheets/secondFold.module.css";
import BlogCard from "./BlogCard";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spin } from "antd";

const SecondFold = (props) => {
  const [page, setPage] = useState(2);
  const [pageSize, setPageSize] = useState(9);
  const [blogsData, setBlogsData] = useState(props.blogsData);
  const { sendRequest } = useHttpClient();
  const [hasMore, setHasMore] = useState(pageSize < props.totalBlogs);

  const fetchBlogs = async () => {
    const result = await sendRequest(
      `/blog/get-blogs?page=${page}&size=${pageSize}`
    );
    setHasMore(page * pageSize < props.totalBlogs);
    setPage((prevPage) => prevPage + 1);
    setBlogsData([...blogsData, ...result.blogs]);
  };

  return (
    <div className={styles.secondFold}>
      <InfiniteScroll
        className={styles.infiniteScrollDiv}
        dataLength={blogsData.length} //This is important field to render the next data
        next={fetchBlogs}
        hasMore={hasMore}
        loader={<Spin tip="Fetching More blogs..." size="large" />}
        endMessage={
          <p style={{ textAlign: "center" }} className={styles.endMessage}>
            <b>
              {props.totalBlogs === 0 ? "No blogs found." : "No more blogs."}
            </b>
          </p>
        }
      >
        <div className={styles.blogsDiv}>
          {blogsData.map((data, idx) => {
            return (
              <BlogCard
                key={idx}
                image={data.image}
                title={data.title}
                url={data.url}
                updatedAt={data.updatedAt}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default SecondFold;
