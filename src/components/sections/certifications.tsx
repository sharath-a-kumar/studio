"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award className="text-primary h-8 w-8" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Certifications
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center"
            >
               <div className="p-3 mb-4 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 text-white group-hover:scale-110 transition-transform duration-300">
                  <cert.icon size={24} />
               </div>
               
               <h3 className="font-bold text-white text-lg mb-2 leading-tight group-hover:text-primary transition-colors">
                   {cert.name}
               </h3>
               
               <p className="text-sm text-muted-foreground mt-auto">
                   {cert.issuer}
               </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
