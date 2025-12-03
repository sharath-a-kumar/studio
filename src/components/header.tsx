"use client"

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { navigation } from "@/lib/data";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-md supports-[backdrop-filter]:bg-black/10"
    >
      <div className="container flex h-16 items-center px-6 md:px-12">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-8 flex items-center space-x-2">
            <span className="font-heading text-xl font-bold tracking-tight text-foreground">
              Sharath<span className="text-primary">.dev</span>
            </span>
          </Link>
          <nav className="flex items-center space-x-8 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all">
              <a href="/Sharath_Kumar_A_Resume.pdf" download="Sharath_Kumar_A_Resume.pdf">Resume</a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] border-r border-white/10 bg-black/90 backdrop-blur-xl">
            <div className="flex flex-col h-full pt-6">
                <Link href="/" className="mb-8 flex items-center space-x-2 px-2">
                    <span className="font-heading text-2xl font-bold text-foreground">
                      Sharath<span className="text-primary">.dev</span>
                    </span>
                </Link>
                <nav className="flex flex-col space-y-6 text-lg font-medium px-2">
                    {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-muted-foreground transition-colors hover:text-primary"
                    >
                        {item.name}
                    </Link>
                    ))}
                </nav>
                <div className="mt-auto flex flex-col space-y-4 pb-6">
                    <Button asChild className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                        <a href="/Sharath_Kumar_A_Resume.pdf" download="Sharath_Kumar_A_Resume.pdf">Download Resume</a>
                    </Button>
                    <div className="flex justify-center">
                      <ThemeToggle />
                    </div>
                </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}