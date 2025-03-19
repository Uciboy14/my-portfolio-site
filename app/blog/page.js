import React from 'react'
import BlogCard from '@/components/BlogCard'

const BlogPage = () => {
  const allBlogPosts = [
    {
      image: "/blog-01.jpg",
      date: "March 18, 2025",
      comments: "3",
      title: "Be your best version",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      image: "/blog-02.jpg",
      date: "March 15, 2025",
      comments: "(5)",
      title: "Blog Post 2",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    {
      image: "/blog-03.jpg",
      date: "March 10, 2025",
      comments: "(2)",
      title: "Blog Post 3",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
    },
    // Add more blog posts here
  ]

  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <section className="leading-[24px] py-[48px] font-light text-left text-[#fafafa]">
        <div className="container">
          <div className="col-lg-full mb-8">
            <div className="title-content pb-5">
              <h1 className="text-[#1ab394] inline-block font-poppins text-[40px] font-semibold leading-[64.72px] mb-2 text-left">
                All Blog Posts
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap -mx-[15px] px-4">
            {allBlogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage 