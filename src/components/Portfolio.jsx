import React, { useState, useEffect } from "react";
import { Img } from 'react-image';
import SectionHeading from "./SectionHeading";

const Portfolio = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 0,
      slug: "du-be-doos-2-0-nextjs",
      title: "du-be-doos 2.0 - Advanced Note Taking App",
      images: [
        "/img/dubedoos-2-0.vercel.app_workspace.png",
        "/img/dubedoos.jpg",
        "/img/hero (1).png"
      ],
      link: "#",
      github: "https://github.com/predatorbro/du-be-doos-2.0",
      tech: ["TypeScript", "Next.js", "React", "MongoDB", "TailwindCSS", "NextAuth", "Gemini API"],
      description:
        "du-be-doos 2.0 is a simple yet powerful note-taking project designed to boost productivity. It helps users stay organized, enhance notes effortlessly, and clear the clutter of the mind. With smart features like Quickees, Magic AI Buttons, a minimalist UI, and a Deadline Tracker, du-be-doos makes remembering tasks seamless.",
      blog: {
        title: "du-be-doos 2.0: The Next Generation of Productivity",
        content: "Exploring the advanced features and modern tech stack of du-be-doos 2.0...",
        date: "2024-12-15",
        readTime: "6 min read"
      }
    },
    {
      id: 1,
      slug: "du-be-doos-productivity-app",
      title: "Note App - My du-be-doos",
      images: [
        "/img/dubedoostab.jpg",
        "/img/dubedoos.jpg",
        "/img/hero (1).png",
        "/img/hero (2).png"
      ],
      link: "https://dubedoos.netlify.app/",
      github: "https://github.com/predatorbro/du-be-doos",
      tech: ["React", "Tailwind CSS", "Local Storage"],
      description:
        "I tried countless to-do apps but always ran into issues saving my notes. So, I built my own — a note app designed to solve those problems. It’s already boosted my productivity by at least 5x. 🚀",
      blog: {
        title: "Building My du-be-doos: A Journey to Productivity",
        content: "In this blog post, I share the challenges I faced with existing to-do apps and how I built my own solution using React and local storage...",
        date: "2024-01-15",
        readTime: "5 min read"
      }
    },
    {
      id: 2,
      slug: "building-momentum-with-appwrite",
      title: "Exercise Tracker App - Momentum",
      images: [
        "/img/momentum.jpg",
        "/img/hero (4).png",
        "/img/hero (5).png",
        "/img/hero (6).png"
      ],
      link: "https://momen-tum.netlify.app/",
      github: "https://github.com/predatorbro/momentum",
      tech: ["React", "Tailwind CSS", "Appwrite"],
      description:
        " Momentum is an exercise tracker app that helps users track their workouts and progress. It allows users to log their exercises, set goals, and monitor their fitness journey. The app is designed to be user-friendly and visually appealing, providing a seamless experience for fitness enthusiasts. Its full fledge backend + frontend app, built with React, tailwind & Appwrite (Backend as a Service). It features user authentication, adding & deleting excercises as per days and has a history section as well. The app is designed to be responsive and user-friendly, providing a seamless experience across devices.",
      blog: {
        title: "From Zero to Full-Stack: Building Momentum with Appwrite",
        content: "A comprehensive guide to building a full-stack fitness tracking application...",
        date: "2024-02-20",
        readTime: "8 min read"
      }
    },
    {
      id: 3,
      title: "Business Profile Website - Electroma Trading (on going project)",
      images: [
        "/img/electroma.png",
        "/img/hero (7).png",
        "/img/hero (8).png"
      ],
      link: "https://",
      github: "",
      tech: ["HTML", "CSS", "JavaScript"],
      description:
        "Business profile website for Electroma Trading, a company specializing in electronic products. The website showcases the company's offerings, including product categories, featured products, and contact information. It is designed to be visually appealing and user-friendly, providing a seamless experience for visitors."
    },
    {
      id: 4,
      title: "Restaurant Profile Website - Prime Chiya (on going project)",
      images: [
        "/img/primechiya.png",
        "/img/primechiya.jpg",
        "/img/hero (9).png"
      ],
      link: " https://primechiya.netlify.app/",
      github: "",
      tech: ["React", "Tailwind CSS"],
      description:
        "Unable to provide a description for this project at the moment. However, it is a restaurant profile website for Prime Chiya, showcasing their offerings and ambiance. (ongoing project)"
    },
    {
      id: 5,
      title: "Portfolio Website - Prasad Bhai",
      images: [
        "/img/port.png",
        "/img/port (1).png",
        "/img/port (2).png",
        "/img/port (3).png"
      ],
      link: "/",
      github: "https://github.com/predatorbro/My-Portfolio-Website-using-React",
      tech: ["React", "Tailwind CSS", "Vite"],
      description:
        "My personal portfolio website showcasing my skills, projects, and contact information. It is designed to be responsive and user-friendly, providing a seamless experience across devices. The website features sections for my work, skills, and a contact form for inquiries."
    },
    {
      id: 6,
      title: "Sample Portfolio Website - Camera Squad",
      images: [
        "/img/port%20(2).png",
        "/img/hero (10).png",
        "/img/hero (11).png"
      ],
      link: "https://camerasquad.netlify.app/",
      github: "",
      tech: ["HTML", "CSS", "JavaScript"],
      description:
        "This is a portfolio website for a photography team called Camera Squad. The design is inspired from FreeHTMLTemplates, I made this in beginning days to learn Flexbox and CSS Grid.  "
    },
    {
      id: 7,
      title: "Sample Portfolio Website - imPredator",
      images: [
        "/img/port%20(1).png",
        "/img/hero (12).png",
        "/img/purple1.jpg"
      ],
      link: "https://impredator99.netlify.app/",
      github: "",
      tech: ["HTML", "CSS", "JavaScript"],
      description:
        "This is a sample portfolio website created to demonstrate my web development skills. I developed it using HTML, CSS, and JavaScript, This was begininning when I started learning web development.  "
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeModal !== null) {
        setActiveModal(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  // Reset image index when modal changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeModal]);

  return (
    <section id="projects" className="pt-32 relative">

      <SectionHeading text="My Projects" />

      <div className="mt-20 flex flex-wrap max-w-[110rem] justify-center gap-8  mx-auto lg:px-45" data-aos="fade-up">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative  w-[90%] sm:w-[60%] md:w-[45%]  h-[23rem] shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 group"
            onClick={() => setActiveModal(project.id)}
          >
            <Img
              src={project.images ? project.images[0] : project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              loading="lazy"
              loader={<div>Loading...</div>}
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
        <div
          className="fixed inset-0 z-[9999] bg-black/30 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 rounded-2xl shadow-2xl relative transform transition-all duration-300 ease-out animate-in slide-in-from-bottom-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-gray-700 hover:opacity-80 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10 shadow-lg"
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
            >
              <i className="fa-solid fa-x"></i>
            </button>
            <h1 className="text-2xl font-bold mt-6 text-gray-800 dark:text-white pr-8">{projects[activeModal].title}</h1>
            <Img
              src={projects[activeModal].images ? projects[activeModal].images[currentImageIndex] : projects[activeModal].image}
              alt="Project Preview"
              className="w-full mt-4 rounded-lg shadow-md"
              loading="lazy"
              loader={<div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">Loading...</div>}
            />

            {/* Image Gallery Thumbnails */}
            {projects[activeModal].images && projects[activeModal].images.length > 1 && (
              <div className="flex gap-3 mt-6 pb-2">
                {projects[activeModal].images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${currentImageIndex === index
                        ? 'border-primary shadow-lg scale-110'
                        : 'border-gray-200 dark:border-gray-600 hover:border-primary/50'
                      }`}
                  >
                    <Img
                      src={image}
                      alt={`${projects[activeModal].title} ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      loader={<div className="w-full h-full bg-gray-200 dark:bg-gray-700"></div>}
                    />
                  </button>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-4 mt-6">
              {projects[activeModal].link && projects[activeModal].link !== "https://" && (
                <a
                  href={projects[activeModal].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/80 transition-colors flex items-center gap-2"
                >
                  <i className="fa-solid fa-external-link-alt"></i> Visit Site
                </a>
              )}
              {projects[activeModal].github && (
                <a
                  href={projects[activeModal].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <i className="fa-brands fa-github"></i> View Code
                </a>
              )}
              {projects[activeModal].blog && (
                <a
                  href={`/blog/${projects[activeModal].slug}`}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <i className="fa-solid fa-book"></i> View Blog
                </a>
              )}
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {projects[activeModal].tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-6 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              {projects[activeModal].description}
            </p>
            <button
              className="mt-6 w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              onClick={() => setActiveModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
