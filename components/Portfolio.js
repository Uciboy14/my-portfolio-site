import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <section className="leading-[24px] py-[48px] font-light text-left text-[#fafafa]">
      <div className="container">
        <div className="col-lg-full">
          <div className="title-content">
            <p className="title">Awesome works and enjoy</p>
            <h2 className="text-[#1ab394] inline-block font-poppins text-[40px] font-semibold leading-[64.72px] mb-2 text-left">
              My portfolio
            </h2>
          </div>
        </div>
        {/* Portfolio Filter List */}
        <div
          className="text-[#fafafa] basis-full font-light leading-6 px-[15px] text-left
"
        >
          <ul className="flex">
            <li className="mr-[12px] mb-[18px] bg-[#1ab394] rounded-[16px]">
              <a className="pill-button">All</a>
            </li>
            <li className="mr-[12px] mb-[18px] hover:bg-[#1ab394] hover:rounded-[16px]">
              <a className="pill-button">Web Devs</a>
            </li>
            <li className="mr-[12px] mb-[18px] hover:bg-[#1ab394] hover:rounded-[16px]">
              <a className="pill-button">Mobile Devs</a>
            </li>
            <li className="mr-[12px] mb-[18px] hover:bg-[#1ab394] hover:rounded-[16px]">
              <a className="pill-button">Cloud & Devops</a>
            </li>
            <li className="mr-[12px] mb-[18px] hover:bg-[#1ab394] hover:rounded-[16px]">
              <a className="pill-button">Ecommerce Development</a>
            </li>
            <li className="mr-[12px] mb-[18px] hover:bg-[#1ab394] hover:rounded-[16px]">
              <a className="pill-button">Backend & APIs</a>
            </li>
          </ul>
        </div>

        {/* Portfolio section */}
        <div className="portfolio-grid px-4 pt-[31px]">
          <div className="portfolio-item-content border">
            <Image className="rounded-[16px] text-[#fafafa] font-light" width={40} height={252} src="/web-dev-pics.jpg" alt="Web Development" />
          </div>
          <div className="portfolio-item-content border">Checkmate</div>
          <div className="portfolio-item-content border">Checkmate</div>
          <div className="portfolio-item-content border">Checkmate</div>
          <div className="portfolio-item-content border">Checkmate</div>
          <div className="portfolio-item-content border">Checkmate</div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
