import React from "react";
import { Grid, Grow, TextField, Typography } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import CustomButton from "../../components/Button/Button";
import sidebarData from "../../utils/sidebarData";
import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <Grid container spacing={6} className="section pt_45 pb_45">
      {/**Contact form */}

      <ContactForm />

      {/**Contact information */}
      <Grow in timeout={2000}>
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text ">Contact Information</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography className="contact_info_item pt_20">
                    <span>Address: </span> {sidebarData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact_info_item">
                    <span>Phone: </span> {sidebarData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact_info_item">
                    <span>Email: </span> {sidebarData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container className="contact_info_socials_container">
                {Object.keys(sidebarData.socials).map((key) => (
                  <Grid item className="contact_info_social">
                    <a href={sidebarData.socials[key].link}>
                      {sidebarData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grow>
    </Grid>
  );
};

export default Contact;
