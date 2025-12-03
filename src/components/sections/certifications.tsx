"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="container py-20 md:py-32">
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          <span className="text-primary">Certifications</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          Continuous learning and professional development.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full border-white/10 bg-black/20 backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)]">
              <CardHeader className="flex flex-col items-center gap-4 text-center">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <cert.icon className="h-6 w-6" />
                 </div>
                 <div>
                  <CardTitle className="text-lg font-bold">{cert.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{cert.issuer}</CardDescription>
                 </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
