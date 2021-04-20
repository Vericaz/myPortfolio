import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Portfolio.css";
import sidebarData from "../../utils/sidebarData";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container className="section pb_45 pt_45">
      <Grid item className="section_title bottom_20">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      {/** tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue == "All" ? "customTabs_item active" : "customTabs_item"
            }
          />

          {[...new Set(sidebarData.portfolio.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == tag ? "customTabs_item active" : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/**Projects images */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {sidebarData.portfolio.map((projects) => (
            <>
              {tabValue === projects.tag || tabValue === "All" ? (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  onClick={() => setProjectDialog(projects)}
                >
                  <Grow in timeout={1000}>
                    <Card
                      className="custom_card"
                      // onClick={() => console.log("something")}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="custom_card_image"
                          image={projects.image}
                          title={projects.title}
                        />
                        <CardContent>
                          <Typography
                            className="custom_card_title"
                            variant="body2"
                          >
                            {projects.title}
                          </Typography>
                          <Typography
                            className="custom_card_caption"
                            variant="caption"
                          >
                            {projects.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      <Dialog
        open={Boolean(projectDialog)}
        onClose={() => setProjectDialog(false)}
        className="project_dialog"
        maxWidth={"lg"}
        fullWidth
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img
          src={projectDialog.image}
          alt=""
          className="project_dialog_image"
        />
        <DialogContent>
          <Typography className="project_dialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="project_dialog_actions">
          {projectDialog?.links?.map((link) => (
            <a href={link.link} target="_blank" className="project_dialog_icon">
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
