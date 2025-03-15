import React from "react";

const ServiceItem = ({ title, description, icon, color }) => {
  const textColor = color === "bg-[#fbdd62]" ? "text-[#5f5f5f]" : "text-white";

  return (
    <div className="w-full mb-6">
      <div className={`service-item-box ${color} p-4 md:p-6 rounded-xl w-full min-h-[180px]`}>
        <div className="service-content relative">
          <div className="rounded-[16px] absolute left-0 text-[#fafafa] inline font-light leading-[24px] text-left">
            {typeof icon === "string" ? (
              <img 
                src={icon} 
                alt={title} 
                className="w-10 h-10 md:w-12 md:h-12 animate-swing" 
              />
            ) : icon}
          </div>
          <div>
            <h5 className={`poppins text-[18px] md:text-[20px] font-medium tracking-tight leading-[32.36px] mb-4 text-left ${textColor}`}>
              {title}
            </h5>
            <p className={`muli text-sm md:text-base text-left leading-[24px] tracking-tight font-light ${textColor}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
