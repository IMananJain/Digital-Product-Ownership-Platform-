import styles from "./stylesheets/cookiePreferencesButton.module.css";
import React, { useState, useEffect } from "react";
import CookieBarPreferencesModal from "./CookieBarPreferencesModal";

const CookiePreferencesButton = () => {
  const [openPreferences, setOpenPreferences] = useState(false);

  return (
    <>
      <CookieBarPreferencesModal openPreferences={openPreferences} setOpenPreferences={setOpenPreferences}/>
      <div
        type="button"
        className={styles.cookiePreferencesButton}
        onClick={() => {
          setOpenPreferences(true);
        }}
        aria-label="cookie-prferences"
        role="button"
      >
        <img src="/images/cookie-preferences-button.png" alt="cookie-prefrence-icon" className={styles.image} />
      </div>
    </>
  );
};

export default CookiePreferencesButton;
