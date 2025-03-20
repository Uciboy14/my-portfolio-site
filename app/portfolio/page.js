'use client';
import React, { useState, useEffect } from 'react';
import PortfolioContent from '@/components/PortfolioContent';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/LoadingSpinner';

const PortfolioPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const allPortfolioItems = [
    {
      src: "/portfolio/portfolio-1.png",
      alt: "Web Development",
      title: "E-commerce Website",
      description: "A full-featured e-commerce platform built with Next.js and Stripe integration"
    },
    {
      src: "/portfolio/portfolio-2.jpg",
      alt: "App Development",
      title: "Mobile Banking App",
      description: "Cross-platform mobile banking application using Flutter"
    },
    {
      src: "/portfolio/portfolio-3.jpg",
      alt: "API Development",
      title: "RESTful API Service",
      description: "Backend API service with Node.js and Express"
    },
    {
      src: "/portfolio/portfolio-4.png",
      alt: "Cloud & DevOps",
      title: "Cloud Infrastructure",
      description: "AWS cloud infrastructure setup and management"
    },
    {
      src: "/portfolio/portfolio-5.jpg",
      alt: "E-commerce",
      title: "Online Store",
      description: "Custom e-commerce solution with payment integration"
    },
    {
      src: "/portfolio/portfolio-6.jpg",
      alt: "Payment Integration",
      title: "Payment Gateway",
      description: "Secure payment processing system integration"
    },
    // Add more portfolio items as needed
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      {isLoading && <LoadingSpinner />}
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar />
        <main className="pt-20">
          <section className="leading-[24px] py-[48px] font-light text-left text-[#fafafa]">
            <div className="container">
              <div className="col-lg-full mb-8">
                <div className="title-content pb-5">
                  <p className="title">Checkout my portfolio</p>
                  <h2 className="text-[#1ab394] inline-block font-poppins text-[40px] font-semibold leading-[64.72px] mb-2 text-left">
                    My Portfolio
                  </h2>
                </div>
              </div>
              <PortfolioContent portfolioItems={allPortfolioItems} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioPage; 