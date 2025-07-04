"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/lib/data';
import { Star } from 'lucide-react';

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
    <section id="projects" className="container py-20 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Key Projects
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">A selection of my work. Click on a project to see similar recommendations.</p>
        
        <div className="flex justify-center space-x-2 mt-6">
          {projectTypes.map(type => (
            <Button
              key={type}
              variant={filter === type ? 'default' : 'outline'}
              onClick={() => setFilter(type)}
            >
              {type}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card 
            key={project.title}
            onClick={() => onProjectClick(project.title)}
            className={`flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${highlightedProjects.includes(project.title) ? 'border-primary border-2 shadow-lg' : ''}`}
          >
            <CardHeader>
              <div className="relative mb-4 h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                  data-ai-hint={project.aiHint}
                />
                {highlightedProjects.includes(project.title) && (
                  <Badge variant="default" className="absolute top-2 right-2 flex items-center gap-1">
                    <Star className="h-4 w-4" /> Recommended
                  </Badge>
                )}
              </div>
              <CardTitle className="flex items-center gap-2">
                <project.icon className="h-6 w-6 text-primary" />
                {project.title}
              </CardTitle>
              <CardDescription>{project.type}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <p><span className="font-semibold">Impact:</span> {project.impact}</p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
        {isLoadingHighlights && <p className="text-center col-span-full">Finding recommendations...</p>}
      </div>
    </section>
  );
}
