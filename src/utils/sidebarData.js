import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import {
  AssignmentIndOutlined,
  GestureOutlined,
  GitHub,
  Language,
  WebOutlined,
  YouTube,
} from "@material-ui/icons";

export default {
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros nunc, consequat non lacus eu, euismod ultrices ante. Nulla est diam, sollicitudin blandit tristique in, pretium in metus. Suspendisse nulla lectus, ornare facilisis mauris vitae, bibendum porta enim. Nam aliquam lobortis ante, et tempor elit cursus a. Phasellus ut risus hendrerit nulla vestibulum egestas at id arcu. Fusce sit amet lorem volutpat, varius mi nec, fermentum elit. \n\n  Morbi ac ipsum ac mi auctor finibus. Pellentesque dolor nunc, vulputate tincidunt facilisis vitae, hendrerit nec diam. Etiam commodo dictum nisi sed finibus. Fusce ullamcorper laoreet posuere. Sed mollis aliquam diam id malesuada. Suspendisse ornare eros justo, eu tincidunt ante rhoncus pellentesque. Nunc volutpat tincidunt dapibus. In laoreet bibendum libero, at varius erat sagittis non. Donec urna arcu, auctor at odio id, rhoncus tincidunt nulla. Maecenas eget consequat nibh, pulvinar pulvinar est. Maecenas a consequat libero, vitae mollis nisi. Sed tincidunt ac ipsum in aliquet.",
  name: " Verica Zoksimovska",
  title: " Front end developer",

  birthday: "September 18th 1996",
  email: " vericaz1809@gmail.com",
  address: "123 St",
  phone: "075 111 111",

  socials: {
    GitHub: {
      link: "https://www.github.com",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
    Facebook: {
      link: "https://www.facebook.com",
      text: "MyFacebook",
      icon: <FacebookIcon />,
    },
    Instagram: {
      link: "https://www.instagram.com",
      text: "MyInstagram",
      icon: <InstagramIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com",
      text: "MyLinkedIn",
      icon: <LinkedInIcon />,
    },
  },

  experiences: [
    {
      title: "work 1",
      date: "2018 - present",
      description: "Here is a description of the work I do",
    },
    {
      title: "work 2",
      date: "2017 - 2018",
      description: "Here is a description of the work I do",
    },
    {
      title: "work 3",
      date: "2015-2017",
      description: "Here is a description of the work I do",
    },
  ],

  education: [
    {
      title: "Front end academy",
      date: "2020 - present",
      description: "Here is a description of my school education",
    },
    {
      title: "University",
      date: "2015 - 2020",
      description: "Here is a description of my school education",
    },
    {
      title: "High School",
      date: "2011-2015",
      description: "Here is a description of my school education",
    },
  ],

  services: [
    {
      title: "Web development",
      description: "I have been working on web design for 10 years.",
      icon: <WebOutlined />,
    },
    {
      title: "Branding identity",
      description:
        "We will make you a brand that is catchy and leaves a trace.",
      icon: <AssignmentIndOutlined />,
    },
    {
      title: "Illustrator",
      description: "I have been working on illustration design for 6 years.",
      icon: <GestureOutlined />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: ["ReactJS", "Javascript", "Bootstrap", "Material UI"],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "Java", "Puthon"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "SQL", "MySQL"],
    },
    {
      title: "SOURCE-CONTROL",
      description: ["Git", "Github"],
    },
  ],

  portfolio: [
    {
      tag: "React",
      image:
        "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "React Project 1",
      caption: "A short description of my project",
      description: "This is my projects description.",
      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "React",
      image: "",
      title: "React Project 2",
      caption: "A short description of my project",
      description: "This is my projects description.",
      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "JavaScript",
      image: "",
      title: "Javascript Project 1",
      caption: "A short description of my project",
      description: "This is my projects description.",
      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "JavaScript",
      image: "",
      title: "Javascript Project 2",
      caption: "A short description of my project",
      description: "This is my projects description.",
      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Illustrator",
      image: "",
      title: "Illustrator Project 1",
      caption: "A short description of my project",
      description: "This is my projects description.",
      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
  ],
};
