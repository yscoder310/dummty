import clsx from "clsx";
import { FadeInDiv } from "./motion";
import { fadeIn } from "@/utils/motions";
import Link from "next/link";

export default function ImageContent({
  imgUrl,
  alt,
  className,
  title,
  subtitle,
  imageEnter,
  textEnter,
  link = null,
  hideTitle = false,
}) {
  return (
    <div className={clsx("py-16 flex   gap-16", className)}>
      <FadeInDiv
        variants={fadeIn(imageEnter, "tween", 0.15, 1.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full md:w-1/2 overflow-hidden rounded-3xl"
      >
        <img src={imgUrl} alt={alt} className="w-full h-full  object-cover" />
      </FadeInDiv>

      <FadeInDiv
        variants={fadeIn(textEnter, "tween", 0.15, 1.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full md:w-1/2 self-center"
      >
        {!hideTitle && (
          <h2 className=" text-2xl  md:text-4xl font-bold text-textPrimary">
            {title}
          </h2>
        )}
        <p className=" mt-4 whitespace-pre-line text-textSecondary text-lg   md:leading-loose  md:text-xl ">
          {subtitle}
        </p>
        {link && (
          <div className="mt-8">
            <Link href={link} className="text-lg text-primary">
              <p>
                Learn More <span className="text-center ml-2"> &#x2192; </span>
              </p>
            </Link>
          </div>
        )}
      </FadeInDiv>
    </div>
  );
}
