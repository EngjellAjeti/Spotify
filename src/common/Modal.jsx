import React, { useState } from "react";

const Modal = ({setShowModal, showModal}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const submitHandler = async (e) => {};
  return (
    showModal && (
    <div className="overflow-y-auto fixed inset-0 z-50 text-white">
      <div className="fixed inset-0 w-full h-full bg-[#000000] opacity-40"                 onClick={() => setShowModal(false)}
></div>
      <div className="flex items-center px-4 pt-4 min-h-screen">
        <div className="relative p-4 mx-auto w-full max-w-lg rounded-xl shadow-lg border border-[#6EE755] bg-[#131313] bg-[url('img/modal_bg.png')]">
          {/* <img
            src="img/modal_bg.png"
            className="absolute bottom-0 left-0 -z-10"
          /> */}
          <div className="flex">
            <div className="mx-9 my-5 w-full text-center sm:text-left">
              <div className="">
                <h4 className="mb-2 text-2xl power">
                  Finish your purchase{" "}
                  <label className="text-[#6EE755]">(ID#123)</label>
                </h4>
                <p className="text-sm">
                  Paying $99 for 1 month of Spotify Premium
                </p>
              </div>
              <form onSubmit={submitHandler}>
                <div className="mt-8 mb-2">
                  <label
                    htmlFor="amount"
                    className="block mb-3 text-sm font-medium text-normal dark:text-white"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="px-6 py-3 w-full text-base bg-transparent rounded-lg border border-[#6EE755] outline-none text-body-color placeholder-normal shadow-one focus:border-primary focus-visible:shadow-none bg-highlight dark:shadow-signUp"
                  />
                </div>
                <div className="my-4 mb-4 sm:mb-0">
                  <label
                    htmlFor="checkboxLabel"
                    className="flex items-center text-sm font-medium cursor-pointer select-none"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="checkboxLabel"
                        className="sr-only"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <div className="flex justify-center items-center mr-2 w-5 h-5 rounded border border-[#6EE755] box">
                        <span
                          className={isChecked ? "opacity-100" : "opacity-0"}
                        >
                          <svg
                            width="11"
                            height="8"
                            viewBox="0 0 11 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                              fill="#e8c032"
                              stroke="#e8c032"
                              strokeWidth="0.4"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    Join our mailing list for sales, giveaways & more?
                  </label>
                </div>
                <div className="my-4 mb-5 sm:mb-0">
                  <span className="text-sm font-medium">
                    Connect your Discord account
                  </span>
                </div>
                <button className="flex justify-center items-center px-3 mt-2 py-2 w-full text-base font-medium bg-[#6EE755] rounded-lg duration-300 ease-in-out md:px-6 md:py-3 text-black power">
                  Join Discord
                </button>
                <div className="mt-2 sm:mb-0">
                  <span className="text-sm font-medium">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  </span>
                </div>
                <div className="my-4 sm:mb-0">
                  <span className="text-sm font-thin">
                    Select your desired payment method
                  </span>
                </div>
                <button className="flex justify-between items-center px-3 mt-2 py-2 w-full bg-opacity-5 border border-[#6EE755] bg-[#6EE755] rounded-lg duration-300 ease-in-out md:px-3 md:py-3 power">
                  <div className="flex items-center">
                    <img
                      width={44}
                      height={36}
                      src="/img/crypto.png"
                      className="mr-2"
                    />
                    <p className="text-white">Cryptocurrency</p>
                  </div>
                  <img src="/img/arrow.png" />
                </button>
                <button className="flex justify-between items-center px-3 mt-2 py-2 w-full bg-opacity-5 border border-[#6EE755] bg-[#6EE755] rounded-lg duration-300 ease-in-out md:px-3 md:py-3 power">
                  <div className="flex items-center">
                    <img
                      width={44}
                      height={36}
                      src="/img/pp.png"
                      className="mr-2"
                    />
                    <p className="text-white">Paypal</p>
                  </div>
                  <img src="/img/arrow.png" />
                </button>
                <div className="flex justify-center mt-6 mb-2">
                  <button className="flex justify-center items-center px-3 mt-2 py-2 w-full text-base font-medium bg-[#6EE755] rounded-lg duration-300 ease-in-out md:px-6 md:py-3 text-black power">
                    Pay Now
                  </button>
                </div>
                <div className="my-4 text-center sm:mb-0">
                  <span className="text-xs font-thin">
                    Once payment is confirmed, 1 redeemable key will be added to
                    your account.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Modal;
