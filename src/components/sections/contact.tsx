"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { socialLinks } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  const EmailIcon = socialLinks.find((l) => l.name === "Email")?.icon;

  return (
    <section id="contact" className="container py-20 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">Have a question or want to work together? Drop me a message.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
             <Card>
                 <CardHeader>
                     <CardTitle>Contact Information</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4 text-muted-foreground">
                    <div className="flex items-center gap-4">
                        <MapPin className="h-5 w-5 text-primary"/>
                        <span>Bengaluru, India</span>
                    </div>
                    <div className="flex items-center gap-4">
                        {EmailIcon && <EmailIcon className="h-5 w-5 text-primary"/>}
                        <a href="mailto:SharathKumar3113@gmail.com" className="hover:text-primary">SharathKumar3113@gmail.com</a>
                    </div>
                     <div className="flex items-center gap-4">
                        <Phone className="h-5 w-5 text-primary"/>
                        <span>+91 7411516558</span>
                    </div>
                 </CardContent>
             </Card>
             <Card>
                 <CardHeader>
                     <CardTitle>Follow Me</CardTitle>
                 </CardHeader>
                 <CardContent className="flex space-x-4">
                    {socialLinks.map(({ name, url, icon: Icon }) => (
                      <Button key={name} variant="outline" size="icon" asChild>
                          <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                            <Icon className="h-5 w-5" />
                          </a>
                      </Button>
                    ))}
                 </CardContent>
             </Card>
        </div>
        <div>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Your Name" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Your message..." {...field} rows={6} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit">Send Message</Button>
            </form>
            </Form>
        </div>
      </div>
    </section>
  );
}
