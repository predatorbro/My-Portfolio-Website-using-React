import React from "react";
import { Img } from 'react-image';
import { useDarkMode } from "../hooks/useDarkMode";
import SectionHeading from "./SectionHeading";

const About = () => {
  const { theme } = useDarkMode();

  return (
    <section id="about" className="pt-20  ">
      <SectionHeading text="Who Am I ?" />

      <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-10 mt-12 max-w-7xl mx-auto px-4 md:h-[28rem]">
        <div
          className="flex-1 h-[30rem]  w-[30rem] md:w-full md:h-full px-4  mx-auto "
          data-aos="fade-up"
        >
          <Img
            src="/img/purple1.jpg"
            alt="about-img"
            className="w-full h-full rounded-lg object-cover"
            loading="lazy"
            loader={<div>Loading...</div>}
          />
        </div>

        <div className="flex-1 space-y-4 h-fit">
          <p
            data-aos="fade-up"
            className={`text-4xl font-semibold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}
          >
            I'm Bibek Prasad Sah
          </p>
          <p
            data-aos="fade-up"
            className={`text-xl font-semibold pl-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
            An Emerging Web Developer making Clients ideas, a Reality!
          </p>
          <p
            data-aos="fade-up"
            className={`text-lg text-justify pl-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
          >
            I design and develop services for customers specializing in creating stylish, modern websites, web services,
            and online stores. My passion is to design digital user experiences through meaningful interactions.
            Check out my Portfolio.
          </p>
          <hr data-aos="fade-up" className={`border-t ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'}`} />

          <div
            className="flex flex-wrap gap-4"
            data-aos="fade-up"
          >
            <div className="flex-1 min-w-[8rem] text-center">
              <h1 className="text-3xl font-bold">3+</h1>
              <h4 className="pt-2 text-sm font-medium">Years of Experience</h4>
            </div>
            <div className="flex-1 min-w-[8rem] text-center">
              <h1 className="text-3xl font-bold">3+</h1>
              <h4 className="pt-2 text-sm font-medium">Happy Customers</h4>
            </div>
            <div className="flex-1 min-w-[8rem] text-center">
              <h1 className="text-3xl font-bold">5+</h1>
              <h4 className="pt-2 text-sm font-medium">Successful Big Projects</h4>
            </div>
          </div>

          <button
            data-aos="fade-up"
            className="mt-6 inline-flex items-center px-6 py-3 bg-[var(--primary)] text-[var(--white-main)] font-semibold rounded-md shadow-md hover:opacity-80"
          > <a href="#projects" className="flex items-center gap-3">
              Inspect Portfolio <i className=" fa-regular fa-arrow-trend-up"></i>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
