import { PATHS } from "@/lib/constants";

const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: PATHS.ABOUT_US,
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 43,
        title: "Digital Marketing",
        path: PATHS.DIGITAL_MARKETING,
        newTab: false,
      },
      {
        id: 44,
        title: "Graphic Design & Branding",
        path: PATHS.GRAPHICS_DESIGN,
        newTab: false,
      },
      {
        id: 45,
        title: "Web Development",
        path: PATHS.WEB_DEVELOPMENT,
        newTab: false,
      },
      {
        id: 46,
        title: "Web Designing",
        path: PATHS.WEB_DESIGNING,
        newTab: false,
      },
      {
        id: 48,
        title: "Application Development",
        path: PATHS.APP_DEV,
        newTab: false,
      },
      {
        id: 47,
        title: "ORM",
        path: PATHS.ORM,
        newTab: false,
      },
    ],
  },
  {
    id: 33,
    title: "Our Team",
    path: PATHS.OUR_TEAM,
    newTab: false,
  },
  {
    id: 4,
    title: "Blog",
    path: PATHS.BLOG,
    newTab: false,
  },
];
export default menuData;
