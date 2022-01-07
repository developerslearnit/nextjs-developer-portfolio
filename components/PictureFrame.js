function PictureFrame() {
  return (
    <div className="py-[60px] px-[16%]">
      <div className="py-[38px] px-[41px] relative mb-[30px] w-full sm:hidden lg:block">
        <div
          className="border-[rgba(255,255,255,0.2)] border rounded-[2px] absolute 
        left-0 right-0 bottom-[20px] top-[20px] z-1 transition-all ease-in-out delay-150 duration-100"
        ></div>
        <div
          className="border-[rgba(255,255,255,0.2)] border rounded-[2px] absolute 
        left-[20px] right-[20px] bottom-0 top-0 z-1 transition-all ease-in-out delay-150 duration-100"
        ></div>
        <div className="relative z-10">
          <img src="imgs/mark_adesina.png" className="w-full h-full" />
        </div>
        <div className="relative text-center pt-[27px] pb-[20px]">
          <h5 className="text-[#999] uppercase text-[18px] mb-[30px] p-0 font-medium">
            Hi There! I am
          </h5>
          <h3 className="xl:text-[30px] lg:text-[30px] md:text-[20px] m-0 py-0 px-[10px] relative min-h-[36px] text-[#ddd]">
            <span
              className="before:content-[']'] before:right-0 before:absolute 
            before:text-[#44993b]
            after:content-['['] after:left-0 after:absolute 
           after:text-[#44993b]
           xl:text-[30px] lg:text-[20px] md:text-[15px] xm:text-red-800"
            >
              Full stack developer
            </span>
          </h3>
        </div>
      </div>

      <a
        href="https://github.com/developerslearnit/developerslearnit/blob/main/Adesina-Mark-Omoniyi-Resume.pdf"
        target="_blank"
      >
        <div
          className="flex items-center justify-center w-[200px] h-[180px] max-w-[100%] 
      text-[#888] border-[2px] border-[rgba(255,255,255,0.2)] flex-col space-y-5 relative mx-auto cursor-pointer"
        >
          <span className="h-[58px] w-[90px] text-[#ddd] flex justify-center items-center">
            <div className="relative w-[58px] h-[58px]">
              <img
                src="svg/inbox.svg"
                alt=""
                className="text-[#ddd] w-[58px] h-[58px]"
              />
              <img
                src="svg/arrow.svg"
                alt=""
                className="absolute text-[#ddd] w-[58px] h-[58px] left-[1px] top-[5px]"
              />
            </div>
          </span>
          <span className="text-[18px] uppercase">Download CV</span>
        </div>
      </a>
    </div>
  );
}

export default PictureFrame;
