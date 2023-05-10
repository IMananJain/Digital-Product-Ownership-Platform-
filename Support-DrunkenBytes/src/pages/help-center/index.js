import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import HelpCenterPage from "../../app/components/templates/helpCenterPage/HelpCenterPage";
import baseURL from "@/app/constants/baseURL";

const HelpCenter = (props) => {
  return (
    <DefaultLayout>
      <HelpCenterPage articlesData={props.articlesData} totalArticles={props.totalArticles}/>
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
    const articles = await fetch(
      `${baseURL}/article/get-articles?page=1&size=10`,
      config
    );
    const articlesData = await articles.json();
    return {
      props: {
        articlesData: articlesData.data.articles,
        totalArticles: articlesData.data.totalArticles
      },
      revalidate: 60
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        articles: [],
        totalArticles: 0
      },
      revalidate: 10
    };
  }
}