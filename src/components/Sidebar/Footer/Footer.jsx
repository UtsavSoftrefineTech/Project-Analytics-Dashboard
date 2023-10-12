import React from "react";
import Divider from "../Divider/Divider";

const Footer = (props) => {
  return (
    <>
      <Divider />
      <div className="sidebar__footer">
        <div className="sidebar__footer__icon">
          <ion-icon name={props.icon}></ion-icon>
        </div>
        <div className="sidebar__footer__text">
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
