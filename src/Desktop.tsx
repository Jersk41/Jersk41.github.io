import { useEffect, useState } from "react";
import data from "./data.json";
import {
  IconType,
  DesktopIconProps,
  WindowProps,
  ProjectsDataType,
} from "./types";

const DesktopIcon = ({ label, onClick }: DesktopIconProps) => (
  <div
    onClick={onClick}
    className="flex flex-col items-center justify-center cursor-pointer text-snow-light hover:opacity-90"
  >
    <div className="w-12 h-12 bg-night-lighter rounded shadow flex items-center justify-center mb-1">
      📄
    </div>
    <span className="text-xs text-center select-none">{label}</span>
  </div>
);

const Window = ({ title, content, onClose }: WindowProps) => (
  <div className="relative top-0 right-0 w-[80%] h-[80%] lg:w-[75%] lg:h-[75%] mx-auto bg-night-light border border-night-lighter shadow-xl rounded overflow-hidden">
    <div className="flex items-center justify-between bg-night-lighter px-3 py-2 text-snow-light text-sm">
      <span>{title}</span>
      <button onClick={onClose} className="text-aurora-red">
        ✕
      </button>
    </div>
    <div className="p-4 text-snow-light text-sm font-mono whitespace-pre-wrap h-full overflow-auto">
      {content}
    </div>
  </div>
);

const Desktop = () => {
  const [openWindow, setOpenWindow] = useState<IconType | null>(null);
  const [selectedProject, setSelectedProject] =
    useState<ProjectsDataType | null>(null); // State untuk menyimpan project yang dipilih
  const [isProjectViewedOnce, setIsProjectViewedOnce] =
    useState<boolean>(false);

  useEffect(() => {
    const viewed = localStorage.getItem("projectViewed");
    if (viewed === "true") {
      setIsProjectViewedOnce(true);
    }
  }, []);

  const handleOpen = (icon: IconType) => setOpenWindow(icon);
  const handleClose = () => setOpenWindow(null);

  const handleProjectClick = (project: ProjectsDataType) => {
    setSelectedProject(project);
    if (!isProjectViewedOnce) {
      setIsProjectViewedOnce(true);
      localStorage.setItem("projectViewed", "true");
    }
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const icons: IconType[] = [
    {
      id: "readme",
      label: "README.md",
      content:
        "Welcome!\nThis interactive desktop simulation will show my grouped projects by tech stack used.\n",
    },
    { id: "projects", label: "Projects", content: "projects" },
    {
      id: "contact",
      label: "Contact",
      content:
        "> Email: japarssidik820@gmail.com\n> GitHub: github.com/Jersk41",
    },
  ];

  return (
    <div className="relative w-screen h-screen bg-night-dark font-terminal p-4">
      <div className="absolute left-4 top-4 space-y-6">
        {icons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            label={icon.label}
            onClick={() => {
              handleOpen(icon);
            }}
          />
        ))}
      </div>

      {openWindow && openWindow.label === "Projects" && (
        <Window
          title={openWindow.label}
          content={
            <div className="space-y-4 mb-6">
              {data.projects.map((project) => (
                <div
                  key={project.name}
                  className="border border-night-lighter shadow-md rounded p-2"
                >
                  <div className="flex items-center justify-between">
                    <h2
                      className="text-lg text-snow-light cursor-pointer hover:text-frost-cyan"
                      onClick={() => handleProjectClick(project)}
                    >
                      {project.name}
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-frost-blue text-night-dark rounded-full px-2 py-1 text-xs font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          }
          onClose={handleClose}
        />
      )}

      {openWindow && openWindow.label !== "Projects" && (
        <Window
          title={openWindow.label}
          content={openWindow.content}
          onClose={handleClose}
        />
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-night-light h-10 flex items-center justify-between px-4 text-snow-light text-xs border-t-snow-lightest">
        <div>⏺ Terminal ⬜ {openWindow ? openWindow.label : ""}</div>
        {isProjectViewedOnce && (
          <button
            onClick={() => {
              localStorage.removeItem("projectViewed");
              window.location.href = "/";
            }}
            className="px-2 py-1 cursor-pointer text-snow-light border rounded hover:border-aurora-red hover:text-aurora-orange"
          >
            {"Logout"}
          </button>
        )}
      </div>

      {selectedProject && (
        <div className="fixed top-0 left-0 w-full h-full bg-night-dark/50 flex items-center justify-center">
          <div className="bg-night-light p-4 rounded shadow-lg w-full m-4 md:max-w-2xl">
            <div className="flex justify-between items-center mb-2 border-b border-night-lighter pb-2">
              <h2 className="text-xl text-snow-light font-bold">
                {selectedProject.name}
              </h2>
              <button onClick={handleCloseProject} className="text-aurora-red">
                ✕
              </button>
            </div>
            <div className="w-full">
              <p className="text-snow-light">{selectedProject.description}</p>
              <h3 className="text-lg text-snow-light mt-2">Technologies</h3>
              <ul className="list-disc list-inside text-snow-light">
                {selectedProject.technologies.map(
                  (tech: string, index: number) => (
                    <li key={index}>{tech}</li>
                  )
                )}
              </ul>
            </div>
            <div className="flex items-center justify-end w-full border-t border-night-lighter pt-2">
              <a
                href={selectedProject.link}
                className="px-2 py-1 cursor-pointer text-snow-light border rounded hover:border-frost-cyan-red hover:text-frost-blue flex self-end"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Desktop;
