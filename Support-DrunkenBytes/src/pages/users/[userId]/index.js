import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import UserSinglePage from "@/app/components/templates/userSinglePage/UserSinglePage";

const UserSingle = (props) => {
  return (
    <DefaultLayout>
      <UserSinglePage userId={props.userId} />
    </DefaultLayout>
  );
};

export default UserSingle;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          userId: "63e4da7da3fed4adf7ba15ab",
        },
      },
    ],
    fallback: "blocking", // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      userId  : params.userId
    },
  };
}
