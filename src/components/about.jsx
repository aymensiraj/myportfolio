import { motion } from 'framer-motion';
import pfp2 from "../assets/pfp2.jpeg"
const About = () => {
  const MotionDiv = motion.div
  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image Slide from Left */}
        <MotionDiv 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="aspect-square rounded-3xl bg-white/5 border border-white/10 overflow-hidden relative"
        >
          <img src={pfp2} alt="Aymen Working" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </MotionDiv>

        {/* Text Slide from Right */}
        <MotionDiv 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-white tracking-tight italic uppercase">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm a Full-Stack Developer with a passion for building fast, responsive, and 
            user-friendly web applications. With expertise in <span className="text-white">React, Node.js, and Laravel</span>.
          </p>
          <p className="text-gray-400 text-lg">
            I love turning complex problems into simple, beautiful code.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
};

export default About;