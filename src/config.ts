import { Pathnames } from "next-intl/navigation";

import { Routes } from "./constants/routes";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${port}`;

export const locales = ["en", "ru"];
export type LocalesType = typeof locales;

export const pathnames = {
  "/": Routes.HOME,
  "/blog": Routes.BLOG,
  "/about-us": Routes.ABOUT_US,
  "/category": Routes.CATEGORY,
  "/author": Routes.AUTHOR,
  "/contact": Routes.CONTACT,
  "/privacy-policy": Routes.PRIVACY_POLICY,
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
