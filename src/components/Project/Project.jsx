import React from "react";
import Header from "./Header/Header";
import Heading from "./Heading/Heading";
import Options from "./Options/Options";
import Section from "./Content/Section/Section";

// Change the info array to include the new tab
const info = [
  {
    title: "New request",
    color: "red",
    cardData: [
      {
        status: "High Priority",
        statusColor: "#f25455",
        statusBackground: "#feebec",
        title: "Hero section",
        personImg:
          "https://images.pexels.com/photos/4689912/pexels-photo-4689912.jpeg?auto=compress&cs=tinysrgb&w=600",
        time: "20 May, 2023 - 24 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
      {
        status: "Medium Priority",
        statusColor: "#DEB754",
        statusBackground: "#FFFBEF",
        title: "Careers",
        personImg:
          "https://images.pexels.com/photos/10513822/pexels-photo-10513822.jpeg?auto=compress&cs=tinysrgb&w=600",
        time: "21 May, 2023 - 26 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
      {
        status: "Low Priority",
        statusColor: "#7FA9E7",
        statusBackground: "#EAF1FC",
        title: "Hero section",
        personImg:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
        time: "20 May, 2023 - 24 May, 2023",
        imageSrc:
          "https://images.pexels.com/photos/378268/pexels-photo-378268.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
    ],
  },
  {
    title: "In progress",
    color: "blue",
    cardData: [
      {
        status: "High Priority",
        statusColor: "#f25455",
        statusBackground: "#feebec",
        title: "Hero section",
        personImg:
          "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
        time: "20 May, 2023 - 24 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
      {
        status: "Medium Priority",
        statusColor: "#DEB754",
        statusBackground: "#FFFBEF",
        title: "Careers",
        personImg:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
        time: "21 May, 2023 - 26 May, 2023",
        imageSrc:
          "https://images.pexels.com/photos/4349849/pexels-photo-4349849.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
      {
        status: "Low Priority",
        statusColor: "#7FA9E7",
        statusBackground: "#EAF1FC",
        title: "Hero section",
        personImg:
          "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
        time: "20 May, 2023 - 24 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
    ],
  },
  {
    title: "Needs review",
    color: "yellow",
    cardData: [
      {
        status: "High Priority",
        statusColor: "#f25455",
        statusBackground: "#feebec",
        title: "Hero section",
        personImg:
          "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600",
        time: "20 May, 2023 - 24 May, 2023",
        imageSrc:
          "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=600",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
      {
        status: "Medium Priority",
        statusColor: "#DEB754",
        statusBackground: "#FFFBEF",
        title: "Careers",
        personImg:
          "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
        time: "21 May, 2023 - 26 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
      {
        status: "Low Priority",
        statusColor: "#7FA9E7",
        statusBackground: "#EAF1FC",
        title: "Hero section",
        personImg:
          "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
        time: "20 May, 2023 - 24 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
    ],
  },
  {
    title: "Done",
    color: "green",
    cardData: [
      {
        status: "High Priority",
        statusColor: "#f25455",
        statusBackground: "#feebec",
        title: "Hero section",
        personImg:
          "https://images.pexels.com/photos/868113/pexels-photo-868113.jpeg?auto=compress&cs=tinysrgb&w=600",
        time: "20 May, 2023 - 24 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
      {
        status: "Medium Priority",
        statusColor: "#DEB754",
        statusBackground: "#FFFBEF",
        title: "Careers",
        personImg:
          "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600",
        time: "21 May, 2023 - 26 May, 2023",
        description:
          "Use attached image and don't forget to stick with the brand voice. Make it elegant and don't overuse rounded..",
        subtask: "5 Subtask",
        attachment: "3 Attachments",
      },
    ],
  },
];

const Project = () => {
  return (
    <>
      <div className="project">
        <Header />
        <Heading />
        <Options />
        <Section info={info} />
      </div>
    </>
  );
};

export default Project;
