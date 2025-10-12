import Button from '@/components/Button'
import Pattern from '@/components/Pattern'
import Title from '@/components/Title'
import Transition from '@/components/Transition'
import Section from '@/layouts/Section'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function About() {
    const t = useTranslations("about");

    return (
        <Section id='about' className='flex items-center justify-between gap-16 max-lg:flex-col
        max-lg:gap-8 max-lg:items-start' parentClassName='bg-gradient-to-tr from-bg to-primary/5'>
            <div className='relative max-lg:w-full lg:min-w-96 max-w-110'>
                <Pattern className='-left-10 top-12' />

                <div className='bg-gradient-to-r from-primary to-secondary w-full h-3/4 absolute
                rounded-tr-[5rem] bottom-0'>
                </div>
                <div className='bg-primary w-full right-full absolute h-3/4 bottom-0'></div>
                <Transition type='fade' delay={0.25}>
                    <Image className='relative' src="/sit-smile-guy-laptop.png"
                        alt='Sit Smile Guy Laptop' width={650} height={0} />
                </Transition>

                <Transition type="fade" delay={0.5}>
                    <Badge className='top-1/2 right-[10%] animate-[float_3s_ease-in-out_infinite]'>
                        <i className='bx bx-bolt text-xl max-sm:text-sm'></i>
                        <span className='font-medium text-sm max-sm:text-xs'>Fast Learner</span>
                    </Badge>
                </Transition>
                <Transition type="fade" delay={0.75}>
                    <Badge className='max-lg:-left-2 -left-8 bottom-[20%] animate-[float_3.5s_ease-in-out_infinite]'>
                        <i className='bx bx-light-bulb-on text-xl max-sm:text-sm'></i>
                        <span className='font-medium text-sm max-sm:text-xs'>Problem Solver</span>
                    </Badge>
                </Transition>
                <Transition type="fade" delay={1}>
                    <Badge className='bottom-[5%] -right-[10%] max-sm:right-4 animate-[float_4s_ease-in-out_infinite]'>
                        <i className='bx bx-group text-xl max-sm:text-sm'></i>
                        <span className='font-medium text-sm max-sm:text-xs'>Team Work</span>
                    </Badge>
                </Transition>
            </div>
            <div className='flex flex-col gap-2'>
                <Transition delay={1}>
                    <Title part1={t("title.part_1")} part2={t("title.part_2")} />
                </Transition>
                <Transition delay={1.25}>
                    <p>{t("desc")}</p>
                </Transition>
                <div className='mt-2 flex gap-4 flex-wrap'>
                    <Transition delay={1.5}>
                        <Button className='rounded-lg'
                            href='https://www.google.com/maps/place/Banjarbaru,+Banjarbaru+City,+South+Kalimantan/@-3.4593217,114.8002246,27513m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2de686ad57aa9fdf:0xd1f27863d3f52ead!8m2!3d-3.4391458!4d114.8313216!16zL20vMGM0XzRz?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D'>
                            <i className='bx bxs-location'></i>
                            {t("lives_in")}
                        </Button>
                    </Transition>
                    <Transition delay={1.75}>
                        <div className='py-2 px-4 rounded-lg font-medium flex gap-2 items-center
                    w-fit border-2 border-primary/10 bg-bg z-10'>
                            <i className='bx bx-code'></i>
                            {new Date().getFullYear() - 2022}+ {t("years_of_experience")}
                        </div>
                    </Transition>
                </div>
            </div>
            <Pattern className='right-0 bottom-0' />
        </Section>
    )
}

function Badge({ className, children }: {
    className?: string;
    children: React.ReactNode
}) {
    return (
        <div className={`border-2 border-primary absolute py-2 px-3 bg-gradient-to-l
                from-primary to-secondary rounded-full text-white flex items-center gap-2
                shadow-xl ${className}`}>
            {children}
        </div>
    )
}