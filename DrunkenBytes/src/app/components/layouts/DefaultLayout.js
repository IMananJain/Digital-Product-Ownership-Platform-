import React, {useEffect, useState} from "react";
import Navbar from "../modules/Navbar";
import Footer from "../modules/Footer";
import ScrollToTop from "../modules/ScrollToTop";
import CookiePreferencesButton from "../modules/CookiePreferencesButton";
import CookieBar from "../modules/CookieBar";

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider
} from "@web3modal/ethereum";
import { Web3Modal, useWeb3ModalTheme  } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli /*, polygonMumbai, sepolia*/ } from "wagmi/chains";

const projectId = "5eb3b4632acfeff4d00404640ce75685";
// const chains = [sepolia, goerli];
const chains = [goerli];
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId })
]);

const DefaultLayout = ({ children }) => {
  const [isReady, setIsReady] = useState(false);  
  useEffect(() => {
      setIsReady(true)
  }, []);

  const wagmiClient = createClient({
    autoConnect: isReady,
    connectors: modalConnectors({
      projectId,
      version: "2", // or "2"
      appName: "web3Modal",
      chains
    }),
    provider
  });
  
  const ethereumClient = new EthereumClient(wagmiClient, chains);
  const { theme, setTheme } = useWeb3ModalTheme();
    setTheme({
      themeMode: "light",
      themeColor: "purple",
      themeBackground: "gradient"
    });
  return (
    <div>
      <WagmiConfig client={wagmiClient}>
        <Navbar />
        <CookiePreferencesButton />
        <ScrollToTop />
        <main>
          {children}
        </main>
        <CookieBar/>
        <Footer />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} className="default-layout-web3modal" 
                />
    </div>
  );
};

export default DefaultLayout;
