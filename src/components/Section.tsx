import { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
    title?: string;
    subtitle?: string;
}

export function Section({ id, className = "", children, title, subtitle }: SectionProps) {
    return (
        <section id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
            {(title || subtitle) && (
                <div className="mb-12">
                    {title && (
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 flex items-center gap-3">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="text-slate-400 max-w-2xl text-lg">
                            {subtitle}
                        </p>
                    )}
                </div>
            )}
            {children}
        </section>
    );
}
