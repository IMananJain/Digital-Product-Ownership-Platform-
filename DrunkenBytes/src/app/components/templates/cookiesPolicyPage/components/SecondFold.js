import React from "react";
import styles from "../stylesheets/secondFold.module.css";
import Link from 'next/link'

const SecondFold = (props) => {
  return (
    <div className={styles.secondFold}>
      <div className={styles.mainDiv}>
        <h6>WHAT ARE COOKIES AND WHY DO WE USE THEM?</h6>
        <p>
          <strong>‍</strong>When you use our Services (as defined in our <Link className={styles.link} href="/terms-of-service">Terms of Service</Link>), including our websites drunkenbytes.vercel.app, api-drunkenbytes.onrender.com, we use cookies, pixels, and similar technologies to gather data about your use of our Sites.
        </p>
        <p>Cookies are small files that we may send to your browser when you first use the Sites, which are then stored on your device in order to remember information about you (such as login details). Those cookies are set by us and called first-party cookies. We also use third-party cookies – which are cookies from a domain different than the domain of the Sites you are visiting – for our advertising and marketing efforts.&nbsp;</p>
        <p>We use cookies in a few different ways under the following categories:</p>
        <p>‍<strong>Necessary Cookies</strong>- These are cookies that are required for the operation of our Sites or to comply with legal requirements. These cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.&nbsp; </p>
        <p>They include, for example, cookies that enable you to log into secure areas of our Sites or help to ensure the content of pages loads quickly. You can set your browser to block or alert you about these cookies, but some parts of our Sites will not then work.&nbsp;</p>
        <p>‍<strong>Functionality Cookies</strong>- These are required for our Sites to function correctly and to give you access to the Sites that we offer. For example, these cookies allow the Sites to remember any settings you make and provide enhanced and more personal features. If you do not allow these cookies then some or all of our Services may not function properly. </p>
        <p>‍<strong>Analytical or Performance Cookies</strong>– These allow us to recognise and count the number of visitors and to see how visitors move around our Sites when they are using them. This helps us to improve the way our Sites work, for example, by ensuring that users are finding what they are looking for easily. If you do not allow these cookies, we will not know when you have visited our Sites. </p>
        <p>‍<strong>Targeting Cookies</strong>– These cookies record your visit to our Sites, the pages you have visited and the links you have followed. We will use this information to make our Sites more relevant to your interests. These cookies may also be set through our Sites by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising. </p>
        <p>We also use pixels (also referred to as web beacons, clear gifs, pixel tags, and single-pixel gifs). A pixel contains a tiny image that may be embedded within web pages and emails, requiring a call (which provides device and visit information) to our servers in order for the pixel to be rendered in those web pages and emails. We use pixels to learn more about your interactions with email content or web content, such as whether you interacted with ads or posts.&nbsp;</p>
        <p>Cookies and pixels collect data about you but are typically constructed with privacy by design. Only the server that sets the cookie can retrieve the data it collects, and the data is often collected on an anonymized basis.</p>
        <p>Some content or applications on the Sites are served by third-parties. These third parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect information about you when you use our Sites.&nbsp; The information collected by these cookies is directly obtained by such third parties, in some cases are not disclosed to us, are used and managed in accordance with the privacy and cookies policies of those third parties and are not under our control. We do not control these third parties’ tracking technologies or how they may be used. For more information about such cookies, you should contact the responsible provider directly.&nbsp;</p>
        <p>‍</p>
        <h6>HOW CAN YOU MANAGE COOKIES USED ON THE SITES?</h6>
        <p>
          <strong>‍</strong>You decide if you want to consent to our use of cookies or not. When you first visit our Sites, you are presented with a cookie banner that allows you to either opt in or opt out from our use of cookies. If you consent to our use of cookies, such cookies will be sent to and stored on your device.&nbsp;
        </p>
        <p>If you opt out and do not consent, we have a special script in place which ensures that no cookies that collect your data are being used. You can also choose not to allow some types of cookies. However, blocking some types of cookies may impact your experience of the Sites and the Services we are able to offer.</p>
        <p>All browser technologies enable you to manage the cookies in the cookie folder of your web browser. This means that you can either delete cookies from your cookie folder once you have finished your visit to our Sites or you can set your preferences with regard to the use of cookies before you begin browsing our Sites. Please note, as stated above, that deleting or rejecting cookies may adversely affect your user experience of our Sites.</p>
        <p>You can find out further information at:</p>
        <p>- <a className={styles.link} href="https://www.google.com/intl/en/chrome/privacy/" target="_blank">Google</a>
        </p>
        <p>
          - <a className={styles.link} href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&amp;redirectslug=Cookies#w_cookie-settings" target="_blank">Firefox</a>
        </p>
        <p>- <a className={styles.link} href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank">Windows</a>
        </p>
        <p>
          - <a className={styles.link} href="https://www.apple.com/safari/#security" target="_blank">Safari</a>
        </p>
        <p>‍</p>
        <h6>CHANGES TO THIS COOKIES POLICY</h6>
        <p>
          <strong>‍</strong>From time to time, we may make changes to this Cookies Policy. If we decide to do so, we will post the changes on our Sites, so that you are always aware of what cookies we use and how we use them.&nbsp;
        </p>
        <p>‍</p>
        <h6>CONTACT DETAILS</h6>
        <p>
          <strong>‍</strong>If you have any questions, comments or requests relating to our use of cookies, or if you would like to exercise any of your rights under this policy, then please contact us at <a className={styles.link} href="mailto:bytes.drunken@hotmail.com">bytes.drunken@hotmail.com</a>. <strong>
            <br />
          </strong>
        </p>
      </div>
    </div>
  );
};

export default SecondFold;
