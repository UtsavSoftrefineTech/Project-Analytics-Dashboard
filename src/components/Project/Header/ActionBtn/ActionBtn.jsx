import React from "react";

const ActionBtn = (props) => {
  return (
    <>
      <div className="project__header__actionBtn">
        <ion-icon name={props.icon}></ion-icon>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default ActionBtn;
