import Hero from "@/components/Home/Hero";
import IndustriesServe from "@/components/Home/IndustriesServe";
import MidSection from "@/components/Home/MidSection";
import OurServices from "@/components/Home/OurServices";
import TechStacks from "@/components/Home/TechStacks";
import Testimonials from "@/components/Home/Testominials";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStacks />
      <OurServices />
      <MidSection />
      <IndustriesServe />
      <Testimonials />
    </>
  );
}
