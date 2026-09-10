import { usePortfolioCopy } from "./Preferences";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Settings } from "./Settings";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t, navLinks, profile } = usePortfolioCopy();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "portfolio-navbar fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t("Ir para o topo")}
          className="flex size-10 items-center justify-center rounded-full border border-border font-display text-sm tracking-[0.2em] text-foreground transition-colors hover:border-ink-coral hover:text-ink-coral"
        >
          {profile.monogram}
        </button>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => go(l.href)}
                className="story-link text-[13px] tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Settings />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("Fechar menu") : t("Abrir menu")}
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-ink-petrol lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => go(l.href)}
                  className="w-full rounded-md px-3 py-3 text-left text-sm tracking-wide text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
