import React, { useEffect, useRef, useState } from "react";
import { Img } from 'react-image';

const Hero = () => {
  const [count, setCount] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const contentRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const contentLength = content ? content.children.length : 0;

    intervalRef.current = setInterval(() => {
      setCount(prev => (prev + 1) % contentLength);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const content = contentRef.current;

    if (content) {
      const imgWidth = content.offsetWidth;
      const baseTranslate = count * imgWidth;
      const dragTranslate = isDragging ? currentX - startX : 0;
      content.style.transform = `translateX(-${baseTranslate - dragTranslate}px)`;
      content.style.transition = isDragging ? 'none' : 'transform 0.7s ease-in-out';
    }
  }, [count, isDragging, currentX, startX]);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (isDragging) {
        e.preventDefault();
        handleMove(e.clientX);
      }
    };

    const handleGlobalMouseUp = (e) => {
      if (isDragging) {
        e.preventDefault();
        handleEnd();
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging]);

  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMove = (clientX) => {
    if (!isDragging) return;
    setCurrentX(clientX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    const content = contentRef.current;
    const contentLength = content ? content.children.length : 0;
    const deltaX = currentX - startX;
    const threshold = content.offsetWidth * 0.1; // 10% of image width

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        // Swipe right - previous image
        setCount(prev => (prev - 1 + contentLength) % contentLength);
      } else {
        // Swipe left - next image
        setCount(prev => (prev + 1) % contentLength);
      }
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);

    // Restart auto-advance
    intervalRef.current = setInterval(() => {
      setCount(prev => (prev + 1) % contentLength);
    }, 3000);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    handleEnd();
  };

  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    handleEnd();
  };

  return (
    <>
      <section id="home" className=" pt-20 md:pt-44 h-screen relative overflow-hidden">
        {/* Floating Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-bubble bubble-1"></div>
          <div className="floating-bubble bubble-2"></div>
          <div className="floating-bubble bubble-3"></div>
          <div className="floating-bubble bubble-4"></div>
          <div className="floating-bubble bubble-5"></div>
          <div className="floating-bubble bubble-6"></div>
          <div className="floating-bubble bubble-7"></div>
          <div className="floating-bubble bubble-8"></div>
        </div>
        <div className="max-w-[110rem] overflow-hidden md:px-10 mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between justify-center h-full relative z-10">
          {/* Social Icons */}
          <div className=" hidden md:flex flex-col gap-6 text-[2.5rem]  md:w-28 justify-center  items-center ">
            <a target="_blank" href="https://facebook.com/predatorbro"><i className="fa-brands fa-facebook"></i></a>
            <a target="_blank" href="https://wa.me/message/FO2BXDEOJGRBN1"><i
              className="fa-brands fa-whatsapp"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/bibeksah/"><i
              className="fa-brands fa-linkedin"></i></a>

          </div>

          {/* Hero Text */}
          <div className="flex flex-col justify-center items-start w-full md:w-[45%] space-y-4 px-10" data-aos="fade-up">
            <p className="text-[2rem] lg:text-[2.5rem] font-semibold" style={{ color: 'var(--black8)' }}>Hi, Your mechanic for</p>
            <p className="text-5xl sm:text-6xl  font-bold tracking-wide" style={{ color: 'var(--blackmain)' }}>
              websites & webapps
            </p>
            <p className="text-[2rem] lg:text-[2.5rem]  font-semibold" style={{ color: 'var(--black8)' }}>
              is here!!
            </p>
            <p className="text-[1.3rem] text-justify max-w-[80%]" style={{ color: 'var(--black7)' }}>
              I design and build stunning websites and web apps that fits your business perfectly.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-[var(--primary)] text-gray-100 font-semibold tracking-wider py-3 px-6 rounded-md shadow-md hover:opacity-80 transition-all duration-300 hover:scale-105 hover:shadow-lg" >
                <a href="#about" className="flex items-center gap-2">
                  Explore more <i className="fa-solid fa-circle-arrow-right"></i>
                </a>
              </button>
              <button className="bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] font-semibold tracking-wider py-3 px-6 rounded-md shadow-md hover:bg-[var(--primary)] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg" >
                <a href="#projects" className="flex items-center gap-2">
                  View Projects <i className="fa-solid fa-eye"></i>
                </a>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="grid place-content-center mb-15 w-[90%] md:w-[45%] mr-15 h-fit overflow-hidden" data-aos="fade-up">
            <div className="slider" id="slider">
              <div className="slider-box overflow-hidden rounded-xl shadow-lg ">
                <div
                  className="content  flex transition-transform duration-700 ease-in-out  md:aspect-square xs:aspect-video aspect-square cursor-grab select-none"
                  ref={contentRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <Img src="/img/hero (1).png" alt="img5" className="w-full flex-shrink-0 object-cover" loading="eager" loader={<div className="bg-gray-200 dark:bg-gray-700"><i className="fa-solid fa-spinner fa-spin text-4xl text-gray-500"></i><p className="mt-2 text-gray-500">Loading...</p></div>} />
                  <Img src="/img/hero (2).png" alt="img1" className="w-full flex-shrink-0 object-cover" loading="eager" loader={<div className="bg-gray-200 dark:bg-gray-700"><i className="fa-solid fa-spinner fa-spin text-4xl text-gray-500"></i><p className="mt-2 text-gray-500">Loading...</p></div>} />
                  <Img src="/img/hero (3).png" alt="img2" className="w-full flex-shrink-0 object-cover" loading="eager" loader={<div className="bg-gray-200 dark:bg-gray-700"><i className="fa-solid fa-spinner fa-spin text-4xl text-gray-500"></i><p className="mt-2 text-gray-500">Loading...</p></div>} />
                  <Img src="/img/hero (4).png" alt="img3" className="w-full flex-shrink-0 object-cover" loading="eager" loader={<div className="bg-gray-200 dark:bg-gray-700"><i className="fa-solid fa-spinner fa-spin text-4xl text-gray-500"></i><p className="mt-2 text-gray-500">Loading...</p></div>} />
                  <Img src="/img/hero (5).png" alt="img4" className="w-full flex-shrink-0 object-cover" loading="eager" loader={<div className="bg-gray-200 dark:bg-gray-700"><i className="fa-solid fa-spinner fa-spin text-4xl text-gray-500"></i><p className="mt-2 text-gray-500">Loading...</p></div>} />
                  <Img src="/img/hero (6).png" alt="img4" className="w-full flex-shrink-0 object-cover" loading="eager" loader={<div className="bg-gray-200 dark:bg-gray-700"><i className="fa-solid fa-spinner fa-spin text-4xl text-gray-500"></i><p className="mt-2 text-gray-500">Loading...</p></div>} />
                  <Img src="/img/hero (7).png" alt="img4" className="w-full flex-shrink-0 object-cover" loading="eager" loader={<div className="bg-gray-200 dark:bg-gray-700"><i className="fa-solid fa-spinner fa-spin text-4xl text-gray-500"></i><p className="mt-2 text-gray-500">Loading...</p></div>} />
                  <Img src="/img/hero (8).png" alt="img4" className="w-full flex-shrink-0 object-cover" loading="eager" loader={<div className="bg-gray-200 dark:bg-gray-700"><i className="fa-solid fa-spinner fa-spin text-4xl text-gray-500"></i><p className="mt-2 text-gray-500">Loading...</p></div>} />
                  <Img src="/img/hero (9).png" alt="img4" className="w-full flex-shrink-0 object-cover" loading="eager" loader={<div className="bg-gray-200 dark:bg-gray-700"><i className="fa-solid fa-spinner fa-spin text-4xl text-gray-500"></i><p className="mt-2 text-gray-500">Loading...</p></div>} />
                  <Img src="/img/hero (10).png" alt="img4" className="w-full flex-shrink-0 object-cover" loading="eager" loader={<div className="bg-gray-200 dark:bg-gray-700"><i className="fa-solid fa-spinner fa-spin text-4xl text-gray-500"></i><p className="mt-2 text-gray-500">Loading...</p></div>} />
                  <Img src="/img/hero (11).png" alt="img4" className="w-full flex-shrink-0 object-cover" loading="eager" loader={<div className="bg-gray-200 dark:bg-gray-700"><i className="fa-solid fa-spinner fa-spin text-4xl text-gray-500"></i><p className="mt-2 text-gray-500">Loading...</p></div>} />
                  <Img src="/img/hero (12).png" alt="img4" className="w-full flex-shrink-0 object-cover" loading="eager" loader={<div className="bg-gray-200 dark:bg-gray-700"><i className="fa-solid fa-spinner fa-spin text-4xl text-gray-500"></i><p className="mt-2 text-gray-500">Loading...</p></div>} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <a href="#about" className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-[var(--primary)] transition-colors duration-300">
              <span className="text-sm font-medium mb-1">Scroll</span>
              <i className="fa-solid fa-chevron-down text-2xl"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
