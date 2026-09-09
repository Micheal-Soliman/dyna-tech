import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

import { verifyCmsAdmin } from "@/lib/cms/admin";

const pagePaths: Record<string, string> = {
  home: "",
  "about-us": "/about-us",
  "technology-partners": "/technology-partners",
  "partner-fft": "/technology-partners/fft",
  "partner-cu": "/technology-partners/composites-united",
  "the-auto-hub": "/the-auto-hub",
  "tech-info": "/tech-info",
  careers: "/careers",
  contact: "/contact",
  "legal-disclaimer": "/legal-disclaimer",
};

export async function POST(request: NextRequest) {
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  if (!(await verifyCmsAdmin(token))) {
    return NextResponse.json({ error: "Administrator access required." }, { status: 403 });
  }

  const { pageKey, locale } = (await request.json()) as { pageKey?: string; locale?: string };
  if (locale !== "en" && locale !== "ar") {
    return NextResponse.json({ error: "Unsupported locale." }, { status: 400 });
  }

  if (pageKey === "global") {
    for (const path of Object.values(pagePaths)) revalidatePath(`/${locale}${path}`);
  } else if (pageKey && pagePaths[pageKey] !== undefined) {
    revalidatePath(`/${locale}${pagePaths[pageKey]}`);
  } else {
    return NextResponse.json({ error: "Unknown page." }, { status: 400 });
  }

  return NextResponse.json({ revalidated: true });
}

