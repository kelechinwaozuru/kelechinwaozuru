import React, { useEffect, useRef, useState } from "react";
import { menu, close } from "../assets";

const Header = () => {
  const [showNavItems, setShowNavItems] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowNavItems(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className=" text-white p-4 flex justify-between items-center">
      <a href="/" className="text-2xl font-bold">
        Nwaozuru Kelechi
      </a>
      <nav>
        <ul className=" hidden md:flex space-x-4">
          <li>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={showNavItems ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setShowNavItems((prevValue) => !prevValue)}
          />
          <div
            ref={menuRef}
            className={`${
              !showNavItems ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-gray-900`}
          >
            <ul className="list-none flex flex-col gap-4 items-start justify-end">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
