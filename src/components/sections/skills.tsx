"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary inline-block">
             Technical Arsenal
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
               {/* Category Header */}
               <div className="mb-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider">{category}</h3>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
               </div>

               {/* Skills Grid */}
               <div className="flex flex-wrap justify-center gap-4">
                  {skillList.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="group relative bg-white/5 border border-white/10 px-5 py-3 rounded-xl backdrop-blur-sm flex items-center gap-3 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                    >
                         <div className="p-1.5 rounded-lg bg-black/50 group-hover:bg-primary/20 transition-colors">
                            <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                         </div>
                         <span className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">{skill.name}</span>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10" />
                    </motion.div>
                  ))}
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
