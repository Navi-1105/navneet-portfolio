import { projects } from '@/data/content';
import { ArrowLeft, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// 1. Generate Static Params for SSG (Static Site Generation)
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 2. The Page Component
export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-8 max-w-5xl mx-auto relative z-10 text-[var(--fg)] transition-colors duration-500">
      
      {/* Back Button */}
      <Link 
        href="/#projects" 
        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-accent transition-all mb-12"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      {/* Header Section */}
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-8 text-[var(--fg)]">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {project.tech.map((t) => (
            <span 
              key={t} 
              className="px-4 py-2 text-sm font-bold text-accent border border-accent/20 rounded-full bg-accent/5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* --- MEDIA SHOWCASE (Video or Image) --- */}
        <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-[var(--card-border)] bg-black/50 mb-16 group">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-auto object-cover"
            />
          ) : project.image ? (
            <div className="relative w-full aspect-video">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
        {/* ------------------------------------------- */}

        <p className="text-xl md:text-2xl leading-relaxed opacity-90 max-w-3xl border-l-4 border-accent pl-6">
          {project.longDescription}
        </p>
      </header>

      {/* Details Grid */}
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        {project.challenge && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-4">The Challenge</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              {project.challenge}
            </p>
          </div>
        )}
        
        {project.solution && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest opacity-50 mb-4">The Solution</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              {project.solution}
            </p>
          </div>
        )}
      </div>

      {/* Key Features */}
      {project.features && (
        <section className="mb-20 p-8 md:p-12 bg-[var(--card-bg)] rounded-3xl border border-[var(--card-border)] backdrop-blur-md">
          <h2 className="text-2xl font-bold mb-8 text-[var(--fg)]">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 opacity-80">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* External Links */}
      <div className="flex gap-6">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-[var(--fg)] text-[var(--bg)] font-bold rounded-full hover:bg-accent hover:text-white transition-colors"
          >
            <Github size={20} /> View Source
          </a>
        )}
      </div>

    </main>
  );
}

