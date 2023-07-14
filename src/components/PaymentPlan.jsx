import { useState } from "react";

import SectionBasicPlanHolder1 from "./SectionBasicPlanHolder";
import SectionTitle from "../common/SectionTitle";
import Modal from "../common/Modal";

const PaymentPlan = () => {
  const [showModal, setShowModal] = useState(false);

  const changeModal = (value) => {
    setShowModal(value);
  };

  return (
    <div className="bg-[#131313] z-10">
          <div className="bg-[#000000] z-10 rounded-t-[60px]">

      <SectionTitle
        title1="Cheapest"
        title2="Pricing"
        paragraph="No more thinking, Check out best plan option for you"
      />
      <div className="container flex flex-wrap justify-around mx-auto">
        <SectionBasicPlanHolder1
          heading="BASIC"
          heading1=""
          price="6"
          icon={[
            "./img/check.png",
            "./img/check.png",
            "./img/check.png",
            "./img/uncheck.png",
            "./img/uncheck.png",
          ]}
          style={[
            "w-[22px] h-[16px] my-auto me-[18px]",
            "w-[22px] h-[16px] my-auto me-[18px]",
            "w-[22px] h-[16px] my-auto me-[18px]",
            "w-[16px] h-[16px] my-auto me-[24px]",
            "w-[16px] h-[16px] my-auto me-[24px]",
          ]}
          stylespan="flex text-gray-300 text-xl font-sans font-thin hidden"
          data={[
            "Single user",
            "Limited features",
            "Multiple users",
            "Expanded features",
            "Premium support",
          ]}
          changeModal={changeModal}
        />
        <SectionBasicPlanHolder1
          heading="PLUS"
          heading1="POPULAR"
          price="12"
          icon={[
            "./img/check.png",
            "./img/check.png",
            "./img/check.png",
            "./img/check.png",
            "./img/check.png",
            "./img/uncheck.png",
          ]}
          style={[
            "w-[22px] h-[16px] my-auto me-[18px]",
            "w-[22px] h-[16px] my-auto me-[18px]",
            "w-[22px] h-[16px] my-auto me-[18px]",
            "w-[22px] h-[16px] my-auto me-[18px]",
            "w-[22px] h-[16px] my-auto me-[18px]",
            "w-[16px] h-[16px] my-auto me-[24px]",
          ]}
          stylespan="flex text-gray-300 text-xl font-sans font-thin"
          data={[
            "24/7 support security",
            "Reporting features",
            "Real-time collaboration",
            "Customization options",
            "Premium support",
            "AI integration",
          ]}
          changeModal={changeModal}
        />
        <SectionBasicPlanHolder1
          heading="PRO"
          heading1=""
          price="16"
          icon={[
            "./img/check.png",
            "./img/check.png",
            "./img/check.png",
            "./img/check.png",
            "./img/check.png",
          ]}
          style={[
            "w-[22px] h-[16px] my-auto me-[18px]",
            "w-[22px] h-[16px] my-auto me-[18px]",
            "w-[22px] h-[16px] my-auto me-[18px]",
            "w-[22px] h-[16px] my-auto me-[18px]",
            "w-[22px] h-[16px] my-auto me-[18px]",
          ]}
          stylespan="flex text-gray-300 text-xl font-sans font-thin hidden"
          data={[
            "9 Active cards",
            "Up to 15users",
            "Real-time collaboration",
            "Customization options",
            "Premium support",
          ]}
          changeModal={changeModal}
        />
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default PaymentPlan;
