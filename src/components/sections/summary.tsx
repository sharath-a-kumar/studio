"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function ProfessionalSummary() {
  return (
    <section id="summary" className="py-24 relative">
       <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl rounded-[2.5rem] p-1 bg-gradient-to-r from-primary/30 via-purple-500/30 to-secondary/30"
        >
            <div className="bg-black/80 backdrop-blur-2xl rounded-[2.3rem] p-8 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                
                <Quote className="absolute top-8 left-8 text-primary/20 w-16 h-16 -z-10" />

                <div className="text-center space-y-8 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground font-light max-w-4xl mx-auto">
                        Results-driven <span className="text-white font-medium">Full-Stack Developer</span> with 2+ years of experience building high-performance 
                        web applications. Specialized in the <span className="text-primary font-medium">MERN stack</span> <span className="text-secondary font-medium"></span>. 
                    </p>
                    
                    <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground font-light max-w-4xl mx-auto">
                        I focus on <span className="text-white font-medium">shipping code</span> that matters — reducing latency, improving UX, and scaling infrastructures.
                        Currently streamlining workflows at <span className="text-primary font-medium">Bizzhub</span>.
                    </p>
                </div>
            </div>
        </motion.div>
       </div>
    </section>
  );
}
