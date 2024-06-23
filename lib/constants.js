import { TbSpeakerphone } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { FaPlane } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";
import { IoIosCart } from "react-icons/io";
import {
  BodyBuildingIcon,
  EducationLearningIcon,
  EntertainmentStreamingIcon,
  HealthAndWellness,
  HotelsAndResorts,
  PrivateIsland,
  PrivateYachts,
  RealEstates,
  TourAndTravels,
} from "@/components/Icons/Segments";

export const INFO_BAR_CONSTANTS = {
  mail: "contact@searchenginediscovery.com",
  phoneNo: "+91 769 606 2833",

  facebook: "https://www.facebook.com/searchenginediscovery/",
  linkedin: "https://www.linkedin.com/company/searchenginediscovery/",
  youtube: "https://www.youtube.com/@searchenginediscovery",
  spotify: "https://open.spotify.com/show/7q6SSpMWvWjVpje9MRGkny",
  instagram: "https://www.instagram.com/searchenginediscovery/",
};

export const PATHS = {
  DIGITAL_MARKETING: "/services/digital-marketing",
  GRAPHICS_DESIGN: "/services/graphics-design",
  WEB_DEVELOPMENT: "/services/web-development",
  WEB_DESIGNING: "/services/web-designing",
  ORM: "/services/orm",
  ABOUT_US: "/about",
  BLOG: "/blog",
  OUR_TEAM: "/our-team",
  SEO: "/services/digital-marketing/seo",
  CONTENT_MARKETING: "/services/digital-marketing/content-marketing",
  EMAIL_MARKETING: "/services/digital-marketing/email-marketing",
  PPC: "/services/digital-marketing/ppc",
  SOCIAL_MEDIA_MARKETING: "/services/digital-marketing/social-media-marketing",
  APP_DEV: "/services/app-dev",
};

export const OUR_SERVICES = [
  {
    id: 1,
    title: "Digital Marketing",
    subtitleOne: "Improves your digital presence and",
    subtitleTwo: "generates more traffic with us.",
    icon: TbSpeakerphone,
    link: PATHS.DIGITAL_MARKETING,
  },
  {
    id: 2,
    title: "Graphic Designing & Branding",
    subtitleOne: "Let us work on your graphics that show your",
    subtitleTwo: "services properly and promote your brand.",
    icon: MdDesignServices,
    link: PATHS.GRAPHICS_DESIGN,
  },
  {
    id: 3,
    title: "Web Development",
    subtitleOne: "Allow us to make your business website",
    subtitleTwo: "generate a better ROI.",
    icon: MdWeb,
    link: PATHS.WEB_DEVELOPMENT,
  },
  {
    id: 4,
    title: "Web Designing",
    subtitleOne: "We design a user-friendly website to get",
    subtitleTwo: "more traffic to your business.",
    icon: SiMaterialdesignicons,
    link: PATHS.WEB_DESIGNING,
  },
  {
    id: 5,
    title: "ORM",
    subtitleOne: "We work on building strategies that influence",
    subtitleTwo: "public opinion towards your business.",
    icon: MdOutlineAppSettingsAlt,
    link: PATHS.ORM,
  },
];

export const FOOTER_LINKS = [
  {
    title: "Our Services",
    links: [
      { title: "Digital Marketing", link: PATHS.DIGITAL_MARKETING },
      { title: `Graphic Design & Branding`, link: PATHS.GRAPHICS_DESIGN },
      { title: "Web Development", link: PATHS.WEB_DEVELOPMENT },
      { title: "Web Designing", link: PATHS.WEB_DESIGNING },
      { title: "Application Development", link: PATHS.APP_DEV },
      { title: "ORM", link: PATHS.ORM },
    ],
  },
  {
    title: "Our links",
    links: [
      { title: "Blog", link: PATHS.BLOG },
      // { title: "Careers", link: PATHS.GRAPHICS_DESIGN },
      // { title: "News", link: PATHS.WEB_DEVELOPMENT },
      { title: "About Us", link: PATHS.ABOUT_US },
    ],
  },
];

