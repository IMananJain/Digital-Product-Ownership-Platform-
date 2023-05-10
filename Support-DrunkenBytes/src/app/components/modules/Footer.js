import React from "react";
import styles from "./stylesheets/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.mainDiv}>
        <div className={styles.companyContainer}>
          <img src="/images/drunken-bytes-logo-complete.png" alt="LOGO" />
          <p>
            Drunken Bytes provides NFT-based warranty solutions to brands and
            retailers, that help them to make their customer service digitalize,
            easy, and better than before.
          </p>
        </div>
        <div className={styles.containersContainer}>
          <div className={styles.container}>
            <p>Company</p>
            <a href="https://drunkenbytes.vercel.app/about" target="_blank" className={styles.containerLinks}>
              About
            </a>
            <a href="https://drunkenbytes.vercel.app/careers" target="_blank" className={styles.containerLinks}>
              Careers
            </a>
          </div>
          <div className={styles.container}>
            <p>My Account</p>
            <Link href="/profile" className={styles.containerLinks}>
              Profile
            </Link>
            <Link href="/change-password" className={styles.containerLinks}>
              Change Password
            </Link>
          </div>
          <div className={styles.container}>
            <p>Product</p>
            <a href="https://drunkenbytes.vercel.app/pricing" target="_blank" className={styles.containerLinks}>
              Pricing
            </a>
            <a href="https://drunkenbytes.vercel.app/why-choose-us" target="_blank" className={styles.containerLinks}>
              Why Choose Us?
            </a>
          </div>
          <div className={styles.container}>
            <p>Docs & Help</p>
            <a href="https://drunkenbytes.vercel.app/documentation" target="_blank" className={styles.containerLinks}>
              Documentation
            </a>
            <Link href="/blogs" className={styles.containerLinks}>
              Blogs
            </Link>
            <Link href="/help-center" className={styles.containerLinks}>
              Help Center
            </Link>
            <a href="https://drunkenbytes.vercel.app/faq" target="_blank" className={styles.containerLinks}>
              FAQ
            </a>
          </div>
          <div className={styles.container}>
            <p>Get in Touch</p>
            <a href="https://drunkenbytes.vercel.app/contact-us" target="_blank" className={styles.containerLinks}>
              Contact Us
            </a>
            <a href="https://drunkenbytes.vercel.app/raise-issue" target="_blank" className={styles.containerLinks}>
              Raise Issue
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyrightDiv}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Drunken Bytes. All Rights Reserved.
        </p>
        <div className={styles.policyAndTerms}>
          <Link href="https://drunkenbytes.vercel.app/privacy-policy" className={styles.policyAndTermsLinks}>
            Privacy Policy
          </Link>
          <Link href="https://drunkenbytes.vercel.app/terms-of-service" className={styles.policyAndTermsLinks}>
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
