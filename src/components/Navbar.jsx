import React from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative top-0 w-full flex flex-wrap items-center justify-between px-2 py-3 border-b-2 border-b-[#1ED760] border-solid z-10">
        <div className="container flex flex-wrap justify-between items-center px-4 mx-auto">
          <div className="flex relative justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="inline-block flex py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap"
            >
                <img src="img/logo.png" className="w-[50px] h-[full]" alt="..." />
                <span className="my-auto ml-3 text-lg font-bold text-white">Spotify</span>
            </a>
            <button
              className="block px-3 py-1 text-xl leading-none bg-[#1ED760] text-white bg-transparent rounded border border-transparent border-solid cursor-pointer outline-none lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg className="w-5 h-5 text-[#1ED760]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col list-none lg:max-w-4xl lg:flex-row lg:mx-auto">
              <li className="nav-item">
                <a
                  className="flex items-center py-2 text-xs font-bold leading-snug text-white uppercase lg:pe-5 xl:pe-14 hover:opacity-75"
                >
                  <span className="ml-2 text-white hover:text-[#1ED760] text-lg hover:font-bold">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center py-2 text-xs font-bold leading-snug text-white uppercase lg:pe-5 xl:pe-14 hover:opacity-75"
                >
                  <i className="text-lg text-white opacity-75 fab fa-twitter leading-lg"></i><span className="ml-2 text-white hover:text-[#1ED760] text-lg hover:font-bold">Why Us</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center py-2 text-xs font-bold leading-snug text-white uppercase lg:pe-5 xl:pe-14 hover:opacity-75"
                  to="/#whyUs"
                >
                  <i className="text-lg text-white opacity-75 fab fa-pinterest leading-lg"></i><span className="ml-2 text-white hover:text-[#1ED760] text-lg hover:font-bold">How it Works</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center py-2 text-xs font-bold leading-snug text-white uppercase lg:pe-5 xl:pe-14 hover:opacity-75"
                >
                  <i className="text-lg text-white opacity-75 fab fa-pinterest leading-lg"></i><span className="ml-2 text-white hover:text-[#1ED760] text-lg hover:font-bold">Pricing</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="flex items-center py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75"
                >
                  <i className="text-lg text-white opacity-75 fab fa-pinterest leading-lg"></i><span className="ml-2 text-white hover:text-[#1ED760] text-lg hover:font-bold">Upgrade</span>
                </a>
              </li>
            </ul>
            <div className="ml-auto nav-item">
                <a
                  className="flex items-center py-2 text-xs font-bold leading-snug uppercase"
                  to="/#loveChat"
                >
                  <button className="rounded-md bg-[#6EE755] w-[177px] h-[46px] text-lg font-bold hover:opacity-75 hover:text-white">
                    Contact Us
                  </button>
                </a>
              </div>
          </div>
        </div>
      </nav>
  );
};
export default Navbar;