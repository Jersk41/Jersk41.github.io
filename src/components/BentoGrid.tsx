import { ReactNode } from "react";
import { motion } from "motion/react";

interface BentoItemProps {
    title: string;
    icon?: ReactNode;
    children: ReactNode;
    className?: string;
    delay?: number;
}

function BentoItem({ title, icon, children, className = "", delay = 0 }: BentoItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
            className={`glass-panel p-6 rounded-2xl flex flex-col ${className}`}
        >
            <div className="flex items-center gap-3 mb-4 text-slate-200">
                {icon && <span className="text-accent-primary">{icon}</span>}
                <h3 className="font-bold text-lg">{title}</h3>
            </div>
            <div className="flex-grow">
                {children}
            </div>
        </motion.div>
    );
}

export function BentoGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-[minmax(180px,auto)]">
            {/* Backend - Large Block */}
            <BentoItem
                title="Modern Backend"
                className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-obsidian-dark/80 to-slate-900/80"
                delay={1}
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                }
            >
                <div className="flex flex-col h-full justify-between">
                    <p className="text-slate-400 mb-4">
                        Specialized in high-performance architectures using
                        <span className="text-slate-200"> PHP 8.3 & Laravel 12</span>.
                        Building robust APIs and systems that handle heavy workloads with ease.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Laravel 12", "FrankenPHP", "Redis", "PostgreSQL", "Real-time"].map(tag => (
                            <span key={tag} className="px-2 py-1 bg-slate-800 rounded border border-slate-700 text-xs text-indigo-400 font-mono">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </BentoItem>

            {/* DevOps - Tall Block */}
            <BentoItem
                title="DevOps & Infrastructure"
                className="md:col-span-1 md:row-span-2 bg-slate-900/50"
                delay={2}
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                }
            >
                <ul className="space-y-3 text-sm text-slate-400 mt-2">
                    <li className="flex items-start gap-2">
                        <span className="text-accent-tertiary mt-1">▹</span> Docker Development
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-accent-tertiary mt-1">▹</span> Automated Pipelines (CI/CD)
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-accent-tertiary mt-1">▹</span> Linux Administration
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-accent-tertiary mt-1">▹</span> Server Optimization
                    </li>
                </ul>
                <div className="mt-8 p-3 bg-black/40 rounded border border-slate-800 font-mono text-xs text-green-400/80">
                    &gt; Building image...<br />
                    &gt; Pushing to registry...<br />
                    &gt; <span className="text-green-400">Deployed Successfully</span>
                </div>
            </BentoItem>

            {/* Frontend - Standard Block */}
            <BentoItem
                title="Frontend Engineering"
                className="md:col-span-1 md:row-span-1"
                delay={3}
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                }
            >
                <div className="flex flex-wrap gap-2 mt-2">
                    {["Next.js", "React 19", "Tailwind v4", "Framer Motion"].map(tag => (
                        <span key={tag} className="tech-badge border-cyan-500/20 text-cyan-400">
                            {tag}
                        </span>
                    ))}
                </div>
            </BentoItem>

            {/* AI Automation - Standard Block */}
            <BentoItem
                title="AI Integration"
                className="md:col-span-1 md:row-span-1"
                delay={4}
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                }
            >
                <p className="text-sm text-slate-400">
                    Building MCP servers, RAG pipelines, and automated grading systems with Python & LLMs.
                </p>
            </BentoItem>
        </div>
    );
}
