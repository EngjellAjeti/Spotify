const ContactUs = () => {
  return (
<section id="ContactUs" className="w-full z-10 h-1/2 bg-[#131313] ">
<div style={{ background: 'linear-gradient(to bottom, black 50%, transparent 50%)' }}>

      <div className="relative z-10 mx-auto max-w-screen-xl">
        <div className="py-[150px]">
          <div className="max-w-screen-xl h-96 bg-[#6EE755] rounded-[30px] mx-auto bg-no-repeat bg-right-bottom md:bg-right bg-[length:130px_234px] bg-[url('./img/image31.png')] xl:bg-none">
            <div className="py-[45px] lg:py-[90px] ps-[20px] md:ps-[40px] xl:ps-[60px] flex">
              <div className="flex flex-col space-y-[10px] h-[180px] max-w-sm md:max-w-md lg:max-w-lg pe-[50px]">
                <p className="text-[40px] font-semibold">Contact Us</p>
                <p>
                  {" "}
                  You'll enjoy the best experience by choosing us instead of
                  competitors.
                </p>
                <div>
                  <button className="w-[175px] h-[46px] border-[1px] mt-[15px] border-black rounded-[8px] hover:bg-black hover:text-[#6EE755] font-bold me-[14px]">
                    Contact Us
                  </button>
                  <button className="w-[175px] h-[46px] border-[1px] mt-[15px] border-black rounded-[8px] hover:bg-black hover:text-[#6EE755] font-bold">
                    Upgrade Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="hidden xl:block absolute inset-y-0 right-0 max-h-[700px] max-w-[700px]"
          src="./img/image3.png"
          alt=""
        />
      </div>
      </div>
    </section>
  );
};

export default ContactUs;
