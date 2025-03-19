"use client";
import Image from "next/image";
import React, { useState } from "react";
import PortfolioContent from "./PortfolioContent";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);

  const portfolioItems = [
    { src: "/web-dev-pics.jpg", alt: "Web Development", category: "Web Devs" },
    { src: "/app-dev.jpg", alt: "App Development", category: "Mobile Devs" },
    { src: "/api.jpg", alt: "API Development", category: "Backend & APIs" },
    { src: "/cloud-devops.png", alt: "Cloud & DevOps", category: "Cloud & Devops" },
    { src: "/ecommerce.jpg", alt: "E-commerce", category: "Ecommerce Development" },
    { src: "/payment-integration.jpg", alt: "Payment Integration", category: "Backend & APIs" },
  ];

  React.useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(portfolioItems);
    } else {
      const filtered = portfolioItems.filter(item => item.category === activeFilter);
      setFilteredItems(filtered);
    }
  }, [activeFilter]);

  const filterCategories = [
    "All",
    "Web Devs",
    "Mobile Devs",
    "Cloud & Devops",
    "Ecommerce Development",
    "Backend & APIs"
  ];

  return (
    <section id="portfolio" className="leading-[24px] py-[48px] font-light text-left text-[#fafafa]">
      <div className="container px-4">
        <div className="col-lg-full">
          <div className="title-content mb-8">
            <p className="title text-base md:text-lg">Awesome works and enjoy</p>
            <h2 className="text-[#1ab394] inline-block font-poppins text-[32px] md:text-[40px] font-semibold leading-tight md:leading-[64.72px] mb-2 text-left">
              My portfolio
            </h2>
          </div>
        </div>
        {/* Portfolio Filter List */}
        <div className="text-[#fafafa] basis-full font-light leading-6 px-[15px] text-left overflow-x-auto">
          <ul className="flex flex-wrap md:flex-nowrap min-w-max md:min-w-0">
            {filterCategories.map((category, index) => (
              <li
                key={index}
                className={`mr-[12px] mb-[18px] rounded-[16px] transition-colors cursor-pointer ${
                  activeFilter === category ? "bg-[#1ab394] text-[#fafafa]" : "hover:bg-[#1ab394]"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                <a className="pill-button whitespace-nowrap px-4 py-2 block hover:opacity-90 transition-opacity">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio section */}
        <motion.div layout>
          <AnimatePresence>
            <PortfolioContent portfolioItems={filteredItems} />
          </AnimatePresence>
        </motion.div>

        {/* Portfolio Button */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-9 px-4">
          <button className="w-full md:w-auto mt-6 muli bg-[#1ab394] hover:bg-[#0c9b7e] rounded-[16px] text-[#fafafa] inline-block font-muli font-light leading-6 px-8 py-2.5 text-center md:text-left transition">
            Show More
          </button>
          <button className="w-full md:w-auto mt-6 muli bg-[#1ab394] hover:bg-[#0c9b7e] rounded-[16px] text-[#fafafa] inline-block font-muli font-light leading-6 px-8 py-2.5 text-center md:text-left transition">
            Portfolio Page
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
