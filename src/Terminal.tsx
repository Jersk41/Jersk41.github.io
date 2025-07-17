import { useState, useEffect, useRef } from "react";

const commands: Record<string, string> = {
  help: "Available Commands: 'help','whoami','skills','projects','contact'",
  whoami:
    "I am web developer, student, and tech enthusiast. I like to learn new things about technology expecially software, linux, and AI.",
  skills:
    "Language: JavaScript, TypeScript, Python, C++\nFramework: React, Next.js, Express.js\nDatabase: MongoDB, MySQL\nTools: Git, Docker, Vite",
  projects:
    "1. Mujawwad Rhythm Classifier\n2. TTS Discord Bot include AI\n3. Dotfiles\n4. Boedin Chat's Frontend (Web for Chatting build with websocket)",
  contact:
    "Email: japarssidik820@gmail.com\nGithub: github.com/me\nLinkedIn: linkedin.com/in/me\nTwitter: twitter.com/me",
};

const Terminal = () => {
  const [lines, setLines] = useState(["Type 'help' to get started"]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [suggestion, setSuggestion] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (cmd: string) => {
    const output = commands[cmd.toLowerCase()] || `Command not found: ${cmd}`;
    if (cmd.toLowerCase() === "clear") {
      setLines([]);
      return;
    }
    setLines((prevLines) => [...prevLines, `> ${cmd}`, output]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    handleCommand(trimmed);
    setHistory((prevHistory) => [...prevHistory, trimmed]);
    setHistoryIndex(-1);
    console.log(`Current History Index: ${historyIndex}`);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      setHistoryIndex((prev) => {
        const newIndex = Math.max(prev - 1, 0);
        setInput(history[newIndex] || "");
        return newIndex;
      });
    } else if (e.key === "ArrowDown") {
      setHistoryIndex((prev) => {
        const newIndex = Math.min(prev + 1, history.length - 1);
        setInput(history[newIndex] || "");
        return newIndex;
      });
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (suggestion) setInput(suggestion);
    }
  };

  const updateSuggestion = (value: string) => {
    const match = Object.keys(commands).find((cmd) => cmd.startsWith(value));
    setSuggestion(match && match !== value ? match : "");
  };

  useEffect(() => {
    updateSuggestion(input.trim());
  }, [input]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [lines]);

  return (
    <div className="bg-night-dark text-green-500 font-terminal min-h-screen flex items-center justify-center">
      <div className="bg-night w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
        <div className="bg-night-light flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-aurora-red"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-aurora-yellow"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-aurora-green"></span>
            <span className="ml-4 text-sm text-gray-300">terminal ~</span>
          </div>
          <span className="text-xs text-gray-400">/home/japar</span>
        </div>
        <div className="bg-black text-frost-green min-h-screen p-4">
          <div
            ref={containerRef}
            className="max-w-3xl mx-auto h-[80vh] overflow-y-auto space-y-1"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, index) => (
              <div
                key={index}
                className="animate-fade-in-fast whitespace-pre-wrap">
                {line.startsWith(">") ? (
                  <span className="text-frost-green">{line}</span>
                ) : (
                  <span className="text-snow-light">{line}</span>
                )}
              </div>
            ))}
            <form onSubmit={handleSubmit} className="flex relative">
              <span className="mr-2 text-frost-green">$</span>
              <span className="w-2 h-full bg-frost-green animate-blink inline-block"></span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-black text-frost-green border-green-500 focus:outline-none focus:border-green-500"
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
