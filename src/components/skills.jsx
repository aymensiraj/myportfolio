import { motion } from 'framer-motion';

const skills = [
  { 
    name: "Frontend",
    tools: [
      { name: "HTML", bg_color: "bg-[#E34F26]/10", color: "text-[#E34F26]", slug: "html5" },
      { name: "CSS", bg_color: "bg-[#1572B6]/10", color: "text-[#1572B6]", slug: "css" },
      { name: "JS", bg_color: "bg-[#F7DF1E]/10", color: "text-[#F7DF1E]", slug: "javascript" },
      { name: "React", bg_color: "bg-[#61DAFB]/10", color: "text-[#61DAFB]", slug: "react" },
      { name: "Tailwind", bg_color: "bg-[#06B6D4]/10", color: "text-[#06B6D4]", slug: "tailwindcss" },
      { name: "Bootstrap", bg_color: "bg-[#7952B3]/10", color: "text-[#7952B3]", slug: "bootstrap" },
    ],
    accent: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    dot: "bg-blue-500" 
  },
  { 
    name: "Backend", 
    tools: [
      { name: "PHP", bg_color: "bg-[#777BB4]/10", color: "text-[#777BB4]", slug: "php" }, 
      { name: "Node.js", bg_color: "bg-[#339933]/10", color: "text-[#339933]", slug: "nodedotjs" }, 
      { name: "Laravel", bg_color: "bg-[#FF2D20]/10", color: "text-[#FF2D20]", slug: "laravel" }, 
    ], 
    accent: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]",
    dot: "bg-red-500" 
  },
  { 
    name: "Database", 
    tools: [
      { name: "MySQL", bg_color: "bg-[#4479A1]/10", color: "text-[#4479A1]", slug: "mysql" }, 
      { name: "MongoDB", bg_color: "bg-[#47A248]/10", color: "text-[#47A248]", slug: "mongodb" } 
    ],
    accent: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]",
    dot: "bg-green-500" 
  },
  { 
    name: "tools", 
    tools: [
      { name: "Git", bg_color: "bg-[#F05032]/10", color: "text-[#F05032]", slug: "git" }, 
      { name: "GitHub", bg_color: "bg-[#ffffff]/10", color: "text-white", slug: "github" },
      { name: "Jira", bg_color: "bg-[#0052CC]/10", color: "text-[#0052CC]", slug: "jira" } 
    ],
    accent: "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]",
    dot: "bg-yellow-500" 
  }
]

const Skills = () => {
  const MotionDiv = motion.div
  const MotionH2 = motion.h2
  return (
    <section id="skills" className="py-20">
      <MotionH2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-black text-white mb-16 italic uppercase"
      >
        Tech Expertise
      </MotionH2>
      
      <div className="grid md:grid-cols-4 gap-6 px-4">
        {skills.map((skill, idx) => (
          <MotionDiv 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className={`p-8 rounded-[2.5rem] bg-white/5 border border-white/10 transition-all duration-50 group ${skill.accent}`}
          >
            <div className={`w-3 h-3 rounded-full mb-6 ${skill.dot} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">{skill.name}</h4>
            
            <div className="flex flex-wrap gap-3">
              {skill.tools.map((t, id) => (
                <div 
                  key={id} 
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl ${t.bg_color} border border-white/5 transition-all duration-100 group-hover:border-white/20`}
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${t.slug}/${t.color.replace('text-[#', '').replace(']', '')}`} 
                    alt={t.name}
                    className="w-4 h-4 object-contain"
                  />
                  <span className={`text-[11px] font-bold ${t.color} opacity-80 group-hover:opacity-100`}>
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};

export default Skills;