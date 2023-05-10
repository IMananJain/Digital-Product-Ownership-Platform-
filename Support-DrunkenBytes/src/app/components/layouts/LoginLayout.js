import React from "react";
import Navbar from "../modules/Navbar";
import Footer from "../modules/Footer";
import ScrollToTop from "../modules/ScrollToTop";
import CookiePreferencesButton from "../modules/CookiePreferencesButton";
import CookieBar from "../modules/CookieBar";

const LoginLayout = ({ children }) => {
  return (
    <>
      <CookiePreferencesButton />
      <ScrollToTop />
      <main>{children}</main>
      <CookieBar />
    </>
  );
};

export default LoginLayout;
