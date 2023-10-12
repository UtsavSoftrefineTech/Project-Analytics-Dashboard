import React from "react";

const PersonAvatar = (props) => {
  return (
    <>
      <div className="header__avatar">
        <img src={props.img} alt="Person" />
      </div>
    </>
  );
};

export default PersonAvatar;
