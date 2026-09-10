import { usePortfolioCopy } from "./Preferences";
import { useState } from "react";
import { ArrowUpRight, RotateCw } from "lucide-react";
import inkSplash from "@/assets/ink-splash.png";
import { favoriteTracks, getRandomTrack, type FavoriteTrack } from "@/data/music";
import "./vinyl.css";

export function Vinyl() {
  const { t } = usePortfolioCopy();
  const [track, setTrack] = useState<FavoriteTrack>();
  const [clicked, setClicked] = useState(false);
  const [pulse, setPulse] = useState(0);

  function discover() {
    setTrack((previous) => getRandomTrack(favoriteTracks, previous?.id));
    setClicked(true);
    setPulse((value) => value + 1);
  }

  return (
    <div className="vinyl-composition">
      <button
        type="button"
        onClick={discover}
        className="vinyl-button focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-sky"
        aria-label={t("Sortear uma música favorita de Caio")}
      >
        <span key={pulse} className={pulse ? "vinyl-ink-pulse" : "vinyl-ink-pulse vinyl-idle"}>
          <img src={inkSplash} alt="" aria-hidden="true" className="vinyl-ink" />
        </span>
        <span className="vinyl-disc" aria-hidden="true">
          <span className="vinyl-label" style={{ backgroundImage: `url(${inkSplash})` }} />
          <span className="vinyl-spindle" />
        </span>
      </button>
      <div className="relative min-h-28 px-3 text-center" aria-live="polite" aria-atomic="true">
        {track ? (
          <>
            <div className="flex items-center justify-center gap-3">
              {track.cover && (
                <img
                  src={track.cover}
                  alt={`${t("Capa de")} ${track.title}`}
                  className="size-10 rounded-sm object-cover"
                />
              )}
              <div className="min-w-0">
                <p className="break-words text-sm text-foreground">{track.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{track.artist}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
              <a
                href={track.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:text-ink-sky focus-visible:outline"
              >
                {" "}
                {t("Ouvir no Spotify")} <ArrowUpRight className="size-3" />
              </a>
              <button
                type="button"
                onClick={discover}
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground focus-visible:outline"
              >
                <RotateCw className="size-3" /> {t("Sortear outra")}{" "}
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="font-mono text-xs tracking-wider text-foreground">
              {" "}
              {t("Descobrir uma música")}{" "}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              {clicked
                ? t("Minha seleção de favoritas chega em breve.")
                : t("Um pouco do que faz parte da minha trilha sonora.")}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
