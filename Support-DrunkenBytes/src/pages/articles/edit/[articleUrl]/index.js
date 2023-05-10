import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import ArticlesWritePage from "@/app/components/templates/articlesWritePage/ArticlesWritePage";

const EditArticle = (props) => {
  return (
    <DefaultLayout>
      <ArticlesWritePage mode="edit" articleUrl={props.articleUrl} />
    </DefaultLayout>
  );
};

export default EditArticle;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { articleUrl: "how-to-create-an-account" } }
    ],
    fallback: "blocking", // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const articleUrl = params.articleUrl;
  return {
    props: {
      articleUrl,
    },
  };
}
