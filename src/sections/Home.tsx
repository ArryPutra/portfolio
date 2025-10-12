"use client";
import Button from '@/components/Button';
import { useTranslations } from 'next-intl'
import Image from 'next/image';
import Transition from '@/components/Transition';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Section from '@/layouts/Section';
import Title from '@/components/Title';
import Pattern from '@/components/Pattern';

export default function Home() {
    const t = useTranslations("home");

    const isEnPath = usePathname() === "/en";

    return (
        <Section className='min-h-screen pt-24 flex items-center justify-between gap-16 
        max-lg:flex-col max-lg:gap-8 max-lg:items-start'
            parentClassName='bg-gradient-to-br from-bg to-primary/5' id='home'>
            <div className='flex flex-col gap-1.5 relative lg:w-1/2'>
                <Pattern className='-left-10 -top-16' />
                <Transition isAnimate={true}>
                    <Title part1={t("title.part_1")} part2={t("title.part_2")} />
                </Transition>

                <Transition isAnimate={true} delay={0.25}>
                    <h1 className='text-3xl font-bold h-9 overflow-hidden' >
                        <div className='flex flex-col animate-roles'>
                            <span>Web Developer</span>
                            <span>Mobile Developer</span>
                            <span>UI Designer</span>
                        </div>
                    </h1>
                </Transition>
                <Transition isAnimate={true} delay={0.5}>
                    <p>{t("desc")}</p>
                </Transition>
                <div className='flex items-center gap-6 mt-2 flex-wrap'>
                    <Transition isAnimate={true} delay={0.75}>
                        <Button variant='primary'
                            href={`/documents/cv-${isEnPath ? "english" : "indonesia"}.pdf`}>
                            {t("download_cv")}
                            <i className='bx bxs-arrow-in-down-square-half'></i>
                        </Button>
                    </Transition>
                    <div className='flex gap-4'>
                        <Link href="https://www.linkedin.com/in/arry-kusuma-putra/" target='_blank'>
                            <Transition isAnimate={true} delay={1} className='hover:translate-x-0.5 hover:-translate-y-0.5 duration-300 cursor-pointer hover:text-primary'>
                                <svg className='dark:fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                            </Transition>
                        </Link>
                        <Link href="https://www.instagram.com/rryputra/" target='_blank'>
                            <Transition isAnimate={true} delay={1.25} className='hover:translate-x-0.5 hover:-translate-y-0.5 duration-300 cursor-pointer hover:text-primary'>
                                <svg className='dark:fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>
                            </Transition>
                        </Link>
                        <Link href="https://wa.me/6281350445065" target='_blank'>
                            <Transition isAnimate={true} delay={1.5} className='hover:translate-x-0.5 hover:-translate-y-0.5 duration-300 cursor-pointer hover:text-primary'>
                                <svg className='dark:fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg>
                            </Transition>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='relative w-full max-w-110'>
                <svg className='w-full max-lg:absolute max-lg:bottom-0' viewBox="0 0 521 422" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M480.953 12.5088C500.36 7.20058 519.5 21.8076 519.5 41.9277V364C519.5 380.845 505.845 394.5 489 394.5H53C36.1553 394.5 22.5 380.845 22.5 364V161.181C22.5002 147.435 31.6947 135.388 44.9531 131.762L480.953 12.5088Z" stroke="currentColor" className='black/25 dark:stroke-white' strokeWidth="3" />
                    <path d="M0 187.181C0 172.759 9.64683 160.12 23.5576 156.315L459.558 37.0617C479.919 31.4924 500 46.8182 500 67.9279V390C500 407.673 485.673 422 468 422H32C14.3269 422 0 407.673 0 390V187.181Z" fill="url(#paint0_linear_117_18)" />
                    <defs>
                        <linearGradient id="paint0_linear_117_18" x1="0" y1="422" x2="464.623" y2="-11.8831" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#143FFF" />
                            <stop offset="1" stopColor="#3589FF" />
                        </linearGradient>
                    </defs>
                </svg>
                <Transition isAnimate={true} delay={1.5} type="fade">
                    <Image src="/sit-and-smile-guy.png" width={350} height={425} alt='Sit and Smile Guy'
                        className='lg:absolute lg:bottom-0 lg:-translate-x-1/2 lg:left-1/2 max-lg:relative
                           mx-auto' />
                </Transition>
                <Image src="/pattern.svg" width={180} height={180} alt='Pattern'
                    className='absolute lg:right-20 lg:-top-16 pointer-events-none -z-10
                        max-lg:-right-10 max-lg:top-10' />

                <Transition isAnimate={true} delay={1.5} type="fade">
                    <div
                        className='border border-primary/25 absolute p-2 rounded-full 
                            bg-gradient-to-br from-white to-[#EBEFFF] bottom-[15%] left-[17%] 
                            animate-[float_3s_ease-in-out_infinite] max-sm:scale-90'>
                        <Image src="/icons/vscode.svg" width={28} height={28} alt='Visual Studio Code Icon' />
                    </div>
                </Transition>
                <Transition isAnimate={true} delay={1.75} type="fade">
                    <div className='border border-primary/25 absolute p-2 rounded-full 
                        bg-gradient-to-br from-white to-[#EBEFFF] top-[30%] right-[20%] 
                        animate-[float_3.5s_ease-in-out_infinite] max-sm:scale-90'>
                        <Image src="/icons/android.svg" width={28} height={28} alt='Visual Studio Code Icon' />
                    </div>
                </Transition>
                <Transition isAnimate={true} delay={2} type='fade'>
                    <div className='border border-primary/25 absolute p-2 rounded-full 
                        bg-gradient-to-br from-white to-[#EBEFFF] -bottom-[5%] left-1/2
                        animate-[float_3.5s_ease-in-out_infinite] max-sm:scale-90'>
                        <Image src="/icons/figma.svg" width={28} height={28} alt='Visual Studio Code Icon' />
                    </div>
                </Transition>
            </div>

            <Transition isAnimate={true} className='lg:absolute lg:bottom-8 flex gap-3 items-center' delay={1.5}>
                <Image src="/icons/nextjs.svg" width={28} height={28} alt='Next.js Logo' className='dark:invert' />
                <span className='text-sm opacity-75'>{t("made_with_nextjs")}</span>
            </Transition>
        </Section>

    )
}
