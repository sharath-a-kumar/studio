"use client";

import { motion } from "framer-motion";

export function ProfessionalSummary() {
  return (
    <section id="summary" className="container py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-md md:p-12"
      >
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Professional <span className="text-primary">Summary</span>
        </h2>

        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          Results-driven Full-Stack Developer with 2+ years of experience building high-performance 
          web applications and scalable backend systems. Specialized in the 
          <span className="text-foreground font-semibold"> MERN stack and AWS cloud infrastructure</span>, 
          delivering solutions that drive measurable business impact. Expertise in architecting 
          microservices that reduced system latency by 30% and implementing automated CI/CD pipelines 
          that accelerated deployment cycles by 50%.
        </p>
      </motion.div>
    </section>
  );
}
