import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import UserPage from '@/app/components/templates/userPage/UserPage';

const User = () => {
  return (
    <DefaultLayout>
      <UserPage/>
    </DefaultLayout>
  );
};

export default User;