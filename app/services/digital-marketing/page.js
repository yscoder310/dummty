import ImageContent from "@/components/ImageContent";
import { Banner } from "@/components/banner";
import MoreServices from "@/components/more-services";
import {
  DIGITAL_MARKETING,
  DIGITAL_MARKETING_CONTENT,
  PATHS,
} from "@/lib/constants";

export const metadata = {
  title: "Boost Your Brand with Expert Digital Marketing",
  description: "With our digital marketing methods, which increase engagement and drive traffic, you may improve your online visibility. Let us help you succeed online!",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function DigitalMarketing() {
  return (
    <div className="relative overflow-hidden">
      <Banner
        text={DIGITAL_MARKETING.title}
        primaryText={DIGITAL_MARKETING.primaryTitle}
        subtitle={`If you are looking to improve your brand's digital 
        reach, then search engine discovery is your best choice.`}
        imgUrl={"/digi_mark_banner.jpeg"}
      />
      <div className="min-h-screen container p-16">
        <ImageContent
          imgUrl={"/seo_1.png"}
          alt={DIGITAL_MARKETING_CONTENT.SEO.title}
          title={DIGITAL_MARKETING_CONTENT.SEO.title}
          subtitle={DIGITAL_MARKETING_CONTENT.SEO.subtitle}
          className={"flex-col  md:flex-row "}
          imageEnter="right"
          textEnter="left"
          link={PATHS.SEO}
        />
        <ImageContent
          imgUrl={"/content_mark_1.png"}
          alt={DIGITAL_MARKETING_CONTENT.CONTENT_MARK.title}
          className={"flex-col  md:flex-row-reverse mt-10"}
          title={DIGITAL_MARKETING_CONTENT.CONTENT_MARK.title}
          subtitle={DIGITAL_MARKETING_CONTENT.CONTENT_MARK.subtitle}
          imageEnter="left"
          textEnter="right"
          link={PATHS.CONTENT_MARKETING}
        />
        <ImageContent
          imgUrl={"/email_mark_1.png"}
          alt={DIGITAL_MARKETING_CONTENT.EMAIL_MARK.title}
          className={"flex-col md:flex-row mt-10"}
          title={DIGITAL_MARKETING_CONTENT.EMAIL_MARK.title}
          subtitle={DIGITAL_MARKETING_CONTENT.EMAIL_MARK.subtitle}
          imageEnter="right"
          textEnter="left"
          link={PATHS.EMAIL_MARKETING}
        />
        <ImageContent
          imgUrl={"/ppc_1.png"}
          alt={DIGITAL_MARKETING_CONTENT.PPC.title}
          className={"flex-col md:flex-row-reverse mt-10"}
          title={DIGITAL_MARKETING_CONTENT.PPC.title}
          subtitle={DIGITAL_MARKETING_CONTENT.PPC.subtitle}
          imageEnter="left"
          textEnter="right"
          link={PATHS.PPC}
        />
        <ImageContent
          imgUrl={"/social_media_1.png"}
          alt={DIGITAL_MARKETING_CONTENT.SMM.title}
          className={"flex-col md:flex-row mt-10"}
          title={DIGITAL_MARKETING_CONTENT.SMM.title}
          subtitle={DIGITAL_MARKETING_CONTENT.SMM.subtitle}
          imageEnter="right"
          textEnter="left"
          link={PATHS.SOCIAL_MEDIA_MARKETING}
        />
        <MoreServices />
      </div>
    </div>
  );
}
