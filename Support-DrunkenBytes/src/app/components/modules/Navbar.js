import styles from "./stylesheets/navbar.module.css";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import SideDrawer from "./SideDrawer";
import { UserOutlined, LogoutOutlined, LockOutlined } from "@ant-design/icons";
import { Dropdown, Avatar } from "antd";
import { useHttpClient } from "@/app/hooks/useHttpClient";
import AppContext from '@/app/context/AppContext';
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Navbar = () => {
  const { error, sendRequest, isLoading } = useHttpClient();
  const [isNavBarFixed, setNavBarFixed] = useState(false);
  const { dispatch } = useContext(AppContext);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      setNavBarFixed(true);
    } else {
      setNavBarFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const logoutHandler = async () => {
    try {
      await sendRequest("/support-user/logout", "POST");
      if (!error) {
        dispatch({
          type: "UserLogout"
        });
        router.push("/login");
        Cookies.remove('supportUserRole');
      }
    } catch (err) {}
  };

  const items = [
    {
      key: "1",
      label: (
        <Link href="/profile">
          <div className={styles.avatarItem}>
            <UserOutlined className={styles.avatarItemIcon} />Profile
          </div>
        </Link>
      )
    },
    {
      key: "2",
      label: (
        <Link href="/profile/change-password">
          <div className={styles.avatarItem}>
            <LockOutlined className={styles.avatarItemIcon} />
            Change Password
          </div>
        </Link>
      )
    },
    {
      key: "3",
      label: (
        <button className={styles.avatarItemButton} onClick={logoutHandler}>
          <div className={styles.avatarItem}>
            <LogoutOutlined className={styles.avatarItemIcon} />
            Logout
          </div>
        </button>
      )
    }
  ];
  return (
    <div
      className={`${styles.navbar} ${isNavBarFixed ? styles.fixedNavbar : ""}`}
    >
      <div className={styles.logoContainer}>
        <Link href="/">
          <img
            alt="Mountains"
            src="/images/drunken-bytes-logo-complete.png"
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles.buttonsContainer}>
        <Dropdown
          menu={{
            items
          }}
          placement="bottom"
        >
          <Avatar
            type="button"
            size="large"
            icon={<UserOutlined />}
            className={styles.avatar}
          />
        </Dropdown>
        <SideDrawer />
      </div>
    </div>
  );
};

export default Navbar;
