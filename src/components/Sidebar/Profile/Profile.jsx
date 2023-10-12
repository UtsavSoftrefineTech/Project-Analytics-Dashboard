import React, { useState } from "react";

const Profile = (props) => {
  const { name, role, imgUrl } = props;

  const [profile, setProfile] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleContent = () => {
    setProfile(!profile);
  };

  const handleDropdownItemClick = (item) => {
    setSelectedItem(item);
    setProfile(false);
  };

  const dropdownItems = [
    {
      title: "Zambet Projects",
      member: "11 members",
    },
    {
      title: "Another Projects",
      member: "10 members",
    },
  ];

  return (
    <>
      <div className="sidebar__profile" onClick={toggleContent}>
        <div className="sidebar__profile__img">
          <img src={imgUrl} alt="Profile Photo" />
        </div>
        <div className="sidebar__profile__info">
          <p className="sidebar__profile__info__name">
            {selectedItem ? selectedItem.title : name}
          </p>
          <p className="sidebar__profile__info__role">
            {selectedItem ? selectedItem.member : role}
          </p>
        </div>
        <div className="sidebar__profile__arrow">
          <ion-icon
            name={profile ? "chevron-down-outline" : "chevron-forward"}
          ></ion-icon>
        </div>
      </div>

      {profile && (
        <div className="dropdown-content">
          {dropdownItems.map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleDropdownItemClick(item)}
            >
              <div className="sidebar__profile__info">
                <p className="sidebar__profile__info__name">{item.title}</p>
                <p className="sidebar__profile__info__role">{item.member}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Profile;
