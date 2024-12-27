import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import i18n from "../i18n";

const DEFAULT_LOCALE = i18n.options.fallbackLng as string;

export function getLocale(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const firstPathPart = pathname.split('/')[1];

  if (i18n.options.supportedLngs && i18n.options.supportedLngs.includes(firstPathPart)) {
    return firstPathPart;
  }
  
  return DEFAULT_LOCALE;
}

export function shouldRedirect(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const firstPathPart = pathname.split('/')[1];

  return !i18n.options.supportedLngs || !i18n.options.supportedLngs.includes(firstPathPart);
}

export function redirectToLocale(request: Request, locale = DEFAULT_LOCALE) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // If pathname is just "/", add locale
  if (pathname === "/") {
    return redirect(`/${locale}`);
  }

  // Otherwise, insert locale as first path segment
  const newPathname = `/${locale}${pathname}`;
  url.pathname = newPathname;
  
  return redirect(url.toString());
}

export async function languageMiddleware({ request }: LoaderFunctionArgs) {
  if (shouldRedirect(request)) {
    return redirectToLocale(request);
  }
  return null;
}
