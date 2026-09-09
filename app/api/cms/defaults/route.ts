import { NextRequest, NextResponse } from "next/server";

import { locales, type Locale } from "@/i18n/config";
import { cmsPages, type CmsPageKey } from "@/lib/cms/config";
import { getDefaultCmsDocument } from "@/content/default-document";

export async function GET(request: NextRequest) {
  const pageKey = request.nextUrl.searchParams.get("pageKey") ?? "home";
  const requestedLocale = request.nextUrl.searchParams.get("locale") ?? "en";
  const locale = locales.includes(requestedLocale as Locale)
    ? (requestedLocale as Locale)
    : "en";

  if (!cmsPages.some((page) => page.key === pageKey)) {
    return NextResponse.json({ error: "Unknown CMS page" }, { status: 404 });
  }

  return NextResponse.json({
    configured: Boolean(
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    ),
    pages: cmsPages,
    document: await getDefaultCmsDocument(pageKey as CmsPageKey, locale),
  });
}
