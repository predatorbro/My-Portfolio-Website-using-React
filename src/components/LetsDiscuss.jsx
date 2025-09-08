import React from "react";

const LetsTalk = () => {
  return (
    <div className="mt-24 px-6 py-20 flex justify-center bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/90 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        {/* Large bubbles */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full opacity-30"></div>
        {/* <div className="absolute bottom-10 right-10 w-20 h-20 bg-white rounded-full opacity-25"></div> */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full opacity-15"></div>

        {/* Medium bubbles */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full opacity-35"></div>
        <div className="absolute bottom-20 left-20 w-14 h-14 bg-white rounded-full opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-white rounded-full opacity-40"></div>

        {/* Small bubbles */}
        <div className="absolute top-32 left-1/3 w-8 h-8 bg-white rounded-full opacity-30"></div>
        <div className="absolute bottom-32 right-1/3 w-10 h-10 bg-white rounded-full opacity-25"></div>
        <div className="absolute top-2/3 left-16 w-6 h-6 bg-white rounded-full opacity-35"></div>
        <div className="absolute bottom-2/3 right-16 w-9 h-9 bg-white rounded-full opacity-30"></div>
        <div className="absolute top-16 right-1/3 w-7 h-7 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-16 left-1/3 w-11 h-11 bg-white rounded-full opacity-20"></div>
      </div>

      <div className="w-full max-w-6xl bg-white shadow-xl rounded-xl flex flex-col md:flex-row overflow-hidden relative z-10 transform hover:scale-105 transition-all duration-500">
        {/* Left Side Text */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start p-8">
          <p className="text-xl md:text-2xl text-gray-600 mb-3 font-medium">Let's Discuss</p>
          <p className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2 leading-tight">About Your</p>
          <p className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Next Project</p>
          <p className="text-base text-gray-600 max-w-md text-justify">Ready to bring your ideas to life? Let's collaborate and create something amazing together.</p>
        </div>

        {/* Right Side Button */}
        <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-8 md:w-2/5 md:px-8">
          <a
            href="#contact"
            className="group text-white bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/90 hover:from-[var(--primary)]/90 hover:to-[var(--primary)] px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <span>Get in Touch</span>
            <i className="fa-solid fa-paper-plane group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
