import { Grow, Grid, Icon, Paper, Typography } from "@material-ui/core";
import React from "react";
import "./Resume.css";
import sidebarData from "../../utils/sidebarData";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import TimelineItem from "@material-ui/lab/TimelineItem";

import TimelineContent from "@material-ui/lab/TimelineContent";
import SchoolIcon from "@material-ui/icons/School";
import TimelineDot from "@material-ui/lab/TimelineDot";

const Resume = () => {
  return (
    <>
      {/**About me */}
      <Grow in timeout={1000}>
        <Grid container className="section pb_45 pt_45">
          <Grid item className="section_title bottom_30">
            <span></span>
            <h6 className="section_title_text">About Me</h6>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" className="aboutme_text">
              {sidebarData.about}
            </Typography>
          </Grid>
        </Grid>
      </Grow>

      {/**Education and experience */}
      <Grow in timeout={2000}>
        <Grid container className="section pb_45">
          <Grid item className="section_title bottom_30">
            <span></span>
            <h6 className="section_title_text">Resume</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container className="resume_timeline">
              {/**experiences */}

              {/**education */}
              <Grid item sm={12} md={6}>
                <CustomTimeline title="Education" icon={<SchoolIcon />}>
                  {sidebarData.education.map((education) => (
                    <TimelineItem>
                      <CustomTimelineSeparator />
                      <TimelineContent className="timeline_content">
                        <Typography className="timeline_title">
                          {education.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {education.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {education.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeline>
              </Grid>
              <Grid item sm={12} md={6}>
                <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                  {sidebarData.experiences.map((experience) => (
                    <TimelineItem>
                      <CustomTimelineSeparator />
                      <TimelineContent className="timeline_content">
                        <Typography className="timeline_title">
                          {experience.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {experience.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {experience.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeline>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grow>

      {/**services*/}
      <Grow in timeout={3000}>
        <Grid container className="section pb_45">
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">My services</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacin={3} justify="space-around">
              {sidebarData.services.map((service) => (
                <Grid item xs={12} sm={6} md={3}>
                  <div className="service pt_45">
                    <Icon className="service_icon">{service.icon}</Icon>
                    <Typography className="service_title" variant="h6">
                      {service.title}
                    </Typography>
                    <Typography className="service_description" variant="body2">
                      {service.description}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grow>

      {/** Skills */}
      <Grow in timeout={4000}>
        <Grid container className="section graybg pb_45 pt_45">
          <Grid item xs={12}>
            <Grid container justify="space-between" spacing={3}>
              {sidebarData.skills.map((skill) => (
                <Grid item xss={12} sm={6} md={3}>
                  <Paper elevation={0} className="skill">
                    <Typography variant="h6" className="skill_title">
                      {skill.title}
                    </Typography>
                    {skill.description.map((element) => (
                      <Typography variant="body2" className="skill_description">
                        <TimelineDot
                          variant="outlined"
                          className="timeline_dot"
                        />
                        {element}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grow>
    </>
  );
};

export default Resume;
