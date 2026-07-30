import pfp from "../assets/pfp.png";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative  w-full bg-[#050505] flex items-center justify-center overflow-hidden font-sans">
      
      {/* 1. Background Large Text (Properly Scaled) */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-white text-[25vw] font-black tracking-tighter leading-[0.8] mb-[-2vw]"
        >
          AYMEN
        </motion.h1>
      </div>

      {/* 2. Main Content Wrapper (Fixed Alignment) */}
      <div className="relative z-20 w-full max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-4 h-full items-center">
        
        {/* LEFT: Text Content */}
        <div className="lg:col-span-4 z-30 pt-20 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit mb-6"
          >
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] text-white/70 uppercase tracking-[0.2em] font-bold">Available for Work</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-4xl lg:text-6xl font-bold leading-tight tracking-tighter"
          >
            Full-Stack <br /> 
            Web Developer <br />
            <span className="text-white/30">in Casablanca.</span>
          </motion.h2>
        </div>

        {/* CENTER: The Profile Image (The "Fix") */}
        <div className="lg:col-span-4 flex justify-center items-end h-full relative">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[70vh] lg:h-[85vh] flex items-end overflow-hidden"
            style={{
              // This creates the fade-to-black effect at the bottom so the image doesn't look like a box
              maskImage: 'linear-gradient(to top, transparent 5%, black 25%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 5%, black 25%)'
            }}
          >
             <img 
               src={pfp} 
               alt="Aymen" 
               className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
             />
          </motion.div>
        </div>

        {/* RIGHT: Bio & CTA */}

      </div>

      {/* 3. Global Styling for "AYMEN" behind image */}
      <style dangerouslySetInnerHTML={{ __html: `
        h1 {
          -webkit-text-stroke: 1px rgba(255,255,255,0.1);
          color: transparent; /* Makes it look even more professional */
        }
      `}} />

    </section>
  );
};

export default Hero;