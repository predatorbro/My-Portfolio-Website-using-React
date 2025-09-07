import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  const { theme } = useDarkMode();

  // Debug logging
  console.log('Skills component theme:', theme);
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "70%" },
    { name: "JavaScript", level: "60%" },
    { name: "jQuery", level: "50%" },
    { name: "React", level: "60%" },
    { name: "Tailwind", level: "70%" },
    { name: "MongoDB", level: "30%" },
    { name: "Express", level: "30%" },
    { name: "nodeJS", level: "30%" },
  ];

  const education = [
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
      description: "From Global International College (ongoing)"
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
  console.log("theme in skills page,", theme);
  console.log("Theme condition check:", theme === 'dark' ? 'DARK MODE' : 'LIGHT MODE');
  return (
    <section id="experties" className="pt-20">
      <SectionHeading text="My Experties" />

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="text-xl mb-12" data-aos="fade-up">
          <h1 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>Education & Skills</h1>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            For more than 1 year, have been accomplishing enough with modern Web Development, (React, NodeJS, Express, MongoDB) a
            new generation web and app programming language.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
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

            <div className="bg-primary text-[var(--primary)] px-6 py-2 rounded-md w-fit text-lg font-semibold mt-4" data-aos="fade-up">
              Experience
            </div>

            {experience.map((item, idx) => (
              <div key={idx} className={`p-4 shadow-md rounded-md border-b-4 border-[var(--primary)] ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-up">
                <h3 className={`font-semibold text-lg ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>{item.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex-1">
            <div className="bg-primary text-[var(--primary)] px-6 py-2 rounded-md w-fit text-lg font-semibold mb-4" data-aos="fade-up">
              Skills
            </div>

            {skills.map((skill, idx) => (
              <div key={idx} className={`mb-6 p-4 rounded-md shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-up">
                <h3 className={`font-medium mb-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>{skill.name}</h3>
                <div className={`w-full h-2 rounded ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}>
                  <div
                    className="h-full  bg-[var(--primary)]  rounded relative"
                    style={{ width: skill.level }}
                  >
                    <span className="absolute -top-8 right-0 bg-primary text-[var(--primary)] text-xs w-10 h-8 text-center leading-8 rounded-bl-[10px] rounded-br-[10px]">
                      {skill.level}
                    </span>
                  </div>
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
