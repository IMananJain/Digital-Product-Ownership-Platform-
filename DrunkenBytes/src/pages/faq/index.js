import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import FaqPage from '@/app/components/templates/faqPage/FaqPage';

const Faq = props => {
  return (
    <DefaultLayout>
      <FaqPage/>
    </DefaultLayout>
  );
};

export default Faq;