export const BUSSINESS_HOURS = {
  title: "Business Hours",
  links: [
    "Monday 10:00 - 17:00",
    "Tuesday 10:00 - 17:00",
    "Wednesday 10:00 - 17:00",
    "Thursday 10:00 - 17:00",
    "Friday 10:00 - 17:00",
  ],
};

export const TESTIMONIALS = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    avatar: "/person.webp",
    ratings: 4,
    author: "John Doe",
  },
  {
    id: 2,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/person.webp",
    ratings: 4,
    author: "Jane Smith",
  },
  {
    id: 3,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatar: "/person.webp",
    ratings: 5,
    author: "Alice Johnson",
  },
];
export const INDUSTRIES = [
  {
    id: 1,
    title: "Private Island",
    icon: PrivateIsland,
  },
  {
    id: 2,
    title: "Private Jets",
    icon: FaPlane,
  },
  {
    id: 3,
    title: "Real Estate",
    icon: RealEstates,
  },
  {
    id: 4,
    title: "Luxury Cars",
    icon: IoCarSport,
  },
  {
    id: 5,
    title: "Private Yachts",
    icon: PrivateYachts,
  },
  {
    id: 6,
    title: "Tour & Travel",
    icon: TourAndTravels,
  },
  {
    id: 7,
    title: "Hotels & Resorts",
    icon: HotelsAndResorts,
  },
  {
    id: 8,
    title: "Fitness & Bodybuilding",
    icon: BodyBuildingIcon,
  },
  {
    id: 9,
    title: "Educational & E-Learning",
    icon: EducationLearningIcon,
  },
  {
    id: 10,
    title: "Entertainment & Streaming",
    icon: EntertainmentStreamingIcon,
  },
  {
    id: 11,
    title: "Health & Wellness",
    icon: HealthAndWellness,
  },
  {
    id: 12,
    title: "E-commerce",
    icon: IoIosCart,
  },
];

export const DIGITAL_MARKETING = {
  title: "Digital",
  primaryTitle: "Marketing",
  subtitle: `If you are looking to improve your brand's digital 
  reach, then search engine discovery is your best choice. `,
};

export const DIGITAL_MARKETING_CONTENT = {
  SEO: {
    title: "SEO",
    subtitle: `When it comes to SEO you will get the top -notch strategies that will help you to rank higher in search engine result page. We help you dealing with the latest updates of Google and allow your business website to get well optimized accordingly. Our experts will work with you and expand your business reach with top SEO strategies.`,
  },

  CONTENT_MARK: {
    title: "Content Marketing",
    subtitle: `You can take advantage of our content marketing services and reach to your target customers with unique and optimized content. We will help you with creating relevent and valuable content for your business that can attract new users towards your brand.`,
  },

  EMAIL_MARK: {
    title: "Email Marketing",
    subtitle: `Enlist Search engine discovery goal-driven email marketing services and allow us  to set up an email campaign that fits your business goals perfectly. Our team of experts are here to guide you various strategies to generate more ROI from the website.`,
  },

  PPC: {
    title: "PPC",
    subtitle: `We are here to offer you a full-service solution from building and implementing to managing a pay-per-click (PPC) campaign. You don't need to worry about the budget with us as our team will also work on customized PPC ads based on your business needs.`,
  },

  SMM: {
    title: "Social Media Marketing",
    subtitle: `We at search engine discovery  provides social media marketing for all types of  businesses and help in fulfilling their objectives.  Our team will assist you in dealing with all social media platforms. Allow us to work for your social media platforms by creating engaging content for your users.`,
  },
};

export const GRAPHICS_DESIGN = {
  title: "Graphic Design",
  primaryTitle: "& Branding",
  subtitle: `Get the relevant graphics for your business from us that allow 
  you to share your services with the target customers.`,
};

