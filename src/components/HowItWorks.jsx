import SectionTitle from "../common/SectionTitle";
import SingleWork from "../common/SingleWork";
import howWorkData from "./howWorkData";

const HowItWorks = () => {
  return (
    <div className="bg-[#131313] z-10 py-3 rounded-t-[60px] w-full">
      <SectionTitle
        title1="How it"
        title2="Works"
        paragraph="Here is way how we work in best way"
      />
      <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-y-10 gap-x-16 px-4 md:grid-cols-2 lg:grid-cols-3">
        {howWorkData.map((howWork) => (
          <SingleWork key={howWork.id} howWork={howWork} />
        ))}
      </div>
      </div>

    </div>
  );
};

export default HowItWorks;
