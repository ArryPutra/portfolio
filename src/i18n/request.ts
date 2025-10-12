import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

// Fungsi untuk load messages dengan try/catch agar build tidak gagal
async function loadMessages(names: string[], locale: string) {
    const messages: Record<string, unknown> = {};

    for (const name of names) {
        try {
            // Pastikan path JSON sesuai case folder
            messages[name] = (await import(`../messages/${name}/${locale}.json`)).default;
        } catch {
            console.warn(`Message file not found: ${name}/${locale}.json`);
            messages[name] = {}; // fallback agar tidak crash
        }
    }

    return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
    // requestLocale biasanya string, tidak perlu await
    const requested = requestLocale;

    // Pastikan locale valid
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    const messages = await loadMessages(
        [
            'header',
            'home',
            'about',
            'skills',
            'works',
            'projects',
            'certificates',
            'contact',
            'footer'
        ],
        locale
    );

    return {
        locale,
        messages
    };
});
