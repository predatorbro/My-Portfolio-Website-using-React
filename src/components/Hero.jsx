import React from "react";

const Hero = () => {
  return (
    <section id="home" className=" pt-20 md:pt-44 h-[95vh]">
      <div className="max-w-[110rem] px-10 mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-full relative">
        {/* Social Icons */}
        <div className="absolute left-10 top-[45%]  translate-y-[-45%] md:translate-0 md:top-[unset] md:left-[unset] md:relative flex flex-col gap-6 text-[2.5rem]  md:w-28 justify-center  items-center ">
          <a target="_blank" href="https://facebook.com/predatorbro"><i className="fa-brands fa-facebook"></i></a>
          <a target="_blank" href="https://wa.me/qr/ITMSCTVDCRWCE1"><i
            className="fa-brands fa-whatsapp"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/bibeksah/"><i
            className="fa-brands fa-linkedin"></i></a>

        </div>

        {/* Hero Text */}
        <div className="flex flex-col justify-center items-start w-full md:w-[45%] space-y-4" data-aos="fade-up">
          <p className="text-[2rem] lg:text-[2.5rem] font-semibold text-gray-600">Hi, Your mechanic for</p>
          <p className="text-5xl sm:text-6xl  font-bold tracking-wide text-black">
            Websites & webapps
          </p>
          <p className="text-[2rem] lg:text-[2.5rem]  font-semibold text-gray-600">
            is here!!
          </p>
          <p className="text-[1.3rem] text-black7 text-justify max-w-[80%]">
            I design and build stunning websites and web apps that fits your business perfectly.
          </p>
          <button className="bg-[var(--primary)] mt-2 text-gray-100 font-semibold tracking-wider py-3 px-6 rounded-md shadow-md hover:opacity-80" >
            <a href="#contact">
              Contact Me <i className="fa-solid fa-circle-arrow-right"></i>
            </a>
          </button>
        </div>

        {/* Hero Image */}
        <div className="grid place-content-center p-12" data-aos="fade-up">
          <img src={"./img/hero.png"} alt="Bibek" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <p className="text-3xl text-center rotate-90 transition-all duration-300 cursor-pointer hover:text-[var(--primary)]">
        <a href="#about">
          <i className="fa-solid  fa-toggle-off"></i>
        </a>
      </p>
    </section>
  );
};

export default Hero;
