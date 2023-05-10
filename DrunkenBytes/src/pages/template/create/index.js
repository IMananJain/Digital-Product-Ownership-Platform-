import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import CreateTemplatePage from '@/app/components/templates/createTemplatePage/CreateTemplatePage';

const CreateTemplate = props => {
  return (
    <DefaultLayout>
      <CreateTemplatePage/>
    </DefaultLayout>
  );
};

export default CreateTemplate;