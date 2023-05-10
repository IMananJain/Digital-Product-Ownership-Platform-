import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import BlogsWritePage from "@/app/components/templates/blogsWritePage/BlogsWritePage";

const Articles = () => {
  return (
    <DefaultLayout>
      <BlogsWritePage mode="write"/>
    </DefaultLayout>
  );
};

export default Articles;
