import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SpotlightCard from "@/components/ui/spotlight-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <ScrollReveal>
        <p className="font-mono text-sm text-primary">Projects</p>
        <h2 className="mt-2 text-2xl font-medium text-foreground sm:text-3xl">Things I've built</h2>
      </ScrollReveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 0.08}>
            <Link to={`/projects/${project.slug}`} className="group block h-full">
              <SpotlightCard
                spotlightColor="rgba(34, 211, 238, 0.25)"
                className="!rounded-2xl !border-border !bg-card/60 !p-6 flex h-full flex-col transition-colors group-hover:!border-primary/40"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-medium text-foreground">{project.name}</h3>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-1 font-mono text-xs text-primary">{project.tagline}</p>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{project.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-full bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
