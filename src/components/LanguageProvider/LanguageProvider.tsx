"use client";

import { I18nProvider } from "react-aria-components";

function LanguageProvider({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  return <I18nProvider locale={lang}>{children}</I18nProvider>;
}

export default LanguageProvider;
