import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, withRouter } from "react-router-dom";

import { HomeRounded, Telegram } from "@material-ui/icons/";

import sidebarData from "../../utils/sidebarData";

// import CustomButton from "../Button/Button";

import { Nav, Navbar } from "react-bootstrap";

import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="header">
      {/* Home Link */}

      <Nav.Link eventKey="1" as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/**Resume Link */}
          <Nav.Link
            eventKey="1"
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          {/**Portfolio Link */}
          <Nav.Link
            eventKey="1"
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
          {/**Contact Link */}

          <Nav.Link
            eventKey="1"
            as={NavLink}
            to="/contact"
            className={
              pathName === "/contact" ? "header_link_active" : "header_link"
            }
          >
            Contact
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(sidebarData.socials).map((key) => (
            <a href={sidebarData.socials[key].link} target="_blank">
              {sidebarData.socials[key].icon}
            </a>
          ))}
          {/* <CustomButton text={"Hire Me"} icon={<Telegram />} /> */}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
