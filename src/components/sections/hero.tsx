import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

export function Hero() {
  return (
    <section id="hero" className="container py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4">
            Sharath Kumar
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Full Stack Developer
          </h2>
          <div className="flex items-center text-lg text-muted-foreground mb-8">
            <MapPin className="mr-2 h-5 w-5" />
            Bengaluru, India
          </div>
          <div className="flex space-x-4 mb-8">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" asChild>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
          <Button size="lg" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/profile.jpg" // Changed from "/images/profile.jpg"
              alt="Sharath Kumar A"
              width={400}
              height={400}
              priority
              className="rounded-full object-cover border-4 border-primary shadow-lg"
            />

            <div className="absolute inset-0 rounded-full border-4 border-accent -rotate-6 transition-transform duration-500 hover:rotate-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
