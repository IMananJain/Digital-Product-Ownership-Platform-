import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import CareersPage from '@/app/components/templates/careersPage/CareersPage';

const Careers = props => {
  return (
    <DefaultLayout>
      <CareersPage/>
    </DefaultLayout>
  );
};

export default Careers;