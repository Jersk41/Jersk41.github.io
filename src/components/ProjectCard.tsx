
import { motion } from "motion/react";

interface ProjectProps {
    name: string;
    description: string;
    technologies: string[];
    link?: string;
    index?: number;
}

export function ProjectCard({ name, description, technologies, link, index = 0 }: ProjectProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative p-6 bg-obsidian-light/30 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden transition-all hover:border-slate-500/50 hover:bg-obsidian-light/50 h-full flex flex-col"
        >
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 hover:text-accent-primary">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            )}

            <div className="mb-4 flex items-center gap-3">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-accent-primary transition-colors">
                    {name}
                </h3>
            </div>

            <p className="text-slate-400 mb-6 line-clamp-3 text-sm flex-grow">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

