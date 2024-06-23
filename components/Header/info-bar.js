import { INFO_BAR_CONSTANTS } from "@/lib/constants";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { SocialIconsList } from "../SocialIcons";

const Infobar = () => {
  return (
    <div className="bg-black border-b hidden md:block  border-border">
      <div className="container">
        <div className="flex items-center h-[68px] justify-between  md:h-[43px] ">
          <div className="flex flex-wrap gap-1    items-center md:flex-row md:gap-10 ">
            <div className="flex items-center gap-1">
              <IoMdMail className="w-5 h-5 text-white" />
              <a href="mailto: contact@searchenginediscovery.com" className="text-white">{INFO_BAR_CONSTANTS.mail}</a>
            </div>
            <div className="flex items-center gap-1">
              <FaPhone className="w-5 h-5 text-white" />
              <a href="tel: +91 769 606 2833" className="text-white">{INFO_BAR_CONSTANTS.phoneNo}</a>
            </div>
          </div>

          {/* Social Icons Starts */}
          <div className="hidden  md:flex md:gap-6 ">
            <SocialIconsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infobar;
