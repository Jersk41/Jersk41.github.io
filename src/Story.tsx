import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TypeIt from "typeit-react";

const sections = [
  {
    title: "Hi, I'm Japar.",
    content:
      "I'm a web developer with a passion for Linux customization, AI, and writing clean backend code. Let's scroll through my story.",
  },
  {
    title: "Skills",
    content:
      "Languages: JavaScript, TypeScript, Python, C++\nFrameworks: React, Express, Vite\nTools: Git, Docker, TailwindCSS",
  },
  {
    title: "Projects",
    content: "See my latest projects below...",
    isButton: true,
  },
  {
    title: "Contact Me",
    content:
      "Email: me@example.com\nGitHub: github.com/me\nLinkedIn: linkedin.com/in/me",
  },
];

const ScrollStoryPortfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll("section");
      sectionElements.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveIndex(index);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full scroll-smooth snap-y snap-mandatory overflow-y-scroll bg-night-dark text-snow-light font-terminal">
      {/* Mobile-friendly padding & layout */}
      <nav className="hidden md:block fixed left-4 top-1/2 transform -translate-y-1/2 z-50 space-y-2">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeIndex === index ? "bg-frost-green" : "bg-frost-cyan/30"
            }`}
          />
        ))}
      </nav>

      {sections.map((section, index) => (
        <section
          key={index}
          className="min-h-screen snap-start flex flex-col items-center justify-center px-4 py-16 md:p-8 border-b border-night-light text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-frost-cyan animate-fade-in">
            {section.title}
          </h2>

          {activeIndex === index ? (
            <TypeIt
            key={index}
            className="text-sm md:text-lg max-w-md md:max-w-2xl text-center whitespace-pre-line px-2"
            options={{
              speed: 40,
              waitUntilVisible: true,
            }}>
              {section.content}
            </TypeIt>
          ) : (
            <div className="text-sm md:text-lg max-w-md md:max-w-2xl text-center whitespace-pre-line px-2">
              {section.content}
            </div>
          )}
          
          {section.isButton && (
            <button
              onClick={() => navigate("/projects")}
              className="mt-6 px-4 py-2 border border-frost-green text-frost-green hover:bg-frost-green hover:text-night-dark transition rounded"
            >
              See My Projects
            </button>
          )}
        </section>
      ))}

      <footer className="text-center text-xs text-frost-green py-4">
        © {new Date().getFullYear()} Japar — Made with ☕ + 🐧
      </footer>
    </div>
  );
};

export default ScrollStoryPortfolio;

