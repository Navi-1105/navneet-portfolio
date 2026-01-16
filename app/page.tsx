"use client";

import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import HeroText from '@/components/HeroText';
import { personalInfo } from '@/data/content';
import { Github, Linkedin, MapPin, Download, GraduationCap } from 'lucide-react';
import Image from 'next/image';

function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-5xl md:text-6xl font-extrabold text-accent tracking-tight uppercase mb-16">
      {title}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-transparent z-10 transition-colors duration-500">
      <Navbar />

      {/* 1. HERO SECTION - Split Layout */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 max-w-7xl mx-auto pt-20 gap-10 md:gap-20"
      >
        
        {/* LEFT COLUMN: TEXT & BUTTONS */}
        <div className="flex-1 w-full z-10">
          {/* Animated Name */}
          <HeroText 
            firstName={personalInfo.name.split(' ')[0]} 
            lastName={personalInfo.name.split(' ')[1]} 
          />
          
          {/* Role Description */}
          <p className="text-3xl md:text-4xl max-w-2xl font-medium tracking-tight leading-snug text-[var(--fg)] transition-colors duration-500 mb-10">
            {personalInfo.role}. <br />
            <span className="text-[var(--text-secondary)]">
              Turning complex data into strategic insights.
            </span>
          </p>

          {/* Buttons Row */}
          <div className="flex gap-6 mb-12">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              className="p-4 rounded-full transition-all bg-[var(--fg)] text-[var(--bg)] hover:bg-accent hover:text-white shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              className="p-4 rounded-full transition-all bg-[var(--fg)] text-[var(--bg)] hover:bg-accent hover:text-white shadow-lg"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all bg-[var(--fg)] text-[var(--bg)] hover:bg-accent hover:text-white shadow-lg"
            >
              <Download size={20} /> Resume
            </a>
          </div>

          {/* Location & Education (Always Glowing) */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 pt-8 border-t border-[var(--card-border)]">
            <div className="flex items-center gap-4">
               <div className="p-3 rounded-xl bg-accent text-white shadow-[0_0_15px_rgba(34,211,238,0.5)] border border-white/20">
                 <MapPin size={28} />
               </div>
               <div>
                  <span className="block text-xs font-bold tracking-widest text-[var(--text-secondary)] uppercase mb-1">Location</span>
                  <span className="text-lg font-bold text-[var(--fg)]">{personalInfo.location}</span>
               </div>
            </div>

            <div className="flex items-center gap-4">
               <div className="p-3 rounded-xl bg-accent text-white shadow-[0_0_15px_rgba(34,211,238,0.5)] border border-white/20">
                 <GraduationCap size={28} />
               </div>
               <div>
                  <span className="block text-xs font-bold tracking-widest text-[var(--text-secondary)] uppercase mb-1">Education</span>
                  <span className="text-lg font-bold text-[var(--fg)]">B.Tech CSE • 8.90 SGPA</span>
               </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PROFILE PICTURE */}
        <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] shrink-0 order-first md:order-last mb-10 md:mb-0">
          {/* Glowing Backdrop */}
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-[60px] md:blur-[100px] -z-10 animate-pulse" />
          
          <div className="relative w-full h-full rounded-full border-4 border-white/10 shadow-2xl overflow-hidden group">
            <Image
              src="/projects/profilepic.jpeg"
              alt="Navneet Kaur"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            
            {/* Glass overlay on hover */}
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
          </div>
        </div>

      </section>

      {/* 2. ABOUT ME SECTION */}
      <section id="about" className="py-32 px-8 border-t border-[var(--card-border)]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="About Me" />
          
          <p className="text-3xl md:text-5xl font-medium leading-tight text-[var(--fg)] mb-12 transition-colors duration-500">
            "{personalInfo.bio}"
          </p>
        </div>
      </section>

      {/* 3. CORE TECHNOLOGIES SECTION */}
      <Skills />

      {/* 4. PROJECTS SECTION */}
      <Projects />

      {/* 5. EXPERIENCE SECTION */}
      <div className="border-t border-[var(--card-border)]">
        <Experience />
      </div>

      {/* 6. CONTACT SECTION */}
      <footer
        id="contact"
        className="py-40 px-8 border-t border-[var(--card-border)] text-center bg-[var(--card-bg)]"
      >
        <h2 className="text-6xl md:text-8xl font-black uppercase mb-16 tracking-tighter text-[var(--fg)]">
          Let's <span className="text-accent">Talk</span>.
        </h2>

        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-block px-12 py-6 bg-accent text-white font-black text-2xl rounded-full hover:scale-105 transition-transform shadow-xl shadow-accent/20"
        >
          Send an Email
        </a>

        <div className="flex justify-center gap-12 mt-20 text-base font-bold text-[var(--fg)] opacity-70 uppercase tracking-widest">
          <a href={personalInfo.linkedin} className="hover:text-accent transition-colors">LinkedIn</a>
          <a href={personalInfo.github} className="hover:text-accent transition-colors">GitHub</a>
          <a href="tel:+918284000103" className="hover:text-accent transition-colors">+91 82840 00103</a>
        </div>

        <p className="mt-16 text-sm text-[var(--text-secondary)]">
          © 2025 Navneet Kaur. Built with Next.js & Tailwind.
        </p>
      </footer>
    </main>
  );
}
