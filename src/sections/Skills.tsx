import Title from '@/components/Title'
import Transition from '@/components/Transition'
import Section from '@/layouts/Section'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function Skills() {
    const t = useTranslations('skills')

    const skills = [
        { iconUrl: 'icons/tailwindcss.svg', label: 'Tailwind CSS' },
        { iconUrl: 'icons/javascript.svg', label: 'JavaScript' },
        { iconUrl: 'icons/typescript.svg', label: 'TypeScript' },
        { iconUrl: 'icons/reactjs.svg', label: 'React.js' },
        { iconUrl: 'icons/nextjs.svg', label: 'Next.js' },
        { iconUrl: 'icons/php.svg', label: 'PHP' },
        { iconUrl: 'icons/laravel.svg', label: 'Laravel' },
        { iconUrl: 'icons/flutter.svg', label: 'Flutter' },
        { iconUrl: 'icons/dart.svg', label: 'Dart' },
        { iconUrl: 'icons/kotlin.svg', label: 'Kotlin' },
        { iconUrl: 'icons/android.svg', label: 'Android' },
        { iconUrl: 'icons/mysql.svg', label: 'MySQL' },
    ]

    return (
        <Section className='flex justify-center flex-col !items-center !gap-16'>
            <Transition delay={0.25}>
                <Title part1={t("title")} linePosition='down' />
            </Transition>

            <div className='flex gap-8 max-w-2xl flex-wrap justify-center'>
                {skills.map((skill, i) => (
                    <Transition key={skill.label} delay={0.5 + i * 0.3}>
                        <Card iconUrl={skill.iconUrl} label={skill.label} />
                    </Transition>
                ))}
            </div>
        </Section>
    )
}

function Card({ iconUrl, label }: { iconUrl: string, label: string }) {
    return (
        <div className='flex flex-col items-center gap-2'>
            <div className={`border-2 border-primary/10 h-18 w-18 flex items-center justify-center rounded-xl
            hover:bg-primary/3 cursor-pointer duration-300 group `}>
                <Image src={iconUrl} alt={label} width={36} height={36}
                    className={`mx-4 group-hover:scale-105 duration-300
                    ${iconUrl === 'icons/nextjs.svg' && 'dark:invert'}`} />
            </div>
            <span className='font-medium text-sm'>{label}</span>
        </div>
    )
}
