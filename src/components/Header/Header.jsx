import React from "react";
import IconBtn from "./IconBtn/IconBtn";
import Date from "./Date/Date";
import Search from "./Search/Search";
import PersonAvatar from "./PersonAvatar/PersonAvatar";
import ProfileDetails from "./ProfileDetails/ProfileDetails";

// Change your profile image url here
const profileImg = "https://wallpapercave.com/wp/wp6112875.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <Date date="Thursday, 18 May 2023" />
        <Search />
        <IconBtn icon="settings-outline" />
        <div className="alert">
          <IconBtn icon="notifications-outline" />
          <div className="notifications-alert"></div>
        </div>
        <PersonAvatar img={profileImg} />
        <ProfileDetails name="Zhofran ardyan" />
      </div>
    </>
  );
};

export default Header;
