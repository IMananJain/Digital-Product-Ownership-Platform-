import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import TicketsSinglePage from "@/app/components/templates/ticketsSinglePage/TicketsSinglePage";

const Ticket = (props) => {
  return (
    <DefaultLayout>
      <TicketsSinglePage id={props.id} />
    </DefaultLayout>
  );
};

export default Ticket;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "6431729c8d9414fa62f08d7e",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
    },
  };
}
