import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { projects } from "@/data/projects";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <ScrollReveal>
        <Link
          to="/projects"
          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" /> Back to projects
        </Link>

        <h1 className="mt-6 text-3xl font-semibold text-foreground">{project.name}</h1>
        <p className="mt-1 font-mono text-sm text-primary">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <GithubIcon className="size-4" /> Code
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="size-4" /> Live
            </a>
          )}
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-10">
        {project.sections.map((section, i) => (
          <ScrollReveal key={section.heading} delay={i * 0.06}>
            <h2 className="text-lg font-semibold text-foreground">{section.heading}</h2>
            {section.paragraphs?.map((p, j) => (
              <p key={j} className="mt-3 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="mt-3 space-y-2">
                {section.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-muted-foreground">
                    <span className="mt-1 text-primary">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
