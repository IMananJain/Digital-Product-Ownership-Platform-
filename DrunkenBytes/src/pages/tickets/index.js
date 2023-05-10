import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import TicketsPage from "@/app/components/templates/ticketsPage/TicketsPage";

const Tickets = () => {
  return (
    <DefaultLayout>
      <TicketsPage/>
    </DefaultLayout>
  );
};

export default Tickets;