import pfp from "../assets/pfp.jpeg"
import { motion } from 'framer-motion';

const Hero = () => {
  const MotionDiv = motion.div
  const MotionH1 = motion.h1
  const MotionSpan = motion.span
  const titleText = "Full-Stack Developer";
  
  // Animation settings l-kola 7erf
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08, // L-waqt bin kola 7erf
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center pt-20">
      {/* Profile Image with Glow */}
      <MotionDiv
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-48 h-48 md:w-60 md:h-60 mb-10 group"
      >
        <div className="absolute inset-0 rounded-[3rem] bg-indigo-500/20 rotate-6 border border-indigo-500/50 group-hover:rotate-12 transition-transform duration-500"></div>
        <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-2 border-white/10 bg-gray-900 shadow-2xl">
          <img src={pfp} alt="Aymen" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
        </div>
      </MotionDiv>
      
      <div className="text-center">
        {/* Name Animation */}
        <MotionH1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-black text-white tracking-tight"
        >
          AYMEN
        </MotionH1>

        {/* Animated Full-Stack Developer Text */}
        <MotionDiv
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-2xl text-indigo-400 font-mono mt-4 tracking-widest uppercase overflow-hidden flex justify-center"
        >
          {titleText.split("").map((char, index) => (
            <MotionSpan key={char + "-" + index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </MotionSpan>
          ))}
          {/* Cursor Blinking Effect */}
          <MotionSpan
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="ml-1 inline-block w-1 h-6 md:h-8 bg-indigo-500"
          ></MotionSpan>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;