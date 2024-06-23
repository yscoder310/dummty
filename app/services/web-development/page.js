import ImageContent from "@/components/ImageContent";
import { Banner } from "@/components/banner";
import MoreServices from "@/components/more-services";
import { WEB_DEVELOPMENT, WEB_DEVELOPMENT_CONTENT } from "@/lib/constants";

export const metadata = {
  title: "Build Your Online Presence: Web Development Experts",
  description: "Create a web presence that drives success with our custom web development services. Let our team transform your ideas into functional websites that deliver results.",
  icons: {
    icon: "/favicon.svg",
  },
};


export default function WebDevelopment() {
  return (
    <div className="relative overflow-hidden">
      <Banner
        text={WEB_DEVELOPMENT.title}
        primaryText={WEB_DEVELOPMENT.primaryTitle}
        subtitle={WEB_DEVELOPMENT.subtitle}
        imgUrl={"/web_development_banner.jpg"}
      />
      <div className="min-h-screen container p-16">
        <ImageContent
          imgUrl={"/web_dev_1.jpeg"}
          alt={WEB_DEVELOPMENT_CONTENT.SEO.title}
          title={WEB_DEVELOPMENT_CONTENT.SEO.title}
          subtitle={WEB_DEVELOPMENT_CONTENT.SEO.subtitle}
          className={"flex-col  md:flex-row "}
          imageEnter="right"
          textEnter="left"
        />
        <ImageContent
          imgUrl={"/web_dev_2.jpeg"}
          alt={WEB_DEVELOPMENT_CONTENT.CONTENT_MARK.title}
          className={"flex-col  md:flex-row-reverse mt-10"}
          title={WEB_DEVELOPMENT_CONTENT.CONTENT_MARK.title}
          subtitle={WEB_DEVELOPMENT_CONTENT.CONTENT_MARK.subtitle}
          imageEnter="left"
          textEnter="right"
        />
        <MoreServices />
      </div>
    </div>
  );
}
