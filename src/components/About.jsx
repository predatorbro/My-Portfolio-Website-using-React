import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-20  ">
      <div className="flex justify-center my-20">
        <h2 className="text-3xl font-bold text-gray-700 relative mt-[-3rem]">
          Who Am I ?
          <span className="absolute left-0 bottom-0 w-1/2 h-[3px]  bg-[var(--primary)]  rounded-md"></span>
          <span className="absolute left-0 bottom-[-5px] w-1/4 h-[3px]  bg-[var(--primary)]  rounded-md"></span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-10 mt-12 max-w-7xl mx-auto px-4 md:h-[28rem]">
        <div
          className="flex-1 h-[30rem]  w-[30rem] md:w-full md:h-full px-4  mx-auto "
          data-aos="fade-up"
        >
          <img
            // src="/img/purple.png"
            src="/img/purple1.jpg"
            alt="about-img"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        <div className="flex-1 space-y-4 h-fit">
          <p
            data-aos="fade-up"
            className="text-4xl font-semibold text-black"
          >
            I'm Bibek Prasad Sah
          </p>
          <p
            data-aos="fade-up"
            className="text-xl font-semibold text-gray-600 pl-4"
          >
           An Emerging Web Developer making Clients ideas, a Reality! 
          </p>
          <p
            data-aos="fade-up"
            className="text-lg text-gray-700 text-justify pl-4"
          >
            I design and develop services for customers specializing in creating stylish, modern websites, web services,
            and online stores. My passion is to design digital user experiences through meaningful interactions.
            Check out my Portfolio.
          </p>
          <hr data-aos="fade-up" className="border-t border-gray-300" />

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
          >
            Download CV  <i class="fas fa-download"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;