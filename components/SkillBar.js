"use client"
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
                className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                style={{ 
                  width: '0%',
                  animation: `skillBarFill-${skill.percentage} 1.5s ease-out forwards`,
                  animationDelay: `${index * 0.2}s`
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        ${skills.map((skill) => `
          @keyframes skillBarFill-${skill.percentage} {
            0% {
              width: 0%;
            }
            100% {
              width: ${skill.percentage}%;
            }
          }
        `).join('\n')}
      `}</style>
    </div>
  );
};

export default SkillBar;