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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  employeedashboard,
  mern,
  ai
  
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Collaborator",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Prodigy Infotech",

    iconBg: "#383E56",
    date: "july 2024 - August 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Web Developer",
    company_name: "Octanet Services",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2024 - September 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "MGDRSCT( CHARITABLE TRUST)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feberuary 2025 - May 2025",
    points: [
      "Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), with a focus on backend architecture and integration..",
      "Gained hands-on experience in building RESTful APIs, handling database operations, and connecting frontend with backend services.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborated with cross-functional teams including UI/UX designers and frontend developers to ensure seamless integration between client-side and server-side components."


    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
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
    name: "ADMIN_EMPLOYEE DASHBOARD",
    description:
      "Employee Managment Dahsboard - A TMS (task management system) which dynamically has two panels Employee dashboard and administrator dashboard . Admin can assign jobs to the employees and the employees can dynamically accept",
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
    image: employeedashboard,
    source_code_link: "https://github.com/",
  },
  {
    name: "MERN AI COMPANION (CHAT APPLICATION)",
    description:
      "AI enhnaced real time fullstack chat application which helps users to collaborate with each other to make a mern applicationn.Users can chat..code for the project With the help of AI..and the server for node.js run on the users browser itself",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "NODE.js",
        color: "pink-text-gradient",
      },
       {
        name: "AI",
        color: "blue-text-gradient",
      },
    ],
    image: mern,
    source_code_link: "https://github.com/",
  },
  {
    name: " CODEREV.AI ----------  AI-POWERED CODE REVIEWER",
    description:
      "Get specific reviews and suggestions when you need them  dive deeper into concepts and bugs coming you way From preperation to mastery.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "geminiAI",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
