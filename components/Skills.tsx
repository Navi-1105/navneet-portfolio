'use client';
import { skills } from '@/data/content';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-8 border-t border-white/10 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* FIX 1: Reduced from 8xl to 6xl. Still big, but not overwhelming. */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-accent tracking-tight uppercase mb-20"
        >
          Core Technologies
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div 
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              {/* FIX 2: Reduced sub-headings to 3xl/4xl. Refined the gold bar height (h-8). */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-4">
                <span className="w-1.5 h-8 md:h-10 bg-accent rounded-sm inline-block"></span>
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <motion.span 
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(255, 179, 0, 1)", 
                      color: "#000",
                      borderColor: "transparent"
                    }}
                    // FIX 3: Made buttons 'text-lg' and increased padding (py-3 px-5) to look substantial
                    className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-base md:text-lg font-medium text-gray-300 cursor-default transition-colors duration-300 backdrop-blur-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}