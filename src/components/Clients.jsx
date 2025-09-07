import React from "react";
import { Img } from 'react-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useDarkMode } from "../hooks/useDarkMode";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Aanand Sah",
    title: "Founder & CEO at Prime Chiya",
    image: "img/primechiya.jpg",
    quote:
      "Prasad bhai approached me at my restaurant and showed a demo website for Prime Chiya. I was impressed at first glance — his work instantly convinced me that it was worth paying for."
  },
  {
    name: "Gautam Sah",
    title: "Founder & CEO at Electroma Trading",
    image: "img/electroma.png",
    quote:
      "I only asked for a simple website for my business, Electroma Trading — but Prasad bhai delivered a clean, ultra-fast UI with a minimalist design, without charging anything extra. I got impressed from the very first look"
  }
];

const Clients = () => {
  const { theme } = useDarkMode();

  return (
    <section id="testimonial" className="py-20 relative mx-4">
      <SectionHeading text="From My Clients" />

      <div className="max-w-5xl mx-auto mt-16 shadow-lg rounded-2xl overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: false }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="clients-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={`shadow-lg flex flex-col md:flex-row w-full h-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="md:w-2/3 p-8 relative flex-1 flex flex-col justify-center">
                  <i className="fa-solid fa-quote-left text-6xl text-[var(--primary)] absolute bottom-3 left-6"></i>
                  <p className={`text-lg z-10 relative flex-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{testimonial.quote}</p>
                  <div className="mt-6">
                    <h1 className="text-2xl font-bold text-[var(--primary)] text-right">{testimonial.name}</h1>
                    <h4 className={`text-right ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.title}</h4>
                  </div>
                </div>
                <div className="md:w-1/3 flex-1">
                  <Img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    loader={<div>Loading...</div>}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
