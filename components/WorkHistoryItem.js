function WorkHistoryItem({
  companyName,
  jobTitle,
  jobDescription,
  startDate,
  endDate,
}) {
  return (
    <div
      className="w-full bg-[#181715] relative p-[35px] mb-[20px] after:absolute after:content-[''] after:w-[3px] after:h-[50px] 
    after:-left-[-1px] after:top-[50%] after:bg-[rgba(255,255,255,0.2)] after:-mt-[25px]"
    >
      <h5 className="text-[#ddd] xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[12px] uppercase inline-block">
        {companyName}
      </h5>
      <span className="inline-block ml-4 lg:text-[15px] md:text-[14px] sm:text-[12px]">
        ( {startDate} — {endDate} )
      </span>

      <h3 className="text-[#ddd] xl:text-[30px] lg:text-[20px] md:text-[17px] sm:text-[14px] mb-[17px] mt-[34px]">
        {jobTitle}
      </h3>
      <p className="text-[#888] leading-[1.35rem]">{jobDescription}</p>
    </div>
  );
}

export default WorkHistoryItem;
