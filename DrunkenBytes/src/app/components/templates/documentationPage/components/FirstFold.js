import CustomButton from "@/app/components/elements/CustomButton";
import React from "react";
import styles from "../stylesheets/firstFold.module.css";
import { Link } from "react-scroll";
import { useWeb3Modal } from "@web3modal/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import AppContext from "@/app/context/AppContext";

const FirstFold = () => {
  const { open } = useWeb3Modal();
  const { loggedInDetails } = useContext(AppContext);
  const router = useRouter();
  return (
    <div
      className={styles.firstFold}
      style={{
        backgroundImage:
          "url(" +
          "/images/background/gardient-bottom-rightandleft-800x412.jpeg" +
          ")",
      }}
    >
      <div className={styles.mainDiv}>
        <div className={styles.subDiv}>
          <h2 className={styles.heading}>Quickstart Guide</h2>
          <p className={styles.subParagraph}>
            In a rush or not interested in reading documentation? There is a
            short 3-Step Quickstart Guide you can use to started right away.
          </p>
          <CustomButton
            type="Gradient"
            text="TRY NOW"
            onClickHandler={async () => {
              if (loggedInDetails.isConnected) {
                router.push("/create");
              } else {
                await open();
              }
            }}
          />
        </div>
        <div className={styles.subDiv}>
          <h2 className={styles.heading}>Code Examples</h2>
          <p className={styles.subParagraph}>
            To get you up and running quickly, we have prepared code examples in
            a series of programming languages. Click below to explore.
          </p>
          <Link
            to="code-examples"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <CustomButton
              type="OnlyBorder"
              text="CODE EXAMPLES"
              onClickHandler={() => {}}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstFold;
