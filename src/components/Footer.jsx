import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[var(--primary)]  text-white pt-16 pb-8">
      <div className=" max-w-[110rem]  mx-auto px-22 flex md:justify-between md:flex-row items-center md:items-start flex-col gap-8">
        {/* Left Section */}
        <div className="space-y-2">
          <div className="text-2xl font-semibold">
            <a href="/" className=" hover:text-[var(--black3)]  text-[var(--white-main)]  ">
              Prasad Bhai
            </a>
          </div>
          <a href="#about" className="block text-white hover:underline text-center">
            About Me
          </a>
        </div>

        {/* Middle Section */}
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-4">More</h1>
          <ul className="space-y-2">
            <li>
              <a href="#experties" className="hover:underline">Skills</a>
            </li>
            <li>
              <a href="#services" className="hover:underline">Services</a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">Portfolio</a>
            </li>
            <li>
              <a href="#testimonial" className="hover:underline">Testimonial</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-right">
          <h1 className="text-xl font-semibold mb-4">Social Links</h1>
          <div className="flex justify-end space-x-6 text-2xl">
            <a target="_blank" href="https://facebook.com/predatorbro"><i className="fa-brands fa-facebook"></i></a>
            <a target="_blank" href="https://wa.me/qr/ITMSCTVDCRWCE1"><i
              className="fa-brands fa-whatsapp"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/bibeksah/"><i
              className="fa-brands fa-linkedin"></i></a>

          </div>
        </div>
      </div>

      {/* Horizontal Rule */}
      <div className="lg:max-w-[90%] xl:max-w-[85%] 2xl:lg:max-w-[70%] md:max-w-[90%] mx-auto my-6 px-4">
        <hr className="border-white" />
      </div>

      {/* Footer Notice */}
      <div className="text-center text-sm text-white">
        &copy; 2025 <a href="/">PrasadBhai</a> | All rights reserved !
      </div>
    </footer>
  );
};

export default Footer;
