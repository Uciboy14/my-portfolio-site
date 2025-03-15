import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialItemBox = ({ testimonialsData, currentIndex }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-4 gap-7">
      <AnimatePresence mode="wait">
        {testimonialsData.slice(currentIndex, currentIndex + 2).map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="testimonial-item-box bg-gray-800 relative"
          >
            <div className="testimonial-header flex items-center gap-3.5 after:content-['\275E'] after:text-[#1ab394] after:text-7xl after:absolute after:right-8 after:top-11">
              <img
                src={item.image}
                alt={item.name}
                className="w-[74px] h-[74px] rounded-full inline-block"
              />
              <div className="flex-col leading-6 text-left">
                <span className="block font-bold muli">{item.name}</span>
                <small className="block">{item.position}</small>
              </div>
            </div>
            <div className="testimonial-bottom">
              <p className="italic">"{item.feedback}"</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialItemBox;
