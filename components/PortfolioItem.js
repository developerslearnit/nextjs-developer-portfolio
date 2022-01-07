function PortfolioItem({ image, title, description, url }) {
  return (
    <div
      className="flex flex-col p-[30px] xl:w-[470px] lg:w-[470px] md:w-[430px]  max-h-[434px] cursor-pointer
  rounded-[5px] justify-start items-start transition-all duration-[0.5s] 
  bg-[#222] shadow-md shadow-[#262a2e] hover:rounded-[5px] hover:shadow-lg ease-out hover:bg-[#111]"
    >
      <a href={url} target="_blank">
        <div className="xl:w-[410px] lg:w-[410px] md:w-[370px] sm:w-[250px] lg:h-[250px] sm:h-[200px] sm:mb-7">
          <img src={image} alt="" className="h-full w-full" />
        </div>
        <h2 className="text-[#987750] mt-[18px]">{title}</h2>
        <h1 className="mt-[12px] leading-6 text-[#ccc] xl:text-[20px] lg:text-[18px]  md:text-[15px] xs:text-[10px]  ">
          {description}
        </h1>
      </a>
    </div>
  );
}

export default PortfolioItem;
