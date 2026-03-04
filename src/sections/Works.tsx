import Title from '@/components/Title'
import Transition from '@/components/Transition'
import Section from '@/layouts/Section'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function Work() {
    const t = useTranslations("works");

    const works = t.raw("works");

    return (
        <Section id='experience'>
            <div className='flex flex-col gap-2 mb-8 relative'>

                <Transition delay={0.25}>
                    <Title part1={t("title.part_1")} part2={t("title.part_2")} />
                </Transition>
                <Transition delay={0.5}>
                    <p>{t("desc")}</p>
                </Transition>
            </div>

            <div className='space-y-8'>
                {
                    works.map((work: any, index: number) => (
                        <Transition delay={0.75} key={index}>
                            <Card
                                place={work.place}
                                workType={work.work_type}
                                position={work.position}
                                desc={work.desc}
                                start={work.start}
                                end={work.end}
                                image={work.image} />
                        </Transition>
                    ))
                }

            </div>
        </Section>
    )
}

function Card({ place, workType, position, desc, start, end, image }:
    {
        place: string,
        workType: string,
        position: string,
        desc: string,
        start: string,
        end: string,
        image: string
    }) {

    const t = useTranslations("works");

    const convertDate = (date: string) => {
        const newDate = new Date(date);
        return newDate.toLocaleString("en-US", { month: "short", year: "numeric" });
    }

    const diffMonths =
        (new Date(end).getFullYear() - new Date(start).getFullYear()) * 12 +
        (new Date(end).getMonth() - new Date(start).getMonth());

    return (
        <div className='border-2 border-primary/10 p-5 rounded-xl bg-gradient-to-br
            from-bg to-primary/5 hover:shadow-lg duration-500 cursor-pointer w-full'>
            <div className='flex gap-4 items-center max-sm:flex-col max-sm:items-start'>
                <Image src={image} width={60} height={60} alt='Logo'
                    className='border-2 border-primary/10 p-2 min-h-[60px] min-w-[60px] 
                    object-cover rounded-xl' />
                <div>
                    <h1 className='text-lg font-semibold'>{place}</h1>
                    <h2>{workType} - {position}</h2>
                </div>
            </div>
            <p className='mt-4 text-sm'>
                {desc}
            </p>
            <h3 className='text-sm mt-2 opacity-50'>{convertDate(start)} - {convertDate(end)} - {diffMonths} {t("months")}</h3>
        </div>
    )
}