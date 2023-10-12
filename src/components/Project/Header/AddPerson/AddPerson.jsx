import React from "react";

const AddPerson = (props) => {
  return (
    <>
      <div className="project__header__addperson">
        <ion-icon name={props.icon}></ion-icon>
      </div>
    </>
  );
};

export default AddPerson;
