import React from 'react'

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    parentClassName?: string;
    id?: string;
}

export default function Section({ children, className, parentClassName, id }: SectionProps) {
    return (
        <section className={`w-full flex items-center px-[5%] overflow-hidden relative
        ${parentClassName}`} id={id}>
            <main className={`w-7xl mx-auto py-12 ${className}`}>
                {children}
            </main>
        </section>
    )
}
