import React from "react";

const Card = (props) => {
  const { cardData, infoTitle } = props; // Destructure the imageSrc from props

  // Determine whether to apply the blur class based on infoTitle
  const isBlurred = infoTitle === "Done";

  return (
    <>
      <div className={`project__content__info`}>
        {cardData.map((data, index) => (
          <div
            className={`project__content__card ${isBlurred ? "blur" : ""}`}
            key={index}
          >
            <div className="project__content__card__heading">
              <div
                className="project__content__card__heading__showbtn"
                style={{
                  backgroundColor: data.statusBackground,
                  color: data.statusColor,
                }}
              >
                <p>{data.status}</p>
              </div>
              <div className="project__content__card__heading__actionbtn">
                <ion-icon name="ellipsis-vertical-outline"></ion-icon>
              </div>
            </div>
            {isBlurred ? (
              <div className="project__content__card__title">
                <s>{data.title}</s>
              </div>
            ) : (
              <div className="project__content__card__title">
                <p>{data.title}</p>
              </div>
            )}

            {data.imageSrc && (
              <div className="project__content__card__image">
                <img src={data.imageSrc} alt="" />
              </div>
            )}
            <div className="project__content__card__detail">
              <div className="project__content__card__detail__person">
                <img src={data.personImg} alt="Person" />
              </div>
              <div className="project__content__card__detail__time">
                <p>{data.time}</p>
              </div>
            </div>
            <div className="project__content__card__description">
              <p>{data.description}</p>
            </div>
            <div className="project__content__card__divider"></div>
            <div className="project__content__card__footer">
              <div className="project__content__card__footer__btns">
                <div className="project__content__card__footer__btns__item">
                  <div className="project__content__card__footer__btns__item__icon">
                    <ion-icon name="chatbox-outline"></ion-icon>
                  </div>
                  <div className="project__content__card__footer__btns__item__text">
                    <p>{data.subtask}</p>
                  </div>
                </div>
                <div className="project__content__card__footer__btns__item">
                  <div className="project__content__card__footer__btns__item__icon">
                    <ion-icon name="attach-outline"></ion-icon>
                  </div>
                  <div className="project__content__card__footer__btns__item__text">
                    <p>{data.attachment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
