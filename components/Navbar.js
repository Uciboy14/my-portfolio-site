"use client"; // Required for Next.js App Router (if using app directory)
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Client",
    "Blog",
    "Contact",
  ];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-[#fafafa] font-light leading-6 px-0 py-2 text-left muli">
        <div className="flex items-center justify-between text-[#fafafa] font-light leading-6 px-4 py-2 text-left muli">
          <a className="text-green-500 text-xl font-bold text-[22px] leading-[33px] mx-[7px] py-[5px] text-left">
            <Logo />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-end w-full text-[#fafafa] font-light leading-6 text-left">
            <ul className="flex space-x-6 text-white">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => scrollToSection(item)}
                  className="nav-link hover:text-green-500 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-gray-900"
            >
              <ul className="px-4 py-2 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item)}
                    className="nav-link text-white hover:text-green-500 transition-colors duration-300 py-2 cursor-pointer"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
