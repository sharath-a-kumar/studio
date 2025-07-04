import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="container py-20 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Skills & Tech Stack
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">My technical toolkit for building modern web applications.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <Card key={category} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-primary">{category}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {skillList.map((skill) => (
                  <li key={skill.name} className="flex items-center">
                    <skill.icon className="h-5 w-5 mr-3 text-accent" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
