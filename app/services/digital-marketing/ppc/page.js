import ImageContent from "@/components/ImageContent";
import { Banner } from "@/components/banner";
import MoreServices from "@/components/more-services";
import { PPC, DIGITAL_MARKETING_CONTENT } from "@/lib/constants";

export const metadata = {
  title: "Affordable PPC Services, Premium Results",
  description: "Boost your online presence without overspending. Our PPC services provide affordable solutions for all budgets, delivering premium results.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function PPCPage() {
  return (
    <div className="relative overflow-hidden">
      <Banner
        text={PPC.title}
        primaryText={PPC.primaryTitle}
        subtitle={PPC.subtitle}
        imgUrl={"/web_development_banner.jpg"}
      />
      <div className="min-h-screen container p-16">
        <ImageContent
          imgUrl={"/ppc_1.png"}
          alt={DIGITAL_MARKETING_CONTENT.SEO.title}
          title={`Smart PPC management services`}
          subtitle={`Our PPC experts specialize in bidding on the right keywords and delivering high-value traffic sculpting in Google & Bing Ads while also focusing on precise intent-targeting to ensure that the ads can drive qualified leads. Also, our copywriters can create compelling, conversion-driven, custom copies to attract the audience and plan an effective display ad strategy that includes creating attractive and custom visuals. Our PPC team works hand-in-hand with our in-house designers to ensure that it will meet all your requirements and that each ad is unique and conversion-driven.`}
          className={"flex-col  md:flex-row "}
          imageEnter="right"
          textEnter="left"
          // hideTitle
        />
        <ImageContent
          imgUrl={"/ppc_2.png"}
          alt={DIGITAL_MARKETING_CONTENT.CONTENT_MARK.title}
          className={"flex-col  md:flex-row-reverse mt-10"}
          title={`Get result-oriented strategies`}
          subtitle={`With Search Engine Discovery, you will learn the right way to run PPC ads, as our team is already experienced in dealing with them. They will continuously monitor the performance of the ad and then determine the accurate bid value. Before running the ad, we find the relevant keyword that suits the right target audience for your business and then make the ad run smoothly. `}
          imageEnter="left"
          textEnter="right"
          // hideTitle
        />
        <MoreServices />
      </div>
    </div>
  );
}
