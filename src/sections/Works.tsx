import Title from '@/components/Title'
import Transition from '@/components/Transition'
import Section from '@/layouts/Section'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function Work() {
    const t = useTranslations("works");

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

            <Transition delay={0.75}>
                <Card
                    place={t("work.work_1.place")}
                    workType={t("work.work_1.work_type")}
                    position={t("work.work_1.position")}
                    desc={t("work.work_1.desc")}
                    start={t("work.work_1.start")}
                    end={t("work.work_1.end")} />
            </Transition>
        </Section>
    )
}

function Card({ place, workType, position, desc, start, end }:
    {
        place: string,
        workType: string,
        position: string,
        desc: string,
        start: string,
        end: string
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
            from-bg to-primary/5 hover:shadow-lg duration-500 cursor-pointer'>
            <div className='flex gap-4 items-center max-sm:flex-col max-sm:items-start'>
                <Image src="/diskominfo.png" width={60} height={60} alt='Diskominfo Logo'
                    className='border-2 border-primary/10 p-2 rounded-xl' />
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