import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const SectionHeading = ({ text }) => {
  const { theme } = useDarkMode();

  return (
    <div className="flex justify-center my-20">
      <h2 className={`text-3xl font-bold relative mt-[-3rem] ${theme === 'dark' ? 'text-gray-100' : 'text-gray-700'}`}>
        {text}
        <span className="absolute left-0 bottom-0 w-1/2 h-[3px] bg-[var(--primary)] rounded-md"></span>
        <span className="absolute left-0 bottom-[-5px] w-1/4 h-[3px] bg-[var(--primary)] rounded-md"></span>
      </h2>
    </div>
  );
};

export default SectionHeading;
