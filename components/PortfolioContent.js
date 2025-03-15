import Image from "next/image";
import React from "react";
import { FaGlobe, FaMobileAlt, FaServer, FaCloud, FaShoppingCart, FaCreditCard, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const PortfolioContent = ({ portfolioItems }) => {
  const getIcon = (alt) => {
    switch (alt) {
      case "Web Development":
        return <FaGlobe className="text-3xl mb-3" />;
      case "App Development":
        return <FaMobileAlt className="text-3xl mb-3" />;
      case "API Development":
        return <FaServer className="text-3xl mb-3" />;
      case "Cloud & DevOps":
        return <FaCloud className="text-3xl mb-3" />;
      case "E-commerce":
        return <FaShoppingCart className="text-3xl mb-3" />;
      case "Payment Integration":
        return <FaCreditCard className="text-3xl mb-3" />;
      default:
        return <FaLink className="text-3xl mb-3" />;
    }
  };

  return (
    <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pt-[31px]">
      {portfolioItems.map((item, index) => (
        <motion.div
          key={item.src}
          layout
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
            layout: { duration: 0.4 }
          }}
          className="portfolio-item group relative overflow-hidden rounded-[16px] bg-white aspect-[1.4/1]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1ab394] opacity-0 group-hover:opacity-90 transition-all duration-500 ease-in-out z-10"></div>
          <Image
            className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out"
            width={400}
            height={300}
            src={item.src}
            alt={item.alt}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-20">
            {getIcon(item.alt)}
            <h3 className="text-white text-xl font-semibold mb-2">{item.alt}</h3>
            <div className="flex items-center space-x-2">
              <FaLink className="text-white text-sm" />
              <p className="text-white text-sm">View Project</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioContent;
