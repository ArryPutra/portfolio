"use client"
import Button from '@/components/Button'
import Pattern from '@/components/Pattern'
import Title from '@/components/Title'
import Transition from '@/components/Transition'
import Section from '@/layouts/Section'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export default function Projects() {
    const t = useTranslations('projects')

    const [projectSelected, setProjectSelected] = useState('all');
    const [checkMobile, setCheckMobile] = useState(false);

    const types = ['all', 'web', 'app'];

    const firstRender = useRef(true);

    const projectCards = t.raw("cards");
    const filteredProjects = projectCards.filter((project: ProjectCard) => {
        if (projectSelected === 'all') return project;
        if (projectSelected === 'web') return project.type === 'website';
        if (projectSelected === 'app') return project.type === 'app';
        return false;
    });

    useEffect(() => {
        firstRender.current = false;

        window.innerWidth < 768 ? setCheckMobile(true) : setCheckMobile(false);
    });

    interface ProjectCard {
        url_img: string
        title: string
        desc: string
        alt: string
        source: string
        type: string
        technologies: { name: string, url_img: string }[]
    }

    return (
        <Section>
            <div className='flex flex-col gap-2 relative'>

                <Transition delay={0.25}>
                    <Title part1={t("title.part_1")} part2={t("title.part_2")} />
                </Transition>
                <Transition delay={0.5}>
                    <p>{t("desc")}</p>
                </Transition>

                <div className='mt-4 flex gap-3 flex-wrap z-10'>
                    {
                        types.map((type, index) => (
                            <Transition key={index} delay={0.75 + index * 0.25}>
                                <Button onClick={() => setProjectSelected(type)}
                                    variant={projectSelected === type ? 'primary' : 'secondary'}>
                                    {t(`${type}`)}
                                </Button>
                            </Transition>
                        ))
                    }
                </div>

                <Pattern className='-top-12 -left-10' />
            </div>

            <div className='mt-12 grid gap-8 w-full max-md:grid-cols-1 max-xl:grid-cols-2 grid-cols-3'>
                {
                    filteredProjects.map((project: ProjectCard, index: number) => (
                        <Transition key={index}
                            delay={firstRender.current && !checkMobile
                                ? 1 + index * 0.25 : 0}>
                            <Card
                                urlImg={project.url_img}
                                title={project.title}
                                desc={project.desc}
                                technologies={project.technologies}
                                source={project.source} />
                        </Transition>
                    ))
                }
            </div>
        </Section>
    )
}

function Card({ urlImg, title, desc, technologies, source }: {
    urlImg: string,
    title: string,
    desc: string,
    technologies: { name: string, url_img: string }[],
    source: string
}) {
    return (
        <div className='w-full rounded-xl border border-primary/10 overflow-hidden h-full
        flex flex-col cursor-pointer hover:bg-primary/2 duration-300 hover:shadow-md'>
            <div className='min-h-56 overflow-hidden'>
                <Image src={urlImg} width={1080} height={720} alt='Project Indeks KAMI'
                    className='w-full h-full object-cover hover:scale-105 duration-500' />
            </div>
            <div className='p-4 flex flex-col md:h-full'>
                <div>
                    <a href={source} target='_blank' className='w-full justify-between items-center flex'>
                        <h1 className='text-xl font-semibold hover:underline hover:text-blue-600 mr-2'>
                            {title}
                        </h1>
                        <i className='bx bx-arrow-up-right-stroke text-xl opacity-50'></i>
                    </a>
                    <p className='text-sm mt-1'>{desc}</p>
                </div>

                <div className='gap-4 mt-auto flex'>
                    {
                        technologies.map((tech, index) => (
                            <div key={index} className='border py-2 px-3 flex gap-2 text-sm w-fit rounded-xl border-primary/10
                    hover:bg-primary/5 duration-200 h-fit mt-4'>
                                <Image src={tech.url_img} width={20} height={20} alt="Laravel Icon" />
                                <span className='font-medium'>{tech.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}