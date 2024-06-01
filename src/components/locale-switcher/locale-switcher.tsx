"use client";

import { useLocale } from "next-intl";
import { ChangeEvent } from "react";

import { locales } from "@/config";
import { usePathname, useRouter } from "@/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    router.replace(pathname, { locale: e.target.value });
  }

  return (
    <select defaultValue={locale} onChange={onSelectChange}>
      {locales.map((currLocale) => (
        <option key={currLocale} value={currLocale}>
          {currLocale}
        </option>
      ))}
    </select>
  );
}
