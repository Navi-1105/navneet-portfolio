'use client';
import { useState } from 'react';
import { projects } from '@/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Cycle to the next project (Right Arrow)
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  // Cycle to the previous project (Left Arrow)
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Helper to determine the visual position of a project relative to the active index
  const getCardStyle = (index: number) => {
    if (index === activeIndex) return 'center';
    
    // Circular logic for Left (Previous) and Right (Next)
    const total = projects.length;
    const nextIndex = (activeIndex + 1) % total;
    const prevIndex = (activeIndex - 1 + total) % total;

    if (index === prevIndex) return 'left';
    if (index === nextIndex) return 'right';
    return 'hidden'; // For more than 3 items, hide the rest
  };

  const variants = {
    center: {
      x: "0%",
      scale: 1.1,
      zIndex: 10,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 300, damping: 30 }
    },
    left: {
      x: "-65%", // Move to the left
      scale: 0.8,
      zIndex: 5,
      opacity: 0.6,
      filter: "blur(2px)",
      transition: { type: "spring" as const, stiffness: 300, damping: 30 }
    },
    right: {
      x: "65%", // Move to the right
      scale: 0.8,
      zIndex: 5,
      opacity: 0.6,
      filter: "blur(2px)",
      transition: { type: "spring" as const, stiffness: 300, damping: 30 }
    },
    hidden: {
      x: "0%",
      scale: 0,
      opacity: 0,
      zIndex: 0,
    }
  };

  return (
    <section id="projects" className="py-32 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold text-accent tracking-tight uppercase mb-16 md:mb-20 text-center md:text-left"
        >
          Featured Projects
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative h-[650px] flex items-center justify-center">
          
          {/* LEFT ARROW */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 md:-left-12 z-30 p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-accent hover:text-black transition-all duration-300 backdrop-blur-md"
            aria-label="Previous Project"
          >
            <ChevronLeft size={32} />
          </button>

          {/* RIGHT ARROW */}
          <button 
            onClick={handleNext}
            className="absolute right-0 md:-right-12 z-30 p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-accent hover:text-black transition-all duration-300 backdrop-blur-md"
            aria-label="Next Project"
          >
            <ChevronRight size={32} />
          </button>

          {/* Cards Stack */}
          <div className="relative w-full max-w-lg h-full flex items-center justify-center">
            <AnimatePresence>
              {projects.map((project, index) => {
                const position = getCardStyle(index);
                // Only render visible cards to keep DOM clean
                if (position === 'hidden') return null;

                return (
                  <motion.div
                    key={project.slug}
                    initial={false}
                    animate={position}
                    variants={variants}
                    className="absolute w-full" 
                    style={{ transformOrigin: "center center" }}
                  >
                    <div className="bg-[#0a0a0a] dark:bg-[#0a0a0a] bg-white/80 backdrop-blur-xl border border-white/20 dark:border-white/20 rounded-3xl overflow-hidden shadow-2xl h-[550px] flex flex-col group hover:border-accent/50 transition-all duration-300">
                      
                      {/* Internal Link overlay */}
                      <Link 
                        href={`/projects/${project.slug}`}
                        className="absolute inset-0 z-20 focus:outline-none"
                        aria-label={`View details for ${project.title}`}
                      />

                      {/* MEDIA AREA: Video or Image */}
                      <div className="relative h-64 w-full overflow-hidden bg-black">
                        {/* Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-80" />
                        
                        {project.video ? (
                          <video
                            src={project.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <Image 
                            src={project.image} 
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-8 flex flex-col flex-grow relative z-10 -mt-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-3xl font-black text-white group-hover:text-accent transition-colors uppercase tracking-tight drop-shadow-md">
                            {project.title}
                          </h3>
                          <div className="p-3 bg-white/5 rounded-full group-hover:bg-accent group-hover:text-black transition-all duration-300 transform group-hover:-rotate-45">
                            <ArrowRight size={24} />
                          </div>
                        </div>

                        <div className="w-12 h-1 bg-accent/50 mb-6 rounded-full" />

                        <p className="text-gray-300 dark:text-gray-400 text-lg leading-relaxed mb-8 flex-grow line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span 
                              key={tech} 
                              className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/5 text-accent rounded-full border border-accent/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Ambient Glow Background Effect inside card */}
                      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-accent/20 transition-all duration-500" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

