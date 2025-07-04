import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="container py-20 md:py-24 bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Education
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">My academic background.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
               <div className="bg-primary/10 p-3 rounded-full">
                  <edu.icon className="h-6 w-6 text-primary" />
               </div>
               <div>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
               </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
                <p className="font-semibold">{edu.result}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
