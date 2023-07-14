const SectionTitle = ({ title1, title2, paragraph }) => {
  return (
    <div className="py-8 mx-auto w-full font-medium text-center text-white lg:pt-16">
      <p className="my-2 text-3xl lg:text-5xl">
        {title1} <span className="text-[#6EE755] ">{title2}</span>
      </p>
      <p className="text-md lg:text-[19px] font-normal whitespace-normal max-w-[570px] mx-auto">
        {paragraph}
      </p>
    </div>
  );
};
export default SectionTitle;
