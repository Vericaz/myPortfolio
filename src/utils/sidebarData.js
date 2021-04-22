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
    "Recently certificated Front-end developer @Code Academy Skopoje. Spent the last 9 months building my knowledge and skills about HTML, CSS, Javascript and React with the help of my mentor as well as my team. I can say that this course has thaugth me a lot about creativity, logic and finding different fun ways to write your own code. I am currently looking for internship/job opportunity where I can upgrade and use my skills. \n\n I use my free time painting, watching movies or reading :)",
  name: " Verica Zoksimovska",
  title: " Front end developer",

  birthday: "September 18th 1996",
  email: " vericaz1809@gmail.com",
  address: "Mite Bogoevski 3/10",
  phone: "075 404 335",

  socials: {
    GitHub: {
      link: "https://github.com/Vericaz",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
    Facebook: {
      link: "https://www.facebook.com/zoksimovska",
      text: "MyFacebook",
      icon: <FacebookIcon />,
    },
    Instagram: {
      link: "https://www.instagram.com/zoksimovskaverica/",
      text: "MyInstagram",
      icon: <InstagramIcon />,
    },
    LinkedIn: {
      link:
        "https://www.linkedin.com/in/verica-zoksimovska-stefanovska-061854186/",
      text: "MyLinkedIn",
      icon: <LinkedInIcon />,
    },
  },

  experiences: [
    {
      title: "Sales representative @Slice",
      date: "23/11/2020 – 25/12/2020 – Skopje, North Macedonia",
      description:
        "Presenting the value of the product to a range of prospective partners while meeting or exceeding sales goals",
    },
    {
      title: "Waitress @Ljubov In DOOEL - Coffee Bar Sindikat",
      date: "15/07/2019 – 15/09/2020 – Skopje, North Macedonia",
      description:
        "Taking customer orders, offering menu recommendations, deliver checks and collect bill payments, and everything else in between that would make the customers feel at home",
    },
    {
      title: "Bartender @Jordan Pond House",
      date: "01/06/2018 – 15/09/2018 – Seal Harbor, United States",
      description:
        "Preparing bevarages, communicating with servers about orders, cleaning and restocking the bar",
    },
  ],

  education: [
    {
      title: "Front end academy",
      date: "June 2020 - April 2021",
      description:
        "Learning frontend development from scratch, including HTML 5, CSS, Jacascript, React.js, Redux",
    },
    {
      title:
        "Certificate for completed Introduction to Coding with HTML, CSS, and JavaScript Course",
      date: "April 2020",
      description: "Online course at International Open Academy",
    },
    {
      title:
        "Certificate for completed training in Skills for success - Motiva Management Education and Training",
      date: "february 2019",
      description:
        "Training provided by Pivara Skopje AD where I learned about different communication, verbal and nonverbal skills that lead to personal and professional success through different types of examples and engagement exercises",
    },
    {
      title: "Ss. Cyril and Methodius University in Skopje",
      date: "September 2015 - June 2020",
      description: "Bachelor degree in the field of Electronic Business",
    },
    {
      title: "High School Diploma",
      date: "2011-2015",
      description: "",
    },
  ],

  services: [
    {
      title: "Front-end development",
      description: "",
      icon: <WebOutlined />,
    },
    // {
    //   title: "Branding identity",
    //   description:
    //     "We will make you a brand that is catchy and leaves a trace.",
    //   icon: <AssignmentIndOutlined />,
    // },
    // {
    //   title: "Illustrator",
    //   description: "I have been working on illustration design for 6 years.",
    //   icon: <GestureOutlined />,
    // },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: ["HTML", "CSS", "Bootstrap", "Javascript", "React.js"],
    },
    {
      title: "Programming skills/tools",
      description: ["Visual Studio Code", "JGithub"],
    },
    {
      title: "Personal",
      description: [
        "Team-working",
        "Responsibility",
        "Logical thinking",
        "Motivation",
        "Flexibility",
        "Friendliness",
        "Active listening",
        "Verbal and non-verbal communication skills",
      ],
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
        "https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Personal Portfolio",
      caption: "Responsive personal portfolio website ",
      description:
        "My first individual React project built with Material UI, React bootstrap, Javascrip",
      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "React",
      image:
        "https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
      image:
        "https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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
      image:
        "https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Javascript Project 2",
      caption: "A short description of my project",
      description: "This is my projects description.",
      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHub /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    // {
    //   tag: "Illustrator",
    //   image:
    //     "https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    //   title: "Illustrator Project 1",
    //   caption: "A short description of my project",
    //   description: "This is my projects description.",
    //   links: [
    //     { link: "https://www.google.com", icon: <YouTube /> },
    //     { link: "https://www.github.com", icon: <GitHub /> },
    //     { link: "https://www.google.com", icon: <Language /> },
    //   ],
    // },
  ],
};
