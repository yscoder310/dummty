import ImageContent from "@/components/ImageContent";
import { Banner } from "@/components/banner";
import MoreServices from "@/components/more-services";
import { EMAIL_MARKETING, DIGITAL_MARKETING_CONTENT } from "@/lib/constants";

export const metadata = {
  title: "Boost Your Engagement and Sales with Email Marketing Services",
  description: "Maximize engagement, increase conversions, and improve ROI with professional email marketing services. Start your campaign today!",
  icons: {
    icon: "/favicon.svg",
  },
};


export default function EmailMarketingPage() {
  return (
    <div className="relative overflow-hidden">
      <Banner
        text={EMAIL_MARKETING.title}
        primaryText={EMAIL_MARKETING.primaryTitle}
        subtitle={EMAIL_MARKETING.subtitle}
        imgUrl={"/web_design_banner.jpg"}
      />
      <div className="min-h-screen container p-16">
        <ImageContent
          imgUrl={"/email_mark_1.png"}
          alt={DIGITAL_MARKETING_CONTENT.SEO.title}
          title={`Build customer loyalty by reaching larger audience`}
          subtitle={`As a business owner, you must understand that strong client relationships require regular brand interactions, and that can be achieved through routine email marketing communications. This will allow you to build a strong relationship with the customer that results in generating brand loyalty by driving sales. Targeted email marketing campaigns not only drive more business but also save you money.

          While traditional marketing methods focus on delivering a broad message to a large audience, marketing emails allow you to offer unique discounts and codes such as birthdays, regions, and customer lifetime value. This allows your business objective to reach out to different audience segments with a personal touch.
          `}
          className={"flex-col  md:flex-row "}
          imageEnter="right"
          textEnter="left"
          // hideTitle
        />
        <ImageContent
          imgUrl={"/email_mark_2.png"}
          alt={DIGITAL_MARKETING_CONTENT.CONTENT_MARK.title}
          className={"flex-col  md:flex-row-reverse mt-10"}
          title={`Expand your business reach and save time`}
          subtitle={`Email campaigns are proven to have better reach and potential for engagement than traditional marketing methods. So our experienced email marketing specialists will help you reach your target audiences and convert more leads. It also saves you a lot of time through targeted email marketing, which allows you to communicate and engage with your ideal customer segments. If you don’t have the time to learn the ropes of email campaign optimization, our team can assist you.`}
          imageEnter="left"
          textEnter="right"
          // hideTitle
        />
        <MoreServices />
      </div>
    </div>
  );
}
