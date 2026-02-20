import { motion } from 'framer-motion';
import pfp2 from "../assets/pfp2.jpeg";

const MotionDiv = motion.div
const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        
 
        <MotionDiv 
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >

          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
            <img 
              src={pfp2} 
              alt="Aymen Working" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
            />
  
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
          </div>

         
        </MotionDiv>


        <div className="space-y-8">
          <MotionDiv
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >            
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter uppercase italic leading-none">
                About <span className="text-gray-500">Me</span>
            </h2>
          </MotionDiv>

          <MotionDiv 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
          <p className="text-gray-400 text-lg leading-relaxed">I'm a <span className='font-mono font-extrabold text-xl text-white '>Full-Stack Developer</span> with a passion for building fast, responsive, anduser-friendly web applications. With expertise in <span className="text-white">React, Node.js, and Laravel</span></p>
          <p className="text-gray-400 text-lg">I love turning complex problems into simple, beautiful code</p>
          </MotionDiv>



        </div>
      </div>
    </section>
  );
};

export default About;