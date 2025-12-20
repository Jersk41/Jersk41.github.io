import TypeIt from "typeit-react";
import { motion } from "motion/react";
import data from "../data.json";

interface HeroProps {
    id?: string;
}

export function Hero({ id }: HeroProps) {
    return (
        <section id={id} className="min-h-screen flex flex-col justify-center relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-obsidian-light/30 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow"></span>
                        <span className="text-xs font-mono text-slate-300">Open to Collaborate</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white/90">
                        <span className="block text-slate-500 text-2xl md:text-3xl font-mono mb-2 font-normal">
                            Bridging <span className="text-accent-secondary">Education</span> & <span className="text-accent-primary">Technology</span>
                        </span>
                        <TypeIt
                            options={{
                                strings: ["Building Enterprise Systems.", "Automating Workflows.", "Standardizing DevOps."],
                                speed: 75,
                                waitUntilVisible: true,
                                loop: true,
                                deleteSpeed: 50,
                                breakLines: false,
                            }}
                        />
                    </h1>

                    <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed">
                        I build scalable web platforms and automated tools that help schools and businesses run smoother.
                        Expert in modern PHP, Cloud Infrastructure, and AI integration.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href={data.overview.cover_letter} className="px-6 py-3 bg-accent-primary/10 border border-accent-primary/50 text-accent-primary rounded font-mono hover:bg-accent-primary/20 transition-all cursor-pointer">
                            Download CV
                        </a>
                        <a href="#contacts" className="px-6 py-3 bg-slate-800 border border-slate-700 text-slate-300 rounded font-mono hover:bg-slate-700 transition-all cursor-pointer">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </section>
    );
}
