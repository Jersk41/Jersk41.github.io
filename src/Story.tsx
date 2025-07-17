import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import TypeIt from "typeit-react";

const sosmed = [
  {
    name: "Github",
    text: "Jersk41",
    link: "github.com/Jersk41",
    style:
      "text-slate-300 hover:text-slate-500 dark:text-slate-400 dark:hover:text-slate-200",
  },
  {
    name: "LinkedIn",
    text: "Japar Sidik",
    link: "linkedin.com/in/japar-sidik-327aa3212/",
    style: "text-blue-500 hover:text-blue-700",
  },
  {
    name: "Email",
    text: "japarssidik820@gmail.com",
    link: "mailto:japarssidik820@gmail.com",
    style: "text-green-500 hover:text-green-700",
  },
];

const sections = [
  {
    title: "Hi, I'm Japar.",
    content:
      "Welcome to my portfolio! I'm a web developer with a passion for creating dynamic and engaging web applications. \nLet's scroll through my story.",
  },
  {
    title: "Skills",
    content:
      "Languages:\nPHP, JavaScript, TypeScript, Python \nFrameworks/Library:\nLaravel, React, Express, Vite, TailwindCSS\nTools:\nGit, Docker",
  },
  {
    title: "Projects",
    content: (
      <>
        <TypeIt
          as="div"
          options={{
            speed: 40,
            waitUntilVisible: true,
          }}
        >
          See my latest projects below...
        </TypeIt>
        <NavLink
          to="/projects"
          className="mt-6 px-4 py-2 border border-frost-green text-frost-green hover:bg-frost-green hover:text-night-dark transition rounded"
        >
          See My Projects
        </NavLink>
      </>
    ),
  },
  {
    title: "Contact Me",
    content: (
      <div className="text-sm md:text-lg max-w-md md:max-w-2xl px-2 text-center">
        {sosmed.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-center items-center space-x-2 text-md"
          >
            <div className="text-white">{item.name}:</div>
            <TypeIt
              className={item.style}
              options={{ waitUntilVisible: true, cursor: false, nextStringDelay: 1000 }}
            >
              <a href={item.link}>{item.text}</a>
            </TypeIt>
          </div>
        ))}
      </div>
    ),
  },
];

const ScrollStoryPortfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const navigate = useNavigate();

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
        {/* <div className="w-3 h-3 rounded-full transition-colors duration-300 bg-frost-cyan" /> */}
      </nav>

      {sections.map((section, index) => (
        <section
          key={index}
          className="min-h-screen snap-start flex flex-col items-center justify-center px-4 py-16 md:p-8 border-b border-night-light text-center"
        >
          {index === 0 && (
            <img
              src="https://avatars.githubusercontent.com/u/63460438?v=4"
              alt="Avatar"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 animate-fade-in"
            />
          )}
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-frost-cyan animate-fade-in">
            {section.title}
          </h2>

          {typeof section.content != "string" ? (
            section.content
          ) : activeIndex === index ? (
            <TypeIt
              key={index}
              className="text-sm md:text-lg max-w-md md:max-w-2xl text-center whitespace-pre-line px-2"
              options={{
                speed: 40,
                waitUntilVisible: true,
              }}
            >
              {section.content}
            </TypeIt>
          ) : (
            <div className="text-sm md:text-lg max-w-md md:max-w-2xl text-center whitespace-pre-line px-2">
              {section.content}
            </div>
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
