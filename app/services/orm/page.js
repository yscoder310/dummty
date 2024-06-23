import ImageContent from "@/components/ImageContent";
import { Banner } from "@/components/banner";
import MoreServices from "@/components/more-services";
import { ORM, ORM_CONTENT } from "@/lib/constants";

export const metadata = {
  title: "Master Your Brand Image: Online Reputation Management (ORM)",
  description: "Influence perceptions, suppress negativity and build trust with expert Online Reputation Management (ORM) strategies. Boost your online credibility today!",
  icons: {
    icon: "/favicon.svg",
  },
};


export default function ORMPage() {
  return (
    <div className="relative overflow-hidden">
      <Banner
        text={ORM.title}
        primaryText={ORM.primaryTitle}
        subtitle={ORM.subtitle}
        imgUrl={"/orm_banner.jpg"}
      />
      <div className="min-h-screen container p-16">
        <ImageContent
          imgUrl={"/orm_1.png"}
          alt={ORM_CONTENT.SEO.title}
          title={`Use the ORM strategy to your business`}
          subtitle={`Creating a brand reputation requires time and effort. It’s a sign to your customers that you’re a reputable business and they can easily trust on you. That’s why we’re here to help get your online brand reputation in place, re-brand your brand, and create the right buzz around your goods and services.

          With our online reputation management services, you’ll be able to promote your brand perception like never before.
          `}
          className={"flex-col  md:flex-row "}
          imageEnter="right"
          textEnter="left"
        />
        <ImageContent
          imgUrl={"/orm_2.png"}
          alt={ORM_CONTENT.CONTENT_MARK.title}
          className={"flex-col  md:flex-row-reverse mt-10"}
          title={`Areas we assist with our ORM services`}
          subtitle={`We are not only stick to one industry or one type with our ORM services so, you must not worry of getting the ORM services from Search engine discovery. Allow us to work for you in building your brand image perfectly and promoting it to larger audience.`}
          imageEnter="left"
          textEnter="right"
        />
        <MoreServices />
      </div>
    </div>
  );
}
