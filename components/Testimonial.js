"use client";

import React, { useState, useEffect } from "react";
import TestimonialItemBox from "./TestimonialItemBox";
import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonialsData = [
    {
      image: "/testimonial1.jpeg",
      name: "John Nwachukwu",
      position: "Design Strategist",
      feedback:
        "Working with this team was an absolute pleasure! Their attention to detail, innovative approach, and dedication to excellence truly set them apart. I highly recommend their services!",
    },
    {
      image: "/testimonial2.jpeg",
      name: "Mary Jane",
      position: "CEO Management",
      feedback:
        "An exceptional experience! Their professionalism, creativity, and ability to deliver beyond expectations made a significant impact on our business. Highly recommended!",
    },
    {
      image: "/testimonial3.jpeg",
      name: "David Chen",
      position: "Tech Lead",
      feedback:
        "Outstanding work! The team's technical expertise and problem-solving skills are remarkable. They delivered a solution that exceeded our expectations.",
    },
    {
      image: "/testimonial4.jpeg",
      name: "Sarah Williams",
      position: "Product Manager",
      feedback:
        "Incredible attention to detail and excellent communication throughout the project. The end result was exactly what we were looking for!",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev + 2 >= testimonialsData.length ? 0 : prev + 2
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev - 2 < 0 ? testimonialsData.length - 2 : prev - 2
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index * 2);
  };

  return (
    <section id="client" className="leading-[24px] py-[48px] font-light text-left text-[#fafafa] relative">
      <div className="container">
        <div className="col-lg-full">
          <div className="title-content">
            <p className="title">What clients think about me</p>
            <h2 className="text-[#1ab394] inline-block poppins text-[40px] font-semibold leading-[64.72px] mb-2 text-left">
              Clients say
            </h2>
          </div>
        </div>
        {/* Testimonial client section */}
        <div className="relative">
          <div className="py-4 leading-6 text-left px-[15px]">
            <TestimonialItemBox testimonialsData={testimonialsData} currentIndex={currentIndex} />
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-[#1ab394] p-3 rounded-full opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-[#1ab394] p-3 rounded-full opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Slider Dots */}
      <div className="text-[#fafafa] font-light flex justify-center items-center leading-6 mt-4 text-center">
        {Array.from({ length: Math.ceil(testimonialsData.length / 2) }).map((_, index) => (
          <motion.span
            key={index}
            className={`cursor-pointer w-9 h-1 shadow-md rounded-[16px] shadow-[#53535366_-1px_-1px_4px_0px] mx-1 ${
              currentIndex === index * 2 ? "bg-[#1ab394]" : "bg-gray-600"
            }`}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
