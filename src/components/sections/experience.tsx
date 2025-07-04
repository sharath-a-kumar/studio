import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="container py-20 md:py-24 bg-secondary">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Professional Experience
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">My career journey and key contributions.</p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
        <div className="space-y-16">
          {experience.map((job, index) => (
            <div key={job.company} className="relative flex items-center">
              <div className={`flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                {index % 2 === 1 && (
                    <div className="w-full max-w-md">
                        <div className="bg-card p-6 rounded-lg shadow-md border-l-4 border-primary">
                          <h3 className="text-xl font-bold">{job.role}</h3>
                          <p className="text-primary font-semibold mb-1">{job.company}</p>
                          <p className="text-sm text-muted-foreground mb-4">{job.period}</p>
                          <ul className="space-y-2 text-sm list-disc list-inside">
                            {job.description.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                        </div>
                    </div>
                )}
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-primary">
                <job.icon className="w-6 h-6 text-primary" />
              </div>

              <div className={`flex w-1/2 ${index % 2 === 0 ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                 {index % 2 === 0 && (
                     <div className="w-full max-w-md">
                        <div className="bg-card p-6 rounded-lg shadow-md border-r-4 border-primary">
                            <h3 className="text-xl font-bold">{job.role}</h3>
                            <p className="text-primary font-semibold mb-1">{job.company}</p>
                            <p className="text-sm text-muted-foreground mb-4">{job.period}</p>
                            <ul className="space-y-2 text-sm list-disc list-inside">
                                {job.description.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
