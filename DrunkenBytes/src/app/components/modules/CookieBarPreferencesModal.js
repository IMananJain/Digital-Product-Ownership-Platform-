import styles from "./stylesheets/cookieBarPreferencesModal.module.css";
import React, { useState, useEffect } from "react";
import CustomButton from "@/app/components/elements/CustomButton";
import Link from "next/link";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { Modal, Switch } from "antd";

const CookieBarPreferencesModal = (props) => {
  const [marketingCookiesSelected, setMarketingCookiesSelected] = useState(true);
  const [personalizationCookiesSelected, setPersonalizationCookiesSelected] = useState(true);
  const [analyticsCookiesSelected, setAnalyticsCookiesSelected] = useState(true);

  useEffect(()=>{
    let hasConsented = localStorage.getItem('drunkenBytesCookieConsent');
    hasConsented = JSON.parse(hasConsented);
    setMarketingCookiesSelected(hasConsented?.isMarketingConsented ?? true);
    setPersonalizationCookiesSelected(hasConsented?.isPersonalizationConsented ?? true);
    setAnalyticsCookiesSelected(hasConsented?.isAnalyticsConsented ?? true);
  },[])

  const savePreferences = () => {
    localStorage.setItem('drunkenBytesCookieConsent', JSON.stringify({
      isConsented: true,
      isAnalyticsConsented: analyticsCookiesSelected,
      isPersonalizationConsented: personalizationCookiesSelected,
      isMarketingConsented: marketingCookiesSelected
    }));
    props.setOpenPreferences(false);
  };

  return (
    <Modal
        title="Manage Cookie Preference"
        closable={false}
        open={props.openPreferences}
        className="cookieBarModal"
        footer={
          <CustomButton
            text="Confirm my preferences and close"
            onClickHandler={savePreferences}
            type="Gradient"
          />
        }
      >
        <div className={styles.modalText}>
          <p>
            Cookies are small text files placed on your device to store data so
            web servers can use it later. Drunken Bytes and our third-party partners use
            cookies to remember your preferences and settings, help you log in
            and analyses how well our websites are working. For more information,
            please refer to our{" "}
            <Link href="/privacy-policy" className={styles.link}>
              Privacy Policy
            </Link>.
          </p>
          <div className={styles.modalCookiesContainer}>
            <div className={styles.modalCookieTypeContainer}>
              <div className={styles.modalCookieTypeContainerOne}>
                <strong>Required Cookies</strong>
                <CheckCircleTwoTone
                  className={styles.checkIcon}
                  style={{ color: "#fefefe", fontSize: "20px" }}
                  twoToneColor="#4caf50"
                />
              </div>
              <div className={styles.modalCookieTypeContainerTwo}>
                These cookies are essential so that you can move around the
                website and use its features. Without these cookies services you
                have asked for cannot be provided.
              </div>
            </div>
            <div className={styles.modalCookieTypeContainer}>
              <div className={styles.modalCookieTypeContainerOne}>
                <strong>Marketing Cookies</strong>
                <Switch
                  checked={marketingCookiesSelected}
                  onChange={() => {
                    setMarketingCookiesSelected(!marketingCookiesSelected);
                  }}
                  aria-label="setMarketingCookiesSelected"
                />
              </div>
              <div className={styles.modalCookieTypeContainerTwo}>
              These items are used to deliver advertising that is more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns. Advertising networks usually place them with the website operator’s permission.
              </div>
            </div>
            <div className={styles.modalCookieTypeContainer}>
              <div className={styles.modalCookieTypeContainerOne}>
                <strong>Personalization Cookies</strong>
                <Switch
                  checked={personalizationCookiesSelected}
                  onChange={() => {
                    setPersonalizationCookiesSelected(!personalizationCookiesSelected);
                  }}
                  aria-label="setPersonalizationCookiesSelected"
                />
              </div>
              <div className={styles.modalCookieTypeContainerTwo}>
              These items allow the website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features. For example, a website may provide you with local weather reports or traffic news by storing data about your current location.
              </div>
            </div>
            <div className={styles.modalCookieTypeContainer}>
              <div className={styles.modalCookieTypeContainerOne}>
                <strong>Analytics Cookies</strong>
                <Switch
                  checked={analyticsCookiesSelected}
                  onChange={() => {
                    setAnalyticsCookiesSelected(!analyticsCookiesSelected);
                  }}
                  aria-label="setAnalyticsCookiesSelected"
                />
              </div>
              <div className={styles.modalCookieTypeContainerTwo}>
              These items help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues. This storage type usually doesn’t collect information that identifies a visitor.
              </div>
            </div>
          </div>
        </div>
      </Modal>
  )
}

export default CookieBarPreferencesModal