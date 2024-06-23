import ImageContent from "@/components/ImageContent";
import { Banner } from "@/components/banner";
import MoreServices from "@/components/more-services";
import { CONTENT_MARKETING, DIGITAL_MARKETING_CONTENT } from "@/lib/constants";

export const metadata = {
  title: "Content Marketing: Build Trust, Increase Sales",
  description: "Maximize sales with powerful content marketing strategies. Learn how to improve your game and drive results through effective content.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function ContentMarketingPage() {
  return (
    <div className="relative overflow-hidden">
      <Banner
        text={CONTENT_MARKETING.title}
        primaryText={CONTENT_MARKETING.primaryTitle}
        subtitle={CONTENT_MARKETING.subtitle}
        imgUrl={"/app_dev_banner.jpg"}
      />
      <div className="min-h-screen container p-16">
        <ImageContent
          imgUrl={"/content_mark_1.png"}
          alt={DIGITAL_MARKETING_CONTENT.SEO.title}
          title={`Strategy development by deep diving into audience`}
          subtitle={`At Search Engine Discovery, you will find that we’ll complete a competitive content marketing analysis against your competitors. Then identify the related top content keywords so we can create a strategy that helps you increase sales and differentiate your brand. 

          We understand that different audiences prefer to consume different types of content, so we work on developing the content by deeply understanding their preferences. After we know who your audience is, we can start to craft remarkable content they’ll love to engage with.
          `}
          className={"flex-col  md:flex-row "}
          imageEnter="right"
          textEnter="left"
          // hideTitle
        />
        <ImageContent
          imgUrl={"/content_mark_2.png"}
          alt={DIGITAL_MARKETING_CONTENT.CONTENT_MARK.title}
          className={"flex-col  md:flex-row-reverse mt-10"}
          title={`Creation of content for multiple platforms`}
          subtitle={`The creation of content that suits multiple platforms is done by our experts for your business, which makes things easy for you. Focusing on blogs, visual content, social media, email newsletters, and more will all help improve the website's rank. Every piece of content we create for you will be optimized for search engines, so it must include the related keywords on all platforms. We also work on combining content marketing with email newsletters and social media so it takes up as much online real estate as possible.`}
          imageEnter="left"
          textEnter="right"
          // hideTitle
        />
        <MoreServices />
      </div>
    </div>
  );
}
