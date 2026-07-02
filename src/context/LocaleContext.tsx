import { createContext, useContext, useState, type ReactNode } from 'react';
import type { IProps } from '../locales/IProps';
import { en } from '../locales/en';
import { es } from '../locales/es';

export type Locale = 'en' | 'es';

const getDefaultLocale = (): Locale => {
  if (typeof navigator === 'undefined') return 'en';
  return navigator.language.startsWith('es') ? 'es' : 'en';
};

interface LocaleContextValue {
  locale: Locale;
  lang: IProps;
  setLocale: (l: Locale) => void;
}

const LocaleCtx = createContext<LocaleContextValue | null>(null);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(getDefaultLocale);

  return (
    <LocaleCtx.Provider value={{ locale, lang: locale === 'en' ? en : es, setLocale }}>
      {children}
    </LocaleCtx.Provider>
  );
};

export const useLocale = (): LocaleContextValue => {
  const ctx = useContext(LocaleCtx);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
};
