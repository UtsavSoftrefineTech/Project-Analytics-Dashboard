import React from "react";
import Time from "./Time/Time";
import FeatureList from "./FeatureList/FeatureList";

// Change the featureItems array to include the new feature
const featureItems = [
  { iconName: "bookmarks-outline", text: "All Task" },
  { iconName: "filter-outline", text: "Filter" },
  { iconName: "chevron-expand-outline", text: "Sort: Priority" },
  { iconName: "link-outline", text: "Public link: off" },
  { iconName: "pencil-outline", text: "Customize" },
];

const Heading = () => {
  return (
    <>
      <div className="project__heading">
        <Time />
        <FeatureList featureItems={featureItems} />
      </div>
    </>
  );
};

export default Heading;
