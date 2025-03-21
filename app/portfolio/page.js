'use client';
import React, { useState, useEffect } from 'react';
import Portfolio from '@/components/Portfolio';
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

  return (
    <div className="bg-gray-900 min-h-screen">
      {isLoading && <LoadingSpinner />}
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioPage;