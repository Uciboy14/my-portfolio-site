"use client";
import React, { useState, useEffect } from 'react'
import BlogCard from '@/components/BlogCard'
import Navbar from '@/components/Navbar'
import LoadingSpinner from '@/components/LoadingSpinner'
import { blogPosts } from '@/data/blogData'

const BlogPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      {isLoading && <LoadingSpinner />}
      <div className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar />
        <section className="leading-[24px] py-[48px] font-light text-left text-[#fafafa]">
          <div className="container">
            <div className="col-lg-full mb-8">
              <div className="title-content pb-5">
                <h1 className="text-[#1ab394] inline-block font-poppins text-[40px] font-semibold leading-[64.72px] mb-2 text-left">
                  All Blog Posts
                </h1>
              </div>
            </div>
            <div className="flex flex-wrap  -mx-[15px] px-4">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default BlogPage 