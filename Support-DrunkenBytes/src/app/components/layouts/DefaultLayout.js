import React from "react";
import Navbar from "../modules/Navbar";
import Footer from "../modules/Footer";
import ScrollToTop from "../modules/ScrollToTop";
import CookiePreferencesButton from "../modules/CookiePreferencesButton";
import CookieBar from "../modules/CookieBar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <CookiePreferencesButton />
      <ScrollToTop />
      <main>{children}</main>
      <CookieBar />
      <Footer />
    </>
  );
};

export default DefaultLayout;
