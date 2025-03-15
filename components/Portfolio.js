import Image from "next/image";
import React from "react";
import PortfolioContent from "./PortfolioContent";

const Portfolio = () => {
  const portfolioItems = [
    { src: "/web-dev-pics.jpg", alt: "Web Development" },
    { src: "/app-dev.jpg", alt: "App Development" },
    { src: "/api.jpg", alt: "API Development" },
    { src: "/cloud-devops.png", alt: "Cloud & DevOps" },
    { src: "/ecommerce.jpg", alt: "E-commerce" },
    { src: "/payment-integration.jpg", alt: "Payment Integration" },
  ];

  return (
    <section className="leading-[24px] py-[48px] font-light text-left text-[#fafafa]">
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
            <li className="mr-[12px] mb-[18px] bg-[#1ab394] rounded-[16px]">
              <a className="pill-button whitespace-nowrap px-4 py-2 block hover:opacity-90 transition-opacity">All</a>
            </li>
            <li className="mr-[12px] mb-[18px] hover:bg-[#1ab394] hover:rounded-[16px] transition-colors">
              <a className="pill-button whitespace-nowrap px-4 py-2 block">Web Devs</a>
            </li>
            <li className="mr-[12px] mb-[18px] hover:bg-[#1ab394] hover:rounded-[16px] transition-colors">
              <a className="pill-button whitespace-nowrap px-4 py-2 block">Mobile Devs</a>
            </li>
            <li className="mr-[12px] mb-[18px] hover:bg-[#1ab394] hover:rounded-[16px] transition-colors">
              <a className="pill-button whitespace-nowrap px-4 py-2 block">Cloud & Devops</a>
            </li>
            <li className="mr-[12px] mb-[18px] hover:bg-[#1ab394] hover:rounded-[16px] transition-colors">
              <a className="pill-button whitespace-nowrap px-4 py-2 block">Ecommerce Development</a>
            </li>
            <li className="mr-[12px] mb-[18px] hover:bg-[#1ab394] hover:rounded-[16px] transition-colors">
              <a className="pill-button whitespace-nowrap px-4 py-2 block">Backend & APIs</a>
            </li>
          </ul>
        </div>

        {/* Portfolio section */}
        <PortfolioContent portfolioItems={portfolioItems} />

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
