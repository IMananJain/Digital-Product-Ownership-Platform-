import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import BlogsPage from "@/app/components/templates/blogsPage/BlogsPage";
import baseURL from "@/app/constants/baseURL";

const ViewBlog = (props) => {
  return (
    <DefaultLayout>
      <BlogsPage blogData={props.blogData} />
    </DefaultLayout>
  );
};

export default ViewBlog;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { blogUrl: "how-to-create-an-account" } }
    ],
    fallback: "blocking", // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const blogUrl = params.blogUrl;
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
    const blog = await fetch(
      `${baseURL}/blog/blog?url=${blogUrl}`,
      config
    );
    const blogData = await blog.json();
    return {
      props: {
        blogData: blogData.data.blog
      },
      revalidate: 60
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        blogData: {}
      },
      revalidate: 10
    };
  }
}