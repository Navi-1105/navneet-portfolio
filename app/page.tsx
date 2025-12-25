// app/page.tsx
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import { personalInfo } from '@/data/content';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative bg-[#050505] text-[#f2f2f2]">
      
      <Navbar />

      {/* 1. HOME SECTION */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-8 max-w-7xl mx-auto pt-20">
        <h1 className="text-[10vw] leading-[0.9] font-black tracking-tighter uppercase mb-8">
          {personalInfo.name.split(' ')[0]} <br />
          <span className="text-accent italic">{personalInfo.name.split(' ')[1]}</span>.
        </h1>
        <p className="text-3xl md:text-4xl text-gray-300 max-w-3xl font-medium tracking-tight leading-snug">
          {personalInfo.role}. <br />
          <span className="text-gray-500">Turning complex data into strategic insights.</span>
        </p>
        
        <div className="flex gap-6 mt-12">
          <a href={personalInfo.linkedin} target="_blank" className="p-4 bg-white/10 rounded-full hover:bg-accent hover:text-black transition-all">
            <Linkedin size={28} />
          </a>
          <a href={personalInfo.github} target="_blank" className="p-4 bg-white/10 rounded-full hover:bg-accent hover:text-black transition-all">
            <Github size={28} />
          </a>
          <a href="/resume.pdf" target="_blank" className="px-8 py-4 bg-white/10 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-all">
            <Download size={20} /> Resume
          </a>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION */}
      <section id="about" className="py-32 px-8 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-12 font-bold">About Me</h2>
          <p className="text-3xl md:text-5xl font-medium leading-tight text-white mb-12">
            "{personalInfo.bio}"
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-xl text-gray-400">
            <div className="flex items-center gap-3">
              <MapPin className="text-accent" /> {personalInfo.location}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent text-2xl">🎓</span> B.Tech CSE (AI & ML) • 8.90 SGPA
            </div>
          </div>
          <div className="mt-16">
             <Skills />
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <div id="projects">
        <Projects />
      </div>

      {/* 4. EXPERIENCE SECTION */}
      <div id="experience">
        <Experience />
      </div>

      {/* 5. CONTACT SECTION */}
      <footer id="contact" className="py-40 px-8 border-t border-white/10 text-center bg-white/[0.02]">
        <h2 className="text-6xl md:text-8xl font-black uppercase mb-16 tracking-tighter">
          Let's <span className="text-accent">Talk</span>.
        </h2>
        
        <a 
          href={`mailto:${personalInfo.email}`} 
          className="inline-block px-12 py-6 bg-accent text-black font-black text-2xl rounded-full hover:scale-105 transition-transform"
        >
          Send an Email
        </a>
        
        <div className="flex justify-center gap-12 mt-20 text-base font-bold text-gray-500 uppercase tracking-widest">
          <a href={personalInfo.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
          <a href={personalInfo.github} className="hover:text-white transition-colors">GitHub</a>
          <a href="tel:+918284000103" className="hover:text-white transition-colors">+91 82840 00103</a>
        </div>
        
        <p className="mt-16 text-sm text-gray-700">© 2025 Navneet Kaur. Built with Next.js & Tailwind.</p>
      </footer>

    </main>
  );
}