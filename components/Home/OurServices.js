"use client";
import Link from "next/link";
import { fadeIn } from "@/utils/motions";
import { OUR_SERVICES } from "@/lib/constants";
import { FadeInDiv } from "../motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

const OurServices = () => {
  return (
    <section className="relative">
      <div className="py-20">
        <FadeInDiv
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-primary">Our Services</h1>
          <p className="text-xl text-textSecondary mt-6">
          We work on providing top-notch solutions for your business that allow you to rank higher <br/> 
          on search engine results pages. With our multiple services, you 
          <br/> 
          will be able to get more reach and generate more ROI, as we offer
          </p>
        </FadeInDiv>
      </div>ˀ
      <HorizontalScroll />
    </section>
  );
};

const HorizontalScroll = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%",  isSmallScreen ?  "-80%" : "-46%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {OUR_SERVICES.map((item) => {
            return <Service key={item.id} item={item} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Service = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="relative h-[350px] w-[400px] flex flex-col border border-textSecondary rounded-3xl p-8 lg:w-[480px]">
      <div className="p-4 rounded-xl self-start">
        <Icon className="w-12 h-12 text-primary" />
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-medium text-textPrimary">{item.title}</h1>
        <p className="text-lg text-textSecondary  mt-2 ">
          {item.subtitleOne} <br /> {item.subtitleTwo}
        </p>
      </div>
      <div className="mt-8">
        <Link href={item.link} className="text-lg text-primary">
          <p>
            View More <span className="text-center ml-2"> &#x2192; </span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default OurServices;
