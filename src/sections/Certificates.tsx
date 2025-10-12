import Button from '@/components/Button'
import Pattern from '@/components/Pattern'
import Title from '@/components/Title'
import Transition from '@/components/Transition'
import Section from '@/layouts/Section'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Certificates() {
    const t = useTranslations('certificates');

    const cards = t.raw('cards');

    interface CertificateCard {
        url_img: string
        title: string
        desc: string
        alt: string
        source: string
    }

    return (
        <Section>
            <Pattern className='-right-10 -top-16' />
            <Transition delay={0.25}>
                <Title part1={t("title.part_1")} part2={t("title.part_2")} />
            </Transition>
            <Transition delay={0.5}>
                <p className='mt-2'>{t("desc")}</p>
            </Transition>

            <div>
                {
                    cards.map((card: CertificateCard, index: number) => (
                        <Transition key={index} delay={0.75}>
                            <Card
                                urlImg={card.url_img}
                                alt={card.alt}
                                title={card.title}
                                desc={card.desc}
                                source={card.source}
                            />
                        </Transition>
                    ))
                }
            </div>
        </Section>
    )
}

function Card({ urlImg, title, desc, alt, source }: {
    urlImg: string, title: string, desc: string, alt: string, source: string
}) {
    const t = useTranslations('certificates');

    return (
        <div className='w-full border-2 border-primary/10 bg-gradient-to-br from-bg to-primary/5
        flex rounded-2xl overflow-hidden min-h-fit hover:-translate-y-0.5 hover:translate-x-0.5 duration-500
        hover:shadow-md cursor-pointer max-md:flex-col mt-8'>
            <Image
                src={urlImg}
                width={1080}
                height={720}
                alt={alt}
                className="h-auto w-64 max-md:w-full object-cover"
            />
            <div className='p-5 w-full flex flex-col gap-2 h-fit'>
                <div>
                    <h1 className='font-semibold text-xl'>{title}</h1>
                    <p className='text-sm mb-2'>
                        {desc}
                    </p>
                </div>
                <div className='h-full'>
                    <Button variant='secondary' href={source}>
                        {t("view_source")}
                        <i className='bx bx-arrow-up-right-stroke text-xl'></i>
                    </Button>
                </div>
            </div>
        </div>
    )
}
