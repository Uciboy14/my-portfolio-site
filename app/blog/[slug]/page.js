import React from 'react'

const BlogPost = ({ params }) => {
  // In a real application, you would fetch the blog post data based on the slug
  // For now, we'll use dummy data
  const blogPost = {
    image: "/blog-01.jpg",
    date: "March 18, 2025",
    comments: "3",
    title: "Be your best version",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    `,
    author: "John Doe",
    category: "Personal Development"
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