import { useEffect, useState, type RefObject } from "react";

/** Wireframe: quiet screen → falling drop → floor impact → upward fill → reveal. */
export function useInkStory(wrapper: RefObject<HTMLDivElement | null>) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduced || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled || !wrapper.current) return;
        gsap.registerPlugin(ScrollTrigger);
        const root = wrapper.current;
        const context = gsap.context(() => {
          const stage = root.querySelector<HTMLElement>(".ink-stage")!;
          const maskPaths = gsap.utils.toArray<SVGPathElement>(".fill-stroke", root);
          gsap.set(".ink-fx", { autoAlpha: 0 });
          gsap.set(".ink-drop", { transformOrigin: "50% 100%" });
          maskPaths.forEach((path) => {
            const length = path.getTotalLength();
            gsap.set(path, {
              strokeDasharray: length + 1,
              strokeDashoffset: length + 1,
              opacity: 0,
            });
          });
          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.55,
              invalidateOnRefresh: true,
            },
          });

          // 01. Leave the opening quiet; nothing moves without scrolling.
          timeline.to(".opening-caption", { autoAlpha: 0, duration: 7 }, 5);
          // 02–03. The bottom of the drop travels to the floor at 93% of the screen.
          timeline.fromTo(
            ".ink-drop",
            { autoAlpha: 0, y: -80, scaleY: 0.65, scaleX: 1.08 },
            { autoAlpha: 1, y: 0, scaleY: 1, scaleX: 1, duration: 7, ease: "sine.out" },
            7,
          );
          timeline.to(
            ".ink-drop",
            {
              y: () => stage.clientHeight * 0.85 - 138,
              x: -3,
              scaleY: 1.32,
              scaleX: 0.8,
              duration: 18,
              ease: "power2.in",
            },
            14,
          );
          // 04. Contact is at the floor, never an explosion in the middle of the screen.
          timeline.to(
            ".ink-drop",
            { scaleY: 0.13, scaleX: 1.7, autoAlpha: 0, duration: 1.4, ease: "power2.out" },
            32,
          );
          timeline.fromTo(
            ".floor-splash",
            { autoAlpha: 0, scaleX: 0.62, scaleY: 0.08 },
            { autoAlpha: 1, scaleX: 1, scaleY: 1, duration: 9, ease: "power3.out" },
            32,
          );
          timeline.fromTo(
            ".floor-ripple",
            { autoAlpha: 0, scaleX: 0.12 },
            { autoAlpha: 0.55, scaleX: 1, duration: 7, ease: "power2.out" },
            32,
          );
          timeline.to(".floor-ripple", { autoAlpha: 0, duration: 6 }, 39);
          gsap.utils.toArray<HTMLElement>(".ink-particle", root).forEach((particle, index) => {
            const side = index % 2 ? 1 : -1;
            const horizontal = side * (45 + ((index * 43) % 280));
            const rise = 90 + ((index * 67) % 270);
            const at = 32.3 + (index % 4) * 0.3;
            timeline.fromTo(
              particle,
              { autoAlpha: 0, x: 0, y: 0, scale: 0.3 },
              {
                autoAlpha: 0.85,
                x: () => horizontal * Math.min(stage.clientWidth / 1000, 1),
                y: -rise,
                scale: 1,
                rotation: side * (18 + index * 3),
                duration: 6,
                ease: "power2.out",
              },
              at,
            );
            timeline.to(
              particle,
              { y: -rise + 55, autoAlpha: 0, duration: 5, ease: "power1.in" },
              at + 6,
            );
          });
          // 05–06. Wide, uneven mask strokes climb through the original full-screen artwork.
          timeline.set(".ink-flood", { autoAlpha: 1 }, 39);
          maskPaths.forEach((path, index) => {
            const at = 39 + [0, 1.8, 3, 4.2, 5.1][index]!;
            timeline.set(path, { opacity: 1 }, at);
            timeline.to(path, { strokeDashoffset: 0, duration: 20, ease: "power1.inOut" }, at);
          });
          timeline.to(".floor-splash", { autoAlpha: 0, duration: 7 }, 48);
          timeline.to(".scroll-hint", { autoAlpha: 0, duration: 6 }, 53);
          // 07–08. After full coverage, reveal the same Lovable heading and hold it.
          timeline.to(".ink-shade", { opacity: 0.45, duration: 12 }, 65);
          timeline.fromTo(
            ".ink-revelation",
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 12, ease: "sine.out" },
            69,
          );
          timeline.to({}, { duration: 19 }, 81);
        }, root);
        cleanup = () => context.revert();
      },
    );
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [reduced, wrapper]);
  return reduced;
}
