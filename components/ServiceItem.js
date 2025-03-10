import React from "react";

const ServiceItem = ({ title, description, icon, color }) => {
  const textColor = color === "bg-[#fbdd62]" ? "text-[#5f5f5f]" : "text-white";

  return (
    <div className="col-lg-4 mb-6">
      <div className={`service-item-box ${color} p-6 rounded-xl`}>
        <div className="service-content relative">
          <div className="rounded-[16px] absolute left-0 text-[#fafafa] inline font-light leading-[24px] text-left">
            {typeof icon === "string" ? <img src={icon} alt={title} className="w-10 h-10" /> : icon}
          </div>
          <div>
            <h5 className={`poppins text-[20px] font-medium tracking-tight leading-[32.36px] mb-4 text-left ${textColor}`}>
              {title}
            </h5>
            <p className={`muli text-left leading-[24px] tracking-tight font-light ${textColor}`}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
