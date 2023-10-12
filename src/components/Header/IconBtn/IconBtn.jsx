import React from "react";

const IconBtn = (props) => {
  return (
    <>
      <div className="header__iconBtn">
        <ion-icon name={props.icon}></ion-icon>
      </div>
    </>
  );
};

export default IconBtn;
