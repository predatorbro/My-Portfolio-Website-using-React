import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  const { theme } = useDarkMode();

  const techCategories = [
    {
      name: "Frontend",
      icon: "fas fa-code",
      technologies: [
        { name: "Next.js", icon: "fab fa-n" },
        { name: "React", icon: "fab fa-react" },
        { name: "Redux", icon: "fas fa-layer-group" },
        { name: "Next Auth", icon: "fas fa-shield-alt" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "Tailwind CSS", icon: "fab fa-css3-alt" }
      ]
    },
    {
      name: "Backend",
      icon: "fas fa-server",
      technologies: [
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Express", icon: "fas fa-server" },
        { name: "EJS", icon: "fas fa-code" }
      ]
    },
    {
      name: "Database",
      icon: "fas fa-database",
      technologies: [
        { name: "MongoDB", icon: "fas fa-database" },
        { name: "Claudinary", icon: "fas fa-cloud-showers-heavy" }
      ]
    },
    {
      name: "Version Control",
      icon: "fas fa-code-branch",
      technologies: [
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "GitHub", icon: "fab fa-github" }
      ]
    },
    {
      name: "Tools",
      icon: "fas fa-tools",
      technologies: [
        { name: "jQuery", icon: "fab fa-js-square" },
        { name: "Gemini", icon: "fas fa-robot" }
      ]
    }
  ];

  const education = [
    {
      title: "Bachelor",
      description: "Enrolling in Bsc.IT at Global College, Soon!"
    },
    {
      title: "Secondary School",
      description: "+2 in Computer Science from Nepal"
    },
    {
      title: "MERN Stack",
      description: "Have completed playlist & projects from chaicode.com"
    },
    {
      title: "MERN Stack workshop",
      description: "From Global International College"
    }
  ];

  const experience = [
    {
      title: "Freelancer",
      description: "Still Working as a Freelancer in KTM, Remote Jobs & on Project basis ."
    },
    {
      title: "Projects",
      description: "Built websites for Electroma Trading and Prime Chiya. Also developed two web apps focused on solving very specific user problems — both are actively maintained with continuous updates and new versions. Aside from that, I've worked on a total of 6 successful projects."
    }
  ];
  return (
    <section id="experties" className="pt-20">
      <SectionHeading text="My Experties" />

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="text-xl mb-12" data-aos="fade-up">
          <h1 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>Education & Skills</h1>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Been over 1 year creating web apps using React, Next.js, Node.js, Express, and MongoDB. No formal degree, just pure
            passion and hands-on experience. Let my projects do the talking.
          </p>
        </div>

        {/* Education and Experience Layout */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          {/* Education - Left Side */}
          <div className="flex-1 space-y-6">
            <div className="bg-primary text-[var(--primary)] px-6 py-2 rounded-md w-fit text-lg font-semibold" data-aos="fade-up">
              Education
            </div>
            {education.map((item, idx) => (
              <div key={idx} className={`p-4 shadow-md rounded-md border-b-4 border-[var(--primary)] ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-up">
                <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>{item.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
              </div>
            ))}
          </div>

          {/* Experience - Right Side */}
          <div className="flex-1 space-y-6">
            <div className="bg-primary text-[var(--primary)] px-6 py-2 rounded-md w-fit text-lg font-semibold" data-aos="fade-up">
              Experience
            </div>
            {experience.map((item, idx) => (
              <div key={idx} className={`p-4 shadow-md rounded-md border-b-4 border-[var(--primary)] ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-up">
                <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>{item.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stacks Section - Full Width */}
        <div className="w-full">
          <div className="bg-primary text-[var(--primary)] px-6 py-2 rounded-md w-fit text-lg font-semibold mb-8 mx-auto" data-aos="fade-up">
            Tech Stacks
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {techCategories.map((category, categoryIdx) => (
              <div key={categoryIdx} className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-up">
                <div className="flex items-center mb-4">
                  <i className={`${category.icon} text-2xl text-[var(--primary)] mr-3`}></i>
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>{category.name}</h3>
                </div>
                <div className="space-y-3">
                  {category.technologies.map((tech, techIdx) => (
                    <div key={techIdx} className="flex items-center">
                      <i className={`${tech.icon} text-lg mr-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}></i>
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
