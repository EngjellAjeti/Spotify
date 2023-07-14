import SingleFeature from "../common/SingleFeature";
import featuresData from "./featuresData";
import SectionTitle from "../common/SectionTitle";

const WhyUs = () => {
  return (
    <section id="features" className="z-10 pb-16 w-full bg-black">
      <SectionTitle
        title1="Why"
        title2="Us?"
        paragraph="You'll enjoy the best experience by choosing us instead of competitors."
      />
      <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 gap-y-10 gap-x-16 px-4 md:grid-cols-2 lg:grid-cols-3">
        {featuresData.map((feature) => (
          <SingleFeature key={feature.id} feature={feature} />
        ))}
      </div>
      </div>
    </section>
  );
};
export default WhyUs;
