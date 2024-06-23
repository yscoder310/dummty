import { fadeIn } from "@/utils/motions";
import { FadeInDiv } from "../motion";
import Button from "../button";

const Hero = () => {
  return (
    <section className="overflow-hidden relative  max-md:px-5">
      <div className="absolute inset-0 overflow-hidden z-0">
        <img 
          alt="background"
          src={"/heromain.webp"}
          className="object-cover object-center w-full h-full"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="container min-h-screen flex items-center justify-center flex-col md:items-start">
        <FadeInDiv
          variants={fadeIn("right", "tween", 0.15, 1.25)}
          initial="hidden"
          animate="show"
          className="relative text-center uppercase text-4xl font-bold md:text-left  md:text-6xl"
        >
          <span className="text-textPrimary">Connect with the</span>
          <br/>
          <span className="text-primary">best marketing</span>
          <br />
          <span className="text-textPrimary">agency!</span>
        </FadeInDiv>

        <FadeInDiv
          variants={fadeIn("right", "tween", 0.5, 1.25)}
          initial="hidden"
          animate="show"
          className="relative text-center mt-4  md:text-left md:text-xl"
        >
         We work on your ideas and help your business grow digitally  
          <br />
          with the use of the latest technology and updates. With us you will  
          <br />
          get to work on expert solutions that ensure your business growth.
        </FadeInDiv>

        <FadeInDiv
          variants={fadeIn("right", "tween", 0.5, 1.25)}
          initial="hidden"
          animate="show"
          className="relative mt-14 "
        >
          <Button href={"/contact"}>Contact Us Now</Button>
        </FadeInDiv>
      </div>
    </section>
  );
};

export default Hero;