export const GRAPHICS_DESIGN_CONTENT = {
  SEO: {
    title: "Logo and graphics design",
    subtitle: `You don't need to worry about creating a logo and other graphics for your business website when starting a new business online. As we at Search engine discovery have experts that work on creating a perfect design that suits your business idea. `,
  },

  CONTENT_MARK: {
    title: "Branding and advertising ",
    subtitle: `Your brand image is the most essential that we work on by creating the best graphics for advertising and promoting your services. You will get satisfactory result from us that will definitely promote your brand well in the competitive market. We also will create your business card, newsletter and more perfectly. `,
  },
};

export const WEB_DEVELOPMENT = {
  title: "Web",
  primaryTitle: "Development",
  subtitle: `We develop an industry-leading website for your business that is responsible 
  for enhancing new users for your business growth. `,
};

export const WEB_DEVELOPMENT_CONTENT = {
  SEO: {
    title: "Website and web portal development ",
    subtitle: `We at Search Engine Discovery are here to help you create a web portal and websites that have all your business information. Also, the portals make sure that you have an easy-to-use page editor that attracts more users and help you in generating better ROI. 
    By developing the website it will become easier for you to promote your brand and to reach to the target customers digitally. Our team understands all your requirements and hence are willing to provide you the best website development services. 
    `,
  },

  CONTENT_MARK: {
    title: "Ecommrce and web apps",
    subtitle: `If you are looking for developing the e-commerce website to promote your products and enhance your reach among the new users then also you have us. We multiply business efficiency by using the right e-commerce website development solution with the latest technology and also by enabling high automation of all business processes. You will not only get e-commerce but also the web application that helps you achieve better business growth.`,
  },
};

export const WEB_DESIGNING = {
  title: "Web",
  primaryTitle: "Designing",
  subtitle: `You must make your first impression unforgettable to the users with the amazing 
  website design from us. Designing a user friedly website is something we are experts in. `,
};

export const WEB_DESIGNING_CONTENT = {
  SEO: {
    title: "Website designing journey",
    subtitle: `Define 
    We work on making the  strategy that presents your business well and then will set up the goal that define your website. 
    Design 
    Beyond graphics and visual presentation we have experts who are willing to design your website that is perfectly suitable to the business. We will offer you the professional website designing services that you must not regret later. 
    Building the wireframe 
    Building of a wireframe will help you a lot in understanding how it looks like. It will show where the buttom, image and other content goes. 
    Creating content 
    We create content that promotes the business and your objective and helps in improving  the website visibility in search result page. 
    Adding the visual fair
    You choose color, design and fonts that fits your style and brand. We have experts that will must help you. 
    `,
  },

  CONTENT_MARK: {
    title: "Get all types of website design",
    subtitle: `You don’t need to worry about designing different types of  website as we have expertise in all. You will be getting responsive website, ecommerce website, blog website and whatever you want from Search Engine Discovery.`,
  },
};

export const ORM = {
  title: "",
  primaryTitle: "ORM",
  subtitle: `We are here to monitor, control, and build your brand 
  image on every platform that helps you grow digitally. 
  You must select our ORM services and let our experts help you.`,
};

export const ORM_CONTENT = {
  SEO: {
    title: "SEO",
    subtitle: `PageTraffic offers top-notch SEO and digital marketing solutions to help you rank high on search results, connect with.PageTraffic offers top-notch SEO and digital marketing solutions to help you rank high on search results, connect with.PageTraffic PageTraffic offers top-notch SEO and digital marketing solutions to help you rank high on  results, connect with.PageTraffic offers top-notch SEO and digital marketing solutions to help you rank high on search results, connect with.PageTraffic PageTraffic offers`,
  },

  CONTENT_MARK: {
    title: "Content Marketing",
    subtitle: `PageTraffic offers top-notch SEO and digital marketing solutions to help you rank high on search results, connect with.PageTraffic offers top-notch SEO and digital marketing solutions to help you rank high on search results, connect with.PageTraffic PageTraffic offers top-notch SEO and digital marketing solutions to help you rank high on  results, connect with.PageTraffic offers top-notch SEO and digital marketing solutions to help you rank high on search results, connect with.PageTraffic PageTraffic offers`,
  },
};

