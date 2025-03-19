"use client";
import ArrowUpButton from "./ArrowUpButton";
import SocialSidebar from "./SocialSidebar";
import { useState, useEffect } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Web Developer",
    "Fullstack Developer",
    "Backend Developer",
    "Cloud AWS Engineer"
  ];

  const handleDownloadCV = () => {
    // The CV file should be placed in the public directory
    const link = document.createElement('a');
    link.href = '/uccodetech-resume.pdf'; // Update this with your actual CV filename
    link.download = 'Uccodetech-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % roles.length;
      const fullText = roles[currentIndex];

      setDisplayText(prev => {
        if (!isDeleting) {
          if (prev === fullText) {
            setIsDeleting(true);
            setTypingSpeed(100);
            return prev;
          }
          return fullText.substring(0, prev.length + 1);
        }
        if (prev === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(150);
          return '';
        }
        return fullText.substring(0, prev.length - 1);
      });
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="home" className="hero-content min-h-screen flex items-center py-8 md:py-0">
      <div className="container px-4 md:px-6">
        <div className="w-full flex flex-col md:flex-row items-center justify-center text-[#fafafa] font-light leading-6 gap-8 md:gap-0 px-4">
          {/* Left Content */}
          <div className="text-[#fafafa] w-full md:basis-1/2 font-light leading-6 text-center md:text-left">
            <h1 className="text-[#fafafa] poppins text-[32px] md:text-[40px] font-medium leading-tight md:leading-[64.72px] mb-4">
              I'M <span className="text-[#1ab394]">Uchechi David</span>
            </h1>
            <h4 className="text-[#fafafa] poppins text-[20px] md:text-[24px] font-medium leading-normal md:leading-[38.832px]">
              <span className="text-[#1ab394] inline-block pr-2">
                A
              </span>
              <span className="text-[#fafafa] inline-block min-w-[200px]">
                {displayText}
                <span className="animate-blink">|</span>
              </span>
            </h4>
            <p className="text-gray-300 font-light muli leading-6 my-4 md:my-6 tracking-tight max-w-md mx-auto md:mx-0">
              In a professional context, it often happens that private clients
              order a publication to be made.
            </p>
            <button 
              onClick={handleDownloadCV}
              className="mt-4 md:mt-6 muli bg-[#1ab394] hover:bg-[#0c9b7e] rounded-[16px] text-[#fafafa] inline-block muli font-light leading-6 px-6 md:px-8 py-2.5 transition"
            >
              Download CV
            </button>
          </div>

          {/* Right Content (Image + Circles) */}
          <div className="text-[#fafafa] w-full md:basis-1/2 font-light leading-6">
            <div className="w-64 h-64 md:w-110 md:h-110 rounded-full bg-white flex items-center justify-center mx-auto relative">
              <img
                src="/profile2.jpg"
                alt="uccodetech"
                className="w-full h-full object-cover rounded-full"
              />
              
              {/* Floating Circles */}
              <div className="circle-container">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
              </div>

              <style jsx>{`
                .circle-container {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                }

                .circle {
                  position: absolute;
                  width: 45px;
                  height: 45px;
                  border-radius: 50%;
                  left: 50%;
                  top: -25px;
                  filter: blur(1px);
                  mix-blend-mode: screen;
                }

                .circle-1 {
                  width: 50px;
                  height: 50px;
                  background: radial-gradient(circle at 30% 30%, #ffd700, #ffa500);
                  box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
                  animation: rotate1 12s ease-in-out infinite;
                  transform-origin: 50% 240px;
                }

                .circle-2 {
                  width: 55px;
                  height: 55px;
                  background: radial-gradient(circle at 30% 30%, #ff69b4, #ff1493);
                  box-shadow: 0 0 15px rgba(255, 105, 180, 0.5);
                  animation: rotate2 15s ease-in-out infinite;
                  transform-origin: 50% 240px;
                }

                .circle-3 {
                  width: 60px;
                  height: 60px;
                  background: radial-gradient(circle at 30% 30%, #98fb98, #32cd32);
                  box-shadow: 0 0 15px rgba(50, 205, 50, 0.5);
                  animation: rotate3 18s ease-in-out infinite;
                  transform-origin: 50% 240px;
                }

                @keyframes rotate1 {
                  0% { transform: rotate(0deg) translateY(0) scale(1); }
                  25% { transform: rotate(90deg) translateY(-40px) scale(1.1); }
                  50% { transform: rotate(180deg) translateY(20px) scale(0.9); }
                  75% { transform: rotate(270deg) translateY(-20px) scale(1.2); }
                  100% { transform: rotate(360deg) translateY(0) scale(1); }
                }

                @keyframes rotate2 {
                  0% { transform: rotate(120deg) translateX(-30px) scale(0.9); }
                  33% { transform: rotate(240deg) translateX(40px) scale(1.1); }
                  66% { transform: rotate(360deg) translateX(-20px) scale(1.2); }
                  100% { transform: rotate(480deg) translateX(-30px) scale(0.9); }
                }

                @keyframes rotate3 {
                  0% { transform: rotate(240deg) translateY(0) translateX(0) scale(1); }
                  25% { transform: rotate(300deg) translateY(-50px) translateX(30px) scale(1.2); }
                  50% { transform: rotate(420deg) translateY(30px) translateX(-40px) scale(0.9); }
                  75% { transform: rotate(540deg) translateY(-20px) translateX(20px) scale(1.1); }
                  100% { transform: rotate(600deg) translateY(0) translateX(0) scale(1); }
                }

                @media (max-width: 768px) {
                  .circle-container {
                    display: none;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* Social Media Sidebar */}
        <SocialSidebar />
        {/* Return to Top Button */}
        <ArrowUpButton />
      </div>
    </section>
  );
}
