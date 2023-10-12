import React from "react";

const FeatureList = (props) => {
  return (
    <>
      <div className="project__heading__features">
        {props.featureItems.map((featureItem, index) => (
          <div className="project__heading__features__feature" key={index}>
            <div className="project__heading__features__feature__icon">
              <ion-icon name={featureItem.iconName}></ion-icon>
            </div>
            <div className="project__heading__features__feature__text">
              <p>{featureItem.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeatureList;
