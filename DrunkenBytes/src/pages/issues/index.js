import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import IssuesPage from "@/app/components/templates/issuesPage/IssuesPage";

const Issue = () => {
  return (
    <DefaultLayout>
      <IssuesPage/>
    </DefaultLayout>
  );
};

export default Issue;