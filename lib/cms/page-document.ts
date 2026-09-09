import { getDefaultCmsDocument } from "@/content/default-document";
import type { Locale } from "@/i18n/config";
import { getCmsDocument } from "@/lib/cms/content";
import type { CmsPageKey } from "@/lib/cms/config";
import type { CmsDocument, JsonValue } from "@/lib/cms/types";

export async function getPageDocument<T>(
  pageKey: CmsPageKey,
  locale: Locale,
): Promise<CmsDocument<T>> {
  const fallback = await getDefaultCmsDocument(pageKey, locale);
  return getCmsDocument(
    pageKey,
    locale,
    fallback as unknown as CmsDocument<T>,
  );
}

export async function getRawPageDocument(pageKey: CmsPageKey, locale: Locale) {
  return getPageDocument<JsonValue>(pageKey, locale);
}
