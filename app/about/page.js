import { Banner } from "@/components/banner";
import { FadeInDiv } from "@/components/motion";
import { ABOUT_US } from "@/lib/constants";
import { fadeIn } from "@/utils/motions";

export const metadata = {
  title: "Search Engine Discovery - Our Journey",
  description: "Follow our journey at Search Engine Discovery as we continue to lead and innovate in the digital marketing tech world landscape.",
  icons: {
    icon: "/favicon.svg",
  },
};


const AboutPage = () => {
  return (
    <section className="relative overflow-hidden">
      <Banner
        text={ABOUT_US.title}
        primaryText={ABOUT_US.primaryTitle}
        subtitle={ABOUT_US.subtitle}
        imgUrl={"/about_us_banner.jpeg"}
      />
      <div className="container">
        <FadeInDiv
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="px-6 py-6  md:px-28 md:pt-16 md:pb-28"
        >
          <p className="text-textSecondary  text-center   md:leading-loose  md:text-xl">
          Search engine discovery is a top notch digital marketing agency that delivery quality 
          results to you. We build websites for your business that automate your work efficiency 
          and value. We have a team who have exceptional talent and care about delivering quality results to you. 
          Not only you will get the digital marketing result but also website development and designing 
          along with the application development that helps in business growth.
          </p>
        </FadeInDiv>
      </div>
      <div className="bg-[#FCF7EB]">
        <div className="container py-16 flex gap-10 flex-col  md:gap-7 md:flex-row">
          <FadeInDiv
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full ml-0 md:w-5/12"
          >
            <img
              loading="lazy"
              src={"/about_us_2.svg"}
              alt="About Us"
              className="w-full max-w-full mt-10 grow aspect-[1.08]"
            />
          </FadeInDiv>
          <FadeInDiv
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full self-center ml-0 md:w-6/12"
          >
            <p className="text-textSecondary  leading-loose  text-base">
              {`We have a proven track record of offering the result driven services to 
              our clients and nothing makes us prouder than helping clients. This way 
              we can become leaders across multiple sectors and allow businesses to 
              generate tens of millions revenue every year. We offer clear communication 
              and thoughtful advice so you can make the right decisions that make you stand 
              out among competitors. We take pride in doing the hard thinking, so you can 
              make trouble-free choices. Our social media strategies, AUDIT reports and consumer 
              research analytics give you in-depth insights that will help us plan, implement & 
              monitor your digital marketing and social media brand campaigns to reach relevant target audiences.`}
            </p>
          </FadeInDiv>
        </div>
      </div>

      <div className="pb-20 md:pb-32">
        <div className="container py-16 flex gap-10 flex-col-reverse  md:gap-7 md:flex-row">
          <FadeInDiv
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full self-center ml-0 md:w-6/12"
          >
            <h1 className="text-textPrimary font-bold text-2xl  md:text-3xl">
            Trust us
            </h1>
            <p className="text-textSecondary leading-loose text-base mt-6">
              {`We are not limited to one approach and one services because we have 
              a huge team that understand all your requirments. So whatever your business 
              is you don't have to worry with us. We have years of industry experience and 
              our team stay up to date with latest Google update so that can be implemented 
              on your website. Our vision serves as the framework for our Roadmap as it guides 
              every aspect of our service by describing what we need to accomplish in your website. 
              To achieve quality growth we focus on delivering value strategies for brands that we serve 
              and a powerful emotional bonding platform offering innovative 
              and personalized solutions for our client’s customers.
`}
            </p>
          </FadeInDiv>
          <FadeInDiv
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full ml-0 md:w-5/12"
          >
            <img
              loading="lazy"
              src={"/about_us_3.svg"}
              alt="About Us"
              className="w-full max-w-full mt-10 grow aspect-[1.08]"
            />
          </FadeInDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
