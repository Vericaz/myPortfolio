import {
  FormControl,
  Grid,
  Grow,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import CustomButton from "../../components/Button/Button";
import sidebarData from "../../utils/sidebarData";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const serviceID = "service_h4uv921";
  const templateID = "template_7w8sqrs";
  const userID = "user_J1wxj3vc3qRdIkvuhum0j";

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <Grid container spacing={6} className="section pt_45 pb_45">
      {/**Contact form */}

      <Grow in timeout={1000}>
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact form</h6>
            </Grid>
            <form onClick={sendEmail}>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="name"
                      label="Name"
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="email"
                      label="E-mail"
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="message"
                      label="Message"
                      multiline
                      rows={5}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton className="contact_btn" text="Submit" />
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grow>

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
