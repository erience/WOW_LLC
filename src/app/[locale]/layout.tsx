import "../../styles/index.css"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { MetadataSeo } from "@/data/metadata";
import Providers from "./Provider";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const isDev = process.env.NODE_ENV === 'development'

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "SEO" })
    const title = t("title")
    const description = t("description")

    return MetadataSeo({ locale, title, description })
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const { locale } = await params;
    unstable_setRequestLocale(locale)
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning={isDev}>
            <head>
                <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
                <meta name="application-name" content="WOW LLC" />
                <meta name="author" content="wow" />
                <meta name="keywords" content="WOW LLC, Crypto Bank, Forex Bank, and TOP ICO, Ai Crypto, RWA Crypto" />
                <meta name="description" content="Tokenize and own real-world assets—real estate, art, commodities, and intellectual property—seamlessly on the blockchain. Unlock limitless liquidity, borderless ownership, and boundless investment opportunities. With blockchain-driven transparency and efficiency, WOW Finance is creating a decentralized financial ecosystem where innovation meets opportunity." />
                <link
                    rel="apple-touch-icon"
                    href="/apple-icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" />
            </head>
            <body suppressHydrationWarning={true}>

                <NextIntlClientProvider messages={messages}>
                    <Providers>
                        {children}
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
