import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GithubIcon from "@mui/icons-material/Github";
import FeedIcon from "@mui/icons-material/Feed";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function HomeSection({ data }) {
  return (
    <section id="intro" className="pt-[200px] min-h-[100vh]">
      <div className="w-full m-auto">
        <h3 className="subtitle">{data.subtitle}</h3>
        <h3
          className="title
        "
        >
          {data.title}
        </h3>
        <p className="desc">{data.content}</p>
        <div className="flex justify-start h-[50px]">
          <div
            className="flex justify-center items-center w-[50px] h-[50px] mr-[20px]
            transition-all ease-in-out delay-[0] duration-[0.3s] text-center cursor-pointer
          rounded-[5px] bg-[#181715] shadow-md shadow-black hover:-mt-[3px]"
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/adesina-mark-omoniyi/"
            >
              <LinkedInIcon className="h-[24px] w-[24px] text-gray-400" />
            </a>
          </div>
          <div
            className="flex justify-center items-center w-[50px] h-[50px] mr-[20px]
            transition-all ease-in-out delay-[0] duration-[0.3s] text-center cursor-pointer
          rounded-[5px] bg-[#181715] shadow-md shadow-black hover:-mt-[3px]"
          >
            <a target="_blank" href="https://facebook.com/omoniyi.adesina">
              <FacebookIcon className="h-[24px] w-[24px] text-gray-400" />
            </a>
          </div>

          <div
            className="flex justify-center items-center w-[50px] h-[50px] mr-[20px]
            transition-all ease-in-out delay-[0] duration-[0.3s] text-center cursor-pointer
          rounded-[5px] bg-[#181715] shadow-md shadow-black hover:-mt-[3px]"
          >
            <a target="_blank" href="https://twitter.com/engr_mark">
              <TwitterIcon className="h-[24px] w-[24px] text-gray-400" />
            </a>
          </div>

          <div
            className="flex justify-center items-center w-[50px] h-[50px] mr-[20px]
            transition-all ease-in-out delay-[0] duration-[0.3s] text-center cursor-pointer
          rounded-[5px] bg-[#181715] shadow-md shadow-black hover:-mt-[3px]"
          >
            <a target="_blank" href="https://github.com/developerslearnit">
              <GithubIcon className="h-[24px] w-[24px] text-gray-400" />
            </a>
          </div>

          <div
            className="flex justify-center items-center w-[50px] h-[50px] mr-[20px]
            transition-all ease-in-out delay-[0] duration-[0.3s] text-center cursor-pointer
          rounded-[5px] bg-[#181715] shadow-md shadow-black hover:-mt-[3px]"
          >
            <a target="_blank" href="http://www.developerslearnit.com">
              <FeedIcon className="h-[24px] w-[24px] text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
