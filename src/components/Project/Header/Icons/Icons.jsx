import React from "react";

const Icons = (props) => {
  return (
    <>
      <div className="project__header__icon">
        <ion-icon name={props.icon}></ion-icon>
      </div>
    </>
  );
};

export default Icons;
