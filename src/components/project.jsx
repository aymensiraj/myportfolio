import { motion } from 'framer-motion';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GrFormNextLink } from "react-icons/gr";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useRef } from 'react';
import pizza from "../assets/pizza.png";
import gestion_stock from "../assets/gestion_stock.png";
import cafe from "../assets/cafe.png";
import CarRental from "../assets/landing page light.png";
const projects = [
  
  { 
    title: "Car Rental App", 
    desc: "App for renting cars.", 
    tech: ["React", "Tailwind" , "Redux"],
    demo : "https://github.com/aymensiraj/Car-rental",
    img : CarRental
  },
  { 
    title: "Gestion de Stock Entreprise", 
    desc: "App management stock.", 
    tech: ["React", "Tailwind" , "Redux"],
    demo : "https://aymensiraj.github.io/Gestion-de-Stock-Entreprise",
    img : gestion_stock
  },
  { 
    title: "Pizza Landing Page", 
    desc: "landing page for pizza restaurant", 
    tech: ["React", "Tailwind"] ,
    demo : "https://aymensiraj.github.io/Pizza-LandingPage/",
    img : pizza
  },
  { 
    title: "Cafe Landing Page", 
    desc: "landing page for cafe  restaurant", 
    tech: ["React", "Tailwind"] ,
    demo : "https://aymensiraj.github.io/Cafe-landingPage/",
    img : cafe
  },

]

const Projects = () => {
  const MotionDiv = motion.div
  const scrollContainer = useRef(null)

  const scroll = (direction) => {
    const container = scrollContainer.current
    if (container) {
      const scrollAmount = 320
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="project" className="py-20 overflow-hidden">
      <MotionDiv 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-4xl font-black text-white italic uppercase">Selected Works</h3>
      </MotionDiv>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors"
          aria-label="Scroll left"
        >
          <MdArrowBackIos size={24} />
        </button>

        <div ref={scrollContainer} className="flex gap-6 overflow-x-auto pb-10 pt-4 snap-x no-scrollbar px-20">
          {projects.map((p, i) => (
          <MotionDiv 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -15 }}
            className="min-w-[280px] md:min-w-[320px] h-[480px] snap-center relative group"
          >
            <div className="w-full h-full bg-[#111] rounded-[2.5rem] border border-white/5 overflow-hidden flex flex-col p-6 transition-all duration-500 group-hover:border-indigo-500/30 group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)]">

              <div className="w-full h-52 bg-white/5 rounded-[2rem] overflow-hidden mb-6 border border-white/5">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>

              <div className="flex-1">
                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-400 transition-colors">
                  <a className='cursor-pointer' href={p.demo} target="_blank" rel="noopener noreferrer">
                    {p.title}
                  </a>
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                  {p.desc}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {p.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold text-indigo-400 bg-indigo-500/5 px-3 py-1 rounded-full border border-indigo-500/10 uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
              </div>


            </div>
          </MotionDiv>
        ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full transition-colors"
          aria-label="Scroll right"
        >
          <MdArrowForwardIos size={24} />
        </button>
      </div>
    </section>
  );
};

export default Projects;