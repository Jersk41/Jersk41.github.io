// ProjectsHybrid.tsx
import { Rnd } from "react-rnd";

const ProjectWindow = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Rnd
      default={{
        x: Math.random() * 300,
        y: Math.random() * 200,
        width: 320,
        height: 240,
      }}
      bounds="parent"
      className="border border-night-lighter bg-night-light text-snow-light rounded shadow-md min-h-[2rem]"
    >
      <div className="bg-night-lighter px-3 py-1 text-sm font-bold flex justify-between">
        <span>{title}</span>
      </div>
      <div className="p-3 text-sm font-mono whitespace-pre-wrap h-full overflow-auto">
        {description}
      </div>
    </Rnd>
  );
};

const ProjectsHybrid = () => {
  const projects = [
    {
      title: "Mujawwad Rhythm Classifier",
      description:
        "A deep learning model to classify Qur'anic recitation rhythm using LSTM.",
    },
    {
      title: "Discord TTS Bot",
      description:
        "A Discord bot that uses AI for text-to-speech with multilingual support.",
    },
    {
      title: "Dotfiles",
      description:
        "My personal Linux ricing setup for i3, Alacritty, and custom scripts.",
    },
    {
      title: "Boedin Chat Frontend",
      description:
        "Frontend interface built with WebSocket for real-time chatting.",
    },
  ];

  return (
    <div className="relative w-screen h-screen bg-night-dark overflow-hidden font-terminal">
      <div className="absolute inset-0">
        {/* Wallpaper style or gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-night to-night-light opacity-40 blur-sm" />
      </div>

      <div className="relative w-full h-full p-4">
        {projects.map((proj, index) => (
          <ProjectWindow
            key={index}
            title={proj.title}
            description={proj.description}
          />
        ))}
        <Rnd
          default={{
            x: Math.random() * 300,
            y: Math.random() * 200,
            width: 320,
            height: 240,
          }}
          bounds="parent"
          lockAspectRatio
          minWidth={320}
          minHeight={240}
          className="border border-night-lighter bg-night-light text-snow-light rounded shadow-md"
        >
          <div className="bg-night-lighter px-3 py-1 text-sm font-bold flex justify-between sticky">
            <span>Ini Judul</span>
          </div>
          <div className="p-3 text-sm h-full min-h-[240px] overflow-auto">
            <div className="font-mono whitespace-pre-wrap h-full">
            <img src="https://placehold.co/600x400" />
            lorem ipsum dametpadwad aklwdmawdjmawpodjawopd
            ldawodawidaoidjawoidjawidaw
            awdjaiwodajwoidjawiodjawiodjawd
            wdaiwodawiodjawiodjawoidaw
            awdijaowjdiaowjdoaiwjoiawndaiwndaiwnfioawnhiughseghakjebfkuahowegrwtuyriueoowslddfk
            duawdoahwidohawidaw
            awdawiohfioawbndioajwdaw
            awdjioawhfoiawhjfioawhdaw
            awjdiawodhjaoiwjioawjfaw
            wdjawiodjawiojdoiawjdaw
            ajwidohawoidhioawjdaw
            jioawjdiaowjioawd
            hdoiahwfiohawiohdoiawda
            ioawdhnaiwhiawdaw
            jaiowdjawiojaiwojdaw
            hawiodhoiwafhaowihiowaghwiodha
            awioudahwoiahwfioawhoi
            </div>
          </div>
        </Rnd>
      </div>
    </div>
  );
};

export default ProjectsHybrid;
