import React from 'react'
import BlogCard from './BlogCard'
import Link from 'next/link'

const Blog = () => {
  const blogPosts = [
    {
      image: "/blog/blog-01.jpg",
      date: "March 18, 2025",
      comments: "3",
      title: "Be your best version",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      slug: "be-your-best-version"
    },
    {
      image: "/blog/blog-02.jpg",
      date: "March 15, 2025",
      comments: "(5)",
      title: "Blog Post 2",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      slug: "blog-post-2"
    },
    {
      image: "/blog/blog-03.jpg",
      date: "March 10, 2025",
      comments: "(2)",
      title: "Blog Post 3",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
      slug: "blog-post-3"
    }
  ]

  return (
    <section id="blog" className="leading-[24px] py-[48px] font-light text-left text-[#fafafa]">
      <div className="container">
        <div className="col-lg-full mb-8">
          <div className="title-content pb-5">
            <p className="title">Checkout latest blog posts</p>
            <h2 className="text-[#1ab394] inline-block font-poppins text-[40px] font-semibold leading-[64.72px] mb-2 text-left">
              Latest blog
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap -mx-[15px] px-4">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        <div className='col-lg-full justify-center flex'>
          <Link href="/blog">
            <button className="rounded-[16px] text-[#fafafa] inline-block font-light leading-6 px-[30px] py-[10px] text-center muli bg-[#1ab394] hover:bg-[#0c9b7e] transition-colors duration-300">
              View All Posts
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog;