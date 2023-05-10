import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import ArticlesWritePage from "@/app/components/templates/articlesWritePage/ArticlesWritePage";

const Articles = () => {
  return (
    <DefaultLayout>
      <ArticlesWritePage mode="write"/>
    </DefaultLayout>
  );
};

export default Articles;
