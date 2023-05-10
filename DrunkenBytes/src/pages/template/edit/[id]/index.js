import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import baseURL from "@/app/constants/baseURL";
import EditTemplatePage from '@/app/components/templates/editTemplatePage/EditTemplatePage';

const EditTemplate = (props) => {
  return (
    <DefaultLayout>
      <EditTemplatePage templateId={props.templateId}/>
    </DefaultLayout>
  );
};

export default EditTemplate;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "64075ca877580fef9fa328a6" } }
    ],
    fallback: 'blocking' // false or 'blocking'
  };
}

export async function getStaticProps({params}) {
  const id = params.id;
    return {
      props: {
        templateId: id,
      },
      revalidate: 60
    };
}

