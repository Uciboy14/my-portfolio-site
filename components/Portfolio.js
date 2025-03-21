"use client";
import Image from "next/image";
import React, { useState, Suspense, useEffect } from "react";
import dynamic from 'next/dynamic';
import Link from "next/link";
import { portfolioData, portfolioCategories } from "../data/portfolioData";

// Dynamically import motion components
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), {
  ssr: false,
  loading: () => <div className="w-full h-full" />
});

const AnimatePresence = dynamic(() => import('framer-motion').then(mod => mod.AnimatePresence), {
  ssr: false,
  loading: () => null
});

const PortfolioContent = dynamic(() => import("./PortfolioContent"), {
  loading: () => <div className="w-full h-full animate-pulse bg-gray-700 rounded-lg" />
});

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [displayCount, setDisplayCount] = useState(6);

  // Reset display count when category changes
  useEffect(() => {
    setDisplayCount(6);
  }, [selectedCategory]);

  const filteredProjects = selectedCategory === "All"
    ? portfolioData
    : portfolioData.filter(project => project.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, displayCount);

  const handleShowMore = () => {
    setDisplayCount(prev => prev + 3);
  };

  const handleShowLess = () => {
    setDisplayCount(prev => Math.max(6, prev - 3));
  };

  const getRandomDirection = () => {
    const directions = ['left', 'right', 'up', 'down'];
    return directions[Math.floor(Math.random() * directions.length)];
  };

  const getInitialPosition = (direction) => {
    switch (direction) {
      case 'left': return { x: -100, y: 0 };
      case 'right': return { x: 100, y: 0 };
      case 'up': return { x: 0, y: -100 };
      case 'down': return { x: 0, y: 100 };
      default: return { x: 0, y: 0 };
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section id="portfolio" className="leading-[24px] py-[48px] font-light text-left text-[#fafafa]">
      <div className="container px-[15px]">
        <div className="col-lg-full">
          <div className="title-content">
            <p className="title">my work</p>
            <h2 className="text-[#1ab394] inline-block poppins text-[32px] md:text-[40px] font-semibold leading-[1.4] md:leading-[64.72px] mb-2 text-left">
              Featured Portfolio
            </h2>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-[#1ab394] text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => {
              const direction = getRandomDirection();
              const initial = getInitialPosition(direction);
              return (
                <MotionDiv
                  key={`${project.id}-${selectedCategory}`}
                  initial={{ opacity: 0, ...initial }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, ...initial }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="portfolio-item-content overflow-hidden rounded-[20px]">
                    <Image
                      src={project.src}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                    </div>
                  </div>
                </MotionDiv>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {displayedProjects.length < filteredProjects.length && (
            <button
              onClick={handleShowMore}
              className="px-8 py-3 bg-[#1ab394] text-white rounded-full hover:bg-[#169c7d] transition-colors font-light"
            >
              Show More
            </button>
          )}
          {displayedProjects.length > 6 && (
            <button
              onClick={handleShowLess}
              className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors font-light"
            >
              Show Less
            </button>
          )}
          <Link 
            href="/portfolio" 
            className="px-8 py-3 bg-[#1ab394] text-white rounded-full hover:bg-[#169c7d] transition-colors font-light"
          >
            Portfolio Page
          </Link>
        </div>
      </div>

      {selectedProject && (
        <Suspense fallback={<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>}>
          <PortfolioContent
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Suspense>
      )}
    </section>
  );
};

export default Portfolio;
