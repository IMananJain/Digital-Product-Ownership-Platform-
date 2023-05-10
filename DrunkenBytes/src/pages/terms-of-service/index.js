import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import TermsOfServicePage from '@/app/components/templates/termsOfServicePage/TermsOfServicePage';

const TermsOfService = props => {
  return (
    <DefaultLayout>
      <TermsOfServicePage/>
    </DefaultLayout>
  );
};

export default TermsOfService;