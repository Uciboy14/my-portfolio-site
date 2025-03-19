import { FaCalendarAlt, FaComments } from 'react-icons/fa'
import Link from 'next/link'

const BlogCard = ({ image, date, comments, title, description, slug }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 text-[#fafafa] font-light leading-[24px] px-[15px] text-left pb-8 md:mb-0">
      <div className="blog-content bg-gray-800 rounded-[20px] shadow-[0px_0px_2px_0px_#4f4f4f33] text-[#fafafa] font-light leading-[24px] p-[30px] text-left relative transition-all duration-300 hover:shadow-[0px_0px_20px_0px_#1ab39433] hover:-translate-y-1">
        <div className="rounded-[20px] border-[#53535366] shadow-[#53535366_-2px_-2px_7px_0px] text-[#fafafa] font-light leading-6 p-[5px] -mt-16 overflow-hidden">
          <img src={image} className="rounded-[16px] w-full h-[250px] object-cover transition-transform duration-300 hover:scale-105" alt={title} />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <ul className="flex items-center gap-4">
            <li className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#1ab394] text-[24px]" />
              <span className="text-[#d2d2d2] inline font-light leading-6 text-left muli">{date}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaComments className="text-[#1ab394] text-[24px]" />
              <span className="text-[#d2d2d2] inline font-light leading-6 text-left muli">{comments}</span>
            </li>
          </ul>
          <Link href={`/blog/${slug}`} className="text-[#fafafa] inline font-medium leading-[25.888px] text-left poppins hover:text-[#1ab394] transition-colors duration-300">
            {title}
          </Link>
          <p className="text-[#fafafa] font-light leading-6 mb-4 text-left muli">
            {description}
          </p>
          <Link href={`/blog/${slug}`} className="text-[#1ab394] inline font-light leading-6 text-left muli flex items-center gap-2 hover:gap-3 transition-all duration-300">
            Read more <span className="text-[#1ab394]">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;