import PropTypes from "prop-types";

const SectionBasicPlanHolder = ({
  heading,
  heading1,
  price,
  style,
  stylespan,
  icon,
  data,
  changeModal,
}) => {
  return (
    <section id="SectionBasicPlanHolder" className="w-[408px] max-w-full mx-5 z-10">
      <div
        className={`container p-[30px] md:p-[30px] bg-[#131313] rounded-[30px] mt-[30px] ${
          heading1 == "POPULAR" && "rounded-[30px] border-[#A1FF20] border-[1px]"
        }`}
      >
        <button className="bg-[#FFFFFF] bg-opacity-[0.15] px-[16px] pt-1 md:pt-[8.33px] pb-1 md:pb-[9px] text-white text-xl font-sans font-thin">
          {heading}
          <span className="text-[#6EE755] text-xs font-medium">{heading1}</span>
        </button>
        <div className="flex text-white my-[10px]">
          <span className="text-[50px] lg:text-[70px] font-mono">${price}</span>
          <div className="my-auto">
            <span className="text-[#6EE755] text-lg lg:text-3xl line-through decoration-[#FF0000]">
              ${price}
            </span>
            <p className="text-lg">/permonth</p>
          </div>
        </div>
        <div className="flex flex-col space-y-[33px] my-[30px] mb-[35px]">
          <span className="flex font-sans text-base text-gray-300 lg:text-xlfont-thin">
            {<img className={style[0]} src={icon[0]} />}
            {data[0]}
          </span>
          <span className="flex font-sans text-base font-thin text-gray-300 lg:text-xl">
            <img className={style[1]} src={icon[1]} />
            {data[1]}
          </span>
          <span className="flex font-sans text-base font-thin text-gray-300 lg:text-xl">
            <img className={style[2]} src={icon[2]} />
            {data[2]}
          </span>
          <span className="flex font-sans text-base font-thin text-gray-300 lg:text-xl">
            <img className={style[3]} src={icon[3]} />
            {data[3]}
          </span>
          <span className="flex font-sans text-base font-thin text-gray-300 lg:text-xl">
            <img className={style[4]} src={icon[4]} />
            {data[4]}
          </span>
          <span className={stylespan}>
            <img className={style[5]} src={icon[5]} />
            {data[5]}
          </span>
        </div>
        <button
          className="bg-[#6EE755] w-full h-[50px] md:h-[66px] rounded-[20px] text-xl"
          onClick={() => changeModal(true)}
        >
          Purchase
        </button>
      </div>
    </section>
  );
};

SectionBasicPlanHolder.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  price: PropTypes.string,
  icon: PropTypes.string,
  style: PropTypes.string,
  stylespan: PropTypes.string,
  data: PropTypes.string,
};

export default SectionBasicPlanHolder;
