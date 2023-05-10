import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import BlogsAllPage from "../../app/components/templates/blogsAllPage/BlogsAllPage";
import baseURL from "@/app/constants/baseURL";

const HelpCenter = (props) => {
  return (
    <DefaultLayout>
      <BlogsAllPage blogsData={props.blogsData} totalBlogs={props.totalBlogs}/>
    </DefaultLayout>
  );
};

export default HelpCenter;

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
    const blogs = await fetch(
      `${baseURL}/blog/get-blogs?page=1&size=9`,
      config
    );
    const blogsData = await blogs.json();
    return {
      props: {
        blogsData: blogsData.data.blogs,
        totalBlogs: blogsData.data.totalBlogs
      },
      revalidate: 60
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        blogs: [],
        totalBlogs: 0
      },
      revalidate: 10
    };
  }
}