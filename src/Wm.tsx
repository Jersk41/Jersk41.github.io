import { ReactNode } from "react";
import { Rnd } from "react-rnd";

interface Size {
  width: string | number;
  height: string | number;
}

const windows = [
  {
    title: "whoami",
    content: `I am a web developer, student, and tech enthusiast. I like to learn new things about technology especially software, linux, and AI.`,
    defaultPos: { x: 20, y: 20, width: 300, height: 250 }
  },
  {
    title: "skills",
    content: `Language: JavaScript, TypeScript, Python, C++\n`,
    defaultPos: { x: 20, y: 300, width: 300, height: 250 },
  },
  {
    title: "projects",
    content: `1. Mujawwad Rhythm Classifier\n2. TTS Discord Bot include AI\n3. Dotfiles\n4. Boedin Chat's Frontend (Web for Chatting build with websocket)`,
    defaultPos: { x: 340, y: 20, width: 300, height: 250 }
  },
  {
    title: "contact",
    content: `LinkedIn: linkedin.com/in/me\nGithub: github.com/me\nTwitter: twitter.com/me`,
    defaultPos: { x: 340, y: 300, width: 300, height: 250 }
  }
];

interface WindowProps {
  title: string;
  defaultPos?: { 
    x: number;
    y: number;
  } & Size,
  children: ReactNode;
}

const Window = ({ title, defaultPos, children }: WindowProps) => {
  return (
    <Rnd
      default={defaultPos}
      bounds="parent"
      className="border-2 border-night-lighter bg-night-light text-snow-light rounded shadow-xl"
    >
      <div className="bg-night-lighter px-3 py-1 text-sm font-bold text-snow-light flex items-center justify-between">
        <span>{title}</span>
      </div>
      <div className="p-4 text-sm font-mono whitespace-pre-wrap h-full overflow-auto">
        {children}
      </div>
    </Rnd>
  );
};

const TilingPortfolio = () => {
  return (
    <div className="relative w-screen h-screen bg-night-dark overflow-hidden font-terminal">
    {windows.map((window, idx) =>(
      <Window key={idx} title={window.title} defaultPos={window.defaultPos}>
        {window.content}
      </Window>
    ))}
   </div>
  );
};

export default TilingPortfolio;

