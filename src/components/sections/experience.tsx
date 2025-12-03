"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="container py-20 md:py-32">
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
        >
          Professional <span className="text-primary">Experience</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          My career journey and key contributions.
        </motion.p>
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-0 top-0 h-full w-px bg-white/10 md:left-1/2" />
        
        <div className="space-y-12">
          {experience.map((job, index) => (
            <motion.div 
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col gap-8 md:flex-row md:gap-0"
            >
              <div className={`flex w-full md:w-1/2 ${index % 2 === 0 ? 'md:justify-end md:pr-12' : 'md:order-2 md:justify-start md:pl-12'}`}>
                <div className={`relative ml-8 w-full rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] md:ml-0 md:w-full`}>
                  <div className="absolute -left-[41px] top-6 flex h-6 w-6 items-center justify-center rounded-full border border-primary bg-background md:left-auto md:right-[-37px] md:top-6 lg:right-[-37px]">
                    {index % 2 === 1 && <div className="h-2 w-2 rounded-full bg-primary" />}
                    {index % 2 === 0 && <div className="hidden h-2 w-2 rounded-full bg-primary md:block" />}
                  </div>
                  {/* Mobile dot adjustment */}
                  <div className="absolute -left-[41px] top-6 flex h-6 w-6 items-center justify-center rounded-full border border-primary bg-background md:hidden">
                     <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>

                   {/* Desktop dot adjustment for alternate sides */}
                   {index % 2 === 1 && (
                      <div className="absolute -left-[41px] top-6 hidden h-6 w-6 items-center justify-center rounded-full border border-primary bg-background md:flex md:left-[-37px]">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                   )}


                  <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                  <p className="mb-2 font-semibold text-primary">{job.company}</p>
                  <p className="mb-4 text-sm text-muted-foreground">{job.period}</p>
                  <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
