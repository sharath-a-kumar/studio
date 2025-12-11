"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <GraduationCap className="text-primary h-8 w-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Education
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">Academic background and qualifications.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
            >
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                          <edu.icon size={24} />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                  </div>
                  
                  <div className="text-right md:text-right">
                      <div className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-1">
                          {edu.period}
                      </div>
                      <div className="text-white font-medium">{edu.result}</div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
