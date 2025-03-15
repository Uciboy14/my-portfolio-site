import React from "react";

const TestimonialItemBox = ({ testimonialsData }) => {
  return (
    <div className="grid grid-cols-2 py-4 gap-7">
      {testimonialsData.map((item, index) => (
        <div key={index} className=" testimonial-item-box bg-gray-800 relative">
          <div className="testimonial-header flex items-center gap-3.5 after:content-['\275E'] after:text-[#1ab394] after:text-7xl after:absolute after:right-8 after:top-11">
            <img
              src={item.image}
              className="w-[74px] h-[74px] rounded-full inline-block 
"
            ></img>
            <div className="flex-col leading-6 text-left">
              <span className="block font-bold muli">{item.name}</span>
              <small className="block">{item.position}</small>
            </div>
          </div>
          <div className="testimonial-bottom">
            <p className="italic">"{item.feedback}"</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialItemBox;
