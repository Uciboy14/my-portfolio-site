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
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-green-500 text-xl font-bold">UccodeTech</h1>
        <ul className="hidden md:flex space-x-6 text-white">
          {["Home", "About", "Services", "Portfolio", "Client", "Blog", "Contact"].map(
            (item, index) => (
              <li key={index} className="hover:text-green-400 cursor-pointer text-[17px]">
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
