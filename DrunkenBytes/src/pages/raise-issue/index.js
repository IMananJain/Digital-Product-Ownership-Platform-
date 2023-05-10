import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import RaiseIssuePage from '@/app/components/templates/raiseIssuePage/RaiseIssuePage';

const RaiseIssue = props => {
  return (
    <DefaultLayout>
      <RaiseIssuePage hasTokenId={false}/>
    </DefaultLayout>
  );
};

export default RaiseIssue;