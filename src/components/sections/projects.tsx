"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/data';
import { Star, ArrowUpRight } from 'lucide-react';

type Project = typeof projects[0];

interface ProjectsProps {
  onProjectClick: (projectName: string) => void;
  highlightedProjects: string[];
  isLoadingHighlights: boolean;
}

const projectTypes = ['All', ...Array.from(new Set(projects.map(p => p.type)))];

export function Projects({ onProjectClick, highlightedProjects, isLoadingHighlights }: ProjectsProps) {
  const [filter, setFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    const sortedProjects = [...projects].sort((a, b) => {
      const aIsHighlighted = highlightedProjects.includes(a.title);
      const bIsHighlighted = highlightedProjects.includes(b.title);
      if (aIsHighlighted && !bIsHighlighted) return -1;
      if (!aIsHighlighted && bIsHighlighted) return 1;
      return 0;
    });

    if (filter === 'All') {
      return sortedProjects;
    }
    return sortedProjects.filter(project => project.type === filter);
  }, [filter, highlightedProjects]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
               Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Projects</span>
             </h2>
             <p className="text-muted-foreground text-lg mb-8">
               A showcase of high-performance web applications and cloud solutions.
             </p>

            <div className="flex flex-wrap justify-center gap-3">
              {projectTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`
                    px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                    ${filter === type 
                      ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                      : 'bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:border-white/20'}
                  `}
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
               <ProjectCard 
                  key={project.title} 
                  project={project} 
                  index={index}
                  isHighlighted={highlightedProjects.includes(project.title)}
                  onClick={() => onProjectClick(project.title)}
               />
            ))}
          </AnimatePresence>
        </div>
        
        {isLoadingHighlights && (
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="mt-8 text-center text-primary animate-pulse"
            >
                AI is finding the best matches for you...
            </motion.div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isHighlighted, onClick }: { project: Project, index: number, isHighlighted: boolean, onClick: () => void }) {
    return (
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className={`group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.2)] ${isHighlighted ? 'ring-2 ring-primary shadow-[0_0_20px_rgba(0,240,255,0.2)]' : ''}`}
          onClick={onClick}
        >
            {/* Image Overlay */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80" />
                
                <div className="absolute top-4 right-4 z-20">
                     <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <ArrowUpRight size={20} />
                     </div>
                </div>

                {isHighlighted && (
                     <Badge className="absolute top-4 left-4 bg-primary text-black font-bold z-20 flex gap-1 items-center">
                        <Star size={12} fill="currentColor" /> Recommended
                     </Badge>
                )}
            </div>

            {/* Content */}
            <div className="p-6 relative z-10 -mt-10">
                <div className="bg-background/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                         <div className="p-2 rounded-lg bg-primary/10 text-primary">
                             <project.icon size={18} />
                         </div>
                         <h3 className="font-bold text-lg text-white leading-tight">{project.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                         {project.technologies.slice(0, 3).map(tech => (
                             <span key={tech} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-white/80 border border-white/10">
                                 {tech}
                             </span>
                         ))}
                         {project.technologies.length > 3 && (
                             <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/10">
                                 +{project.technologies.length - 3}
                             </span>
                         )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
