import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { PreferencesProvider } from "@/components/portfolio/Preferences";
import { InkStory } from "@/components/portfolio/InkStory";
import {
  About,
  Certificates,
  Contact,
  Education,
  Experience,
  Footer,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";

const title = "Caio Santos Borges — Desenvolvedor de Software";
const description =
  "Portfólio de Caio Santos Borges: desenvolvedor de software. Projetos em Java, Spring Boot, Python e React, com criatividade e cuidado com a experiência.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PreferencesProvider>
      <main className="min-h-screen bg-background">
        <Navbar />
        <InkStory />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
        <Footer />
        <Toaster />
      </main>
    </PreferencesProvider>
  );
}
