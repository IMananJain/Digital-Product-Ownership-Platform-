import React from "react";
import styles from "./stylesheets/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainDiv}>
        <div className={styles.companyContainer}>
          <img src="/images/drunken-bytes-logo-complete.png" alt="LOGO" />
          <p>
            Drunken Bytes is an innovative NFT platform providing businesses with 
            a simple way to create and manage product and credential NFTs.
          </p>
        </div>
        <div className={styles.containersContainer}>
          <div className={styles.container}>
            <p>Company</p>
            <Link href="/about" className={styles.containerLinks}>
              About
            </Link>
            <Link href="/careers" className={styles.containerLinks}>
              Careers
            </Link>
          </div>
          <div className={styles.container}>
            <p>Product</p>
            <Link href="/pricing" className={styles.containerLinks}>
              Pricing
            </Link>
            <Link href="/why-choose-us" className={styles.containerLinks}>
              Why Choose Us?
            </Link>
          </div>
          <div className={styles.container}>
            <p>Docs & Help</p>
            <Link href="/documentation" className={styles.containerLinks}>
              Documentation
            </Link>
            <Link href="/blogs" className={styles.containerLinks}>
              Blogs
            </Link>
            <Link href="/help-center" className={styles.containerLinks}>
              Help Center
            </Link>
            <Link href="/faq" className={styles.containerLinks}>
              FAQ
            </Link>
          </div>
          <div className={styles.container}>
            <p>Get in Touch</p>
            <Link href="/contact-us" className={styles.containerLinks}>
              Contact Us
            </Link>
            <Link href="/raise-issue" className={styles.containerLinks}>
              Raise Issue
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.copyrightDiv}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Drunken Bytes. All Rights Reserved.
        </p>
        <div className={styles.policyAndTerms}>
          <Link href="/privacy-policy" className={styles.policyAndTermsLinks}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className={styles.policyAndTermsLinks}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
