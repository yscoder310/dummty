import { Banner } from "@/components/banner";
import { OUR_TEAM, OUR_TEAM_LIST } from "@/lib/constants";
import clsx from "clsx";

const OurTeamPage = () => {
  return (
    <section className="relative overflow-hidden">
      <Banner
        text={OUR_TEAM.title}
        primaryText={OUR_TEAM.primaryTitle}
        subtitle={OUR_TEAM.subtitle}
        imgUrl={"/banner_digi_market.png"}
      />
      <div className="container py-12  md:px-32">
        <div className="w-full flex flex-wrap gap-8 justify-center">
          {OUR_TEAM_LIST.map((team) => (
            <div
              key={team.id}
              className={clsx(
                "w-full h-[362px] flex flex-col items-center pt-10 pb-16 rounded-2xl md:w-[30%]",
                team?.alternateColor ? "bg-[#FBF6EA]" : "bg-[#F4F4F4]"
              )}
            >
              <div className="w-36 h-36 overflow-hidden rounded-full">
                <img
                  src={team.imgUrl}
                  className="object-center object-cover w-full h-fill"
                  alt={team.name}
                />
              </div>
              <h1 className="text-3xl text-center pt-6 font-semibold text-textPrimary">
                {team.name}
              </h1>
              <p className="text-textSecondary text-base">
                {team.designation + " @" + team.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamPage;
