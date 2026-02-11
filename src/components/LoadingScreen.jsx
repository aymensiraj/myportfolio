import { motion } from 'framer-motion';

const LoadingScreen = ({ onFinished }) => {
  const text = "WELCOME TO MY PORTFOLIO";

  // Animation dyal l7orouf
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const MotionDiv = motion.div
  return (
    <MotionDiv
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center"
    >
      <div className="text-center">
        <MotionDiv
          variants={sentence}
          initial="hidden"
          animate="visible"
          onAnimationComplete={() => {
            setTimeout(onFinished, 1500);
          }}
          className="text-3xl md:text-6xl font-black text-white tracking-widest uppercase italic"
        >
          {text.split("").map((char, index) => (
            <motion.span 
              key={index} 
              variants={letter}
              className={char === " " ? "inline-block w-4" : "inline-block text-indigo-500"}
              style={{ textShadow: "0 0 20px rgba(99, 102, 241, 0.5)" }}
            >
              {char}
            </motion.span>
          ))}
        </MotionDiv>
        
        {/* Loading bar*/}
        <MotionDiv 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "easeInOut" }}
          className=" h-[2px] bg-indigo-500 mt-8 mx-auto max-w-[200px]"
        />
      </div>
   </MotionDiv>
  );
};

export default LoadingScreen;