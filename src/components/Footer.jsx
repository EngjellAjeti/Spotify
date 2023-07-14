

const Footer = () => {
  return (
    <>
      <footer
        className="flex justify-center pt-12  lg:pt-14 bg-[#131313]"
        data-wow-delay=".1s"
      >
        <div className="z-10 w-10/12">
          <div className="flex flex-row justify-between">
            <div className="w-full">
                <div className="w-full flex justify-center md:justify-start border-b-[1px] border-primary">
                  <a href="/"               className="flex py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap">
                  <img src="img/logo.png" className="w-[50px] h-[full]" alt="..." />
                <span className="my-auto ml-3 text-lg font-bold text-white">Spotify</span>
                  </a>
                </div>
                <div className="flex mt-4 mb-5 w-full">
                  <ul className="flex flex-col justify-between items-center w-full md:flex-row lg:flex lg:space-x-12">
                    <p className="text-xs font-medium leading-relaxed text-white md:text-base">
                    © 2023 Spotify. All rights reserved.                
                    </p>
                    <div className="hidden justify-between w-3/12 md:flex">
                      <li>
                        <a
                          href="/upgrade"
                          className="inline-block text-base font-medium text-white hover:text-primary"
                        >
                          {" "}
                          Upgrade{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/renew"
                          className="inline-block text-base font-medium text-white hover:text-primary"
                        >
                          {" "}
                          Renew{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/pricing"
                          className="inline-block text-base font-medium text-white hover:text-primary"
                        >
                          {" "}
                          Pricing{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="/profile"
                          className="inline-block text-base font-medium text-white hover:text-primary"
                        >
                          {" "}
                          Dashboard{" "}
                        </a>
                      </li>
                    </div>  
                    <div className="flex justify-between">
                        <img src="/img/discord.svg"/>
                        <img src="/img/telegram.svg"/>
                    </div>  
                  </ul>
                </div>  
              </div>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
