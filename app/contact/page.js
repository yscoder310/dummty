import { Banner } from "@/components/banner";
import { ButtonRounded } from "@/components/button";
import { CONTACT_US } from "@/lib/constants";

const ContactPage = () => {
  return (
    <section className="relative overflow-hidden">
      <Banner
        text={CONTACT_US.title}
        primaryText={CONTACT_US.primaryTitle}
        subtitle={CONTACT_US.subtitle}
        imgUrl={"/banner_digi_market.png"}
      />
      <div className="container">
        <div className="flex justify-center py-12  md:px-32">
          <div className="flex  w-[786px] flex-col">
            <h1 className="text-textPrimary text-2xl font-semibold  md:text-4xl text-center">
              Let&apos;s Start a Conversation
            </h1>
            <div className="flex flex-col px-8 py-5  mt-7 bg-[#592EA9] text-white md:px-16 md:py-11 md:flex-row rounded-xl">
              <div className="w-full md:w-1/2">
                <p className="font-light">Working ours</p>
                <h1 className=" text-lg md:text-xl font-bold mt-8">
                  Monday To Friday
                </h1>
                <h1 className="text-lg md:text-xl font-bold mt-2">
                  9:00 AM to 8:00 PM
                </h1>
                <p className="font-light">Our Support Team is available 24/7</p>
              </div>
              <div className="w-full md:w-1/2">
                <p className="font-light">Contact Us</p>
                <h1 className="text-lg md:text-xl font-bold mt-8">
                  +91 769 606 2833
                </h1>
                <p className="font-light">contact@searchenginediscovery.com</p>
              </div>
            </div>

            <form className="w-full flex flex-col gap-7 mt-7">
              <input
                className="w-full p-6 border border-border rounded-[35px] focus:border-primary focus:border-[2px] focus:outline-none focus:ring-0"
                placeholder="Full Name"
              />
              <input
                className="w-full p-6 border border-border rounded-[35px] focus:border-primary focus:border-[2px] focus:outline-none focus:ring-0"
                placeholder="Email"
              />
              <input
                className="w-full p-6 border border-border rounded-[35px] focus:border-primary focus:border-[2px] focus:outline-none focus:ring-0"
                placeholder="Query Related"
              />
              <textarea
                className="w-full p-6 border border-border rounded-[35px] focus:border-primary focus:border-[2px] focus:outline-none focus:ring-0"
                placeholder="Message"
                rows={6}
              />
              <ButtonRounded type="submit" className="self-center">
                Send Message
              </ButtonRounded>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
