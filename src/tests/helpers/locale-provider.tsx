import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

export const LocaleTestProvider = ({
  children,
  messages,
}: {
  children: React.ReactNode;
  messages?: AbstractIntlMessages | undefined;
}) => (
  <NextIntlClientProvider messages={messages} locale="en">
    {children}
  </NextIntlClientProvider>
);