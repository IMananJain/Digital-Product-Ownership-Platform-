import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import SupportUserSinglePage from "@/app/components/templates/supportUserSinglePage/SupportUserSinglePage";

const SupportUserSingle = (props) => {
  return (
    <DefaultLayout>
      <SupportUserSinglePage supportUserId={props.supportUserId} />
    </DefaultLayout>
  );
};

export default SupportUserSingle;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          supportUserId: "63e4da7da3fed4adf7ba15ab",
        },
      },
    ],
    fallback: "blocking", // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      supportUserId  : params.supportUserId
    },
  };
}
