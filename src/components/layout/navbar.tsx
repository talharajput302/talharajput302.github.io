import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-1.5 text-sm transition-colors hover:bg-white/5 ${
    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
  }`;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-end px-4 sm:justify-center">
      <nav className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-2 shadow-lg shadow-black/20 backdrop-blur-2xl">
        <div className="hidden items-center gap-1 sm:flex">
          {LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} end className={linkClass}>
              {label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-full text-foreground sm:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-4 top-16 z-50 flex w-[calc(100%-2rem)] max-w-xs flex-col gap-1 rounded-2xl border border-border bg-card p-2 shadow-xl shadow-black/40 sm:hidden"
          >
            {LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2.5 text-left text-sm font-medium ${
                    isActive ? "bg-secondary text-primary" : "text-foreground/80 hover:bg-secondary"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
