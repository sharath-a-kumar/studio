"use client"

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { navigation } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Sharath Kumar A</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* You can add a command menu here if you want */}
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Button asChild>
              <a href="/resume.pdf" download="Sharath_Kumar_A_Resume.pdf">Download Resume</a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col h-full">
                <Link href="/" className="mb-6 flex items-center space-x-2">
                    <span className="font-bold">Sharath Kumar A</span>
                </Link>
                <nav className="flex flex-col space-y-4 text-lg font-medium">
                    {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        {item.name}
                    </Link>
                    ))}
                </nav>
                <div className="mt-auto flex flex-col space-y-4">
                    <Button asChild>
                        <a href="/resume.pdf" download="Sharath_Kumar_A_Resume.pdf">Download Resume</a>
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
