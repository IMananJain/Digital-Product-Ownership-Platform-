import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import CookiesPolicyPage from '@/app/components/templates/cookiesPolicyPage/CookiesPolicyPage';

const CookiesPolicy = props => {
  return (
    <DefaultLayout>
      <CookiesPolicyPage/>
    </DefaultLayout>
  );
};

export default CookiesPolicy;