"use client";
import LanguageToggle from '@/components/LanguageToggle'
import ThemeToggle from '@/components/ThemeToggle';
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react';

export default function Header() {
    const t = useTranslations("header");

    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) return; // <-- Cek null dulu

            if (window.scrollY > 0) {
                headerRef.current.classList.add("bg-bg/75");
                headerRef.current.classList.remove("bg-transparent");
            } else {
                headerRef.current.classList.add("bg-transparent");
                headerRef.current.classList.remove("bg-bg/75");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const [menuOpen, setMenuOpen] = useState(false);
    function menuToggle() {
        setMenuOpen(!menuOpen);
    }

    return (
        <header ref={headerRef} className='h-24 flex items-center px-[5%] fixed z-50 w-full backdrop-blur-xl'>
            <div className='w-full max-w-7xl mx-auto flex justify-between items-center'>
                {/* Logo */}
                <h1 className='font-bold text-3xl'>Arry<span className='text-primary'>Putra</span></h1>
                <div className={`flex items-center gap-6 max-lg:absolute max-lg:flex-col max-lg:top-24
                max-lg:bg-bg max-lg:left-0 max-lg:w-full max-lg:items-start
                max-lg:px-[5%] max-lg:shadow overflow-hidden duration-700 transition-[height,padding]
                ${menuOpen ? "max-lg:h-70 max-lg:py-8" : "max-lg:h-0 max-lg:py-0"}`}>
                    {/* Navigation */}
                    <ul className={`flex gap-4 font-medium lg:absolute lg:left-1/2 lg:-translate-x-1/2
                        max-lg:flex-col`}>
                        <li onClick={() => setMenuOpen(false)}><a className='hover:text-primary duration-300' href="#home">{t("home")}</a></li>
                        <li onClick={() => setMenuOpen(false)}><a className='hover:text-primary duration-300' href="#about">{t("about")}</a></li>
                        <li onClick={() => setMenuOpen(false)}><a className='hover:text-primary duration-300' href="#experience">{t("experience")}</a></li>
                        <li onClick={() => setMenuOpen(false)}><a className='hover:text-primary duration-300' href="#contact">{t("contact")}</a></li>
                    </ul>
                    <div className={`gap-6 flex max-lg:flex-row-reverse`}>
                        {/* Language Toggle */}
                        <LanguageToggle />
                        {/* Theme Toggle */}
                        <ThemeToggle />
                    </div>
                </div>
                <div className={`w-8 h-6 lg:hidden flex flex-col justify-between`}
                    onClick={() => menuToggle()}>
                    <div className={`w-full h-1 bg-black dark:bg-white rounded-full duration-300 ease-out
                        ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}></div>
                    <div className={`w-full h-1 bg-black dark:bg-white rounded-full duration-300
                        ${menuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}></div>
                    <div className={`w-full h-1 bg-black dark:bg-white rounded-full duration-300 ease-out
                        ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
                </div>
            </div>
        </header>
    )
}
