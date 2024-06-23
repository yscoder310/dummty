import { fadeIn } from "@/utils/motions";
import { FadeInDiv } from "./motion";
import Button from "./button";

export function Banner({ text = "", primaryText = "", subtitle = "", imgUrl }) {
  return (
   

      <div className="container relative mt-[106px] h-[457px]  flex items-center justify-center flex-col md:items-start">
          <div className="    hidden xl:block     absolute  right-0  w-[460px]   z-0">
        <img
          alt="background"
          loading="lazy"
          src={imgUrl}
          className="w-full h-full"
        />
      </div>
        <FadeInDiv
          variants={fadeIn("right", "tween", 0.15, 1.25)}
          initial="hidden"
          animate="show"
          className="relative text-center uppercase text-4xl font-bold md:text-left  md:text-6xl"
        >
          <span className="text-textPrimary">{text}</span>{" "}
          <span className="text-primary">{primaryText}</span>
        </FadeInDiv>

        <FadeInDiv
          variants={fadeIn("right", "tween", 0.5, 1.25)}
          initial="hidden"
          animate="show"
          className="relative text-center mt-4 whitespace-pre-line  md:text-left md:text-xl"
        >
          {subtitle}
        </FadeInDiv>

        <FadeInDiv
          variants={fadeIn("right", "tween", 0.5, 1.25)}
          initial="hidden"
          animate="show"
          className="relative mt-14 "
        >
          <Button isPrimary={false} href={"/contact"}>
            Contact Us Now
          </Button>
        </FadeInDiv>
      </div>

  );
}
