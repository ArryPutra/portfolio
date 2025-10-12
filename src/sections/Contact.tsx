'use client';
import Pattern from '@/components/Pattern';
import Transition from '@/components/Transition';
import Section from '@/layouts/Section'
import { useTranslations } from 'next-intl';
import React, { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
    name: string;
    mail: string;
    message: string;
}

export default function Contact() {
    const t = useTranslations('contact');

    const [formData, setFormData] = useState<FormData>({
        name: '',
        mail: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setShowAlert(false);

        try {
            const response = await fetch('https://formspree.io/f/xqayydag', {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: new FormData(e.currentTarget),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', mail: '', message: '' }); // reset
                setShowAlert(true);
            } else {
                setStatus('error');
                setShowAlert(true);
            }
        } catch {
            setStatus('error');
            setShowAlert(true);
        }
    };

    return (
        <Section id='contact' parentClassName='bg-primary dark:bg-secondary relative' className='text-white flex flex-col items-center'>
            <div className='text-center'>
                <Transition delay={0.25} className='text-center'>
                    <h1 className='text-3xl'><strong>{t('title.part_1')}</strong> {t('title.part_2')}</h1>
                </Transition>
                <Transition delay={0.5}>
                    <p className='mt-2'>{t('desc')}</p>
                </Transition>
            </div>

            {showAlert && status === 'success' && (
                <Alert
                    status='success'
                    message={t('message_sent_successfully')}
                    onClose={() => setShowAlert(false)} />
            )}
            {showAlert && status === 'error' && (
                <Alert
                    status='error'
                    message={t('an_error')}
                    onClose={() => setShowAlert(false)} />
            )}

            <form
                onSubmit={handleSubmit}
                className={`max-w-lg flex flex-col gap-4 w-full ${showAlert ? 'mt-6' : 'mt-10'}`}>
                <div className="relative w-full group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/10 px-4 py-2 rounded-lg placeholder:font-light
            pl-10 outline-none w-full border-2 border-transparent focus:border-white/25
            duration-300" />
                    <i className="bx bxs-user absolute left-3 top-1/2 -translate-y-1/2 opacity-50
          group-focus-within:opacity-100 duration-150"></i>
                </div>

                <div className="relative w-full group">
                    <input
                        type="email"
                        name="mail"
                        placeholder="your@mail.com"
                        value={formData.mail}
                        onChange={handleChange}
                        required
                        className="bg-white/10 px-4 py-2 rounded-lg placeholder:font-light
            pl-10 outline-none w-full border-2 border-transparent focus:border-white/25
            duration-300"
                    />
                    <i className="bx bxs-envelope absolute left-3 top-1/2 -translate-y-1/2 opacity-50
          group-focus-within:opacity-100 duration-150"></i>
                </div>

                <textarea
                    name="message"
                    rows={5}
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/10 px-3 py-2 rounded-lg placeholder:font-light
          outline-none w-full resize-none border-2 border-transparent focus:border-white/25
          duration-300"
                ></textarea>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="py-2 rounded-full bg-black/50 font-medium flex gap-2
          items-center justify-center cursor-pointer mt-2">
                    {status === 'loading' ? t("sending") : t("send")}
                    <i className="bx bx-arrow-up-right-stroke"></i>
                </button>
            </form>

            <Pattern className='-bottom-6 -right-9 max-lg:hidden' type='light' />
            <Pattern className='-top-6 -left-9' type='light' />
        </Section>
    )
}

function Alert({ message, status, onClose }: { message: string, status: 'success' | 'error', onClose: () => void }) {
    const t = useTranslations('contact');

    return (
        <Transition className='max-w-lg w-full'>
            <div className='border-2 border-white/10 py-3 px-4 rounded-xl bg-gradient-to-br
            from-white/5 to-white/10 mt-6 shadow-lg flex items-center
            gap-4 w-full max-w-lg relative'>
                <div className='flex gap-4 items-center'>
                    <i className={`bx ${status === 'success' ? 'bx-check' : 'bx-error'} text-xl`}></i>
                    <div className='flex flex-col gap-1'>
                        <span className='text-sm'>
                            {status === 'success' ? t("sent") : t("not_sent")}
                        </span>
                        <p className='text-xs opacity-75'>{message}</p>
                    </div>
                </div>
                <i
                    className='bx bx-x absolute right-2.5 top-3 cursor-pointer opacity-70 hover:opacity-100 duration-150'
                    onClick={onClose}
                ></i>
            </div>
        </Transition>
    )
}
