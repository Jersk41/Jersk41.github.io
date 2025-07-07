import { ReactNode, useState } from "react";

type IconType = {
  id: string;
  label: string;
  content: ReactNode;
}

interface DesktopIconProps {
  label: string;
  onClick: () => void;
}

interface WindowProps {
  title: string;
  content: ReactNode;
  onClose: () => void;
}

const icons: IconType[] = [
  { id: "readme", label: "README.md", content: "I am a web developer who loves Linux, AI, and building useful tools." },
  { id: "projects", label: "Projects", content: "1. Mujawwad Rhythm Classifier\n2. AI TTS Bot\n3. Boedin Chat" },
  { id: "contact", label: "Contact", content: "Email: me@example.com\nGitHub: github.com/me" }
];

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
  <div className="absolute top-20 left-20 md:w-50 lg:w-69 h-64 bg-night-light border border-night-lighter shadow-xl rounded overflow-hidden">
    <div className="flex items-center justify-between bg-night-lighter px-3 py-2 text-snow-light text-sm">
      <span>{title}</span>
      <button onClick={onClose} className="text-aurora-red">✕</button>
    </div>
    <div className="p-4 text-snow-light text-sm font-mono whitespace-pre-wrap h-full overflow-auto">
      {content}
    </div>
  </div>
);

const DesktopSimulation = () => {
  const [openWindow, setOpenWindow] = useState<IconType | null>(null);

  const handleOpen = (icon: IconType) => setOpenWindow(icon);
  const handleClose = () => setOpenWindow(null);

  return (
    <div className="relative w-screen h-screen bg-night-dark font-terminal p-4">
      {/* Desktop Icons */}
      <div className="absolute left-4 top-4 space-y-6">
        {icons.map((icon) => (
          <DesktopIcon key={icon.id} label={icon.label} onClick={() => handleOpen(icon)} />
        ))}
      </div>

      {/* Window */}
      {openWindow && (
        <Window
          title={openWindow.label}
          content={openWindow.content}
          onClose={handleClose}
        />
      )}

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 bg-night-light h-10 flex items-center px-4 text-snow-light text-xs">
        ⏺ Terminal ⬜ {openWindow ? openWindow.label : ""}
      </div>
    </div>
  );
};

export default DesktopSimulation;

