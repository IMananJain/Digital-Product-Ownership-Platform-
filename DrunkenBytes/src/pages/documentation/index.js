import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import DocumentationPage from '@/app/components/templates/documentationPage/DocumentationPage';

const Documentation = props => {
  return (
    <DefaultLayout>
      <DocumentationPage/>
    </DefaultLayout>
  );
};

export default Documentation;