import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import ArticlesPage from "@/app/components/templates/articlesPage/ArticlesPage";
import baseURL from "@/app/constants/baseURL";

const ViewArticle = (props) => {
  return (
    <DefaultLayout>
      <ArticlesPage articleData={props.articleData} />
    </DefaultLayout>
  );
};

export default ViewArticle;

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
    const article = await fetch(
      `${baseURL}/article/article?url=${articleUrl}`,
      config
    );
    const articleData = await article.json();
    return {
      props: {
        articleData: articleData.data.article
      },
      revalidate: 60
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        articleData: {}
      },
      revalidate: 10
    };
  }
}