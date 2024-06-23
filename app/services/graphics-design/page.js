import ImageContent from "@/components/ImageContent";
import { Banner } from "@/components/banner";
import MoreServices from "@/components/more-services";
import { GRAPHICS_DESIGN_CONTENT, GRAPHICS_DESIGN } from "@/lib/constants";

export const metadata = {
  title: "Best Creative Design Solutions for Bold Branding",
  description: "Let us boost your brand with creative design solutions, including logos and full-scale branding. Your brand deserves to stand out!",
  icons: {
    icon: "/favicon.svg",
  },
};


export default function GraphicsDesign() {
  return (
    <div className="relative overflow-hidden">
      <Banner
        text={GRAPHICS_DESIGN.title}
        primaryText={GRAPHICS_DESIGN.primaryTitle}
        subtitle={GRAPHICS_DESIGN.subtitle}
        imgUrl={"/graphic_design_banner.jpg"}
      />
      <div className="min-h-screen container p-16">
        <ImageContent
          imgUrl={"/web_des_1.jpeg"}
          alt={GRAPHICS_DESIGN_CONTENT.SEO.title}
          title={GRAPHICS_DESIGN_CONTENT.SEO.title}
          subtitle={GRAPHICS_DESIGN_CONTENT.SEO.subtitle}
          className={"flex-col  md:flex-row "}
          imageEnter="right"
          textEnter="left"
        />
        <ImageContent
          imgUrl={"/web_des_2.jpeg"}
          alt={GRAPHICS_DESIGN_CONTENT.CONTENT_MARK.title}
          className={"flex-col  md:flex-row-reverse mt-10"}
          title={GRAPHICS_DESIGN_CONTENT.CONTENT_MARK.title}
          subtitle={GRAPHICS_DESIGN_CONTENT.CONTENT_MARK.subtitle}
          imageEnter="left"
          textEnter="right"
        />
        <MoreServices />
      </div>
    </div>
  );
}
