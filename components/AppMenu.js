import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Link } from "react-scroll";

function AppMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex w-full items-end justify-end pr-[50px] pt-[40px]">
        <MenuIcon
          onClick={() => setIsMenuOpen(true)}
          className="h-[30px] w-[30px] text-[#ddd] cursor-pointer"
        />
      </div>
      <div
        className={`fixed flex right-0 top-0 w-[30%] bottom-0 min-h-screen bg-[#181715] z-50 
         ${
           !isMenuOpen
             ? "translate-x-[102%] transition-transform duration-[1s] ease-in-out"
             : "translate-x-[0%] transition-transform duration-[1s] ease-in-out"
         }`}
      >
        <div className="hover-anim cursor-pointer absolute right-[40px] top-[40px] z-[65px] p-2">
          <XIcon
            onClick={() => setIsMenuOpen(false)}
            className="h-[40px] w-[40px] text-[#888] 
          "
          />
        </div>
        <div className="flex flex-col w-full h-full py-[20%] pr-[25%] mx-auto">
          <div className="w-full flex flex-col items-start justify-start pl-[20%]">
            <div
              className="hover:bg-[#d9d9d9] hover:bg-opacity-10 transition duration-200 ease-out cursor-pointer 
            w-full rounded-0 py-[20px] text-[#ddd] text-[25px] pl-[20px]
            flex items-center justify-start h-[35px] mb-[20px]"
            >
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="intro"
                spy={true}
                smooth={true}
                className="w-full leading-[35px]"
              >
                Intro
              </Link>
            </div>
            <div
              className="hover:bg-[#d9d9d9] hover:bg-opacity-10 transition duration-200 ease-out cursor-pointer 
            w-full rounded-0 py-[20px] text-[#ddd] text-[25px] pl-[20px]
            flex items-center justify-start h-[35px] mb-[20px]"
            >
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="about"
                spy={true}
                smooth={true}
                className="w-full leading-[35px]"
              >
                About
              </Link>
            </div>

            <div
              className="hover:bg-[#d9d9d9] hover:bg-opacity-10 transition duration-200 ease-out cursor-pointer 
            w-full rounded-0 py-[20px] text-[#ddd] text-[25px] pl-[20px]
            flex items-center justify-start h-[35px] mb-[20px]"
            >
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="skills"
                spy={true}
                smooth={true}
                className="w-full leading-[35px]"
              >
                Skills
              </Link>
            </div>

            <div
              className="hover:bg-[#d9d9d9] hover:bg-opacity-10 transition duration-200 ease-out cursor-pointer 
            w-full rounded-0 py-[20px] text-[#ddd] text-[25px] pl-[20px]
            flex items-center justify-start h-[35px] mb-[20px]"
            >
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="portfolios"
                spy={true}
                smooth={true}
                className="w-full leading-[35px]"
              >
                Portfolios
              </Link>
            </div>

            <div
              className="hover:bg-[#d9d9d9] hover:bg-opacity-10 transition duration-200 ease-out cursor-pointer 
            w-full rounded-0 py-[20px] text-[#ddd] text-[25px] pl-[20px]
            flex items-center justify-start h-[35px]"
            >
              <Link
                onClick={() => setIsMenuOpen(false)}
                to="contact"
                spy={true}
                smooth={true}
                className="w-full leading-[35px]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppMenu;
