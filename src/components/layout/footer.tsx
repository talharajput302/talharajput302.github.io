import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons";
import SpecularButton from "@/components/ui/specular-button";
import { profile } from "@/data/profile";

const SOCIALS = [
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail, external: false },
  { href: profile.github, label: "GitHub", icon: GithubIcon, external: true },
  { href: profile.linkedin, label: "LinkedIn", icon: LinkedinIcon, external: true },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">Get in touch</p>
        <h2 className="text-2xl font-medium text-foreground sm:text-3xl">
          Let's build something together.
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {SOCIALS.map(({ href, label, icon: Icon, external }) => (
            <SpecularButton
              key={label}
              size="sm"
              baseColor="#1a1d26"
              lineColor="#3fd6e8"
              textColor="#eef0f4"
              onClick={() => {
                if (external) window.open(href, "_blank", "noreferrer");
                else window.location.href = href;
              }}
            >
              <span className="flex items-center gap-2">
                <Icon className="size-4" />
                {label}
              </span>
            </SpecularButton>
          ))}
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          Built with React, Tailwind CSS, React Bits &amp; Motion.
        </p>
      </div>
    </footer>
  );
}
