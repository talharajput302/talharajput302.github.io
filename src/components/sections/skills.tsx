import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <ScrollReveal>
        <p className="font-mono text-sm text-primary">Skills</p>
        <h2 className="mt-2 text-2xl font-medium text-foreground sm:text-3xl">What I work with</h2>
      </ScrollReveal>

      <div className="mt-12 space-y-10">
        {skillGroups.map((group, i) => (
          <ScrollReveal key={group.label} delay={i * 0.08}>
            <h3 className="mb-4 text-lg font-semibold text-foreground">{group.label}</h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  <Icon size={18} color="default" />
                  {name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
