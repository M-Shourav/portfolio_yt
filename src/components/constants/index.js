import { IoMdMenu } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { SiAntdesign, SiProgress } from "react-icons/si";
import {
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
} from "../../assets/index";

export const navLinks = [
  {
    _id: 1001,
    title: "Home",
    link: "home",
  },
  {
    _id: 1002,
    title: "Features",
    link: "features",
  },
  {
    _id: 1003,
    title: "Projects",
    link: "project",
  },
  {
    _id: 1004,
    title: "Resume",
    link: "resume",
  },
  // {
  //   _id: 1005,
  //   title: "Testimonials",
  //   link: "testimonials",
  // },
  {
    _id: 1006,
    title: "Contacts",
    link: "contacts",
  },
];

export const FeaturesDes = [
  {
    title: "Business Stratagy",
    des: `Business strategist skilled in developing innovative plans to drive growth, optimize operations, and boost profits.`,
    icons: <IoMdMenu />,
  },
  {
    title: "Web Development",
    des: `MERN stack developer focused on building user-centric, efficient apps with MongoDB, Express, React, and Node.js.`,
    icons: <CiGlobe />,
  },
  {
    title: "UX Design",
    des: `UX designer focused on creating seamless, user-friendly interfaces to enhance user satisfaction and engagement.`,
    icons: <SiAntdesign />,
  },
  {
    title: "SEO Optimization",
    des: `SEO optimization specialist enhancing website visibility and driving organic traffic through strategic keyword research and on-page tactics.`,
    icons: <SiProgress />,
  },
];

export const projectArray = [
  {
    _id: 501,
    images: project_1,
    title: "Shofy E-Commerce Clone",
    des: `
    Shofy is an online e-commerce platform that allows
    users to browse, search, and purchase a wide range of
    products. It provides an intuitive and user-friendly
    interface, making it easy for customers to navigate
    through various categories, view product details, and
    complete transactions.
    `,
    icons_1: <FaGithub />,
    icons_2: <CiGlobe />,
    link: "https://shofyyt.vercel.app/",
    gitlinks: "https://github.com/M-Shourav/shofyecommerce",
  },
  {
    _id: 502,
    images: project_2,
    title: "Amazon E-Commerce Clone",
    des: `Amazon is an online store specializing in various 
          products, such as electronics and fashion. It offers a user
          friendly design, secure payments, fast shipping, and
          reliable customer support, providing a seamless shopping
          experience.`,
    icons_1: <FaGithub />,
    icons_2: <CiGlobe />,
    link: "https://amazon-clone-cc-2o.vercel.app/",
    gitlinks: "https://github.com/M-Shourav/amazon_cloneyt",
  },
  {
    _id: 503,
    images: project_3,
    title: "Personal portfolio",
    des: `
    A responsive website showcasing my web development
    projects, built using HTML, CSS, TailwindCss JavaScript,
    and React. Features a blog section where I write about
    my development experiences and tutorials. 
    `,
    icons_1: <FaGithub />,
    icons_2: <CiGlobe />,
    link: "https://portfolio-gnhj.vercel.app/",
    gitlinks: "https://github.com/M-Shourav/portfolio",
  },
  {
    _id: 504,
    images: project_4,
    title: "Todo App",
    des: `My To-Do app is a simple task management tool where 
    users can add, track, and manage tasks. It features task creation, 
    completion marking, and deletion, with a clean and intuitive interface.
     Built using React.js, the app highlights your skills in 
    UI management and handling dynamic user input efficiently.`,
    icons_1: <FaGithub />,
    icons_2: <CiGlobe />,
    link: "https://todolist-j149.vercel.app/",
    gitlinks: "https://github.com/M-Shourav/todolist",
  },
  {
    _id: 504,
    images: project_5,
    title: "Constructify",
    des: `This project is a modern and responsive website for 
    a construction company, showcasing its services and mission. 
    It features a clean navigation menu, a striking hero section
    with a bold tagline, and call-to-action buttons to engage 
    visitors. The design highlights professionalism and aims to 
    attract clients seeking reliable and high-quality construction
    solutions.`,
    icons_1: <FaGithub />,
    icons_2: <CiGlobe />,
    link: "https://constructify-masum.vercel.app/",
    gitlinks: "https://github.com/M-Shourav/constructify.git",
  },
];
