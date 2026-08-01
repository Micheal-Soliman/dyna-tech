import { NextRequest, NextResponse } from "next/server";

import { defaultLocale, locales, type Locale } from "@/i18n/config";

function getPreferredLocale(): Locale {
  // Always default to English for new visitors
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  const hasLocale = locales.includes(first as Locale);

  if (hasLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", first);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    response.cookies.set("locale", first, { path: "/" });
    return response;
  }

  const cookieLocale = request.cookies.get("locale")?.value;
  const locale = locales.includes(cookieLocale as Locale)
    ? (cookieLocale as Locale)
    : getPreferredLocale();

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.cookies.set("locale", locale, { path: "/" });
  return response;
}
