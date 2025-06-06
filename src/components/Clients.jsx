import React, { useState } from "react";

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
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonial" className="py-30  ">

      <div className="flex py-10 justify-center">
        <h2 className="text-3xl font-bold text-gray-700 relative mt-[-3rem]">
          From My Clients
          <span className="absolute left-0 bottom-0 w-1/2 h-[3px]  bg-[var(--primary)]  rounded-md"></span>
          <span className="absolute left-0 bottom-[-5px] w-1/4 h-[3px]  bg-[var(--primary)]  rounded-md"></span>
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto mt-16 px-4">
        <div className="bg-white shadow-lg rounded-xl flex flex-col md:flex-row ">
          <div className="md:w-2/3 p-8 relative">
            <i className="fa-solid fa-quote-left text-6xl text-[var(--primary)] absolute -top-9 left-3"></i>
            <p className="text-lg text-gray-600 z-10 relative">{testimonials[index].quote}</p>
            <h1 className="text-2xl font-bold  text-[var(--primary)]  mt-6">{testimonials[index].name}</h1>

            <h4 className="text-gray-500">{testimonials[index].title}</h4>
          </div>
          <div className="md:w-1/3">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-full h-full object-cover rounded-r-xl"
            />
          </div>
        </div>

        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 mt-6 flex gap-12 text-4xl cursor-pointer text-gray-600">
          <i class="fa-solid fa-circle-arrow-left" onClick={prevSlide}></i>
          <i class="fa-solid fa-circle-arrow-right" onClick={nextSlide}></i>
        </div>
      </div>
    </section>
  );
};

export default Clients;
