"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Terminal, Database, Code2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 z-10"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20 backdrop-blur-md"
              >
                <span className="text-sm font-semibold text-primary"> Available for hire</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]">
                Hello, I&apos;m <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-secondary animate-gradient-x bg-[length:200%_auto]">
                  Sharath
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                Full Stack Developer & <span className="text-white font-medium">UI/UX Enthusiast</span>
              </h2>
            </div>
            
            <p className="max-w-xl text-lg text-muted-foreground/80 leading-relaxed">
              Architecting scalable digital solutions with a focus on exceptional user experience.
              Specializing in the <span className="text-primary font-medium">MERN Stack</span> and <span className="text-secondary font-medium"></span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full h-12 px-8 text-base shadow-[0_0_20px_-5px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_-5px_rgba(0,240,255,0.6)] transition-all duration-300">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-8 text-base border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual/3D Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full max-w-md mx-auto aspect-square">
                {/* Abstract Code Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                <div className="glass-card absolute inset-2 rounded-2xl p-6 flex flex-col justify-between border-t border-l border-white/10 shadow-2xl">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    
                    <div className="space-y-4 font-mono text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Code2 className="text-primary h-4 w-4" />
                            <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = <span className="text-blue-300">{`{`}</span>
                        </div>
                        <div className="pl-6 space-y-2">
                             <p><span className="text-slate-400">name:</span> <span className="text-green-300">"Sharath Kumar A"</span>,</p>
                             <p><span className="text-slate-400">role:</span> <span className="text-green-300">"Full Stack Engineer"</span>,</p>
                             <p><span className="text-slate-400">skills:</span> [ <span className="text-orange-300">"React"</span>, <span className="text-orange-300">"Node"</span>, <span className="text-orange-300">"AWS"</span> ],</p>
                             <p><span className="text-slate-400">hardWorker:</span> <span className="text-red-400">true</span></p>
                        </div>
                        <div className="text-blue-300">{`}`}</div>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400"><Database size={18} /></div>
                            <div>
                                <div className="text-xs text-muted-foreground">Projects</div>
                                <div className="font-bold text-white">10+</div>
                            </div>
                        </div>
                         <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400"><Terminal size={18} /></div>
                            <div>
                                <div className="text-xs text-muted-foreground">Experience</div>
                                <div className="font-bold text-white">2+ Years</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-10 -right-10 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
                >
                    <Terminal className="text-primary h-8 w-8" />
                </motion.div>
                
                 <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-5 -left-5 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
                >
                    <Database className="text-secondary h-8 w-8" />
                </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
