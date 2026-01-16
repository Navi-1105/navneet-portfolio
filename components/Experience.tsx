'use client';
import { experiences } from '@/data/content';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" ref={ref} className="py-32 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-accent tracking-tight uppercase mb-20"
        >
          Experience
        </motion.h2>

        <div className="relative border-l-2 border-[var(--card-border)] ml-3 md:ml-6 space-y-16">
          
          {/* ANIMATED DRAWING LINE */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 z-0"
          />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12 md:pl-16 group"
            >
              {/* ANIMATED DOT: SCALES UP ON SCROLL */}
              <motion.span 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1.5 }} 
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute -left-[9px] top-2 w-4 h-4 bg-[var(--bg)] border-2 border-accent rounded-full z-10 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
              />

              <div className="relative">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
                  {exp.period}
                </span>

                <h3 className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-1 group-hover:text-accent transition-colors">
                  {exp.company}
                </h3>
                <p className="text-xl text-[var(--text-secondary)] font-medium mb-6">
                  {exp.role}
                </p>

                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6 max-w-4xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] border border-[var(--card-border)] rounded-lg bg-[var(--card-bg)] group-hover:border-accent/30 transition-colors"
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
