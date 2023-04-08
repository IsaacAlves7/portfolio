import {
  mobile,
  backend,
  creator,
  web,
  js,
  java,
  python,
  sql,
  csharp,
  globo,
  hmp,
  ezops,
  p1,
  p2,
  p3,
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
    id: "blog",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Development",
    icon: web,
  },
  {
    title: "Data Engineering",
    icon: mobile,
  },
  {
    title: "DevOps Engineering",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JS",
    icon: js,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C-Sharp",
    icon: csharp,
  },
];

const experiences = [
  {
    title: "DevOps Intern",
    company_name: "EZOps.cloud",
    icon: ezops,
    iconBg: "#383E56",
    date: "Jul 2021 - Jan 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer trainee",
    company_name: "HeadMind Partners",
    icon: hmp,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Set 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Scientist intern",
    company_name: "Globo",
    icon: globo,
    iconBg: "#E6DEDD",
    date: "Set 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Isaac é um profissional dedicado, sempre atento a detalhes e na resolução de problemas. Com seu conhecimento, não hesita em compartilhar e, é muito didático ao explicar.",
    name: "João Pedro",
    designation: "DevOps Engineer",
    company: "T Maior",
    image: "https://avatars.githubusercontent.com/u/77984420?v=4",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Jackson Santos",
    designation: "Full Stack Developer",
    company: "HeadMind Partners",
    image: "https://avatars.githubusercontent.com/u/19917956?v=4",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Projetos de portfolio feitos com altas tecnologias de Front-end.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
    ],
    image: p1,
    source_code_link: "https://github.com/IsaacAlves7/portfolio",
  },
  {
    name: "Cluster Standard solution",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: p2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Static Website Hosting solution",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Git",
        color: "green-text-gradient",
      },
      {
        name: "Vue.js",
        color: "pink-text-gradient",
      },
    ],
    image: p3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
