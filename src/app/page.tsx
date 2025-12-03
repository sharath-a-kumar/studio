"use client";

import { useState, useEffect, useCallback } from "react";
import { getHighlightedProjects } from "@/ai/flows/project-highlighter";
import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { ProfessionalSummary } from "@/components/sections/summary";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { projects } from "@/lib/data";

export default function Home() {
  const [viewingHistory, setViewingHistory] = useState<string[]>([]);
  const [highlightedProjects, setHighlightedProjects] = useState<string[]>([]);
  const [isLoadingHighlights, setIsLoadingHighlights] = useState(false);

  const availableProjects = projects.map((p) => p.title);

  const updateHighlightedProjects = useCallback(async (history: string[]) => {
    if (history.length === 0) {
      setHighlightedProjects([]);
      return;
    }
    setIsLoadingHighlights(true);
    try {
      const result = await getHighlightedProjects({
        viewingHistory: history,
        availableProjects: availableProjects,
      });
      setHighlightedProjects(result.highlightedProjects);
    } catch (error) {
      console.error("Error highlighting projects:", error);
      setHighlightedProjects([]); // Clear highlights on error
    } finally {
      setIsLoadingHighlights(false);
    }
  }, [availableProjects]);

  useEffect(() => {
    const timer = setTimeout(() => {
        if (viewingHistory.length > 0) {
            updateHighlightedProjects(viewingHistory);
        }
    }, 500); // Debounce AI call

    return () => clearTimeout(timer);
  }, [viewingHistory, updateHighlightedProjects]);

  const handleProjectClick = (projectName: string) => {
    setViewingHistory((prev) => {
      const newHistory = [...prev, projectName];
      // Keep history to a reasonable size to not overwhelm the model
      if (newHistory.length > 5) {
        return newHistory.slice(newHistory.length - 5);
      }
      return newHistory;
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProfessionalSummary />
        <Skills />
        <Experience />
        <Projects 
          onProjectClick={handleProjectClick}
          highlightedProjects={highlightedProjects}
          isLoadingHighlights={isLoadingHighlights}
        />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
