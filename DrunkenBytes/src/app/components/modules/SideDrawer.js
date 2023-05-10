import React, { useState } from "react";
import { Button, Drawer } from "antd";
import "./stylesheets/sideDrawer.css";
import Link from "next/link";
import { useAccount, useDisconnect } from 'wagmi';

const SideDrawer = () => {
  const { isConnected } = useAccount()
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        onClick={() => {
          showDrawer();
        }}
        className="side-drawer-button"
        aria-label="Open Drawer"
      >
        <div className="side-drawer-button-container-div-line1" />
        <div className="side-drawer-button-container-div-line2" />
        <div className="side-drawer-button-container-div-line1" />
      </Button>

      <Drawer
        title={
          <a href="/">
            <img
              src="/images/drunken-bytes-logo-complete.png"
              alt=""
              className="sideDrawerLogo"
            />
          </a>
        }
        className="side-drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="side-drawer-main-div">
          <div className="drawer-links">
            {isConnected &&
              <Link href="/create" className="side-drawer-link">
                Create
              </Link>}
            <Link href="/pricing" className="side-drawer-link">
              Pricing
            </Link>
            <Link href="/documentation" className="side-drawer-link">
              Documentation
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default SideDrawer;
