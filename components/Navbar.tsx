// components/Navbar.tsx
'use client';
import { motion } from 'framer-motion';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 py-6 px-10 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/10">
      <motion.span 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="text-2xl font-black tracking-tighter uppercase text-white"
      >
        NAVNEET
      </motion.span>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10">
        {links.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-[#ffb300] transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Mobile Menu Button (Simple Placeholder) */}
      <a 
        href="mailto:somalnavneetkaur@gmail.com" 
        className="md:hidden text-[#ffb300] font-bold uppercase text-sm"
      >
        Email Me
      </a>
    </nav>
  );
}