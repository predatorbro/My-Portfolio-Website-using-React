import React, { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [count, setCount] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const contentLength = content ? content.children.length : 0;

    const interval = setInterval(() => {
      setCount(prev => (prev + 1) % contentLength); // 5 images
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const content = contentRef.current;

    if (content) {
      const imgWidth = content.offsetWidth;
      content.style.transform = `translateX(-${count * imgWidth}px)`;
    }
  }, [count]);
  return (
    <>
      <section id="home" className=" pt-20 md:pt-44 h-[95vh]">
        <div className="max-w-[110rem] md:px-10 mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between justify-center h-full relative">
          {/* Social Icons */}
          <div className=" hidden md:flex flex-col gap-6 text-[2.5rem]  md:w-28 justify-center  items-center ">
            <a target="_blank" href="https://facebook.com/predatorbro"><i className="fa-brands fa-facebook"></i></a>
            <a target="_blank" href="https://wa.me/qr/ITMSCTVDCRWCE1"><i
              className="fa-brands fa-whatsapp"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/bibeksah/"><i
              className="fa-brands fa-linkedin"></i></a>

          </div>

          {/* Hero Text */}
          <div className="flex flex-col justify-center items-start w-full md:w-[45%] space-y-4 px-10" data-aos="fade-up">
            <p className="text-[2rem] lg:text-[2.5rem] font-semibold text-gray-600">Hi, Your mechanic for</p>
            <p className="text-5xl sm:text-6xl  font-bold tracking-wide text-black">
              websites & webapps
            </p>
            <p className="text-[2rem] lg:text-[2.5rem]  font-semibold text-gray-600">
              is here!!
            </p>
            <p className="text-[1.3rem] text-black7 text-justify max-w-[80%]">
              I design and build stunning websites and web apps that fits your business perfectly.
            </p>
            <button className="bg-[var(--primary)] mt-2 text-gray-100 font-semibold tracking-wider py-3 px-6 rounded-md shadow-md hover:opacity-80" >
              <a href="#about" className="flex items-center gap-2">
                Explore more <i className="fa-solid fa-circle-arrow-right"></i>
              </a>
            </button>
          </div>

          {/* Hero Image */}
          <div className="grid place-content-center mb-15   w-[90%] md:w-[45%]" data-aos="fade-up">
            <div className="slider" id="slider">
              <div className="slider-box  overflow-x-hidden  sm:rounded-xl  shadow-lg ">
                <div
                  className="content flex transition-transform duration-700 ease-in-out  md:aspect-square xs:aspect-video aspect-square "
                  ref={contentRef}
                >
                  <img src="/img/hero (1).png" alt="img5" className="w-full flex-shrink-0 object-cover" />
                  <img src="/img/hero (2).png" alt="img1" className="w-full flex-shrink-0 object-cover" />
                  <img src="/img/hero (3).png" alt="img2" className="w-full flex-shrink-0 object-cover" />
                  <img src="/img/hero (4).png" alt="img3" className="w-full flex-shrink-0 object-cover" />
                  <img src="/img/hero (5).png" alt="img4" className="w-full flex-shrink-0 object-cover" />
                  <img src="/img/hero (6).png" alt="img4" className="w-full flex-shrink-0 object-cover" />
                  <img src="/img/hero (7).png" alt="img4" className="w-full flex-shrink-0 object-cover" />
                  <img src="/img/hero (8).png" alt="img4" className="w-full flex-shrink-0 object-cover" />
                  <img src="/img/hero (9).png" alt="img4" className="w-full flex-shrink-0 object-cover" />
                  <img src="/img/hero (10).png" alt="img4" className="w-full flex-shrink-0 object-cover" />
                  <img src="/img/hero (11).png" alt="img4" className="w-full flex-shrink-0 object-cover" />
                  <img src="/img/hero (12).png" alt="img4" className="w-full flex-shrink-0 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <p className="text-3xl text-center rotate-90 transition-all duration-300 cursor-pointer hover:text-[var(--primary)]">
          <a href="#about">
            <i className="fa-solid  fa-toggle-off"></i>
          </a>
        </p>
      </section>
    </>
  );
};

export default Hero;
