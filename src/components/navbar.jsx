import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from "react-scroll";
const Navbar = () => {
  
  const MotionNav = motion.nav
  const [active,setActive] = useState("home")
  const activeStyle = 'text-indigo-600 relative flex flex-col items-center text-xs uppercase tracking-[0.2em] font-black transition-all duration-300'
  return (
    <MotionNav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl px-8 py-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex justify-between items-center"
    >
      <div className="text-xl font-black tracking-tighter text-white">AYMEN<span className="text-indigo-500">.</span></div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        <Link 
          to='home'
          smooth={true}
          duration={50}
          offset={-70}
          
          className='relative flex flex-col items-center'
          onClick={()=>setActive("home")}
        >
          <p className={`cursor-pointer  ${active == 'home'?activeStyle :  'hover:text-white transition-colors'} `}>Home</p>
          <span 
          className={`absolute -bottom-4 w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_12px_#6366f1,0_0_20px_#6366f1] transition-all duration-500 ease-out 
          ${active=='home' ? 'opacity-100 scale-100 -bottom-3' : 'opacity-0 scale-0 -bottom-5'}`}
        />
        </Link>
        <Link 
          to='about'
          smooth={true}
          duration={50}
          offset={-70}
          className='relative flex flex-col items-center'
          onClick={()=>setActive("about")}
          >
            <p className={`cursor-pointer  ${active == 'about'?activeStyle :  'hover:text-white transition-colors'} `}>About</p>
            <span 
              className={`absolute -bottom-4 w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_12px_#6366f1,0_0_20px_#6366f1] transition-all duration-500 ease-out 
              ${active=='about' ? 'opacity-100 scale-100 -bottom-3' : 'opacity-0 scale-0 -bottom-5'}`}
            />
          </Link>
        
        <Link
          to='skills'
          smooth={true}
          duration={50}
          offset={-70}
          className='relative flex flex-col items-center'
          onClick={()=>setActive("skills")}
        >
          <p className={`cursor-pointer  ${active == 'skills'?activeStyle :  'hover:text-white transition-colors'} `}>Skills</p>
          <span 
            className={`absolute -bottom-4 w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_12px_#6366f1,0_0_20px_#6366f1] transition-all duration-500 ease-out 
            ${active=='skills' ? 'opacity-100 scale-100 -bottom-3' : 'opacity-0 scale-0 -bottom-5'}`}
          />
        </Link>
        <Link
          to='project'
          smooth={true}
          duration={50}
          offset={-70}
          className='relative flex flex-col items-center'
          onClick={()=>setActive("project")}
        >
          <p className={`cursor-pointer  ${active == 'project'?activeStyle :  'hover:text-white transition-colors'} `}>Projects</p>
          <span 
            className={`absolute -bottom-4 w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_12px_#6366f1,0_0_20px_#6366f1] transition-all duration-500 ease-out 
            ${active=='project' ? 'opacity-100 scale-100 -bottom-3' : 'opacity-0 scale-0 -bottom-5'}`}
          />
        </Link>
      </div>
        <Link
          to='contact'
          smooth={true}
          duration={50}
          offset={-70}
          onClick={()=>setActive("")}
        >
          <p className="cursor-pointer bg-indigo-600 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-indigo-500 transition-all">
            CONTACT
          </p>
        </Link>
    </MotionNav>
  );
};

export default Navbar;