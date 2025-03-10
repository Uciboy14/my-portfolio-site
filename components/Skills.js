import SkillBar from "./SkillBar";

const Skills = () => {
  const skills1 = [
    { name: "Full-Stack Development", percentage: 85, color: "bg-blue-500" },
    { name: "React.js / Next.js", percentage: 90, color: "bg-blue-500" },
    { name: "Vue.js", percentage: 75, color: "bg-green-500" },
    { name: "JavaScript (ES6+)", percentage: 90, color: "bg-yellow-500" },
    { name: "TypeScript", percentage: 75, color: "bg-blue-400" },
    { name: "HTML & CSS", percentage: 95, color: "bg-red-500" },
    { name: "Tailwind CSS", percentage: 85, color: "bg-indigo-500" },
  ];

  const skills2 = [
    { name: "Django (Python)", percentage: 80, color: "bg-green-500" },
    { name: "Python", percentage: 85, color: "bg-green-500" },
    {
      name: "SQL (Database Management)",
      percentage: 80,
      color: "bg-purple-500",
    },
    { name: "Firebase", percentage: 75, color: "bg-orange-500" },
    {
      name: "AWS (Hosting & Deployment)",
      percentage: 70,
      color: "bg-gray-500",
    },
    { name: "Flutter & Dart", percentage: 70, color: "bg-teal-500" },
    {
      name: "Payment Integration (PayPal, Bitcoin, USDT)",
      percentage: 75,
      color: "bg-pink-500",
    },
  ];

  return (
    <section className="leading-[24px] py-[48px] font-light text-left text-[#fafafa]">
      <div className="container">
        <div className="col-lg-full">
          <div className="title-content">
            <p className="title">level of knowledge</p>
            <h2 className="text-[#1ab394] inline-block font-poppins text-[40px] font-semibold leading-[64.72px] mb-2 text-left">
              My Skills
            </h2>
          </div>
        </div>
        <div className="flex">
          <div className="col-lg-half">
            <SkillBar skills={skills1} />
          </div>

          <div className="col-lg-half">
            <SkillBar skills={skills2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
