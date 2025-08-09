import React from "react";
import Banner from "./Banner";
import FeaturedFoods from "./FeaturedFoods";
import { Link } from "react-router";
import Faqs from "./Faqs";
import WhyChooseUs from "./WhyChooseUs";

import FeatureHighlight from "./FeatureHighlight";
import NewsLetter from "./NewsLetter";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-center mt-16 md:mt-30">
          Featured Foods
        </h2>
        <div className="max-w-11/12 mx-auto my-6 md:my-10 ">
          <FeaturedFoods></FeaturedFoods>
        </div>
        <div className="text-center">
          <Link to="/available-foods">
            {" "}
            <button className="w- rounded bg-[#73B21A] hover:bg-[#008236] hover:text-white px-4 py-2 font-semibold">
              View All
            </button>
          </Link>
        </div>
      </div>

      {/* Why choose Us section */}
      <WhyChooseUs></WhyChooseUs>

      <FeatureHighlight></FeatureHighlight>
      <Gallery></Gallery>

      {/* faqs section */}
      <Faqs></Faqs>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
