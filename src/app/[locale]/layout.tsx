import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

import type { Ii18nLocales } from '@/types/global';
import { AppProvider } from '@/config/AppProvider';

import { getI18nLocales } from '@/utils/getI18nLocales';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams(): Ii18nLocales[] {
  return getI18nLocales();
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}): Promise<JSX.Element> {
  let messages;

  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <div className={inter.className}>
      <AppProvider locale={locale} messages={messages}>
        {children}
      </AppProvider>
    </div>
  );
}
