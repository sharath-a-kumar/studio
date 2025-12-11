"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { socialLinks } from "@/lib/data";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(1, { message: "Message must be at least 1 character." }),
});

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xdkzqdqv", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({ title: "Message Sent!", description: "I'll get back to you soon." });
        form.reset();
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
           {/* Info Side */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-12"
           >
              <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Let's <span className="text-primary">Connect</span>
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                     I'm currently exploring new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
              </div>

              <div className="space-y-8">
                  <ContactItem icon={Mail} text="SharathKumar3113@gmail.com" href="mailto:SharathKumar3113@gmail.com" />
                  <ContactItem icon={Phone} text="+91 7411516558" href="tel:+917411516558" />
                  <ContactItem icon={MapPin} text="Bengaluru, India" />
              </div>

              <div className="flex gap-4">
                  {socialLinks.map(({ name, url, icon: Icon }) => (
                      <a 
                          key={name}
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-white/10 hover:text-white hover:border-primary/50 transition-all duration-300"
                       >
                          <Icon size={20} />
                      </a>
                  ))}
              </div>
           </motion.div>

           {/* Form Side */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-xl"
           >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-black/30 border-white/10 focus:border-primary/50 text-white h-12 rounded-xl" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" className="bg-black/30 border-white/10 focus:border-primary/50 text-white h-12 rounded-xl" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="bg-black/30 border-white/10 focus:border-primary/50 text-white min-h-[150px] rounded-xl resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300"
                  >
                    {isSubmitting ? (
                        <span className="flex items-center gap-2">Sending...</span>
                    ) : (
                        <span className="flex items-center gap-2">Send Message <Send size={18} /></span>
                    )}
                  </Button>
                </form>
              </Form>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, text, href }: { icon: any, text: string, href?: string }) {
    const Content = () => (
        <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <Icon size={24} />
            </div>
            <span className="text-lg text-muted-foreground group-hover:text-white transition-colors">
                {text}
            </span>
        </div>
    );
    
    return href ? <a href={href} target={href.startsWith('http') ? "_blank" : undefined}>{Content()}</a> : Content();
}
