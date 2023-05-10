import React, { useReducer, useEffect, useState } from "react";
import Head from "next/head";
import "antd/dist/reset.css";
import "../app/styles/globals.css";
import "../app/styles/antdOverrides.css";
import AppContext from "@/app/context/AppContext";
import { reducer, initialLoggedInDetails } from "@/app/context/Reducer";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default function MyApp({ Component, pageProps }) {
  const [loggedInDetails, dispatch] = useReducer(
    reducer,
    initialLoggedInDetails
  );
  useEffect(() => {
    const setLoggedInDetails = async () => {
      const role = Cookies.get("db_s_userRole");
      if (role !== undefined) {
        dispatch({
          type: "UserLogin",
          payload: { role }
        });
      }
    };
    setLoggedInDetails();
  }, []);

  const router = useRouter();
  useEffect(() => {
    const handleStart = url => {
      NProgress.start()
    };
    const handleStop = () => {
      NProgress.done();
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  },
    [router]
  );

  return (
    <AppContext.Provider value={{ loggedInDetails, dispatch }}>
      <Head>
        <title>Support | Drunken Bytes</title>
      </Head>
      {/* <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-VYMRDDLQCS" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VYMRDDLQCS', {
            page_path: window.location.pathname,
          });
        `,
        }}
      /> */}
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
