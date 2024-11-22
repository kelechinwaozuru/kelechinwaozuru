import React from "react";
import { motion } from "motion/react";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <section id="about" className=" text-white p-6 md:p-12">
        <motion.div variants={textVariant()}>
          <h2 className="text-3xl font-bold text-white mb-4 md:text-[60px] sm:text-[50px] text-[30px]">
            ABOUT ME 
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-lg leading-relaxed"
        >
          I’m a dedicated Cybersecurity Specialist with expertise in penetration
          testing, network security, and threat intelligence. My focus is on
          identifying vulnerabilities, implementing robust defenses, and
          responding to cyber threats effectively. With a passion for
          safeguarding systems and data, I thrive on solving complex security
          challenges and staying updated with the latest technologies. Whether
          working on securing networks, educating teams, or developing
          innovative solutions, I’m committed to creating a safer digital
          environment.
        </motion.p>
      </section>
    </>
  );
};

export default About;
