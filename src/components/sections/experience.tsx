"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row gap-8 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Node */}
      <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,240,255,0.5)]">
         <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block flex-1" />

      {/* Content Card */}
      <div className="flex-1 ml-12 md:ml-0">
        <div className={`
             group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm
             hover:bg-white/10 hover:border-primary/30 transition-all duration-300
             hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.15)]
             perspective-1000
        `}>
          <div className="flex flex-col gap-2 mb-4">
             <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {item.role}
             </h3>
             <div className="text-primary font-medium text-sm tracking-wide">
                {item.company}
             </div>
             <span className="text-xs text-muted-foreground bg-white/5 py-1 px-3 rounded-full border border-white/5 w-fit">
                {item.period}
             </span>
          </div>
          
          <ul className="space-y-2 text-muted-foreground/80 text-sm leading-relaxed">
             {item.description.map((desc: string, i: number) => (
               <li key={i} className="flex gap-2">
                 <span className="text-primary mt-1.5 min-w-[6px] h-1.5 rounded-full bg-primary/50 block" />
                 <span>{desc}</span>
               </li>
             ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
