
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { Section } from "./components/Section";
import { ProjectCard } from "./components/ProjectCard";

import { Contacts } from "./components/Contacts";
import data from "./data.json";

function App() {
  const sections = 4;

  return (
    <div className="min-h-screen relative selection:bg-cyan-500/30 overflow-hidden">
      {/* Global Decorations */}
      {Array.from({ length: sections }).map((_, idx) => (
        <div
          key={idx}
          className={`absolute w-[500px] h-[500px] rounded-full blur-[100px] -z-10 ${idx % 2 === 0
            ? "right-[-5%] bg-accent-primary/5"
            : "left-[-5%] bg-accent-secondary/5"
            }`}
          style={{ top: `${idx * (100 / sections)}%` }} // Algorithm: t += s
        />
      ))}

      <Navbar />

      <Hero id="about" />

      <Section
        id="skills"
        title="Technical Skills"
        subtitle="My core competencies in development and operations."
        className="min-h-screen flex flex-col justify-center">
        <BentoGrid />
      </Section>

      <Section
        id="projects"
        title="My Projects"
        subtitle="A selection of my recent work and open source contributions."
        className="min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} index={idx} />
          ))}
        </div>
      </Section>

      <Section id="contacts" title="Get in Touch" subtitle="I am available for new opportunities and collaborations.">
        <Contacts />
      </Section>

      <footer className="py-12 border-t border-slate-800 mt-20 md:mt-32">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-500 font-mono text-sm">
          <p className="mb-2">Executed in {new Date().getFullYear()} • Localhost:3000</p>
          <div className="flex justify-center gap-4 text-xs opacity-60">
            <span>git commit: 8f3a2b1</span>
            <span>status: clean</span>
          </div>
        </div>
      </footer>
    </div >
  );
}

export default App;

