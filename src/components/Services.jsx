import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: "fa-pen-ruler",
    title: "Web Design",
    desc: "I will design your website."
  },
  {
    icon: "fa-file-pen",
    title: "Web Development",
    desc: "I will code your website."
  },
  {
    icon: "fa-bars-staggered",
    title: "Content Writing",
    desc: "I will write content for your website."
  },
  {
    icon: "fa-palette",
    title: "Graphics Design",
    desc: "I will design your logos & banners."

  },
];

const Services = () => {
  const { theme } = useDarkMode();

  return (
    <section id="services" className="pt-20 px-4">
      <SectionHeading text="What I Provide ?" />

      <div className="max-w-7xl mx-auto">

        {/* <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-3xl font-bold">What I Provide ?</h1>
        </div> */}

        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`size-72 rounded-xl shadow-lg border-b-4 border-[var(--primary)] p-6 flex flex-col items-center justify-center text-center transform transition duration-300 hover:-translate-y-2 hover:scale-110 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
              data-aos="fade-up"
            >
              <i className={`fa-sharp fa-solid ${service.icon} text-[var(--primary)] text-6xl mb-6`}></i>
              <h1 className={`text-2xl font-semibold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>{service.title}</h1>
              <p className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
