"use client"
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LanguageToggle() {
    const currentLocale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function handleClick() {
        const newLocale = currentLocale === 'en' ? 'id' : 'en';
        router.replace(pathname, { locale: newLocale });
    }

    const localeClass = (locale: string) =>
        `duration-300 ${currentLocale === locale ? "opacity-100 font-semibold" : "opacity-50"}`;

    return (
        <button className='flex items-center cursor-pointer w-24'
            onClick={handleClick}>
            <i className='bx bx-globe text-2xl'></i>
            <div className='flex gap-2 ml-3'>
                <span className={localeClass("en")}>EN</span>
                <span className='opacity-50'>|</span>
                <span className={localeClass("id")}>ID</span>
            </div>
        </button>
    )
}
