import React from "react";
import { Tilt } from "react-tilt";
import {
  faUserSecret,
  faShieldAlt,
  faSearch,
  faBell,
  faEye,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons/faBrain";

const services = [
  { title: "Risk Assessment", icon: faUserSecret },
  { title: "Security Policies", icon: faShieldAlt },
  { title: "Analytical thinking", icon: faSearch },
  { title: "Incident Response", icon: faBell },
  { title: "Threat Intelligence", icon: faBrain },
  { title: "Database Management", icon: faCloud },
];

const Services = () => {
  return (
    <section id="services" className="p-6 md:p-12">
      <div className="container  ">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          SKILLS
        </h2>
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <Tilt className="sm:w-[250px] w-full">
              <div
                key={index}
                className=" p-6 rounded-[20px]  py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col shadow-card border transition"
              >
                <h3 className="text-green-500 text-[20px] font-bold text-center flex flex-col gap-4">
                  {service.title}
                  <FontAwesomeIcon
                    className="text-[48px]"
                    icon={service.icon}
                  />
                </h3>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
