const Skills = () => {
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
            <span className="text-[#fafafa] inline-block text-[14px] font-semibold leading-[21px] text-left">Html
            </span>
          </div>
          <div className="skill-box"></div>
          <div className="col-lg-half">
            <span className="text-[#fafafa] inline-block text-[14px] font-semibold leading-[21px] text-left">Reactjs</span>
          </div>
          <div className="skill-box"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
