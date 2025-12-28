import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

import { AppProvider } from '@/config/AppProvider';

import { getI18nLocales } from '@/utils/getI18nLocales';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams(): { locale: string }[] {
  return getI18nLocales().map((locale) => ({
    locale: String(locale)
  }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}): Promise<JSX.Element> {
  let messages;

  try {
    messages = (await import(`../../locales/${params.locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <div className={inter.className}>
      <AppProvider locale={params.locale} messages={messages}>
        {children}
      </AppProvider>
    </div>
  );
}
