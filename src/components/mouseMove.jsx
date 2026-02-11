import { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  


  const springConfig = { damping: 30, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const mouseMove = (e) => {

      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [cursorX, cursorY]);
  const MotionDiv = motion.div
  return (
    <>
      
      <MotionDiv
        className="fixed top-0 left-0 pointer-events-none "
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%', 
          translateY: '-50%',
        }}
      >
        <div className="
          w-20 h-20 
          bg-indigo-500/15 
          rounded-full 
          blur-[20px]     
        " />
      </MotionDiv>
    </>
  );
};

export default CustomCursor;