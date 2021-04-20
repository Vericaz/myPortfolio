import { Card, Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import GetAppIcon from "@material-ui/icons/GetApp";
import sidebarData from "../../utils/sidebarData";
import CustomButton from "../Button/Button";
import profilepic from "../../assests/images/profilepic.jpg";
import "./Sidebar.css";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import CV from "../../assests/CV.pdf";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Sidebar = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{sidebarData.name}</Typography>
        <Typography className="title">{sidebarData.title}</Typography>
      </div>

      <Card className="profile_image">
        <img src={profilepic} alt="" />
      </Card>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          {/* <CustomTimelineItem title="Name" text={sidebarData.name} />
          <CustomTimelineItem title="Title" text={sidebarData.title} /> */}
          <CustomTimelineItem title="Email" text={sidebarData.email} />
          <CustomTimelineItem title="Phone" text={sidebarData.phone} />
          <CustomTimelineItem
            title="Github"
            text="https://github.com/Vericaz"
            link={sidebarData.socials.GitHub.link}
          />

          {/* {Object.keys(sidebarData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={sidebarData.socials[key].text}
              link={sidebarData.socials[key].link}
            />
          ))} */}
        </CustomTimeline>
        <br />
        <div className="btn_container">
          {/* <a href={CV} download>
            Click to download
          </a> */}
          <a href={CV} target="_blank">
            <CustomButton
              text={"Download CV"}
              icon={<GetAppIcon />}
            ></CustomButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
