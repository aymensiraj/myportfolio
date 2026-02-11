import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";




const Footer = () => (
<footer className="mt-40 pb-12 border-t border-white/5 relative overflow-hidden">

  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>

  <div className="max-w-6xl mx-auto px-6 pt-20">
    <div className="flex flex-col md:flex-row justify-between items-start gap-16">
      

      <div className="max-w-md space-y-6">
        <h2 className="text-4xl  text-white tracking-tight font-mono font-extrabold">
          Why I Build This ?
        </h2>
        <p className="text-gray-500 text-base leading-relaxed font-light">
          To challenge my technical limits, experiment with modern web technologies, 
          and showcase my journey as a <span className="text-gray-300">Full-Stack Developer</span>.
        </p>
      </div>

      <div className="flex flex-col gap-6 items-center">
        <span className="text-4xl  font-mono font-extrabold">My Socials</span>
        <div className="flex gap-8 items-center lg:text-gray-500 ">
          <a href="https://github.com/aymensiraj" target="_blank" rel="noopener noreferrer" 
             className="hover:text-white transition-all duration-300 hover:-translate-y-1">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/aymen-siraj-761a67344/" target="_blank" rel="noopener noreferrer" 
             className="hover:text-[#0A66C2] transition-all duration-300 hover:-translate-y-1">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://www.instagram.com/aymen.oc/" target="_blank" rel="noopener noreferrer" 
             className="hover:text-[#E4405F] transition-all duration-300 hover:-translate-y-1">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.facebook.com/ayman.srj.758" target="_blank" rel="noopener noreferrer" 
             className="hover:text-blue-600 transition-all duration-300 hover:-translate-y-1">
            <FaFacebookF size={20} />
          </a>
        </div>
      </div>
    </div>

    {/* السطر الأخير - نظيف جداً */}
    <div className="mt-24 pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between gap-6">
      <p className="text-[10px] tracking-[0.2em] text-gray-700 uppercase">
        © 2026 All rights reserved
      </p>
      <div className="flex gap-8 items-center">
        <span className="text-[10px] tracking-[0.2em] text-gray-700 uppercase italic">Morocco — 33.57° N, 7.58° W</span>
      </div>
    </div>
  </div>
</footer>
);

export default Footer