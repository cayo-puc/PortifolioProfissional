import { Settings as SettingsIcon, ExternalLink, Download } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { usePortfolioCopy } from "./Preferences";

export function Settings() {
  const { t, theme, language, setTheme, setLanguage, resume } = usePortfolioCopy();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={t("Configurações")}
          className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-ink-coral focus-visible:outline-2 focus-visible:outline-ink-sky"
        >
          <SettingsIcon className="size-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="max-w-[calc(100vw-2rem)] space-y-5">
        <h2 className="font-display text-sm">{t("Configurações")}</h2>
        <label className="block text-xs text-muted-foreground">
          {t("Tema")}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as "light" | "dark")}
            className="mt-2 w-full rounded-md border border-border bg-background p-2 text-sm text-foreground"
          >
            <option value="dark">{t("Escuro")}</option>
            <option value="light">{t("Claro")}</option>
          </select>
        </label>
        <label className="block text-xs text-muted-foreground">
          {t("Idioma")}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as "pt" | "en")}
            className="mt-2 w-full rounded-md border border-border bg-background p-2 text-sm text-foreground"
          >
            <option value="pt">Português</option>
            <option value="en">English</option>
          </select>
        </label>
        <div className="flex flex-col gap-3 border-t border-border pt-4 text-xs">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-ink-coral"
          >
            <ExternalLink className="size-3.5" />
            {t("Abrir currículo")}
          </a>
          <a href={resume} download className="inline-flex items-center gap-2 hover:text-ink-coral">
            <Download className="size-3.5" />
            {t("Baixar currículo")}
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}
