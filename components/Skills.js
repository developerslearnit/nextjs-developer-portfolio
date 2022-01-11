import WorkHistoryItem from "./WorkHistoryItem";

function Skills({ data }) {
  return (
    <div id="skills" className="bt-[70px] pb-10">
      <h3 className="subtitle">{data.subtitle}</h3>
      <h3 className="title">{data.title}</h3>

      {data.items.map((skill, index) => (
        <div className="relative mb-4" key={index}>
          <h3 className="mb-[0.5px] text-[18px] font-medium text-[#888] leading-[40px] relative">
            {skill.title}
          </h3>
          <div className="w-full bg-gray-600 rounded-full h-[1px]">
            <div className={`bg-[#987750] h-[1px] rounded-full w-full`}></div>
          </div>
        </div>
      ))}

      <div className="h-3 mt-[60px] w-full"></div>

      <h3 className="title">Work Histories</h3>

      {data.workHistory.map((work, index) => (
        <WorkHistoryItem
          key={index}
          companyName={work.companyName}
          jobTitle={work.jobTitle}
          jobDescription={work.jobDescription}
          startDate={work.startDate}
          endDate={work.endDate}
        />
      ))}

      {/* <WorkHistoryItem
        companyName="Simplex Business Solutions"
        jobTitle="Head Of Information Technology Department"
        jobDescription=" Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
        startDate="2017"
        endDate="Today"
      /> */}

      {/* End Divs */}
    </div>
  );
}

export default Skills;
