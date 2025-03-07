import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="fixed left-0 bottom-0 flex flex-col items-center gap-7 text-white">
      <p className="rotate-90 text-[16px] font-light text-right tracking-wide muli leading-[24px] inline-block py-6">Follow Me</p>
      <div className="w-[2px] h-14 bg-[#1ab394]"></div>
      <a href="#" className="hover:text-[#1ab394]">
        <FaFacebookF size={15} />
      </a>
      <a href="#" className="hover:text-[#1ab394]">
        <FaTwitter size={15} />
      </a>
      <a href="#" className="hover:text-[#1ab394]">
        <FaGithub size={15} />
      </a>
      <a href="#" className="hover:text-[#1ab394] pb-2">
        <FaLinkedinIn size={15} />
      </a>
    </div>
  );
}
