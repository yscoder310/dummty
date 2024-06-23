import { IoPersonCircleSharp } from "react-icons/io5";
import { ButtonRounded } from "../button";

const Newsletter = () => {
  return (
    <section className="overflow-hidden relative bg-black">
      <div className="container  flex min-h-[278px] flex-col  items-center overflow-hidden relative  py-16  justify-between md:flex-row ">
        <div>
          <h2 className="relative text-2xl font-bold leading-[50.75px] text-white">
            Join our newsletter to <br /> keep up to date with us!
          </h2>
        </div>

        <form className="w-full  mt-4 flex md:w-1/3  gap-2 md:mt-0">
          <label
            htmlFor="newsletter"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative w-[396px]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoPersonCircleSharp className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              id="newsletter"
              className="block w-full py-4 px-3 ps-10 text-sm text-gray-400 border border-gray-300 rounded-full bg-transparent focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Enter your email"
              required
            />
          </div>
          <ButtonRounded type="submit">Subscribe</ButtonRounded>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
