import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="zoom-in" className="max-w-7xl mx-auto px-4 mt-20 md:mt-30">
      {/* Title */}
      <h1 className=" text-2xl md:text-4xl font-bold text-center mb-4">
        Our Food Sharing Moments
      </h1>
      <p className="text-lg text-base-content text-center mb-10 max-w-2xl mx-auto">
        Every meal has the power to bring people together. Explore these moments
        of kindness, where surplus food found a new home and hungry hearts found
        a reason to smile.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left side 2x2 images */}
        <div className="grid grid-cols-2 gap-4 sm:col-span-1 sm:row-span-2">
          <img
            src="/images/gallery1.jpg"
            alt="Food 1"
            className="w-full h-56 object-cover rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          />
          <img
            src="/images/gallery2.jpg"
            alt="Food 2"
            className="w-full h-56 object-cover rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          />
          <img
            src="/images/gallery3.jpg"
            alt="Food 3"
            className="w-full h-56 object-cover rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          />
          <img
            src="/images/gallery4.jpg"
            alt="Food 4"
            className="w-full h-56 object-cover rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        {/* Middle big image (takes 2 cols and 2 rows) */}
        <div className="sm:col-span-1 sm:row-span-2">
          <img
            src="/images/gallery5.jpg"
            alt="Big Featured Food"
            className="w-full h-[464px] object-cover rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        {/* Right side 2x2 images */}
        <div className="grid grid-cols-2 gap-4 sm:col-span-1 sm:row-span-2">
          <img
            src="/images/gallery6.jpg"
            alt="Food 6"
            className="w-full h-56 object-cover rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          />
          <img
            src="/images/gallery7.jpg"
            alt="Food 7"
            className="w-full h-56 object-cover rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          />
          <img
            src="/images/gallery8.jpg"
            alt="Food 8"
            className="w-full h-56 object-cover rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          />
          <img
            src="/images/gallery9.jpg"
            alt="Food 9"
            className="w-full h-56 object-cover rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
