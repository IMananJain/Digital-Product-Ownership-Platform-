import React from "react";
import DefaultLayout from "@/app/components/layouts/DefaultLayout";
import ContactUsPage from '@/app/components/templates/contactUsPage/ContactUsPage';

const ContactUs = props => {
  return (
    <DefaultLayout>
      <ContactUsPage/>
    </DefaultLayout>
  );
};

export default ContactUs;