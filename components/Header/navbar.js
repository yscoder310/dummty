"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import menuData from "./menuData";
import { motion } from "framer-motion";
import { Logo } from "../Icons/Logo";
import { navVariants } from "@/utils/motions";

const Navbar = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={`header ${
        sticky ? "top-0" : "md:top-[43px] "
      } left-0 z-40 flex w-full items-center bg-bgWhite shadow-md ${
        sticky
          ? "!fixed !z-[9999] !bg-opacity-80 shadow-sticky  backdrop-blur-sm !transition border"
          : "absolute border-t-[1px] border-border"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-2 lg:py-1" : "py-2"
              } `}
              aria-label="SED"
            >
              {/* LOGO */}

              <Logo />
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-textSecondary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-textSecondary transition-all duration-300 ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-textSecondary transition-all duration-300  ${
                    navbarOpen ? "opacity-0 " : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-textSecondary transition-all duration-300  ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300  lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12 lg:items-center">
                  {menuData.map((menuItem, index) => (
                    <li key={menuItem.id} className="group relative">
                      {menuItem.path ? (
                        <Link
                          prefetch={false}
                          href={menuItem.path}
                          className={`flex py-2  text-base text-textPrimary hover:border-b-2 border-primary group-hover:opacity-70 lg:mr-0 lg:inline-flex  lg:py-2 lg:px-0`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <span
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between py-2 text-base text-textPrimary group-hover:opacity-70  lg:mr-0 lg:inline-flex lg:py-6 lg:px-0"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg width="15" height="14" viewBox="0 0 15 14">
                                <path
                                  d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </span>
                          <div
                            className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? "block" : "hidden"
                            }`}
                          >
                            {menuItem.submenu.map((submenuItem) => (
                              <Link
                                href={submenuItem.path}
                                key={submenuItem.id}
                                prefetch={false}
                                className="block rounded py-2.5 text-sm text-textPrimary hover:opacity-70 lg:px-3"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className=" hidden lg:block lg:pr-0">
            <Link
              href="/contact"
              className="
              ease-in-up 
              hidden rounded-[48px] 
              bg-primary 
              py-4 px-8 
              text-base 
              font-medium
              text-white 
              transition 
              duration-300 
              hover:bg-opacity-90 
              hover:shadow-signUp 
              md:block md:px-9 
              lg:px-6 
              xl:px-9"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
