import React from 'react'
import { blogPosts } from '@/data/blogData'

// Add generateStaticParams function
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

const BlogPost = ({ params }) => {
  const blogPost = blogPosts.find(post => post.slug === params.slug)

  if (!blogPost) {
    return (
      <div className="bg-gray-900 min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center text-[#fafafa]">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-gray-400">The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={blogPost.image} 
              alt={blogPost.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          
          <div className="text-[#fafafa]">
            <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
            
            <div className="flex items-center gap-4 text-gray-400 mb-8">
              <span>{blogPost.date}</span>
              <span>•</span>
              <span>{blogPost.comments} comments</span>
              <span>•</span>
              <span>{blogPost.category}</span>
            </div>
            
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
            
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-700"></div>
                <div>
                  <p className="font-semibold">{blogPost.author}</p>
                  <p className="text-gray-400">Author</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlogPost 