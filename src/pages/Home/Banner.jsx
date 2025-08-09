import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";

const slides = [
  {
    id: 1,
    img: "/images/banner1.jpg",
    title: "Share Your Surplus Food",
    desc: "Help reduce food waste by sharing your excess food with the community.",
  },
  {
    id: 2,
    img: "/images/banner2.jpg",
    title: "Find Available Meals Nearby",
    desc: "Easily discover free meals and food donations near you.",
  },
  {
    id: 3,
    img: "/images/banner3.jpg",
    title: "Join Our Food Sharing Network",
    desc: "Connect with others passionate about reducing hunger and waste.",
  },
  {
    id: 4,
    img: "/images/banner4.jpg",
    title: "Make a Difference Today",
    desc: "Be part of a movement that saves food and feeds people.",
  },
];

const Banner = () => {
  return (
    <div className="relative max-w-full mx-auto mt-16">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        className="relative"
      >
        {slides.map(({ id, img, title, desc }) => (
          <SwiperSlide key={id}>
            <div className="relative h-[400px] md:h-[550px] lg:h-[600px]">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-center object-cover "
              />
              <div
                className="absolute inset-0 bg-black"
                style={{ opacity: 0.8 }}
              ></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-16 lg:px-24 text-white">
                <h1 className="text-2xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                  {title}
                </h1>
                <p className="mb-6 max-w-xl text-md md:text-xl drop-shadow-md">
                  {desc}
                </p>
                <a
                  href="/available-foods"
                  className="inline-block bg-[#73B21A] hover:bg-[#5a8713] transition px-6 py-3 rounded-md font-semibold shadow-lg drop-shadow-lg"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
