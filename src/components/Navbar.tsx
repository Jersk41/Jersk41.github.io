import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Connect", href: "#contacts" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-obsidian-darker/90 border-b border-white/5">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Brand */}
                <div className="font-mono font-bold text-xl tracking-tighter text-slate-100 relative z-50">
                    <span className="text-accent-primary">japar</span>.<span className="text-slate-500">dev</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-mono text-slate-400">
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="hover:text-accent-primary transition-colors hover:bg-white/5 px-2 py-1 rounded"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden relative z-50 p-2 text-slate-300 hover:text-accent-primary transition-colors cursor-pointer"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 right-0 bg-obsidian-darker border-b border-slate-800 p-6 pt-20 shadow-2xl md:hidden"
                        >
                            <div className="flex flex-col gap-4 font-mono text-slate-300">
                                {menuItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="text-lg py-2 border-b border-slate-800 hover:text-accent-primary hover:border-accent-primary/30 transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
