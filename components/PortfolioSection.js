// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import Slider from "react-slick";

import PortfolioItem from "./PortfolioItem";

function PortfolioSection({ data }) {
  return (
    <div id="portfolios" className="bt-[70px] pt-[150px]">
      <h3 className="subtitle">Portfolio</h3>
      <h3 className="title">Featured Projects</h3>

      <div className="mx-auto w-full grid grid-col-1 lg:grid-cols-2 lg:gap-3">
        {data.map((item, index) => (
          <PortfolioItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}

export default PortfolioSection;

{
  /* <Slider {...settings}>

</Slider> */
}
