import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

async function loadMessages(names: string[], locale: string) {
    const messages: Record<string, unknown> = {};
    for (const name of names) {
        messages[name] = (await import(`../messages/${name}/${locale}.json`)).default;
    }
    return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    const messages = await loadMessages([
        'header',
        'home',
        'about',
        'skills',
        'works',
        'projects',
        'certificates',
        'contact',
        'footer'
    ], locale);

    return {
        locale,
        messages
    };
});
