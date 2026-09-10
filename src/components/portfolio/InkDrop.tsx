import { useId } from "react";
import inkBloom from "@/assets/ink-bloom.png";

/** A shaped drop with a thin neck; the artwork uses the site's existing ink. */
export function InkDrop() {
  const id = useId().replace(/:/g, "");
  const shape =
    "M40 2C40 52 38 98 34 128C31 153 15 170 14 189C12 211 25 224 40 225C58 225 69 211 66 192C64 174 50 154 46 130C42 99 41 54 40 2Z";
  return (
    <svg viewBox="0 0 80 230" className="h-full w-full overflow-visible" aria-hidden>
      <defs>
        <clipPath id={id + "-shape"}>
          <path d={shape} />
        </clipPath>
        <linearGradient
          id={id + "-paint"}
          x1="0"
          y1="0"
          x2=".4"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#163b4a" />
          <stop offset=".66" stopColor="#3c798b" />
          <stop offset=".86" stopColor="#c77555" />
          <stop offset="1" stopColor="#eee0c7" />
        </linearGradient>
        <radialGradient id={id + "-light"} cx=".3" cy=".8" r=".7">
          <stop offset="0" stopColor="#fff4df" stopOpacity=".48" />
          <stop offset=".4" stopColor="#8fc8d5" stopOpacity=".06" />
          <stop offset="1" stopColor="#02080b" stopOpacity=".65" />
        </radialGradient>
      </defs>
      <g clipPath={"url(#" + id + "-shape)"}>
        <path d={shape} fill={"url(#" + id + "-paint)"} />
        <image href={inkBloom} x="-61" y="124" width="184" height="122" opacity=".66" />
        <path d={shape} fill={"url(#" + id + "-light)"} />
      </g>
      <path
        d="M38 42C39 105 30 149 22 175C16 193 21 209 30 213"
        fill="none"
        stroke="#d4eff0"
        strokeOpacity=".7"
        strokeWidth="1.2"
      />
      <path
        d="M48 156C53 176 64 191 59 204"
        fill="none"
        stroke="#f8e7cf"
        strokeOpacity=".55"
        strokeWidth="1.5"
      />
    </svg>
  );
}
