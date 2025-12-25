'use client';
import { experiences } from '@/data/content';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADING */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-accent tracking-tight uppercase mb-20"
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-white/20 ml-3 md:ml-6 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12 md:pl-16 group"
            >
              {/* TIMELINE DOT (The "Node") 
                  Default: Grey border. 
                  Hover: Gold background + Glow effect.
              */}
              <span 
                className="absolute -left-[5px] top-2 w-3 h-3 bg-black border border-white/50 rounded-full 
                           group-hover:bg-accent group-hover:border-accent group-hover:scale-150 
                           transition-all duration-300 z-10"
              >
                {/* Optional Glow Ring on Hover */}
                <span className="absolute inset-0 rounded-full bg-accent opacity-0 group-hover:animate-ping group-hover:opacity-75"></span>
              </span>

              {/* CONTENT CARD */}
              <div className="relative">
                {/* Date Tag */}
                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
                  {exp.period}
                </span>

                {/* Role & Company */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  {exp.company}
                </h3>
                <p className="text-xl text-gray-400 font-medium mb-6">
                  {exp.role}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-4xl">
                  {exp.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1.5 text-sm font-medium text-gray-400 border border-white/10 rounded-lg bg-white/5 group-hover:border-accent/30 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}