"use client";

const PersonalInfo = ({ items }) => {
  return (
    <div className="personal-info">
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-[#fafafa] muli font-medium leading-6 mb-4 text-left"
          >
            {item.label} :{" "}
            <span className="text-[#d2d2d2] inline-block font-light leading-6 text-left">
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalInfo;
