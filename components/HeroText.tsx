'use client';
import { motion, Variants } from 'framer-motion';

export default function HeroText({ firstName, lastName }: { firstName: string; lastName: string }) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring" as const, damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", flexDirection: "column" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-[10vw] leading-[0.9] font-black tracking-tighter uppercase mb-8"
    >
      {/* First Name (Theme Color) */}
      <div className="flex text-[var(--fg)] transition-colors duration-500">
        {Array.from(firstName).map((letter, i) => (
          <motion.span variants={child} key={i}>
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Last Name (Accent Color) */}
      <div className="flex text-accent">
        {Array.from(lastName).map((letter, i) => (
          <motion.span variants={child} key={i}>
            {letter}
          </motion.span>
        ))}
        <motion.span variants={child} className="text-accent">.</motion.span>
      </div>
    </motion.div>
  );
}

