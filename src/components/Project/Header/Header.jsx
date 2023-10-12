import React from "react";
import ProjectTitle from "./ProjectTitle/ProjectTitle";
import ProjectPage from "./ProjectPage/ProjectPage";
import PersonPhotos from "./PersonPhotos/PersonPhotos";
import AddPerson from "./AddPerson/AddPerson";
import Icons from "./Icons/Icons";
import ActionBtn from "./ActionBtn/ActionBtn";

// Change the images array to include the new image
const images = [
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://wallpapercave.com/wp/wp6112875.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg",
  "https://images.news18.com/ibnlive/uploads/2021/09/helsinki.jpg",
];

const Header = () => {
  return (
    <>
      <div className="project__header">
        <ProjectTitle />
        <ProjectPage />
        <Icons icon="star-outline" />
        <Icons icon="alert-circle-outline" />
        <PersonPhotos images={images} />
        <AddPerson icon="add" />
        <ActionBtn icon="share-social-outline" text="Share" />
      </div>
    </>
  );
};

export default Header;
