"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <button className='p-3 rounded-full border flex items-center bg-black/5 border-black/5
        relative gap-10 cursor-pointer dark:bg-white/5 dark:border-white/5'
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            <div className='flex items-center h-8 w-8 rounded-full absolute duration-300 left-1.5 
            bg-white dark:bg-white/10 dark:left-16.25'></div>
            <i className='bx bxs-sun text-xl text-yellow-500 z-1 dark:text-white/25'></i>
            <i className='bx bxs-moon text-xl text-black/25 z-1 dark:text-yellow-500'></i>
        </button>
    )
}
