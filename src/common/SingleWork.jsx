const SingleWork = ({ howWork }) => {
  const { number, title, paragraph } = howWork;

  return (
<div className="mb-5 min-w-[305px] lg:w-[405px] h-[302px] w-full">
  <p className="text-[#6EE755] text-5xl sm:text-7xl font-bold inline-block w-full">{number}</p>
  <p className="inline-block mb-5 w-full text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
    AUTOMATED
    <br />
    {title}
  </p>
  <p className="w-full text-sm sm:text-md leading-relaxed text-[#CDC9C9]">
    {paragraph}
  </p>
</div>

  );
};

export default SingleWork;
