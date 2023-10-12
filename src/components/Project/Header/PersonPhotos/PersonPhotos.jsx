import React from "react";

const PersonPhotos = (props) => {
  return (
    <>
      <div className="project__header__persons">
        {props.images.map((image, index) => {
          return (
            <div className="project__header__persons__person" key={index}>
              <img src={image} alt="person" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PersonPhotos;
