import React from "react";

const TestimonialItemBox =
 ({ testimonialData }) => {
  return (
    <div className="grid grid-cols-2 py-4 gap-7">
      {testimonialData.map((item, index) => (
        <div key={index} className=" testimonial-item-box bg-gray-800">
          <div className="testimonial-header flex items-center gap-3.5">
            <img
              src={item.src}
              className="w-[74px] h-[74px] rounded-full inline-block 
"
            ></img>
            <div className="flex-col leading-6 text-left">
              <span className="block font-bold muli">{item.name}</span>
              <small className="block">{item.position}</small>
            </div>
          </div>
          <div className="testimonial-bottom">
            <p className="italic">
             {item.feedback}
            </p>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default TestimonialItemBox;
