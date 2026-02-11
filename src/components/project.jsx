import { motion } from 'framer-motion';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GrFormNextLink } from "react-icons/gr";
import game_project from "../assets/game_project.png";
import gestion_stock from "../assets/gestion_stock.png"
import gestion_industrielle from "../assets/gestion-industrielle.png"
const projects = [
  
  { 
    title: "PAPER_ROCK_SCISSORS Game", 
    desc: "simple game ", 
    tech: ["React", "Tailwind"] ,
    demo : "https://aymensiraj.github.io/PAPER_ROCK_SCISSORS/",
    img : game_project
  },
  { 
    title: "Gestion de Stock Entreprise", 
    desc: "App management stock.", 
    tech: ["React", "Tailwind" , "Redux"],
    demo : "https://aymensiraj.github.io/Gestion-de-Stock-Entreprise",
    img : gestion_stock
  },
  { 
    title: "Fab Flow App", 
    desc: "Industrial Management App", 
    tech: ["React", "Tailwind", "Laravel", "My SQL"],
    demo : "in progess" ,
    img : gestion_industrielle
  },
  { 
    title: "Social App", 
    desc: "Modern networking platform with video features.", 
    tech: ["React", "Tailwind", "Node JS", "Mongo Db"],
    demo : "in progess" ,
    img:""
  },
]

const Projects = () => {
  const MotionDiv = motion.div
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

      {/* Container dyal les cards: Scroll horizontal smooth */}
      <div className="flex gap-6 overflow-x-auto pb-10 pt-4 snap-x no-scrollbar">
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
                  {p.title}
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

              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {p.demo == "in progess" ?
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white rotate-[-45deg]">
                    <AiOutlineLoading3Quarters/>
                  </div>
                  :
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white rotate-[-45deg]">
                  <a target="_blank" rel="noopener noreferrer" href={p.demo}><GrFormNextLink/></a>
                </div>
                
                }
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};

export default Projects;