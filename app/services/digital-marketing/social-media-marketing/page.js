import ImageContent from "@/components/ImageContent";
import { Banner } from "@/components/banner";
import MoreServices from "@/components/more-services";
import {
  SOCIAL_MEDIA_MARKETING,
  DIGITAL_MARKETING_CONTENT,
} from "@/lib/constants";

export const metadata = {
  title: "Get Expert Social Media Marketing Services",
  description: "Boost your brand's online presence with our customised social media marketing services. Our team of experts will help you connect with your target audience.",
  icons: {
    icon: "/favicon.svg",
  },
};


export default function SocialMediaMarketingPage() {
  return (
    <div className="relative overflow-hidden">
      <Banner
        text={SOCIAL_MEDIA_MARKETING.title}
        primaryText={SOCIAL_MEDIA_MARKETING.primaryTitle}
        subtitle={SOCIAL_MEDIA_MARKETING.subtitle}
        imgUrl={"/web_development_banner.jpg"}
      />
      <div className="min-h-screen container p-16">
        <ImageContent
          imgUrl={"/social_media_1.png"}
          alt={DIGITAL_MARKETING_CONTENT.SEO.title}
          title={`Target a specific audience`}
          subtitle={`Social media platforms allow you to share the content that is related to your business and also to those visuals that attract new users. So to help you with this our social media marketing specialists identify and analyze your niche market to gain insight into your target audience’s online behavior and then create the right content and ads.
          We share valuable content and engage in online conversations about your business to keep a pulse on your target market. We also use social media video marketing to showcase your client testimonials and other content that proves your brand validity. These tactics are crucial to gaining consumer trust and building healthy relationships with your audience and followers.
         `}
          className={"flex-col  md:flex-row "}
          imageEnter="right"
          textEnter="left"
          // hideTitle
        />
        <ImageContent
          imgUrl={"/social_media_2.png"}
          alt={DIGITAL_MARKETING_CONTENT.CONTENT_MARK.title}
          className={"flex-col  md:flex-row-reverse mt-10"}
          title={`Use multiple platforms`}
          subtitle={`For social media promotion there are multiple platforms that you are aware of, so our team will definitely focus on that to enhance your brand presence. We create graphics and visual content for Instagram, Facebook, Youtube, Linkedin and more that presents your business products or services well. 
          You can simply trust us to gain more user engagement when it comes to handling the social media platforms and promoting the business. Our in depth analysis of your brand and its objective with your target customers allow us to create a useful strategy that suits your requirements. 
          `}
          imageEnter="left"
          textEnter="right"
          // hideTitle
        />
        <MoreServices />
      </div>
    </div>
  );
}
