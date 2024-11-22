import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      id="contact"
      className=" py-6 text-center text-sm text-gray-400 flex flex-col gap-4 "
    >
      <div className="flex gap-4 items-center justify-center">
        <a
          href="mailto:kelechi.danny1234@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="text-white text-2xl"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/kelechi-nwaozuru"
          target="_blank"
          rel="noreferrer noopener"
          className="text-white text-2xl"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://kelechinwaozuru.medium.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-white text-2xl"
        >
          <FontAwesomeIcon icon={faMedium} />
        </a>
      </div>
      <p>&copy; 2024. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
