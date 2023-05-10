import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import ManageAPIkeyPage from '@/app/components/templates/manageAPIkeyPage/ManageAPIkeyPage';

const ManageAPIkey = props => {
  return (
    <DefaultLayout>
      <ManageAPIkeyPage/>
    </DefaultLayout>
  );
};

export default ManageAPIkey;