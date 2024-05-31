import "@/styles/globals.scss";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";

import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { inter, sen } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Client Blog",
  description: "Modsen client blog Albedo-13",
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params }: Props) {
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body className={`${inter.variable} ${sen.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