export const ABOUT_US = {
  title: "About",
  primaryTitle: "Us",
  subtitle: `If you are new to the business world and want to explore more, then 
  using digital marketing tactics is best for you`,
};

export const OUR_TEAM = {
  title: "Our",
  primaryTitle: "Team",
  subtitle: `If you're looking for the best SEO company for your business,
  PageTraffic is the perfect choice.`,
};

export const APP_DEV = {
  title: "Application",
  primaryTitle: "Development",
  subtitle: `Our quality application development services will definitely work best for your business. 
  You will get a better way from apps to reach the target customers.`,
};

export const OUR_TEAM_LIST = [
  {
    id: 1,
    name: "Floyd Miles",
    designation: "Designer",
    company: "Company",
    imgUrl: "/ourteam_1.jpg",
  },
  {
    id: 2,
    name: "Floyd Miles",
    designation: "Designer",
    company: "Company",
    alternateColor: true,
    imgUrl: "/ourteam_1.jpg",
  },
  {
    id: 3,
    name: "Floyd Miles",
    designation: "Designer",
    company: "Company",
    imgUrl: "/ourteam_1.jpg",
  },
  {
    id: 4,
    name: "Floyd Miles",
    designation: "Designer",
    company: "Company",
    imgUrl: "/ourteam_1.jpg",
  },
  {
    id: 5,
    name: "Floyd Miles",
    designation: "Designer",
    company: "Company",
    imgUrl: "/ourteam_1.jpg",
  },
  {
    id: 6,
    name: "Floyd Miles",
    designation: "Designer",
    company: "Company",
    imgUrl: "/ourteam_1.jpg",
  },
  {
    id: 7,
    name: "Floyd Miles",
    designation: "Designer",
    company: "Company",
    imgUrl: "/ourteam_1.jpg",
  },
  {
    id: 8,
    name: "Floyd Miles",
    designation: "Designer",
    company: "Company",
    alternateColor: true,
    imgUrl: "/ourteam_1.jpg",
  },
  {
    id: 9,
    name: "Floyd Miles",
    designation: "Designer",
    company: "Company",
    imgUrl: "/ourteam_1.jpg",
  },
  {
    id: 10,
    name: "Floyd Miles",
    designation: "Designer",
    company: "Company",
    imgUrl: "/ourteam_1.jpg",
  },
  {
    id: 11,
    name: "Floyd Miles",
    designation: "Designer",
    company: "Company",
    imgUrl: "/ourteam_1.jpg",
  },
  {
    id: 12,
    name: "Floyd Miles",
    designation: "Designer",
    company: "Company",
    imgUrl: "/ourteam_1.jpg",
  },
];

export const CONTACT_US = {
  title: "Contact",
  primaryTitle: "Us",
  subtitle: `If you're looking for the best SEO company for your business,
  PageTraffic is the perfect choice.`,
};

export const SEO = {
  title: "",
  primaryTitle: "SEO",
  subtitle: `Make your website rank higher in Google search result page with the 
  top SEO strategies fro Search engine discovery.`,
};

export const CONTENT_MARKETING = {
  title: "Content",
  primaryTitle: "Marketing",
  subtitle: `Having unique and quality content to your website that shares 
  business details is essential. So, you must think of a reliable content 
  marketing strategy from us to promote your business well. `,
};

export const EMAIL_MARKETING = {
  title: "Email",
  primaryTitle: "Marketing",
  subtitle: `Convert and generate the best leads by targeting the right customers 
  and using the correct email marketing tactics with us.`,
};

export const PPC = {
  title: "",
  primaryTitle: "PPC",
  subtitle: `You can use the quickest way to generate more traffic 
  to your business website by Google Ads and others. `,
};

export const SOCIAL_MEDIA_MARKETING = {
  title: "Social",
  primaryTitle: "Media Marketing",
  subtitle: `Use a reliable social media marketing strategy to 
  promote your brand in a competitive market. SMM allows you to 
  promote your brand by developing meaningful connections.`,
};
