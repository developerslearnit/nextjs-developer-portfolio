import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About";
import HomeSection from "../components/HomeSection";
import AppMenu from "../components/AppMenu";
import PictureFrame from "../components/PictureFrame";
import Skills from "../components/Skills";
import PortfolioSection from "../components/PortfolioSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home({ portfolioData }) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Mark Adesina Resume</title>
      </Head>

      <div
        className={`w-full md:w-[44%] md:border-l md:border-[rgba(255,255,255,0.2)] md:h-screen md:fixed md:right-0 
        md:top-0 md:bottom-0 transition-all ease-in-out delay-[2ms] duration-[50] ${
          scroll && "md:w-[32%]"
        }`}
      >
        <AppMenu />

        <PictureFrame />
      </div>

      <main
        className={`w-[90%] mx-auto md:w-[56%] md:ml-1  h-screen md:pl-[5%]  md:pr-[10%] transition-all ease-in-out delay-[2ms] duration-[50] ${
          scroll && "md:w-[68%] lg:w-[68%] xl:w-[68%] 2xl:w-[68%]"
        }`}
      >
        <HomeSection data={portfolioData.intro} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <PortfolioSection data={portfolioData.portfolios} />
        <Contact data={portfolioData.contact} />
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const portfolioData = await import("./api/data.json");

  if (!portfolioData) {
    return {
      props: {
        portfolioData: [],
      },
    };
  }

  return {
    props: {
      portfolioData: portfolioData.default,
    },
  };
}
