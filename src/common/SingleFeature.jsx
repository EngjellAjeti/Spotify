const SingleFeature = ({ feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full min-w-[305px] lg:w-[405px] md:h-[302px] bg-[#131313] rounded-3xl border-[#1ED760] border shadow-signUp wow fadeInUp z-10 my-2">
      <div className="px-10 py-2 pb-4 rounded-2xl wow fadeInUp" data-wow-delay=".15s">
        <div className="flex md:justify-start">
          <div className="my-6 flex h-[50px] w-[50px] rounded-md  bg-opacity-10 font-bold text-primary">
            {icon}
          </div>
        </div>
        <h3 className="mb-6 text-xl text-white text-start power sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-md leading-relaxed text-[#CDC9C9] text-start">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
