import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../utils/motion";

const Projects = () => {
  const projects = [
    {
      title: "Network Intrusion Detection System",
      description:
        "Developed a system to monitor network traffic and detect suspicious activities.",
    },
    {
      title: "Password Cracking Tool",
      description:
        "Created a tool to demonstrate password vulnerabilities through brute force and dictionary attacks.",
    },
    {
      title: "Secure Web Application",
      description:
        "Built a web app with secure authentication and encrypted data storage.",
    },
  ];

  return (
    <section id="projects" className=" text-white p-6 md:p-12">
      <motion.h2
        variants={fadeIn("", "", 0.1, 1)}
        className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" border border-white p-4 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-green-400">
              {project.title}
            </h3>
            <p className="text-sm mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
