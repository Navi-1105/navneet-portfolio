'use client';
import { useState } from 'react';
import SkillGroup from './SkillGroup';
import { 
  FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker 
} from "react-icons/fa";
import { 
  SiCplusplus, SiTypescript, SiSpringboot, SiExpress, SiFlask, SiMysql, SiMongodb,
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiPytorch, SiOpencv, 
  SiTableau, SiStreamlit, SiPostman
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { TbBrain, TbFileText } from "react-icons/tb"; 

export default function Skills() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const hasActiveCard = activeCardId !== null;

  return (
    <section id="skills" className="py-32 relative overflow-hidden px-8">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-accent uppercase mb-6 tracking-tight">Tech Stack</h2>
          <p className="text-gray-400">Click any card to flip and reveal proficiency levels.</p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD 1: LANGUAGES */}
          <SkillGroup 
            id="languages"
            title="Languages" 
            className="md:col-span-1"
            isActive={activeCardId === "languages"}
            hasActiveCard={hasActiveCard}
            onToggle={() => setActiveCardId(activeCardId === "languages" ? null : "languages")}
            skills={[
              { name: 'Java', icon: FaJava, color: '#e76f00', level: 3 },
              { name: 'Python', icon: FaPython, color: '#3776ab', level: 3 },
              { name: 'C++', icon: SiCplusplus, color: '#00599c', level: 2 },
              { name: 'JavaScript', icon: FaJs, color: '#f7df1e', level: 3 },
              { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', level: 2 },
            ]}
          />

          {/* CARD 2: BACKEND */}
          <SkillGroup 
            id="backend"
            title="Backend & Full Stack" 
            className="md:col-span-1"
            isActive={activeCardId === "backend"}
            hasActiveCard={hasActiveCard}
            onToggle={() => setActiveCardId(activeCardId === "backend" ? null : "backend")}
            skills={[
              { name: 'React', icon: FaReact, color: '#61dafb', level: 3 },
              { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 3 },
              { name: 'Spring', icon: SiSpringboot, color: '#6db33f', level: 2 },
              { name: 'Express', icon: SiExpress, color: '#ffffff', level: 2 },
              { name: 'Flask', icon: SiFlask, color: '#ffffff', level: 2 },
              { name: 'MySQL', icon: SiMysql, color: '#4479a1', level: 3 },
              { name: 'MongoDB', icon: SiMongodb, color: '#47a248', level: 2 },
              { name: 'Git', icon: FaGitAlt, color: '#f05032', level: 3 },
            ]}
          />

          {/* CARD 3: AI & ML */}
          <SkillGroup 
            id="ai-ml"
            title="AI & Machine Learning" 
            className="md:col-span-2"
            isActive={activeCardId === "ai-ml"}
            hasActiveCard={hasActiveCard}
            onToggle={() => setActiveCardId(activeCardId === "ai-ml" ? null : "ai-ml")}
            skills={[
              { name: 'Pandas', icon: SiPandas, color: '#150458', level: 3 },
              { name: 'NumPy', icon: SiNumpy, color: '#013243', level: 3 },
              { name: 'SciKit', icon: SiScikitlearn, color: '#f7931e', level: 2 },
              { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00', level: 2 },
              { name: 'PyTorch', icon: SiPytorch, color: '#ee4c2c', level: 2 },
              { name: 'NLP', icon: TbFileText, color: '#ff6b6b', level: 2 },
              { name: 'GenAI', icon: TbBrain, color: '#a855f7', level: 2 },
              { name: 'OpenCV', icon: SiOpencv, color: '#5c3ee8', level: 2 },
              { name: 'Streamlit', icon: SiStreamlit, color: '#ff4b4b', level: 3 },
            ]}
          />

          {/* CARD 4: TOOLS */}
          <SkillGroup 
            id="tools"
            title="Tools & Cloud" 
            className="md:col-span-1"
            isActive={activeCardId === "tools"}
            hasActiveCard={hasActiveCard}
            onToggle={() => setActiveCardId(activeCardId === "tools" ? null : "tools")}
            skills={[
              { name: 'Azure', icon: FaMicrosoft, color: '#0078d4', level: 2 },
              { name: 'Tableau', icon: SiTableau, color: '#e97627', level: 2 },
              { name: 'Docker', icon: FaDocker, color: '#2496ed', level: 2 },
              { name: 'Postman', icon: SiPostman, color: '#ff6c37', level: 3 },
            ]}
          />

        </div>
      </div>
    </section>
  );
}

