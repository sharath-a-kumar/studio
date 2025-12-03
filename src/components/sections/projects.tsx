"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/data';
import { Star, ExternalLink } from 'lucide-react';

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
    <section id="projects" className="container py-20 md:py-32">
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          Key <span className="text-primary">Projects</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          A selection of my work. Click on a project to see similar recommendations.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {projectTypes.map(type => (
            <Button
              key={type}
              variant={filter === type ? 'default' : 'outline'}
              onClick={() => setFilter(type)}
              className={`rounded-full ${filter === type ? 'bg-primary text-primary-foreground' : 'bg-background/50 backdrop-blur-sm'}`}
            >
              {type}
            </Button>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                onClick={() => onProjectClick(project.title)}
                className={`group relative flex h-full flex-col overflow-hidden border-white/10 bg-black/20 backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] cursor-pointer ${highlightedProjects.includes(project.title) ? 'border-primary ring-1 ring-primary shadow-[0_0_20px_rgba(0,255,255,0.2)]' : ''}`}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={project.aiHint}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {highlightedProjects.includes(project.title) && (
                    <Badge variant="default" className="absolute right-2 top-2 flex items-center gap-1 bg-primary text-primary-foreground">
                      <Star className="h-3 w-3" /> Recommended
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <project.icon className="h-5 w-5 text-primary" />
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{project.type}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                  <p className="text-sm"><span className="font-semibold text-primary">Impact:</span> {project.impact}</p>
                </CardContent>
                
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-white/5 hover:bg-white/10">{tech}</Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoadingHighlights && <p className="col-span-full text-center text-muted-foreground">Finding recommendations...</p>}
      </div>
    </section>
  );
}
