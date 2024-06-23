import React from "react";
import { BUSSINESS_HOURS, FOOTER_LINKS } from "@/lib/constants";
import { SocialIconsList } from "../SocialIcons";
import { FooterLogo } from "../Icons/FooterLogo";
import FooterLink from "../footer-link";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container flex flex-col items-center  pt-20 pb-11 ">
        <hr />
        <div className="flex gap-5 flex-col lg:flex-row justify-between ">
          <div className="flex flex-col w-full items-start text-base md:w-1/3  leading-7">
            <FooterLogo />
            <p className="self-stretch mt-3 max-md:mt-4  text-gray-400">
              We work on your ideas and help your business grow digitally with
              the use of the latest technology and updates. With us you will get
              to work on expert solutions that ensure your business growth.
            </p>
            <div className="flex gap-3 mt-4">
              <SocialIconsList />
            </div>
          </div>
          <div className="grid gap-0 grid-cols-2 md:gap-20 lg:grid-cols-3">
            {FOOTER_LINKS.map((link, index) => (
              <FooterLinks key={index} title={link.title} links={link.links} />
            ))}

            <div className="flex flex-col max-md:mt-8">
              <div className="text-lg font-bold tracking-wide text-white uppercase max-md:mt-0">
                {BUSSINESS_HOURS.title}
              </div>
              <ul className="mt-4 text-base tracking-wide text-white max-md:mt-4">
                {BUSSINESS_HOURS.links.map((link, index) => (
                  <li key={index} className="py-2">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-32 text-base tracking-wide text-yellow-500 max-md:mt-10 max-md:text-center ">
          <span>© 2024 Search engine discovery. All Rights Reserved.</span>{" "}
          <a href="#" className="text-yellow-500">
            Privacy
          </a>{" "}
          <span>| Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

const FooterLinks = ({ title, links }) => (
  <div className="flex flex-col max-md:mt-8">
    <div className="text-lg font-bold tracking-wide text-white uppercase max-md:mt-0">
      {title}
    </div>
    <ul className="mt-4 text-base tracking-wide text-white max-md:mt-4">
      {links.map((link, index) => (
        <FooterLink key={index} link={link} />
      ))}
    </ul>
  </div>
);

export default Footer;
