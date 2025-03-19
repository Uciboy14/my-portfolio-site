'use client';
import { useState, useEffect } from 'react';
import Script from 'next/script';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import TestimonialComponent from "@/components/TestimonialComponent";
import Contact from "@/components/Contact";
import LoadingSpinner from "@/components/LoadingSpinner";
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Uccodetech",
    "url": "https://your-domain.com",
    "jobTitle": "Web Developer",
    "description": "Professional web developer specializing in modern web technologies",
    "knowsAbout": ["Web Development", "React", "Next.js", "Frontend Development", "Backend Development"],
    "offers": {
      "@type": "Offer",
      "description": "Web development and design services"
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="bg-gray-900">
        {isLoading && <LoadingSpinner />}
        <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
          <header>
            <Navbar />
            <Hero />
          </header>
          <section id="about" aria-label="About section">
            <About />
          </section>
          <section id="skills" aria-label="Skills section">
            <Skills />
          </section>
          <section id="services" aria-label="Services section">
            <Services />
          </section>
          <section id="portfolio" aria-label="Portfolio section">
            <Portfolio />
          </section>
          <section id="testimonials" aria-label="Testimonials section">
            <TestimonialComponent />
          </section>
          <section id="blog" aria-label="Blog section">
            <Blog />
          </section>
          <section id="contact" aria-label="Contact section">
            <Contact />
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
