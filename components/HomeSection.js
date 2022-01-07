import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

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
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium h-[24px] w-[24px] text-gray-400 css-i4bv87-MuiSvgIcon-root"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="GitHubIcon"
              >
                <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
              </svg>
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
