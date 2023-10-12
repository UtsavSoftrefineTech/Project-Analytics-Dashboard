import React from "react";

const SideButton = ({ toggleSidebar }) => {
  return (
    <div>
      <button className="mobile__header__btn" onClick={toggleSidebar}>
        <div className="mobile__header__btn__line line--1"></div>
        <div className="mobile__header__btn__line line--2"></div>
        <div className="mobile__header__btn__line line--3"></div>
      </button>
    </div>
  );
};

export default SideButton;
