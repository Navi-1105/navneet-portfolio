'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

// --- OPTIMIZED BARS (Reduced DOM depth) ---
const ProficiencyBars = ({ level, color }: { level: 1 | 2 | 3; color: string }) => {
  return (
    <div className="flex items-end gap-1 h-5">
      {[1, 2, 3].map((bar) => (
        <div 
          key={bar}
          className="w-1.5 rounded-sm transition-colors duration-300"
          style={{ 
            height: bar === 1 ? '40%' : bar === 2 ? '70%' : '100%', 
            backgroundColor: level >= bar ? color : 'rgba(255,255,255,0.1)',
            boxShadow: level >= bar ? `0 0 6px ${color}` : 'none'
          }}
        />
      ))}
    </div>
  );
};

interface Skill {
  name: string;
  icon: any;
  color: string;
  level: 1 | 2 | 3;
}

interface SkillGroupProps {
  id: string;
  title: string;
  skills: Skill[];
  className?: string;
  isActive: boolean;
  hasActiveCard: boolean;
  onToggle: () => void;
}

export default function SkillGroup({ id, title, skills, className, isActive, hasActiveCard, onToggle }: SkillGroupProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (!isFlipped) {
      // First click: zoom out and flip
      setIsFlipped(true);
      onToggle();
    } else {
      // Second click: flip back and zoom in
      setIsFlipped(false);
      onToggle();
    }
  };

  // Blur other cards when this one is not active and another card is active
  const shouldBlur = hasActiveCard && !isActive;

  return (
    <motion.div 
      className={`${isActive ? 'fixed' : 'relative'} min-h-[350px] cursor-pointer group perspective-1000 transition-all duration-500 ${
        isActive ? 'z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'z-10'
      } ${className}`}
      onClick={handleClick}
      animate={{
        filter: shouldBlur ? 'blur(4px)' : 'blur(0px)',
        opacity: shouldBlur ? 0.8 : 1,
      }}
      transition={{
        filter: { duration: 0.5 },
        opacity: { duration: 0.5 },
        position: { duration: 0.6, ease: "easeInOut" },
        top: { duration: 0.6, ease: "easeInOut" },
        left: { duration: 0.6, ease: "easeInOut" },
        x: { duration: 0.6, ease: "easeInOut" },
        y: { duration: 0.6, ease: "easeInOut" },
      }}
      style={{
        width: isActive ? '600px' : '100%',
        maxWidth: isActive ? '90vw' : '100%',
        height: isActive ? '600px' : 'auto',
        minHeight: isActive ? '600px' : '350px',
      }}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotateY: isFlipped ? 180 : 0,
          scale: isActive ? 1.2 : 1,
        }}
        transition={{ 
          duration: 0.6, 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          scale: { duration: 0.5, ease: "easeInOut" }
        }}
        className="w-full h-full relative preserve-3d"
        style={{ transformStyle: 'preserve-3d', height: '100%' }}
      >
        
        {/* --- FRONT SIDE --- */}
        <div className="absolute inset-0 [backface-visibility:hidden] p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md flex flex-col hover:border-accent/40 transition-colors z-10">
          
          <div className="mb-6 pointer-events-none"> {/* Added pointer-events-none to text so clicks go to card */}
            <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{title}</h3>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
               <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Tap to flip</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 pointer-events-none">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-black/20 flex items-center justify-center border border-white/5">
                   <skill.icon className="text-2xl" style={{ color: skill.color }} />
                </div>
                <span className="text-[10px] text-gray-400 font-bold text-center w-full truncate px-1">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- BACK SIDE (Proficiency List) --- */}
        <div 
          className="absolute inset-0 [backface-visibility:hidden] p-6 bg-[#0a0a0a] border border-accent/40 rounded-3xl flex flex-col shadow-2xl overflow-hidden"
          style={{ transform: "rotateY(180deg)", height: '100%' }}
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4 shrink-0">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <span className="text-[10px] font-black bg-accent text-black px-2 py-1 rounded">LEVELS</span>
          </div>
          
          {/* Scrollable list - flex-1 min-h-0 forces it to fill remaining space */}
          <div className="flex-1 min-h-0 overflow-y-auto pr-2 space-y-2 custom-scrollbar" style={{ height: '100%' }}>
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors shrink-0">
                
                {/* Left: Icon + Name */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <skill.icon className="text-xl shrink-0" style={{ color: skill.color }} />
                  <span className="text-sm font-bold text-gray-200 truncate">{skill.name}</span>
                </div>

                {/* Right: Bars */}
                <div className="flex items-center gap-3 shrink-0">
                   <ProficiencyBars level={skill.level} color={skill.color} />
                </div>

              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}

