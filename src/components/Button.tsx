"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    href?: string;
    variant?: "primary" | "secondary";
}

export default function Button({ children, className, onClick, href, variant = "primary" }: ButtonProps) {
    let baseClass = `h-10 px-4 font-medium cursor-pointer flex gap-2 items-center
        w-fit text-sm rounded-full text-nowrap hover:duration-300 hover:transition-colors ${className} `;

    if (variant === "primary") {
        baseClass += "bg-gradient-to-r from-primary to-secondary text-white";
    } else if (variant === "secondary") {
        baseClass += "bg-bg text-primary border-2 border-primary !px-3.5 dark:text-white hover:bg-primary hover:text-white";
    }

    if (href) {
        return (
            <Link href={href} className={baseClass} target="_blank" rel="noopener noreferrer">
                {children}
            </Link>
        );
    } else {
        return (
            <button suppressHydrationWarning onClick={onClick} className={baseClass}>
                {children}
            </button>
        );
    }
}
