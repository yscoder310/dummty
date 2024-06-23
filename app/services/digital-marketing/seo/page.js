import ImageContent from "@/components/ImageContent";
import { Banner } from "@/components/banner";
import MoreServices from "@/components/more-services";
import { SEO, DIGITAL_MARKETING_CONTENT } from "@/lib/constants";

export const metadata = {
  title: "Get Expert SEO Services for Your Business",
  description: "Elevate your online visibility and boost revenue with our personalised SEO solutions. Enhance your digital presence today.",
  icons: {
    icon: "/favicon.svg",
  },
};


export default function SEOPage() {
  return (
    <div className="relative overflow-hidden">
      <Banner
        text={SEO.title}
        primaryText={SEO.primaryTitle}
        subtitle={SEO.subtitle}
        imgUrl={"/graphic_design_banner.jpg"}
      />
      <div className="min-h-screen container p-16">
        <ImageContent
          imgUrl={"/seo_1.png"}
          alt={DIGITAL_MARKETING_CONTENT.SEO.title}
          title={`On- page and Off- page SEO`}
          subtitle={`You can simply increase your online presence and generate quality traffic with reliable SEO strategies from us. At Search engine discovery we align our plan with search engines' best practices to increase the authenticity of your website.

          Our focus is on working on both On page as well as Off page SEO and to publish high-quality, value-added content. As Off-page optimization is essential for building brand trust and increasing your online visibility. Partner with us and let us show you how industry-leading we are. We will definitely not make you feel worry and will make your business website to easily reach on the top by giving you quality leads.
          `}
          className={"flex-col  md:flex-row "}
          imageEnter="right"
          textEnter="left"
          // hideTitle
        />
        <ImageContent
          imgUrl={"/seo_2.png"}
          alt={DIGITAL_MARKETING_CONTENT.CONTENT_MARK.title}
          className={"flex-col  md:flex-row-reverse mt-10"}
          title={`Local and technical SEO`}
          subtitle={`Our strategies are not limited as we also work for you with Local and technical SEO and allow your brand to present locally as well. As improving your rankings can be achieved by optimizing the back-end of your website, such as increasing page speed. Fixing these errors makes it easier for search engines to crawl your site. 

          You can easily gain local SEO rankings for your company by optimizing your Google Business Profile (GBP) or GMB (My Business) optimization. This way you can attract high-potential customers and grow your local presence with our GMB profile optimization and online reputation management.
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
