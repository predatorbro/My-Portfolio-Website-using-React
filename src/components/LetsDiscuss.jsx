import React from "react";

const LetsTalk = () => {
  return (
    <div className="mt-24 px-4 py-20 flex justify-center  bg-[var(--primary)] ">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side Text */}
        <div className="flex-1 flex flex-col items-center md:items-start p-8">
          <p className="text-xl text-gray-600">Let's Discuss</p>
          <p className="text-3xl font-semibold text-gray-800">About Your</p>
          <p className="text-4xl font-bold text-gray-900">Next Project</p>
        </div>

        {/* Right Side Button */}
        <div className="flex items-center justify-center bg-gray-100 px-6 py-8 md:w-1/3">
          <a
            href="#contact"
            className="text-white  bg-[var(--primary)]  px-6 py-3 rounded-md text-lg font-medium shadow hover:opacity-90 transition-all"
          >
            Get in Touch <i className="fa-solid fa-paper-plane ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
