import { User } from "lucide-react";
import DotGrid from "@/components/ui/dot-grid";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { profile } from "@/data/profile";

function TerminalPanel() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0a0b0f] shadow-xl shadow-black/30">
      <div className="flex items-center gap-2 border-b border-border bg-white/[0.03] px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">terminal — bash</span>
      </div>
      <div className="space-y-3 p-5 font-mono text-sm leading-relaxed">
        <p className="text-muted-foreground">
          <span className="text-primary">$</span> whoami
        </p>
        <p className="text-muted-foreground">Interests:</p>
        <ul className="space-y-1">
          {profile.interests.map((item) => (
            <li key={item} className="text-foreground/90">
              <span className="text-primary">→</span> {item}
            </li>
          ))}
        </ul>
        <p className="pt-2 text-muted-foreground">
          Status: <span className="text-accent">{profile.statusLine}...</span> ✓
        </p>
        <p className="text-muted-foreground">
          <span className="text-primary">$</span>{" "}
          <span className="inline-block h-3.5 w-2 animate-pulse bg-muted-foreground align-middle" />
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <DotGrid
          dotSize={3}
          gap={26}
          baseColor="#2a2d3a"
          activeColor="#22d3ee"
          proximity={140}
          shockRadius={220}
          shockStrength={4}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-16 px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-40">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center">
          <ScrollReveal>
            <div className="group relative aspect-square w-full max-w-64 shrink-0 sm:size-36 sm:w-36 sm:max-w-none">
              <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-primary via-accent to-primary opacity-60 blur-lg transition-opacity duration-500 group-hover:opacity-90" />
              <div className="relative flex size-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-card">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <User className="size-8 text-muted-foreground" />
                )}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">{profile.name}</h1>
              <p className="mt-1 font-mono text-sm text-primary">
                {profile.status.role} · {profile.status.location}
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{profile.status.dayJob}</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <ScrollReveal>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed text-foreground">
                {profile.bioLead.map((seg, i) =>
                  seg.bold ? (
                    <span key={i} className="font-semibold text-foreground">
                      {seg.text}
                    </span>
                  ) : (
                    <span key={i}>{seg.text}</span>
                  ),
                )}
              </p>
              {profile.bioParagraphs.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TerminalPanel />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
