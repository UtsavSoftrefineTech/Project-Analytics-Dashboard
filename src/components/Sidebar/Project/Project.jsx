import React, { useState } from "react";
import Divider from "../Divider/Divider";
import Footer from "../Footer/Footer";

const Project = (props) => {
  const { projectData } = props;
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleContent = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        {projectData.map((project, index) => (
          <div className="sidebar__project" key={index}>
            <div
              className="sidebar__project__header"
              onClick={() => toggleContent(index)}
            >
              <div className="sidebar__project__header__arrow">
                <ion-icon
                  name={
                    activeIndex === index
                      ? "chevron-down-outline"
                      : "chevron-forward"
                  }
                ></ion-icon>
              </div>
              <div className="sidebar__project__header__text">
                <p>{project.title}</p>
              </div>
              <div className="sidebar__project__header__icon">
                <ion-icon name="add-outline"></ion-icon>
              </div>
            </div>

            {activeIndex === index && (
              <>
                <div className="sidebar__project__people">
                  {project.images.map((image, imgIndex) => (
                    <div
                      className="sidebar__project__people__img"
                      key={imgIndex}
                    >
                      <img src={image} alt="Person Photo" />
                    </div>
                  ))}
                </div>

                <div className="sidebar__project__types">
                  {project.types.map((type, typeIndex) => (
                    <div
                      className="sidebar__project__types__item"
                      key={typeIndex}
                    >
                      <div
                        className="sidebar__project__types__item__box"
                        style={{ backgroundColor: type.color }}
                      ></div>
                      <div className="sidebar__project__types__item__text">
                        <p>{type.name}</p>
                      </div>
                      <div className="sidebar__project__types__item__icon">
                        <ion-icon name={type.icon}></ion-icon>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
        <Footer text="Favorites" icon="star" />
      </div>
    </>
  );
};

export default Project;
