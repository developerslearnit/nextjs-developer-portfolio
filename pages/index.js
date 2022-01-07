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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`w-[56%] h-screen 2xl:pl-[5%] lg:pl-10 md:pl-[5%] md:ml-[3%] pr-[10%] transition-all ease-in-out delay-[2ms] duration-[50] ${
          scroll && "w-[68%]  pr-[5%]"
        }`}
      >
        <HomeSection data={portfolioData.intro} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <PortfolioSection data={portfolioData.portfolios} />
        <Contact data={portfolioData.contact} />
        <Footer />
      </main>
      <div
        className={` w-[44%] border-l border-[rgba(255,255,255,0.2)] h-screen fixed right-0 
        top-0 bottom-0 transition-all ease-in-out delay-[2ms] duration-[50] ${
          scroll && "w-[32%]"
        }`}
      >
        <AppMenu />

        <PictureFrame />
      </div>
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
