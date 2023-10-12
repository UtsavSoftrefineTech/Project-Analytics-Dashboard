import React from "react";

const Menu = (props) => {
  return (
    <ul className="sidebar__menus">
      {props.menuItems.map((menuItem, index) => (
        <li className="sidebar__menus__menu" key={index}>
          <a className="sidebar__menus__menu__icon">
            <ion-icon name={menuItem.iconName}></ion-icon>
          </a>
          <a className="sidebar__menus__menu__text">
            {menuItem.text === "My Task" ? (
              <p>
                {menuItem.text}
                <span className="sidebar__menus__menu__notification">4</span>
              </p>
            ) : (
              <p>{menuItem.text}</p>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
