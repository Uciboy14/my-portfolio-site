import Image from "next/image";
import React from "react";
import PersonalInfo from "./PersonalInfo";

const About = () => {
  const personalDetails = [
    { label: "Birthday", value: "9 March 1999" },
    { label: "Website", value: "www.uccodetech.com" },
    { label: "Phone", value: "+2349063324523" },
    { label: "City", value: "Lagos, Nigeria" },
    { label: "Age", value: "26" },
    { label: "Degree", value: "Bsc." },
    { label: "Mail", value: "uccodetech@gmail.com" },
    { label: "Freelance", value: "Available" },
  ];

  const firstHalf = personalDetails.slice(0, 4);
  const secondHalf = personalDetails.slice(4, 8);

  return (
    <section
      className="bg-gray-900 flex items-center justify-center text-[#fafafa] font-light leading-6 py-[100px] pb-[48px] text-left
"
    >
      <div className="max-w-7xl mx-auto px-8 ">
        <div className="p-8 rounded-lg flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div
            className="text-[#fafafa] basis-1/2 font-light leading-6 px-[15px] text-left
"
          >
            <img
              src="/about.jpg"
              alt="Workspace"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Text Section */}
          <div
            className="text-[#fafafa] basis-1/2 font-light leading-6 px-[15px] text-left
"
          >
            <div className="personal-items">
              <h2 className="base-color text-lg">About Me</h2>
              <h5 className="poppins text-[20px] leading-[32.36px] font-medium text-white my-4 text-left">
                <span className="base-color inline-block">Full-Stack </span> &
                Flutter Mobile Developer
              </h5>
              <div className="flex">
                <PersonalInfo items={firstHalf} />
                <PersonalInfo items={secondHalf} />
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="muli text-[16px] leading-6 text-left tracking-normal text-[#fafafa] px-[30px] py-[10px] bg-[#1ab394] hover:bg-[#0c9b7e] transition rounded-[16px] shadow-none">
                Download CV
              </button>
              <button className="muli text-[16px] leading-6 text-left tracking-normal text-[#fafafa] px-[30px] py-[10px] bg-[#1ab394] hover:bg-[#0c9b7e] transition rounded-[16px] shadow-none">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
