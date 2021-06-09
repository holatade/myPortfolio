import emoji from "react-easy-emoji";

import github from "./assets/img/icons/common/github.svg";
import sterlinglogo from "./assets/img/icons/common/sterling.svg";
import code360logo from "./assets/img/icons/common/code360.svg";
import complustech from "./assets/img/icons/common/complustech.svg";

export const greetings = {
  name: "Hassan Hassan",
  title: "Hi all, I'm Hassan",
  description:
    "A passionate Full Stack Web Developer with experience building Web applications with JavaScript / C# / Reactjs / Nodejs / .NET / Python / Django and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1FkMBbtGgIuUM_Ye6SNgwkbdM5vZAOXj6/view?usp=sharing",
};

export const openSource = {
  githubUserName: "1hanzla100",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/hassan.hassan.olatade",
  instagram: "https://www.instagram.com/holatade/",
  twitter: "#",
  github: "https://github.com/holatade",
  linkedin: "https://www.linkedin.com/in/hassanhassanhh/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop scalable and  high performance Rest APIs"),
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Azure / Digital Ocean"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "C",
      fontAwesomeClassname: "logos:c-sharp",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "NET",
      fontAwesomeClassname: "mdi:dot-net",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "logos:azure-icon",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Web Markup (HTML5 & CSS3, SASS) ",
    progressPercentage: "90",
  },
  {
    Stack: "JavaScript, Typescript ",
    progressPercentage: "85",
  },
  {
    Stack: "C#",
    progressPercentage: "90",
  },
  {
    Stack: "Python",
    progressPercentage: "60",
  },
  {
    Stack: ".NET Core MVC/API ",
    progressPercentage: "90",
  },
  {
    Stack: "React, Redux, Mobx",
    progressPercentage: "80",
  },
  {
    Stack: "Node, Express",
    progressPercentage: "80",
  },
  {
    Stack: "Database Technology (MSSQL, SQLite,MongoDB) ",
    progressPercentage: "80",
  },
  {
    Stack: "Version Control Systems (Azure Repo, Git)",
    progressPercentage: "80",
  },
  {
    Stack: "Software Documentation",
    progressPercentage: "75",
  },
];

export const educationInfo = [
  {
    schoolName: "Code 360",
    subHeader: "Diploma in C# and .NET",
    duration: "May 2019 - August 2019",
    desc: "Studied C# and .NET Technologies",
  },
  {
    schoolName: "Alabian Solutions",
    subHeader: "Diploma in Python/Django",
    duration: "May 2019 - August 2019",
    desc: "Studied Python with the Django framework",
  },
  {
    schoolName: "University of Ibadan",
    subHeader: "Masters in Petroleum Geology/Sedimentolgy",
    duration: "May 2017 - June 2019",
  },
  {
    schoolName: "Kwara State University",
    subHeader: "Bachelor of Science in Geology and Mineral Science",
    duration: "May 2010 - July 2015",
  },
];

export const experience = [
  {
    role: "Fullstack Developer",
    company: "Sterling Bank",
    companylogo: sterlinglogo,
    date: "December 2019 – Present",
    desc: "Lead software developer at sterling bank responsible for maintaining and creating the bank web applications and infrastructure",
    descBullets: [
      "Worked on web migration project and rebuild existing .NET products into .NET Core web applications.",
      "Lead team of 5 engineers in developing several solutions platform using Net Core framework and react library.",
      "Responsible for designing data models, optimizing application performance both on front end and back end.",
      "Responsible for application, database architecture and deployment.",
    ],
  },
  {
    role: "Software Developer",
    company: "Forah Technology",
    companylogo: github,
    date: "August 2020 – February 2021",
    desc: "Co-developed a Bureau De Change Management System hosted internally by Travelex Nigeria Limited with .NetCore MVC",
    descBullets: [
      "Implemented an optical capture registration and disbursement system for encashers trying to convert currency.",
      "Implemented visualization tools for better insights and a customizable role-based authentication for security and verifications.",
      "Designed an invoice system to detect encashers yet to receive payout and reduced errors by admins making several payouts to the same encashers.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Complustech",
    companylogo: complustech,
    date: "August 2019 – December 2019",
    desc: "Developed vendor management project with .NET MVC where delta state government can manage their debt, credit and performance.",
    descBullets: [
      "Worked extensively with financial data sets to generate summary reports and different analytical graphical presentations.",
      "Designed system to analyze invoice and give real time alert when debt exceed acceptable threshold.",
      "Designed and integrated feedback and monitoring system which performed routine checks to detect anomalies in payment to vendors in comparison to state budget.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Code 360",
    companylogo: code360logo,
    date: "April 2019 – August 2015",
    desc: "Worked with a team of 5 developers to create the code 360 education portal web API",
    descBullets: [
      "Developed a system to manage current and enroll prospective students for software training, determine their status, pay, performance, assigned tasks, performed tests and manage tutors grading among others.",
      "Responsible for developing Rest APIs with the .NETCore framework , integrating OAuth authentications, payment gateways, and other services.",
    ],
  },
];

export const projects = [
  {
    name: "HealthBanc",
    desc: "Healthbanc is an online platform that host several services. It uses technology, advocacy, and finance to solve the problem of inefficient service delivery within the health sector.",
    link: {
      name: "HealthBanc",
      url: "https://healthbanc.ng",
    },
  },
  {
    name: "EduBanc",
    desc: "Edubanc was created to support the education system and make it thrive. It is on mission to holistically address the challenges of the Nigerian Education System by solving real problems impeding learning, teaching and innovation",
    link: {
      name: "EduBanc",
      url: "https://edubanc.ng",
    },
  },
];