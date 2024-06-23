import clsx from "clsx";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ children, href, isPrimary = true }) => {
  return (
    <Link
      href={href}
      className={`${
        isPrimary
          ? "bg-primary   text-white"
          : "bg-transparent border text-textPrimary border-gray-900"
      } rounded-[15px]     
      text-base 
      block
       md:px-9 
      lg:px-6 
      xl:px-9
      h-[61px]
      w-[308px]
    py-2 px-3`}
    >
      <div className="flex gap-4 h-full items-center justify-center">
        {children}
        <span
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isPrimary ? "bg-white" : "bg-primary"
          }`}
        >
          <FaArrowRightLong
            className={`w-6 h-6 ${
              isPrimary ? "text-textPrimary" : "text-white"
            } `}
          />
        </span>
      </div>
    </Link>
  );
};

export const ButtonRounded = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        "bg-primary py-4 px-7 rounded-full text-white items-center",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
