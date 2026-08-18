import { motion } from "motion/react";
import { skillGroups } from "@/data/skills";

const skillsCount = skillGroups.reduce((total, group) => total + group.items.length, 0);

const STATS = [
  { label: "Experience", value: "1+ yr", sub: "hands-on development" },
  { label: "Projects", value: "10+", sub: "personal & practice projects" },
  { label: "Skills", value: `${skillsCount}+`, sub: "languages & tools" },
];

export function Stats() {
  return (
    <section className="relative mx-auto max-w-4xl px-4 pb-32 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {STATS.map(({ label, value, sub }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.7, delay: i * 0.1 }}
            className="rounded-lg border border-border bg-white/[0.015] p-5 font-mono"
          >
            <p className="text-[11px] uppercase tracking-widest text-primary">{label}</p>
            <p className="mt-2 text-2xl font-semibold text-foreground">{value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
