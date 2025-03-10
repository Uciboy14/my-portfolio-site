const SkillBar = ({ skills }) => {
  return (
    <div className="">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between">
            <span className="text-[#fafafa] inline-block text-[14px] font-semibold leading-[21px] text-left mt-2">
              {skill.name}
            </span>
            <span className="text-[#fafafa] font-medium leading-6 text-left mt-2">
              {skill.percentage}%
            </span>
          </div>
          <div className="skill-box">
            <div className="w-full bg-gray-300 rounded-full">
              <div
                className={`h-3 rounded-full ${skill.color}`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBar;