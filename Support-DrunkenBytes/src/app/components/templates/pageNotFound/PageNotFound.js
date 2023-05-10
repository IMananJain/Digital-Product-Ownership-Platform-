import React from "react";
import styles from "./pageNotFound.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

const PageNotFound = () => {
  const router = useRouter();
  return (
    <div className={styles.pageNotFound}>
      <Head>
        <title>Page Not Found | Support Drunken Bytes</title>
        <meta
          name="description"
          content="Oops! The page you are looking for cannot be found. Please check the URL and try again."
        />
      </Head>
      <div className={`${styles.container} ${styles.containerStar}`}>
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star1} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
        <div className={styles.star2} />
      </div>
      <div className={`${styles.container} ${styles.containerBird}`}>
        <div className={`${styles.bird} ${styles.birdAnim}`}>
          <div className={`${styles.birdContainer}`}>
            <div className={`${styles.wing} ${styles.wingLeft}`}>
              <div className={`${styles.wingLeftTop}`} />
            </div>
            <div className={`${styles.wing} ${styles.wingLeft}`}>
              <div className={`${styles.wingRightTop}`} />
            </div>
          </div>
        </div>
        <div className={`${styles.bird} ${styles.birdAnim}`}>
          <div className={`${styles.birdContainer}`}>
            <div className={`${styles.wing} ${styles.wingLeft}`}>
              <div className={`${styles.wingLeftTop}`} />
            </div>
            <div className={`${styles.wing} ${styles.wingLeft}`}>
              <div className={`${styles.wingRightTop}`} />
            </div>
          </div>
        </div>
        <div className={`${styles.bird} ${styles.birdAnim}`}>
          <div className={`${styles.birdContainer}`}>
            <div className={`${styles.wing} ${styles.wingLeft}`}>
              <div className={`${styles.wingLeftTop}`} />
            </div>
            <div className={`${styles.wing} ${styles.wingLeft}`}>
              <div className={`${styles.wingRightTop}`} />
            </div>
          </div>
        </div>
        <div className={`${styles.bird} ${styles.birdAnim}`}>
          <div className={`${styles.birdContainer}`}>
            <div className={`${styles.wing} ${styles.wingLeft}`}>
              <div className={`${styles.wingLeftTop}`} />
            </div>
            <div className={`${styles.wing} ${styles.wingLeft}`}>
              <div className={`${styles.wingRightTop}`} />
            </div>
          </div>
        </div>
        <div className={`${styles.bird} ${styles.birdAnim}`}>
          <div className={`${styles.birdContainer}`}>
            <div className={`${styles.wing} ${styles.wingLeft}`}>
              <div className={`${styles.wingLeftTop}`} />
            </div>
            <div className={`${styles.wing} ${styles.wingLeft}`}>
              <div className={`${styles.wingRightTop}`} />
            </div>
          </div>
        </div>
        <div className={`${styles.bird} ${styles.birdAnim}`}>
          <div className={`${styles.birdContainer}`}>
            <div className={`${styles.wing} ${styles.wingLeft}`}>
              <div className={`${styles.wingLeftTop}`} />
            </div>
            <div className={`${styles.wing} ${styles.wingLeft}`}>
              <div className={`${styles.wingRightTop}`} />
            </div>
          </div>
        </div>
        <div className={styles.containerTitle}>
          <div className={styles.title}>
            <div className={styles.number}>4</div>
            <div className={styles.moon}>
              <div className={styles.face}>
                <div className={styles.mouth} />
                <div className={styles.eyes}>
                  <div className={styles.eyeLeft} />
                  <div className={styles.eyeRight} />
                </div>
              </div>
            </div>
            <div className={styles.number}>4</div>
          </div>
          <div className={styles.subtitle}>
            Oops. Looks like you took a wrong turn.
          </div>
          <button
            onClick={() => {
              router.push("/");
            }}
          >
            GO TO HOME
          </button>
          <button
            onClick={() => {
              router.back();
            }}
          >
            PREVIOUS PAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
