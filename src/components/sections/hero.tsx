"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 py-24 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg font-medium text-primary md:text-xl"
            >
              Hello, I&apos;m
            </motion.p>
            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
              Sharath Kumar A
            </h1>
            <h2 className="text-3xl font-bold text-muted-foreground md:text-5xl lg:text-6xl">
              Full Stack Developer.
            </h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            I build exceptional digital experiences. Currently, I&apos;m focused on
            building accessible, human-centered products at{" "}
            <span className="text-primary">Bizzhub Workspaces</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            >
              Check out my work
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/Sharath_Kumar_A_Resume.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-input bg-background/50 px-8 py-3 text-lg font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Resume
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-6 pt-8"
          >
            <SocialLink href="https://github.com/sharath-a-kumar" icon={<Github className="h-6 w-6" />} />
            <SocialLink href="https://linkedin.com/in/sharath-a-kumar" icon={<Linkedin className="h-6 w-6" />} />
            <SocialLink href="mailto:sharathkumar.a@example.com" icon={<Mail className="h-6 w-6" />} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-muted-foreground transition-colors hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]"
    >
      {icon}
    </a>
  );
}
