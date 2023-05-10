import React, { useState, useContext } from "react";
import { Button, Drawer, Collapse } from "antd";
import "./stylesheets/sideDrawer.css";
import Link from "next/link";
import sideDrawerData from "../../data/sideDrawerData.json";
import AppContext from "@/app/context/AppContext";

const SideDrawer = () => {
  const { loggedInDetails } = useContext(AppContext);
  let drawerData;
  if (loggedInDetails.role === "SUPPORT")
    drawerData = sideDrawerData["SUPPORT"];
  else if (loggedInDetails.role === "EDITOR")
    drawerData = sideDrawerData["EDITOR"];
  else drawerData = sideDrawerData["ADMIN"];
  const { Panel } = Collapse;
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
          <Collapse accordion>
            {drawerData.map((data, idx) => {
              return (
                <Panel header={data.title} key={idx}>
                  {data.data.map((linkData, index) => {
                    return (
                      <Link
                        href={linkData.link}
                        key={linkData.key}
                        className="side-drawer-link"
                        target={linkData.newTab ? "_blank" : "_self"}
                      >
                        {linkData.title}
                      </Link>
                    );
                  })}
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </Drawer>
    </>
  );
};
export default SideDrawer;
