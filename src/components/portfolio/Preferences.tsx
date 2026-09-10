import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import * as data from "@/data/portfolioData";
import { english } from "@/data/translations";

type Language = "pt" | "en";
type Theme = "dark" | "light";
const Preferences = createContext<{
  language: Language;
  theme: Theme;
  setLanguage: (value: Language) => void;
  setTheme: (value: Theme) => void;
}>({ language: "pt", theme: "dark", setLanguage: () => {}, setTheme: () => {} });

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  const [theme, setTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      setLanguage(localStorage.getItem("portfolio-language") === "en" ? "en" : "pt");
      setTheme(localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark");
    } catch {
      /* Preferences still work when storage is unavailable. */
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset["theme"] = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.lang = language === "en" ? "en" : "pt-BR";
    document.title = `Caio Santos Borges — ${language === "en" ? "Software Developer" : "Desenvolvedor de Software"}`;
    try {
      localStorage.setItem("portfolio-language", language);
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* No persistence in restricted browsers. */
    }
  }, [language, theme, ready]);
  return (
    <Preferences.Provider value={{ language, theme, setLanguage, setTheme }}>
      {children}
    </Preferences.Provider>
  );
}

export function usePortfolioCopy() {
  const preferences = useContext(Preferences);
  const t = (text: string) => (preferences.language === "en" ? (english[text] ?? text) : text);
  function translate<T>(value: T): T {
    if (typeof value === "string") return t(value) as T;
    if (Array.isArray(value)) return value.map(translate) as T;
    if (value && typeof value === "object")
      return Object.fromEntries(
        Object.entries(value).map(([key, item]) => [key, translate(item)]),
      ) as T;
    return value;
  }
  const copy = translate(data);
  const resume =
    preferences.language === "en"
      ? "/documents/resume-caio-santos-en.pdf"
      : "/documents/curriculo-caio-santos.pdf";
  return {
    ...copy,
    ...preferences,
    t,
    resume,
    certificates: copy.certificates,
  };
}
