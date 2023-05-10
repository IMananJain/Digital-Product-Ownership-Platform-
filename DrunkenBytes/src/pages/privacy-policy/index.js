import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import PrivacyPolicyPage from '@/app/components/templates/privacyPolicyPage/PrivacyPolicyPage';

const PrivacyPolicy = props => {
  return (
    <DefaultLayout>
      <PrivacyPolicyPage/>
    </DefaultLayout>
  );
};

export default PrivacyPolicy;