import React from "react";

const Search = () => {
  return (
    <>
      <div class="header__search">
        <div className="header__search__icon">
          <ion-icon name="search"></ion-icon>
        </div>
        <input
          className="header__search__input"
          type="text"
          placeholder="Search on workpace"
        />
      </div>
    </>
  );
};

export default Search;
