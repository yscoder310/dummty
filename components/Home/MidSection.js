import { fadeIn } from "@/utils/motions";
import { FadeInDiv } from "../motion";
import Button from "../button";

const MidSection = () => {
  return (
    <>
      <section className="flex flex-col items-center px-5 py-20 bg-[#FCF7EB] md:flex-row md:justify-center md:px-16">
        <div className="w-full max-w-full mt-8 md:max-w-[1044px]">
          <div className="flex flex-col gap-0 md:flex-row md:gap-5">
            <FadeInDiv
              variants={fadeIn("right", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="flex flex-col w-full ml-0 md:w-6/12"
            >
              <img
                loading="lazy"
                src={"/about_us.svg"}
                alt="About Us"
                className="w-full max-w-full mt-10 grow aspect-[1.08]"
              />
            </FadeInDiv>
            <FadeInDiv
              variants={fadeIn("left", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="flex flex-col w-full ml-0 md:ml-5 md:w-6/12"
            >
              <div className="flex flex-col items-start max-w-full mt-10 pt-3.5">
                <h2 className="text-4xl font-bold tracking-wider text-zinc-800">
                  About Us
                </h2>
                <p className="self-stretch max-w-full mt-8 text-lg tracking-wide leading-10 text-zinc-600">
                  Search engine discovery is a team of experts that has the
                  capability to transform your business idea into reality. We
                  have a team that has years of industry experience and knows
                  how to deal with various requirements of yours. Our focus is
                  to offer you top-notch strategies that give you the best
                  possible result and make your business rank higher.{" "}
                </p>
                <div className="flex justify-center mt-12 md:8">
                  <Button href={"/"}>Learn More</Button>
                </div>
              </div>
            </FadeInDiv>
          </div>
        </div>
      </section>
      {/* other section */}
      <section className="flex flex-col justify-center items-center px-5 py-20 w-full bg-white md:px-16 md:flex-row">
        <div className="mt-8 mb-3.5 w-full max-w-full md:max-w-[1062px]">
          <FadeInDiv
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col self-stretch pt-3 my-auto text-lg text-zinc-600 mt-10 max-w-full md:mt-0"
          >
            <h1 className="text-2xl font-bold tracking-wider text-primary mr-2.5 max-w-full md:text-4xl md:mr-0 text-center">
              We Offer a Full Range Digital Marketing Services!
            </h1>
            <p className="mt-7 text-xl    md:text-2xl font-normal tracking-wide leading-10 mr-2.5 max-w-full md:mr-0 text-center">
              Get the best digital solutions from us to mark the online success.
            </p>
          </FadeInDiv>
          <div className="flex flex-col mt-6 items-center  md:flex-row  gap-6 md:mt-0">
            <FadeInDiv
              variants={fadeIn("right", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p>
                You will get the full <span className="font-bold">(SEO)</span>{" "}
                services from us.
              </p>
              <p className="mt-6   md:mt-10">
                Get unique content from us that
                <span className="font-bold"> promotes </span> <br /> your
                business well.
              </p>
            </FadeInDiv>

            <FadeInDiv
              variants={fadeIn("up", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="self-center w-6/12  max-w-full md:w-3/12"
            >
              <img
                loading="lazy"
                src={"/about_us1.svg"}
                alt={"about"}
                className="grow w-full aspect-[0.72]"
              />
            </FadeInDiv>

            <FadeInDiv
              variants={fadeIn("left", "tween", 0.2, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p>
                Allow us to develop your{" "}
                <span className="font-bold"> business website</span> <br /> with
                a user friendly appearance.
              </p>
              <p className="mt-6   md:mt-10">
                We will work on your as
                <span className="font-bold"> social media </span> <br /> well to
                promote your business.
              </p>
            </FadeInDiv>
          </div>
        </div>
      </section>
    </>
  );
};

export default MidSection;
