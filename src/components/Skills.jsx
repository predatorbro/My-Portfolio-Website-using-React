import React from "react";

const Skills = () => {
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

  return (
    <section id="experties" className="pt-20">
      <div className="flex justify-center my-20">
        <h2 className="text-3xl font-bold text-gray-700 relative mt-[-3rem]">
          My Experties
          <span className="absolute left-0 bottom-0 w-1/2 h-[3px]  bg-[var(--primary)]  rounded-md"></span>
          <span className="absolute left-0 bottom-[-5px] w-1/4 h-[3px]  bg-[var(--primary)]  rounded-md"></span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="text-xl mb-12" data-aos="fade-up">
          <h1 className="text-2xl font-bold mb-2">Education & Skills</h1>
          <p>
            For more than 1 year, have been accomplishing enough with modern Web Development, (React, NodeJS, Express, MongoDB) a
            new generation web and app programming language.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-6">
            <div className="bg-primary  text-[var(--primary)]  px-6 py-2 rounded-md w-fit text-lg font-semibold" data-aos="fade-up">
              Education
            </div>

            <div className="bg-white p-4 shadow-md rounded-md border-b-4 border-[var(--primary)]  " data-aos="fade-up">
              <h3 className="font-semibold text-lg">Secondary School</h3>
              <p>+2 in Computer Science from Nepal</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md border-b-4  border-[var(--primary)] " data-aos="fade-up">
              <h3 className="font-semibold text-lg">MERN Stack</h3>
              <p>Have completed playlist & projects from chaicode.com</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md border-b-4  border-[var(--primary)] " data-aos="fade-up">
              <h3 className="font-semibold text-lg">MERN Stack workshop</h3>
              <p>From Global International College (ongoing) </p>
            </div>

            <div className="bg-primary   text-[var(--primary)]  px-6 py-2 rounded-md w-fit text-lg font-semibold mt-4" data-aos="fade-up">
              Experience
            </div>

            <div className="bg-white p-4 shadow-md rounded-md border-b-4  border-[var(--primary)] " data-aos="fade-up">
              <h3 className="font-semibold text-lg">Freelancer</h3>
              <p>Still Working as a Freelancer in KTM, Remote Jobs & on Project basis .</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md border-b-4  border-[var(--primary)] " data-aos="fade-up">
              <h3 className="font-semibold text-lg">Projects</h3>
              <p>
                Built websites for Electroma Trading and Prime Chiya. Also developed two web apps focused on solving very specific user problems — both are actively maintained with continuous updates and new versions. Aside from that, I've worked on a total of 6 successful projects.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-primary   text-[var(--primary)]   px-6 py-2 rounded-md w-fit text-lg font-semibold mb-4" data-aos="fade-up">
              Skills
            </div>

            {skills.map((skill, idx) => (
              <div key={idx} className="mb-6 bg-white p-4 rounded-md shadow-md" data-aos="fade-up">
                <h3 className="font-medium mb-2">{skill.name}</h3>
                <div className="w-full h-2 bg-gray-300 rounded">
                  <div
                    className="h-full  bg-[var(--primary)]  rounded relative"
                    style={{ width: skill.level }}
                  >
                    <span className="absolute -top-8 right-0 bg-primary text-white text-xs w-10 h-8 text-center leading-8 rounded-bl-[10px] rounded-br-[10px]">
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