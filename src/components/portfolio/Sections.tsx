import { usePortfolioCopy } from "./Preferences";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  GraduationCap,
  Award,
  Music,
  Guitar,
  Pencil,
  Palette,
  PawPrint,
  Cpu,
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Vinyl } from "./Vinyl";

function InterestIcon({ index }: { index: number }) {
  const Icon = [Music, Guitar, Pencil, Palette, PawPrint, Cpu][index] ?? Music;
  return <Icon className="size-3 text-ink-sky" aria-hidden="true" />;
}

function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  const { t } = usePortfolioCopy();
  return (
    <div className="mb-14 max-w-2xl">
      <span className="font-mono text-xs text-ink-coral">{index}</span>
      <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-foreground sm:text-4xl">
        {t(title)}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t(subtitle)}</p>
      )}
      <div className="mt-6 h-px w-24 bg-linear-to-r from-ink-coral to-transparent" />
    </div>
  );
}

const shell = "mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-32";

export function About() {
  const { t, about } = usePortfolioCopy();
  return (
    <section id="sobre" className={shell}>
      <SectionHeading index="01" title={t("Sobre mim")} subtitle={about.headline} />
      <div className="grid gap-12 md:grid-cols-[0.8fr_1fr] md:items-start">
        <div className="relative">
          <Vinyl />
        </div>
        <div>
          {about.paragraphs.map((p) => (
            <p key={p} className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {p}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-2">
            {about.interests.map((i, index) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
              >
                <InterestIcon index={index} /> {i}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const { t, projects } = usePortfolioCopy();
  const [active, setActive] = useState<number | null>(null);

  const selectedProject =
    active !== null ? projects[active] : null;

  return (
    <section id="projetos" className={shell}>
      <SectionHeading
        index="02"
        title={t("Projetos")}
        subtitle={t(
          "Trabalhos onde design e código andam juntos, do rascunho ao deploy."
        )}
      />

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, index) => (
          <article
            key={p.title}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-ink-coral/40"
          >
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={`${t("Preview do projeto")} ${p.title}`}
                width={1280}
                height={800}
                loading="lazy"
                className="aspect-16/10 w-full bg-secondary/30 object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.03]"
                >
                  {t("Ver detalhes")} <ArrowUpRight className="size-3.5" />
                </button>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-ink-sky hover:text-ink-sky"
                >
                  {t("GitHub")} <Github className="size-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* MODAL */}
      <Dialog
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent
          closeLabel={t("Fechar")}
          className="max-h-[85vh] max-w-3xl overflow-y-auto"
        >
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">
                  {selectedProject.title}
                </DialogTitle>

                <DialogDescription className="text-sm leading-relaxed">
                  {selectedProject.details.about}
                </DialogDescription>
              </DialogHeader>

              {/* IMAGEM */}
              <div className="mt-4 overflow-hidden rounded-xl border border-border bg-secondary/30">
                <img
                  src={selectedProject.image}
                  alt={`${t("Preview do projeto")} ${selectedProject.title}`}
                  className="aspect-video w-full object-contain"
                />
              </div>

              {/* TECNOLOGIAS */}
              <div className="mt-6">
                <h3 className="font-display text-base text-foreground">
                  {t("Tecnologias")}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* FUNCIONALIDADES */}
              {selectedProject.details.features && (
                <div className="mt-7">
                  <h3 className="font-display text-base text-foreground">
                    {t("Principais funcionalidades")}
                  </h3>

                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {selectedProject.details.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink-coral" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CONTRIBUIÇÃO */}
              {selectedProject.details.contribution && (
                <div className="mt-7">
                  <h3 className="font-display text-base text-foreground">
                    {t("Minha contribuição")}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {selectedProject.details.contribution}
                  </p>
                </div>
              )}

              {/* DESENVOLVIMENTO */}
              {selectedProject.details.development && (
                <div className="mt-7">
                  <h3 className="font-display text-base text-foreground">
                    {t("Desenvolvimento")}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {selectedProject.details.development}
                  </p>
                </div>
              )}

              {/* ARQUITETURA */}
              {selectedProject.details.architecture && (
                <div className="mt-7">
                  <h3 className="font-display text-base text-foreground">
                    {t("Arquitetura e implementação")}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {selectedProject.details.architecture}
                  </p>
                </div>
              )}

              {/* OBJETIVO */}
              {selectedProject.details.objective && (
                <div className="mt-7">
                  <h3 className="font-display text-base text-foreground">
                    {t("Objetivo")}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {selectedProject.details.objective}
                  </p>
                </div>
              )}

              {/* APRENDIZADOS */}
              {selectedProject.details.learnings && (
                <div className="mt-7">
                  <h3 className="font-display text-base text-foreground">
                    {t("Aprendizados")}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {selectedProject.details.learnings}
                  </p>
                </div>
              )}

              {/* CONTEXTO */}
              {selectedProject.details.context && (
                <div className="mt-7">
                  <h3 className="font-display text-base text-foreground">
                    {t("Contexto")}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {selectedProject.details.context}
                  </p>
                </div>
              )}

              {/* CERTIFICADO RELACIONADO */}
              {selectedProject.details.relatedCertificate && (
                <div className="mt-7 rounded-xl border border-ink-sky/20 bg-ink-sky/5 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-sky">
                    {t("Formação relacionada")}
                  </p>

                  <p className="mt-2 text-sm text-foreground">
                    {selectedProject.details.relatedCertificate}
                  </p>
                </div>
              )}

              {/* GITHUB */}
              <div className="mt-8 border-t border-border pt-6">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-transform hover:scale-[1.03]"
                >
                  <Github className="size-4" />
                  {t("Ver código no GitHub")}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export function Experience() {
  const { t, experience } = usePortfolioCopy();
  const [activeExperience, setActiveExperience] = useState(0);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (!visible.length) return;
        const closest = visible.reduce((current, entry) =>
          Math.abs(entry.boundingClientRect.top) < Math.abs(current.boundingClientRect.top) ? entry : current,
        );
        const index = Number((closest.target as HTMLElement).dataset.index);
        if (!Number.isNaN(index)) setActiveExperience(index);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0 },
    );

    itemRefs.current.forEach((item) => item && observer.observe(item));
    return () => observer.disconnect();
  }, [experience.length]);

  const timelineMarkerTop = itemRefs.current[activeExperience]?.offsetTop ?? 0;
  return (
    <section id="experiencia" className={shell}>
      <SectionHeading
        index="03"
        title={t("Experiência")}
        subtitle={t(
          "O traço de pincel virando linha técnica: a trajetória do artístico ao estrutural.",
        )}
      />
      <ol className="relative ml-3 space-y-12 border-l border-dashed border-ink-coral/40 pl-8 sm:ml-6">
        <span
          className="absolute -left-[9px] top-1 flex size-4 rounded-full border-2 border-background bg-ink-coral shadow-[0_0_0_5px_color-mix(in_oklab,var(--ink-coral),transparent_78%)] transition-all duration-500"
          style={{ top: `${timelineMarkerTop + 6}px` }}
          aria-hidden="true"
        />
        {experience.map((e, i) => (
          <li
            key={e.role}
            ref={(item) => { itemRefs.current[i] = item; }}
            data-index={i}
            className={`relative transition-all duration-500 ${i === activeExperience ? "opacity-100" : "opacity-50"}`}
          >
            <span
              className={`absolute -left-[41px] top-1.5 flex size-4 items-center justify-center border-2 border-background transition-all duration-500 ${
                i === activeExperience ? "scale-125 rounded-full bg-ink-coral" : "rotate-45 bg-ink-sky/70"
              }`}
              aria-hidden
            />
            <p className="font-mono text-xs text-ink-sky">{e.period}</p>
            <h3 className="mt-2 font-display text-lg text-foreground">{e.role}</h3>
            <p className="text-sm text-muted-foreground/80">{e.company}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {e.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Skills() {
  const { t, skills } = usePortfolioCopy();
  return (
    <section id="habilidades" className={shell}>
      <SectionHeading
        index="04"
        title={t("Habilidades")}
        subtitle={t("Ferramentas que uso para levar uma ideia do papel ao produto em produção.")}
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((g) => (
          <div
            key={g.category}
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-ink-sky/40"
          >
            <h3 className="font-display text-sm text-spaced text-ink-cream">{g.category}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-ink-coral hover:text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  const { t, education } = usePortfolioCopy();
  return (
    <section id="formacao" className={shell}>
      <SectionHeading index="05" title={t("Formação acadêmica")} />
      {education.map((e) => (
        <div
          key={e.course}
          className="flex flex-col gap-5 rounded-xl border border-border bg-card p-8 sm:flex-row sm:items-start"
        >
          <GraduationCap className="size-6 shrink-0 text-ink-coral" />
          <div>
            <h3 className="font-display text-xl text-foreground">{e.course}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{e.institution}</p>
            <p className="mt-1 font-mono text-xs text-ink-sky">{e.period}</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {e.details}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export function Certificates() {
  const { t, certificates } = usePortfolioCopy();
  const [active, setActive] = useState<number | null>(null);
  const cert = active === null ? null : certificates[active];

  return (
    <section id="certificados" className={shell}>
      <SectionHeading
        index="06"
        title={t("Certificados")}
        subtitle={t("Estudo contínuo, registrado.")}
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <button
            key={c.title}
            onClick={() => setActive(i)}
            className="group rounded-xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:border-ink-coral/50"
          >
            <Award className="size-5 text-ink-sand" />
            <h3 className="mt-4 font-display text-base leading-snug text-foreground">{c.title}</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              {c.issuer} · {c.date}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs text-ink-sky opacity-0 transition-opacity group-hover:opacity-100">
              {" "}
              {t("Visualizar")} <ExternalLink className="size-3" />
            </span>
          </button>
        ))}
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent closeLabel={t("Fechar")}>
          <DialogHeader>
            <DialogTitle className="font-display">{cert?.title}</DialogTitle>
            <DialogDescription>
              {cert?.issuer} · {cert?.date}
            </DialogDescription>
          </DialogHeader>
          <div className="flex aspect-4/3 items-center justify-center rounded-lg border border-border bg-linear-to-br from-secondary to-background">
            <Award className="size-10 text-ink-sand" />
          </div>
          {cert?.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs text-foreground transition-colors hover:border-ink-sky hover:text-ink-sky"
            >
              {t("Ver certificado")} <ExternalLink className="size-3.5" />
            </a>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255),
  message: z.string().trim().min(10, "Conte um pouco mais").max(1000, "Mensagem muito longa"),
});

export function Contact() {
  const { t, profile } = usePortfolioCopy();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      const response = await fetch("https://formspree.io/f/mrpgevpz", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.data),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("Envio não confirmado");
      toast.success(t("Mensagem enviada"), { description: t("Obrigado pelo contato!") });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error(t("Não foi possível confirmar o envio"), {
        description: t("Tente novamente ou utilize os canais diretos."),
      });
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ink-sky";

  return (
    <section id="contato" className={shell}>
      <SectionHeading
        index="07"
        title={t("Vamos criar algo?")}
        subtitle={t("Conte sua ideia. Vamos conversar sobre desenvolvimento e tecnologia.")}
      />
      <div className="grid gap-12 md:grid-cols-[1fr_0.8fr]">
        <form onSubmit={submit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="name" className="mb-2 block text-xs text-spaced text-muted-foreground">
              {" "}
              {t("Nome")}{" "}
            </label>
            <input
              id="name"
              className={field}
              value={form.name}
              maxLength={100}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t("Seu nome")}
            />
            {errors["name"] && (
              <p className="mt-1.5 text-xs text-destructive">{t(errors["name"])}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-xs text-spaced text-muted-foreground">
              {" "}
              {t("E-mail")}{" "}
            </label>
            <input
              id="email"
              type="email"
              className={field}
              value={form.email}
              maxLength={255}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t("voce@email.com")}
            />
            {errors["email"] && (
              <p className="mt-1.5 text-xs text-destructive">{t(errors["email"])}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs text-spaced text-muted-foreground"
            >
              {" "}
              {t("Mensagem")}{" "}
            </label>
            <textarea
              id="message"
              rows={5}
              className={field}
              value={form.message}
              maxLength={1000}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t("Sobre o que vamos conversar?")}
            />
            {errors["message"] && (
              <p className="mt-1.5 text-xs text-destructive">{t(errors["message"])}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
          >
            {sending ? t("Enviando…") : t("Enviar mensagem")} <ArrowUpRight className="size-4" />
          </button>
        </form>

        <div className="space-y-3">
          {[
            { icon: Github, label: "GitHub", value: "@cayo-puc", href: profile.github },
            { icon: Linkedin, label: "LinkedIn", value: profile.name, href: profile.linkedin },
            {
              icon: Mail,
              label: t("E-mail"),
              value: profile.email,
              href: `mailto:${profile.email}`,
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("https:") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-ink-coral/50"
            >
              <s.icon className="size-5 text-ink-sky" />
              <span>
                <span className="block text-xs text-spaced text-muted-foreground">
                  {t(s.label)}
                </span>
                <span className="text-sm text-foreground">{s.value}</span>
              </span>
            </a>
          ))}
          <p className="pt-4 text-xs text-muted-foreground">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t, profile } = usePortfolioCopy();
  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center">
        <svg viewBox="0 0 220 120" className="h-28 w-52" aria-label={t("Assinatura CB")} role="img">
          <path
            d="M18 96C6 62 30 18 74 22c14 1 22 9 24 18"
            fill="none"
            stroke="var(--ink-coral)"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M112 100V24h30c18 0 26 10 26 20s-8 18-24 18h-32"
            fill="none"
            stroke="var(--ink-cream)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M112 62h34c20 0 30 10 30 21s-12 19-32 19h-32"
            fill="none"
            stroke="var(--ink-petrol)"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
        <p className="font-display text-[10px] text-spaced text-muted-foreground">
          {" "}
          {t("Good design · Better code")}{" "}
        </p>
        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
