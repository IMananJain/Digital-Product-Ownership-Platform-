import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import HoldPage from '@/app/components/templates/holdPage/HoldPage';

const Hold = props => {
  return (
    <DefaultLayout>
      <HoldPage/>
    </DefaultLayout>
  );
};

export default Hold;