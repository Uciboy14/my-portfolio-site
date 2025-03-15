import Image from "next/image";
import React from "react";

const PortfolioContent = ({ portfolioItems }) => {
  return (
    <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pt-[31px]">
      {portfolioItems.map((item, index) => (
        <div
          key={index}
          className="portfolio-item group relative overflow-hidden rounded-[16px] bg-white aspect-[1.4/1]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1ab394] opacity-0 group-hover:opacity-80 transition-all duration-500 ease-in-out z-10"></div>
          <Image
            className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out"
            width={400}
            height={300}
            src={item.src}
            alt={item.alt}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-20">
            <h3 className="text-white text-xl font-semibold mb-2">{item.alt}</h3>
            <p className="text-white text-sm">View Project</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioContent;
