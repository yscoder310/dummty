import ImageContent from "@/components/ImageContent";
import { Banner } from "@/components/banner";
import MoreServices from "@/components/more-services";
import { WEB_DESIGNING, WEB_DESIGNING_CONTENT } from "@/lib/constants";

export const metadata = {
  title: "Web Designing: Build Your Dream Website Now",
  description: "Let us make your vision a reality with our web design expertise. Contact us today to transform your ideas into a stunning website!",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function WebDesigning() {
  return (
    <div className="relative overflow-hidden">
      <Banner
        text={WEB_DESIGNING.title}
        primaryText={WEB_DESIGNING.primaryTitle}
        subtitle={WEB_DESIGNING.subtitle}
        imgUrl={"/web_design_banner.jpg"}
      />
      <div className="min-h-screen container p-16">
        <ImageContent
          imgUrl={"/web_des_1.jpeg"}
          alt={WEB_DESIGNING_CONTENT.SEO.title}
          title={WEB_DESIGNING_CONTENT.SEO.title}
          subtitle={WEB_DESIGNING_CONTENT.SEO.subtitle}
          className={"flex-col  md:flex-row "}
          imageEnter="right"
          textEnter="left"
        />
        <ImageContent
          imgUrl={"/web_des_2.jpeg"}
          alt={WEB_DESIGNING_CONTENT.CONTENT_MARK.title}
          className={"flex-col  md:flex-row-reverse mt-10"}
          title={WEB_DESIGNING_CONTENT.CONTENT_MARK.title}
          subtitle={WEB_DESIGNING_CONTENT.CONTENT_MARK.subtitle}
          imageEnter="left"
          textEnter="right"
        />
        <MoreServices />
      </div>
    </div>
  );
}
