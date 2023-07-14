
const Hero = () => {
  return (
    <>
      <section
        className="flex overflow-hidden z-20 justify-center h-full bg-[#131313]"
      >

        <div className="container z-20 h-full">
          <div className="flex flex-col justify-start md:mx-10 lg:flex-row">

            <div className="px-4 xs:w-full lg:w-1/2 pb-[40px] md:pb-0 pt-0 md:pt-[65px] xl:pt-[125px] ">
              <div
                className="wow fadeInUp  max-w-[800px]"
                data-wow-delay=".2s"
              >
                <h1 className="text-3xl font-bold leading-none text-center text-white lg:text-5xl textplaceholder:-black leader-tight md:leading-none sm:text-4xl sm:leading-tight md:text-6xl md:text-start power">
                Automated
                </h1>
                <h1 className="mb-5 text-3xl font-bold leading-none text-center text-[#6EE755] lg:text-5xl textplaceholder:-black leader-tight md:leading-none sm:text-4xl sm:leading-tight md:text-6xl md:text-start power">
                Spotify Premium!
                </h1>
    
  
                <p className="mb-8 text-base font-medium !leading-relaxed  text-md sm:text-md text-center md:text-start break-words  inter w-full lg:w-11/12 text-[#CDC9C9]">
                You'll enjoy the best experience by choosing us instead <br></br> of
                competitors.              
                </p>
                
                <div className="flex justify-center md:justify-start">
                  <button
                    href="/pricing"
                    className="w-36 sm:w-40 py-2 rounded-md border-2 border-[#6EE755] text-[#6EE755] border-solid font-bold"
                  >
                    Purchase
                  </button>
                  <button
                    href="/signup"
                    className="w-36 sm:w-40 py-2 rounded-md border-2 border-[#6EE755] border-solid bg-[#6EE755] text-black font-bold ml-4"
                  >
                    Pricing
                  </button>
                </div>
              </div>
            </div>
            <div
            className="hidden px-4 w-full lg:w-1/2 lg:block">
       <div className="px-5">
          <img src="img/carousel1.png" />
        </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero