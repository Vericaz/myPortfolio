// import { Grid, TextField } from "@material-ui/core";
// import { Send } from "@material-ui/icons";
import React from "react";
import emailjs from "emailjs-com";

import CustomButton from "../Button/Button";
import { Grid, TextField, Grow } from "@material-ui/core";
import { ArrowUpward } from "@material-ui/icons";

export const ContactForm = () => {
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
    document.getElementById("myForm").reset();
  }

  return (
    <Grow in timeout={1000}>
      <Grid item xs={12} lg={7}>
        <Grid container>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">Contact form</h6>
          </Grid>
          <form className="contact-form" onSubmit={sendEmail} id="myForm">
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
                    name="subject"
                    label="Subject"
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
                <Grid item xs={12}></Grid>

                <input type="submit" value="Submit" className="custom_btn" />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grow>
  );
};

export default ContactForm;
