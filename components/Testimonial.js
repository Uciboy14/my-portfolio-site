"use client";

import React from "react";
import TestimonialItemBox from "./TestimonialItemBox";

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
  ];

  return (
    <section className="leading-[24px] py-[48px] font-light text-left text-[#fafafa]">
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
        <div className="py-4 leading-6 text-left px-[15px]">
          <TestimonialItemBox testimonialsData={testimonialsData} />
        </div>
      </div>
      {/* Slidder */}
      <div className="text-[#fafafa] font-light flex justify-center items-center leading-6 mt-4 text-center"
      >
        <span className="bg-[#1ab394] w-9 h-1 shadow-md rounded-[16px] shadow-[#53535366_-1px_-1px_4px_0px] mx-1"></span>
        <span className="bg-[#1ab394] w-9 h-1 shadow-md rounded-[16px] shadow-[#53535366_-1px_-1px_4px_0px] mx-1"></span>
      </div>
    </section>
  );
};

export default Testimonial;
