import SectionTitle from "../common/SectionTitle";

const UpgradeAccount = () => {
  return (
    <section id="UpgradeAccount" className="w-full z-10 bg-[#000000] px-[25px]">
      <SectionTitle
        title1="Upgrade"
        title2="Account"
        paragraph="Here you can upgrade your account, all automated!"
      />
      <div className="container flex z-10 flex-wrap justify-around mx-auto max-w-screen-xl">
        <div className="w-[510px] flex flex-col space-y-[15px] mt-[5px] z-10">
          <div>
            <span className="text-white text-[14px]">Upgrade Key</span>
            <input
              type="text"
              className="w-full rounded-lg border-[#A1FF20] border-[1px] h-[52px] bg-transparent my-[4px] px-[20px] text-white"
              placeholder="JohnDoe"
            />
          </div>
          <div>
            <span className="text-white text-[14px]">Email Address</span>
            <input
              type="text"
              className="w-full rounded-lg border-[#A1FF20] border-[1px] h-[52px] bg-transparent my-[4px] px-[20px] text-white"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <span className="text-white text-[14px]">Upgrade Key</span>
            <input
              type="text"
              className="w-full rounded-lg border-[#A1FF20] border-[1px] h-[52px] bg-transparent my-[4px] px-[20px] text-white"
              placeholder="JohnDoe"
            />
          </div>
          <div className="pb-[10px] ">
            <span className="text-white text-[14px]">Upgrade Key</span>
            <input
              type="text"
              className="w-full rounded-lg border-[#A1FF20] border-[1px] h-[52px] bg-transparent my-[4px] px-[20px] text-white"
              placeholder="JohnDoe"
            />
          </div>
          <button className="w-full h-[54px] bg-[#1ED760] rounded-lg">
            <span className="flex font-bold w-[150px] mx-auto">
              Upgrade Account{" "}
              <img
                className="w-[15px] h-[15px] my-auto"
                src="./img/rightarrow.png"
                alt=""
              />
            </span>
          </button>
        </div>
        <img className="hidden ml-5 xl:block" src="./img/rectangle.png" alt="" />
        <img src="./img/releases.png" className="mt-[20px]" alt="" />
      </div>
    </section>
  );
};

export default UpgradeAccount;
