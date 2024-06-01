import "@/styles/globals.scss";

import type { Metadata } from "next";

import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { inter, sen } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Client Blog",
  description: "Modsen client blog Albedo-13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sen.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
