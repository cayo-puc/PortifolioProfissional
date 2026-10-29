import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowRight, MessageCircle } from "lucide-react";
import inkSplash from "@/assets/ink-splash.png";
import inkBloom from "@/assets/ink-bloom.png";
import sketches from "@/assets/sketches.png";
import portrait from "@/assets/portrait.png";
import { usePortfolioCopy } from "./Preferences";

const scene = "absolute inset-0 flex items-center justify-center px-6 sm:px-10";

export function InkStory() {
  const { t, profile } = usePortfolioCopy();
  const wrapper = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !wrapper.current) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context((self) => {
        const q = self.selector!;
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: wrapper.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        });

        const show = (sel: string, at: number, dur = 8, from: gsap.TweenVars = {}) =>
          tl.fromTo(q(sel), { autoAlpha: 0, ...from }, { autoAlpha: 1, y: 0, scale: 1, duration: dur }, at);
        const hide = (sel: string, at: number, dur = 6) =>
          tl.to(q(sel), { autoAlpha: 0, duration: dur }, at);

        gsap.set(q(".fx"), { autoAlpha: 0 });
        gsap.set(q(".s1"), { autoAlpha: 1 });

        // 01 → 02: hero leaves, a drop of ink forms and falls straight down
        hide(".s1", 4, 8);
        hide(".scroll-hint", 2, 6);
        tl.fromTo(
          q(".drop"),
          { autoAlpha: 0, yPercent: -60, scaleY: 0.5, scaleX: 1.15 },
          { autoAlpha: 1, yPercent: 0, scaleY: 1, scaleX: 1, duration: 4, ease: "power1.out" },
          5,
        );
        tl.fromTo(
          q(".drop"),
          { y: "-6vh" },
          { y: "42vh", scaleY: 1.7, scaleX: 0.75, duration: 12, ease: "power2.in" },
          9,
        );
        // impact: the drop flattens and disappears into the splash
        tl.to(q(".drop"), { scaleY: 0.25, scaleX: 1.8, autoAlpha: 0, duration: 2 }, 20.5);

        // radial splash, exuberant and organic
        tl.fromTo(
          q(".splash"),
          { autoAlpha: 0, scale: 0.15 },
          { autoAlpha: 1, scale: 1, duration: 8, ease: "power3.out" },
          20,
        );
        // secondary particles thrown outward from the impact point
        (q(".particle") as Element[]).forEach((el: Element, i: number) => {
          const angle = (i / 14) * Math.PI * 2 + 0.3;
          const dist = 120 + ((i * 37) % 220);
          tl.fromTo(
            el,
            { autoAlpha: 0, x: 0, y: 0, scale: 0.2 },
            {
              autoAlpha: 1,
              x: Math.cos(angle) * dist,
              y: Math.sin(angle) * dist * 0.7,
              scale: 1,
              duration: 9,
              ease: "power3.out",
            },
            20.5,
          );
        });
        // 03: the stain blooms and reveals the sketch artwork.
        tl.fromTo(
          q(".bloom"),
          { autoAlpha: 0, scale: 0.3 },
          { autoAlpha: 0.85, scale: 1.18, duration: 14, ease: "power2.out" },
          28,
        );
        tl.to(q(".splash"), { autoAlpha: 0, scale: 1.35, duration: 8 }, 29);
        tl.to(q(".particle"), { autoAlpha: 0, scale: 1.4, duration: 7 }, 29);
        show(".sketches", 38, 10, { scale: 1.08 });

        // 04: arrive at the profile without another series of intermediary screens.
        hide(".sketches", 54, 6);
        tl.to(q(".bloom"), { autoAlpha: 0, duration: 7 }, 54);
        show(".profile", 60, 10, { y: 40 });
        tl.set({}, {}, 78);
      }, wrapper);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  if (reduced) return <StaticStory />;

  return (
    <div ref={wrapper} className="relative h-[460vh]" aria-label="Da arte ao software">
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        {/* ink layers — radial bloom fills the background */}
        <div className="fx bloom pointer-events-none absolute inset-0 opacity-0">
          <img
            src={inkBloom}
            alt=""
            aria-hidden
            width={1920}
            height={1280}
            className="h-full w-full max-w-none object-cover"
            style={{ filter: "saturate(0.72) brightness(0.72) contrast(1.05)" }}
          />
          <div className="absolute inset-0 bg-background/45" />
        </div>

        {/* the falling drop */}
        <div className="pointer-events-none absolute inset-x-0 top-[4vh] flex justify-center">
          <div
            className="fx drop h-20 w-3.5 origin-center rounded-[50%_50%_50%_50%/60%_60%_40%_40%] opacity-0"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.72 0.07 232), oklch(0.61 0.17 33) 65%, oklch(0.95 0.02 90))",
              filter: "blur(0.3px)",
            }}
            aria-hidden
          />
        </div>

        {/* impact: radial splash + secondary particles */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative flex w-[94%] max-w-4xl items-center justify-center">
            <img
              src={inkSplash}
              alt=""
              aria-hidden
              width={1536}
              height={1024}
              className="fx splash w-full opacity-0"
            />
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                aria-hidden
                className="fx particle absolute rounded-full opacity-0"
                style={{
                  width: 4 + (i % 4) * 3,
                  height: 4 + ((i + 2) % 4) * 3,
                  background:
                    i % 3 === 0
                      ? "oklch(0.61 0.17 33)"
                      : i % 3 === 1
                        ? "oklch(0.45 0.08 232)"
                        : "oklch(0.95 0.02 90)",
                }}
              />
            ))}
          </div>
        </div>

        <img
          src={sketches}
          alt=""
          aria-hidden
          width={1536}
          height={1024}
          className="fx sketches pointer-events-none absolute left-1/2 top-1/2 w-[92%] max-w-3xl -translate-x-1/2 -translate-y-1/2 opacity-0 invert"
        />

        {/* 01 */}
        <div className={`s1 ${scene} flex-col text-center`}>
          <p className="font-display text-[10px] text-spaced text-muted-foreground sm:text-xs">
            {profile.tagline}
          </p>
          <h1 className="mt-6 font-display text-[9vw] font-light leading-none tracking-[0.18em] text-foreground sm:text-6xl md:text-7xl">
            CAIO BORGES
          </h1>
          <p className="mt-5 text-sm text-muted-foreground sm:text-base">{profile.role}</p>
          <div className="mt-12 h-16 w-px bg-linear-to-b from-transparent to-border" />
        </div>

        {/* 04 */}
        <div className={`fx profile ${scene} opacity-0`}>
          <div className="grid w-full max-w-5xl items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">{t("Olá, eu sou")}</p>
              <h2 className="mt-2 font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
                CAIO BORGES
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{profile.role}</p>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                {profile.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projetos"
                  className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
                >
                  {t("Ver projetos")} <ArrowRight className="size-4" />
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-ink-coral hover:text-ink-coral"
                >
                  {t("Falar comigo")} <MessageCircle className="size-4" />
                </a>
              </div>
            </div>
            <div className="relative hidden md:block">
              <img
                src={portrait}
                alt={t("Retrato artístico de Caio Borges")}
                width={1024}
                height={1050}
                loading="lazy"
                className="brush-mask mx-auto w-full max-w-sm object-cover"
              />
            </div>
          </div>
        </div>

        <div className="scroll-hint pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-2">
          <span className="font-display text-[9px] text-spaced text-muted-foreground">scroll</span>
          <ChevronDown className="size-4 animate-bounce text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}

function StaticStory() {
  const { t, profile } = usePortfolioCopy();
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-32">
      <p className="font-display text-[10px] text-spaced text-muted-foreground">{profile.tagline}</p>
      <h1 className="mt-6 font-display text-5xl font-light tracking-[0.14em] text-foreground">
        CAIO BORGES
      </h1>
      <p className="mt-4 text-muted-foreground">{profile.role}</p>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">{profile.intro}</p>
      <div className="mt-10 h-px w-24 bg-linear-to-r from-ink-coral to-transparent" />
    </div>
  );
}
