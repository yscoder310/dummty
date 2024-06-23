import ImageContent from "@/components/ImageContent";
import { Banner } from "@/components/banner";
import MoreServices from "@/components/more-services";
import { GRAPHICS_DESIGN_CONTENT, GRAPHICS_DESIGN, APP_DEV } from "@/lib/constants";

export const metadata = {
  title: "Custom App Solutions - Fast, Reliable, Secure",
  description: "Our custom app development services create fast, reliable, and secure applications that meet your requirements.",
  icons: {
    icon: "/favicon.svg",
  },
};


export default function GraphicsDesign() {
  return (
    <div className="relative overflow-hidden">
      <Banner
        text={APP_DEV.title}
        primaryText={APP_DEV.primaryTitle}
        subtitle={APP_DEV.subtitle}
        imgUrl={"/app_dev_banner.jpg"}
      />
      <div className="min-h-screen container p-16">
        <ImageContent
          imgUrl={"/app_dev_1.png"}
          alt={GRAPHICS_DESIGN_CONTENT.SEO.title}
          title={`Mobile app development`}
          subtitle={`We specialize in creating full-functioning mobile apps for iOS and Android that are helpful for your business. Our expert app developers build apps with robust and evolving architectures using all leading technologies. We also build versatile, cross-platform, and hybrid applications that help you save money with a unified code base and faster time to market.

          No matter if your platform is native or a hybrid, we are a full-service mobile app development company. We provide a full cycle of Mobile App Design and Development. From startups to enterprises, we offer flexible engagement models and our developers create mobile apps that enhance user experience.
          `}
          className={"flex-col  md:flex-row "}
          imageEnter="right"
          textEnter="left"
        />
        <ImageContent
          imgUrl={"/app_dev_2.png"}
          alt={GRAPHICS_DESIGN_CONTENT.CONTENT_MARK.title}
          className={"flex-col  md:flex-row-reverse mt-10"}
          title={`Other app development`}
          subtitle={`We also provide specific services that are an essential part of the complete application development process. Through these services, incremental changes are made to build a strong product. We can create these solutions from scratch or enhance existing applications to increase scalability and performance. 

          With our desktop application services, you can choose from a wide variety of apps that can be tailored to meet your needs in terms of utility, productivity and multimedia. UX is about you and your users. Our research based design approach makes sure that your users are successful. 
          
          Quality testing and maintenance are done regularly to identify any issues and areas of improvement. After sales support is also done to ensure that no security vulnerabilities are present.
          `}
          imageEnter="left"
          textEnter="right"
        />
        <MoreServices />
      </div>
    </div>
  );
}
