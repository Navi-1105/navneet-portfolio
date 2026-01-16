// components/Navbar.tsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  // Toggle Theme Function
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    const root = document.documentElement;
    if (newTheme) {
      root.classList.remove('light');
    } else {
      root.classList.add('light');
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 py-6 px-10 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/10 transition-colors duration-500">
      <motion.span 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="text-2xl font-black tracking-tighter uppercase text-accent"
      >
        NAVNEET
      </motion.span>
      
      <div className="flex items-center gap-10">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10">
          {links.map((link) => (
            <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-accent transition-all duration-300"
                >
                  {link.name}
                </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/10 hover:bg-accent text-white transition-all"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}
