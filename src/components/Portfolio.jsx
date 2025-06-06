import React, { useState } from "react";

const Portfolio = () => {
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    {
      id: 0,
      title: "Note App - My du-be-doos",
      image: "img/dubedoostab.jpg",
      link: "https://dubedoos.netlify.app/",
      description:
        "I tried countless to-do apps but always ran into issues saving my notes. So, I built my own — a note app designed to solve those problems. It’s already boosted my productivity by at least 5x. 🚀"
    },
    {
      id: 1,
      title: "Exercise Tracker App - Momentum",
      image: "img/momentum.jpg",
      link: "https://momen-tum.netlify.app/",
      description:
        " Momentum is an exercise tracker app that helps users track their workouts and progress. It allows users to log their exercises, set goals, and monitor their fitness journey. The app is designed to be user-friendly and visually appealing, providing a seamless experience for fitness enthusiasts. Its full fledge backend + frontend app, built with React, tailwind & Appwrite (Backend as a Service). It features user authentication, adding & deleting excercises as per days and has a history section as well. The app is designed to be responsive and user-friendly, providing a seamless experience across devices."
    },
    {
      id: 2,
      title: "Business Profile Website - Electroma Trading",
      image: "img/electroma.png",
      link: "https://",
      description:
        "Business profile website for Electroma Trading, a company specializing in electronic products. The website showcases the company's offerings, including product categories, featured products, and contact information. It is designed to be visually appealing and user-friendly, providing a seamless experience for visitors."
    },
    {
      id: 3,
      title: "Portfolio Website - Prasad Bhai",
      image: "img/port.png",
      link: "/",
      description:
        "My personal portfolio website showcasing my skills, projects, and contact information. It is designed to be responsive and user-friendly, providing a seamless experience across devices. The website features sections for my work, skills, and a contact form for inquiries."
    },
    {
      id: 4,
      title: "Sample Portfolio Website - Camera Squad",
      image: "img/port%20(2).png",
      link: "https://camerasquad.netlify.app/",
      description:
        "This is a portfolio website for a photography team called Camera Squad. The design is inspired from FreeHTMLTemplates, I made this in beginning days to learn Flexbox and CSS Grid.  "
    },
    {
      id: 5,
      title: "Sample Portfolio Website - imPredator",
      image: "img/port%20(1).png",
      link: "https://impredator99.netlify.app/",
      description:
        "This is a sample portfolio website created to demonstrate my web development skills. I developed it using HTML, CSS, and JavaScript, This was begininning when I started learning web development.  "
    },
    {
      id: 6,
      title: "Resturant Profile Website - Prime Chiya",
      image: "img/primechiya.jpg",
      link: "/",
      description:
        "Unable to provide a description for this project at the moment. However, it is a restaurant profile website for Prime Chiya, showcasing their offerings and ambiance. (ongoing project)"
    },

  ];

  return (
    <section id="projects" className="pt-32 relative">

      <div className="flex justify-center my-20">
        <h2 className="text-3xl font-bold text-gray-700 relative mt-[-3rem]">
          My Projects
          <span className="absolute left-0 bottom-0 w-1/2 h-[3px]  bg-[var(--primary)]  rounded-md"></span>
          <span className="absolute left-0 bottom-[-5px] w-1/4 h-[3px]  bg-[var(--primary)]  rounded-md"></span>
        </h2>
      </div>

      <div className="mt-20 flex flex-wrap max-w-[110rem] justify-center gap-8  mx-auto lg:px-45" data-aos="fade-up">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative  w-[90%] sm:w-[60%] md:w-[45%]  h-[23rem] shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 group"
            onClick={() => setActiveModal(project.id)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>
            <h1 className="absolute bottom-4 left-4 text-white text-lg z-20 opacity-0 group-hover:opacity-100 transition duration-300">
              {project.title}
            </h1>
            <i className="fa-solid fa-arrow-up-right-from-square absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-primary text-white p-4 text-2xl rounded-full z-20 opacity-0 group-hover:opacity-100 transition duration-300"></i>
          </div>
        ))}
      </div>

      {activeModal !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white w-[90%] md:w-[60%] lg:w-[40%] p-6 rounded-xl shadow-xl relative animate-fadeIn">
            <i
              className="fa-solid fa-x text-primary text-2xl absolute top-4 right-6 cursor-pointer"
              onClick={() => setActiveModal(null)}
            ></i>
            <h1 className="text-xl font-bold mt-6">{projects[activeModal].title}</h1>
            <img
              src={projects[activeModal].image}
              alt="Preview"
              className="w-full mt-4 rounded-md"
            />
            <a
              href={projects[activeModal].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-lg font-semibold block mt-4"
            >
              Visit Site <i className="fa-solid fa-magnifying-glass"></i>
            </a>
            <p className="mt-4 text-gray-600 text-base">
              {projects[activeModal].description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
