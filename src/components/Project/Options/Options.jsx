import React from "react";

// Change the tabs array to include the new tab
const tabs = [
  "Overview",
  "List",
  "Board",
  "Timeline",
  "Calendar",
  "Workflow",
  "Dashboard",
  "More..",
];

const Options = () => {
  return (
    <>
      <div className="project__options">
        <ul className="project__options__items">
          {tabs.map((text, index) => (
            <li key={index}>
              <button
                className={`project__options__items__tablink ${
                  text === "Board" ? "board-tab" : ""
                }`}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Options;
