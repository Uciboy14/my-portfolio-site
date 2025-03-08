"use client"; // Required for Next.js App Router (if using app directory)
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-[#fafafa] font-light leading-6 px-0 py-2 text-left muli">
        <div className="flex items-center justify-start text-[#fafafa] font-light leading-6 px-4 py-2 text-left muli">
          <a className="text-green-500 text-xl font-bold text-[22px] leading-[33px] mx-[7px] py-[5px] text-left"
>UccodeTech</a>
          <div className="flex items-end justify-end w-full text-[#fafafa] font-light leading-6 text-left">
            <ul className="hidden md:flex space-x-6 text-white">
              {[
                "Home",
                "About",
                "Services",
                "Portfolio",
                "Client",
                "Blog",
                "Contact",
              ].map((item, index) => (
                <li
                  key={index}
                  className="nav-link"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
