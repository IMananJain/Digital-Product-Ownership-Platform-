import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import RaiseIssuePage from '@/app/components/templates/raiseIssuePage/RaiseIssuePage';

const RaiseIssue = (props) => {
  return (
    <DefaultLayout>
      <RaiseIssuePage hasTokenId={true} tokenId={props.tokenId}/>
    </DefaultLayout>
  );
};

export default RaiseIssue;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { tokenId: "10" } }
    ],
    fallback: 'blocking' // false or 'blocking'
  };
}

export async function getStaticProps({params}) {
  const tokenId = params.tokenId;
    return {
      props: {
        tokenId: tokenId,
      },
      revalidate: 60
    };
}

