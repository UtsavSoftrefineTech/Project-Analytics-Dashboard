import React from "react";
import Card from "./Card/Card";

const Section = (props) => {
  const { info } = props; // Destructure the imageSrc from props

  const sectionCount = info.length;

  return (
    <>
      <div
        className="project__content"
        style={{
          gridTemplateColumns: `repeat(${sectionCount}, 29%)`,
        }}
      >
        {info.map((info, index) => (
          <div key={index} className="project__content__items">
            <div className="project__content__heading">
              <div
                className="project__content__heading__btns"
                style={{ backgroundColor: info.color }}
              ></div>
              <div className="project__content__heading__title">
                <p>{info.title}</p>
              </div>
              <div className="project__content__heading__sidebtns">
                <ion-icon name="add-outline"></ion-icon>
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
              </div>
            </div>
            <Card cardData={info.cardData} infoTitle={info.title} />
          </div>
        ))}
      </div>

      <style>
        {`
          @media screen and (max-width: 700px) {
            .project__content {
              grid-template-columns: repeat(${sectionCount}, 31%) !important;
            }
          }
          @media screen and (max-width: 540px) {
            .project__content {
              grid-template-columns: repeat(${sectionCount}, 35%) !important;
            }
          }
          @media screen and (max-width: 440px) {
            .project__content {
              grid-template-columns: repeat(${sectionCount}, 43%) !important;
            }
          }

          @media screen and (max-width: 375px) {
            .project__content {
              grid-template-columns: repeat(${sectionCount}, 53%) !important;
            }
          }

        `}
      </style>
    </>
  );
};

export default Section;
