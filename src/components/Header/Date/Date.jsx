import React from "react";

const Date = (props) => {
  return (
    <>
      <div className="header__date">
        <p>{props.date}</p>
      </div>
    </>
  );
};

export default Date;
