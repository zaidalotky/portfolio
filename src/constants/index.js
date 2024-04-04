import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pww,
  freelance,
  youtupe,
  weather,
  chat,
  wsp,
  php,
  sql
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Php",
    icon: php,
  },
  {
    name: "MySql",
    icon: sql,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Pww",
    icon: pww,
    iconBg: "#383E56",
    date: " 2023 -  present",
    points: [
      "Developing applications that help the administration to complete the tasks at the maximum speed and in full professionalism.",
      "helping supervisors to communicate with employees easily and smoothly.",
      "help administrators to monitor and organize business in a way.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "FreeLancer",
    icon: freelance,
    iconBg: "#383E56",
    date: "Jan 2022 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Develope many of applications and make them faster.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Faisal",
    designation: "Manager",
    company: "Pww",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Zaid does.",
    name: "Loui Alajlany",
    designation: "Manager",
    company: "Almni Altafok",
  },
];

const projects = [
  {
    name: "Za Youtupe",
    description:
      "Application like youtupe you can see the videos without Adds and smoothly with a lot of types and categories  .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: youtupe,
    source_code_link: "https://github.com/zaidalotky",
  },
  {
    name: "Za Weather",
    description:
      "Web application that enables users to search for status weather, and you can search about weather any country.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/zaidalotky",
  },
  {
    name: "Za Chat",
    description:
      "Web application you can make chat with your team by it, and you can create rooms inside it and make chat in each room.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fetchApi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/zaidalotky",
  },
  {
    name: "Pww Dashboard",
    description:
      "Web application helps adminstrators  , and Increasing the efficiency of employees' work.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pww,
    source_code_link: "https://github.com/zaidalotky",
  },
  {
    name: "Store WSP",
    description:
      "Online store shows the products and the prices , it's very effective .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: wsp,
    source_code_link: "https://github.com/zaidalotky",
  },
];

export { services, technologies, experiences, testimonials, projects };
