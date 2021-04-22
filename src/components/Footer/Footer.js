import { Typography } from "@material-ui/core";
import React from "react";

import sidebarData from "../../utils/sidebarData";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{sidebarData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          {/* Designed and Developed by Verica Zoksimovska
          <br /> */}
          Clone idea from ©
          <a
            href="http://tavonline.net/html/mat/default/index.html"
            target="_blank"
          >
            Tavonline.
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
