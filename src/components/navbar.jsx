import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
  const MotionNav = motion.nav;
  const [active, setActive] = useState("home");
  
  const activeStyle = 'text-indigo-400 relative flex flex-col items-center text-xs uppercase tracking-[0.2em] font-black transition-all duration-300';

  
  const handleSetActive = (item) => {
    setActive(item);
  }

  const navItems = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Projects', target: 'project' },
  ];

  return (
    <MotionNav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className=" fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl px-8 py-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex justify-between items-center"
    >
      <div className="text-xl font-black tracking-tighter text-white">
        AYMEN<span className="text-indigo-500">.</span>
      </div>

      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400 items-center">
        {navItems.map((item) => (
          <Link 
            key={item.target}
            to={item.target}
            spy={true}     
            smooth={true}
            duration={100}
            offset={-300}
            onSetActive={handleSetActive} 
            className='relative flex flex-col items-center cursor-pointer'
            onClick={() => setActive(item.target)}
          >
            <p className={`${active === item.target ? activeStyle : 'hover:text-white transition-colors text-xs uppercase tracking-[0.2em]'}`}>
              {item.name}
            </p>
            
            <span 
              className={`absolute -bottom-4 w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_12px_#6366f1,0_0_20px_#6366f1] transition-all duration-500 ease-out 
              ${active === item.target ? 'opacity-100 scale-100 -bottom-3' : 'opacity-0 scale-0 -bottom-5'}`}
            />
          </Link>
        ))}
      </div>

      <Link
        to='contact'
        spy={true}
        smooth={true}
        duration={100}
        offset={-300}
        onSetActive={handleSetActive}
        onClick={() => setActive("contact")}
      >
        <p className={`cursor-pointer px-5 py-2 rounded-full text-xs font-bold transition-all ${active === 'contact' ? 'bg-white text-indigo-600' : 'bg-indigo-600 text-white hover:bg-indigo-500'}`}>
          CONTACT
        </p>
      </Link>
    </MotionNav>
  );
};

export default Navbar;