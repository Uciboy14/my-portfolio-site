export default function Hero() {
  return (
    <section className="relative h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-8">
        <div className="w-full flex flex-wrap items-center  justify-center text-[#fafafa] font-light leading-6 pb-12">
          {/* Left Content */}
          <div className="text-[#fafafa] basis-1/2  font-light leading-6 px-4 text-left">
            <h1 className="text-[#fafafa] font-poppins text-[40px] font-medium leading-[64.72px] mb-4 text-left">
              I'M <span className="text-[#1ab394]">Uchechi David</span>
            </h1>
            <h4 className="text-[#fafafa] font-poppins text-[24px] font-medium leading-[38.832px] text-left">
              <span className="text-[#1ab394] inline-block text-[24px] font-medium leading-[38.832px] pr-2 text-left">
                A
              </span>
              <span className="text-[#fafafa] inline-block text-[24px] font-medium leading-[38.832px] text-left">
                Web Developer.
              </span>
            </h4>
            <p className="text-gray-300 font-light font-muli leading-6 my-6 text-left">
              In a professional context, it often happens that private clients
              order a publication to be made.
            </p>
            <button className="mt-6 bg-green-400 text-black font-bold py-2 px-6 rounded-full hover:bg-green-500 transition">
              Download CV
            </button>
          </div>

          {/* Right Content (Image + Circles) */}
          <div className="text-[#fafafa] basis-1/2  font-light leading-6 px-4 text-left">
            <div className=" w-100 h-100 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-lg">
              <img
                src="/profile2.jpg" // Replace with your image path
                alt="Jessy Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Floating Circles */}
        <div className="absolute right-36 bottom-36 w-8 h-8 bg-yellow-300 rounded-full"></div>
        <div className="absolute right-28 top-32 w-6 h-6 bg-pink-500 rounded-full"></div>
        <div className="absolute right-12 top-64 w-10 h-10 bg-green-500 rounded-full"></div>

        {/* Social Media Sidebar */}
        <div className="fixed left-4 top-1/3">
          <p className="rotate-90 text-sm">Follow Me</p>
          <div className="mt-2 space-y-3">
            <a href="#" className="text-white text-lg block">
              •
            </a>
            <a href="#" className="text-white text-lg block">
              •
            </a>
            <a href="#" className="text-white text-lg block">
              •
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
