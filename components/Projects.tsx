'use client';
import { projects } from '@/data/content';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        {/* HEADING: Matching the 'Core Technologies' size for consistency */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-accent tracking-tight uppercase mb-16 md:mb-20"
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
            >
              {/* Project Title & Arrow */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-accent group-hover:text-black transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-sm font-medium bg-black/20 text-gray-300 rounded-lg border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Make the whole card clickable if you have a link */}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute inset-0 z-10"
                  aria-label={`View project: ${project.title}`}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}