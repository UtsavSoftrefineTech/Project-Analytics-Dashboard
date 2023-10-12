import React from "react";

const ProfileDetails = (props) => {
  return (
    <>
      <div className="header__profileName">
        <p>{props.name}</p>
      </div>
    </>
  );
};

export default ProfileDetails;
