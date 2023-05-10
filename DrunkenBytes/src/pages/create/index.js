import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import CreateNftPage from '@/app/components/templates/createNftPage/CreateNftPage';

const CreateNft = props => {
  return (
    <DefaultLayout>
      <CreateNftPage/>
    </DefaultLayout>
  );
};

export default CreateNft;