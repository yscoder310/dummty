import Marquee from "react-fast-marquee";
import { FaShopify } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import { TiVendorAndroid } from "react-icons/ti";
import { FaFigma } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";

const TechStacks = () => {
  return (
    <section className="w-full bg-black">
      <Marquee>
        <div className="flex space-x-48 h-28 items-center mx-24 lg:space-x-60 lg:h-30 ">
          <FaShopify className="w-14 h-14 text-primary" />
          <IoLogoJavascript className="w-14 h-14 text-primary" />
          <FaAppStoreIos className="w-14 h-14 text-primary" />
          <TiVendorAndroid className="w-14 h-14 text-primary" />
          <FaFigma className="w-14 h-14 text-primary" />
          <FaReact className="w-14 h-14 text-primary" />
          <FaWordpress className="w-14 h-14 text-primary" />
        </div>
      </Marquee>
    </section>
  );
};

export default TechStacks;
