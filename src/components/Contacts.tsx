
import { motion } from "motion/react";
import data from "../data.json";

export function Contacts() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.contacts
                .filter(c => ["Email", "LinkedIn", "Github"].includes(c.name))
                .map((contact, idx) => (
                    <motion.a
                        key={idx}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-obsidian-light/30 border border-slate-700/50 rounded-lg hover:bg-obsidian-light/50 transition-all group"
                    >
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-500 font-mono group-hover:text-accent-primary transition-colors">{contact.name}</span>
                            <span className={`text-sm font-medium ${contact.style.replace('text-', 'text-slate-300 group-hover:text-')}`}>
                                {contact.text}
                            </span>
                        </div>
                    </motion.a>
                ))}
        </div>
    );
}
