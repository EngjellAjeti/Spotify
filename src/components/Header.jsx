const Header = () => {
  return (
    <>
      <div className="flex bg-[url('img/line.png')] bg-no-repeat bg-cover bg-center-bottom lg:bg-right-bottom  lg:bg-[length:900px_600px] place-content-between bg-black z-10">
        <div className="z-10 mt-20 ml-5 text-white sm:8 md:16 lg:ml-72 sm:mt-30 md:mt-40 lg:mt-56">
          <div className="z-10 text-3xl font-medium md:text-5xl lg:text-7xl clash">
            <h1>Feel good with</h1>
            <h1 className="mt-3">
              Automated{" "}
              <span className="text-[#6EE755] font-semibold">Spotify</span>
            </h1>
          </div>
          <div className="w-full z-10 md:w-[530px] whitespace-normal clash my-8">
            Tired of paying high monthly fees for Spotify Premium or just can't listen to music with ads? With our service, all this is done! We provide lifetime
            Spotify Premium along with an automated system.
          </div>
          <button className="w-36 sm:w-40 py-2 rounded-md border-2 border-[#1ED760] text-[#1ED760] border-solid font-bold z-10">
            Purchase
          </button>
          <button className="w-36 sm:w-40 py-2 rounded-md border-2 border-[#1ED760] border-solid bg-[#1ED760] text-black font-bold z-10 ml-4">
            Pricing
          </button>
        </div>
        <div>
          {/* <img src="img/line.png" alt="" className="absolute" /> */}
          <img
            src="img/phone.png"
            alt=""
            className="max-md:hidden md:w-80 md:h-92 md:mt-16 md:mr-20 lg:w-[450px] lg:h-[600px] lg:mt-24 lg:mr-32 "
          />
        </div>
      </div>
      <img
        src="img/upgradeBar.png"
        className="hidden min-[394px]:block mx-auto mt-20 lg:mt-5 "
      />
      <img
        src="img/upgradeBar_mobile.png"
        className="min-[394px]:hidden mx-auto mt-14 lg:mt-5 "
      />
      {/* <div className="h-20 mx-12 mt-24 px-20 rounded-3xl bg-[#6EE755] "></div> */}
    </>
  );
};
export default Header;
