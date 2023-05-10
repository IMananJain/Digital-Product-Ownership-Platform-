import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import BlogsWritePage from "@/app/components/templates/blogsWritePage/BlogsWritePage";

const EditArticle = (props) => {
  return (
    <DefaultLayout>
      <BlogsWritePage mode="edit" blogUrl={props.blogUrl} />
    </DefaultLayout>
  );
};

export default EditArticle;

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
  return {
    props: {
      blogUrl,
    },
  };
}
