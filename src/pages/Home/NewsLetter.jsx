import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const NewsLetter = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
      data-aos="flip-right"
      className="mt-16 md:mt-30 mb-10 md:mb-20 max-w-[350px] sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto bg-white dark:bg-gray-800 border rounded-lg shadow-md p-6 sm:p-8 md:p-16"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center">
        Sign Up For <span className="text-[#73B21A]">Project</span> Updates
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 text-center mb-6">
        Stay informed with the latest news and updates about our food sharing
        platform.
      </p>

      <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto w-full">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73B21A] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 w-full"
        />
        <button
          type="submit"
          className="px-4 sm:px-6 md:px-8 py-3 bg-[#73B21A] text-white rounded-md hover:bg-green-700 transition w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;
