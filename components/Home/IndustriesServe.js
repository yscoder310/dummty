import { INDUSTRIES } from "@/lib/constants";
import { FadeInDiv } from "../motion";
import { fadeIn } from "@/utils/motions";

function IndustriesServe() {
  return (
    <section className="relative overflow-hidden">
      <div className="container min-h-screen py-16">
        <FadeInDiv
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-primary">
            Industries We Serve
          </h1>
          <p className="text-xl text-textSecondary mt-6">
            High-end solution tailored to the needs of diverse industries
          </p>
        </FadeInDiv>
        <FadeInDiv
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-wrap gap-6 items-center mt-8 justify-center"
        >
          {INDUSTRIES.map((item) => (
            <IndustryCard key={item} item={item} />
          ))}
        </FadeInDiv>
      </div>
    </section>
  );
}

function IndustryCard({ item }) {
  const Icon = item.icon;
  return (
    <FadeInDiv
      key={item.id}
      variants={fadeIn("up", "tween", 0.2, 1)}
      className="w-[285px] h-[185px] shadow-4xl flex flex-col items-center justify-center p-6        
                transition 
               duration-150  
               hover:bg-primary 
               "
    >
      <Icon className="w-28 h-28" />
      <p className="mt-2 font-medium">{item.title}</p>
    </FadeInDiv>
  );
}

export default IndustriesServe;
