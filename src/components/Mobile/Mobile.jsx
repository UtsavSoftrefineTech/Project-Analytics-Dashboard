import React, { useState } from "react";
import Logo from "../Sidebar/Logo/Logo";
import IconBtn from "../Header/IconBtn/IconBtn";
import PersonAvatar from "../Header/PersonAvatar/PersonAvatar";
import ProfileDetails from "../Header/ProfileDetails/ProfileDetails";
import SideButton from "./SideButton/SideButton";
import Date from "../Header/Date/Date";
import Search from "../Header/Search/Search";
import Project from "../Project/Project";
import Sidebar from "../Sidebar/Sidebar"; // Import your Sidebar component

const profileImg = "https://wallpapercave.com/wp/wp6112875.jpg";

const MobileHeader = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="mobile">
        <div className="mobile__header">
          <div className="header">
            <SideButton toggleSidebar={toggleSidebar} />
            <div className="mobile__logo">
              Task<span>.ly</span>
            </div>
            <IconBtn icon="settings-outline" />
            <div className="alert">
              <IconBtn icon="notifications-outline" />
              <div className="notifications-alert"></div>
            </div>
            <PersonAvatar img={profileImg} />
            <ProfileDetails name="Zhofran ardyan" />
          </div>
        </div>

        <div className="mobile__heading">
          <Date date="Thursday, 18 May 2023" />
          <Search />
        </div>
        <div className="mobile__main">
          <Project />
        </div>
      </div>
      <div
        className={`mobile__side ${
          isSidebarVisible ? "sidebar-visible" : "sidebar-hidden"
        }`}
      >
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
};

export default MobileHeader;
