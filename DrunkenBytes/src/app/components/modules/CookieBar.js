import styles from "./stylesheets/cookieBar.module.css";
import React, { useState, useEffect } from "react";
import CustomButton from "@/app/components/elements/CustomButton";
import Link from "next/link";
import CookieBarPreferencesModal from "./CookieBarPreferencesModal";

const CookieBar = () => {
  const [openPreferences, setOpenPreferences] = useState(false);
  const [showCookieBar, setShowCookieBar] = useState(false);

  useEffect(() => {
    let hasConsented = localStorage.getItem('drunkenBytesCookieConsent');
    hasConsented = JSON.parse(hasConsented);
    setShowCookieBar(!hasConsented?.isConsented);
  }, []);

  const handleConsent = () => {
    localStorage.setItem('drunkenBytesCookieConsent', JSON.stringify({
      isConsented: true,
      isAnalyticsConsented: true,
      isPersonalizationConsented: true,
      isMarketingConsented: true
    }));
    setShowCookieBar(false);
  };

  return (
    <div className={styles.cookieBar} style={{ transform: `translateY(${showCookieBar ? '0' : '100%'})` }} role="status">
    <CookieBarPreferencesModal openPreferences={openPreferences} setOpenPreferences={setOpenPreferences}/> 
    <p className={styles.cookieBarText}>By clicking <em>“Accept All Cookies”</em>, you agree to the storing of cookies on your device to enhance site navigation, analyze 
    site usage, and assist in our marketing efforts. View our <Link href="/privacy-policy" className={styles.link}>
            Privacy Policy
          </Link> for more information.</p>
      <div className={styles.cookieBarContainer}>
        <CustomButton
          text="ACCEPT ALL"
          onClickHandler={handleConsent}
          type="Gradient"
        />
        <CustomButton
          text="MANAGE PREFERENCES"
          onClickHandler={() => {
            setShowCookieBar(false);
            setOpenPreferences(true);
          }}
          type="Gradient"
        />
      </div>
    </div>
  );
};

export default CookieBar;
