import "../globals.css";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import type {ReactNode} from "react";
import type {Locale} from "@/i18n/config";
import {locales} from "@/i18n/config";

export const dynamic = "force-static";

export function generateStaticParams(){ return locales.map(l=>({locale:l})); }

export default async function LocaleLayout(
  {children, params}:{children:ReactNode; params:{locale:Locale}}
){
  const messages = await getMessages();
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
