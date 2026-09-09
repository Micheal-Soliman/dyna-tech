import { aboutContent } from "@/content/pages/about";
import type { Locale } from "@/i18n/config";
import { getLocaleContent } from "@/content/load-locale";
import { defaultMedia } from "@/content/media";
import type { CmsDocument, JsonValue } from "@/lib/cms/types";
import type { CmsPageKey } from "@/lib/cms/config";
import { globalCmsContent } from "@/content/pages/global";
import { legalContent } from "@/content/pages/legal";
import { getAutoHubContent } from "@/content/pages/auto-hub";
import { getPartnerPageCopy } from "@/content/pages/partners";
import { getTechInfoVideoSection } from "@/content/pages/tech-info";

type Dictionary = Record<string, JsonValue>;

export async function getDefaultCmsDocument(
  pageKey: CmsPageKey,
  locale: Locale,
): Promise<CmsDocument<JsonValue>> {
  if (pageKey === "global") {
    return {
      content: globalCmsContent as unknown as JsonValue,
      media: defaultMedia.global,
    };
  }
  if (pageKey === "about-us") {
    return {
      content: aboutContent[locale] as unknown as JsonValue,
      media: defaultMedia[pageKey],
    };
  }

  if (pageKey === "the-auto-hub") {
    return {
      content: getAutoHubContent(locale) as unknown as JsonValue,
      media: defaultMedia[pageKey],
    };
  }

  if (pageKey === "legal-disclaimer") {
    return {
      content: legalContent[locale] as unknown as JsonValue,
      media: defaultMedia[pageKey],
    };
  }

  const dictionary = (await getLocaleContent(locale)) as Dictionary;

  if (pageKey === "home") {
    const home = dictionary.home as unknown as { hero: JsonValue };
    return { content: { hero: home.hero }, media: defaultMedia.home };
  }

  if (pageKey === "technology-partners") {
    const services = dictionary.services as unknown as {
      hero: JsonValue;
      technologyPartners: JsonValue;
    };
    return {
      content: {
        hero: services.hero,
        technologyPartners: services.technologyPartners,
      },
      media: defaultMedia[pageKey],
    };
  }

  if (pageKey === "tech-info") {
    const blog = dictionary.blog as unknown as { hero: JsonValue };
    return {
      content: {
        hero: blog.hero,
        videoSection: getTechInfoVideoSection(locale),
      } as unknown as JsonValue,
      media: defaultMedia[pageKey],
    };
  }

  if (pageKey === "partner-fft" || pageKey === "partner-cu") {
    const partnerId = pageKey === "partner-fft" ? "fft" : "cu";
    const accelerators = dictionary.accelerators as unknown as {
      partners: Array<{ id: string }>;
      ecosystem: { columns: Array<{ id: string }> };
    };
    const partner = accelerators.partners.find((item) => item.id === partnerId);
    const ecosystemColumn = accelerators.ecosystem.columns.find(
      (item) => item.id === partnerId,
    );
    if (!partner || !ecosystemColumn) {
      throw new Error(`Missing default content for ${pageKey}/${locale}`);
    }
    return {
      content: {
        partner,
        ecosystemColumn,
        copy: getPartnerPageCopy(partnerId, locale),
      } as unknown as JsonValue,
      media: defaultMedia[pageKey],
    };
  }

  const dictionaryKey = pageKey === "careers" ? "careers" : "contact";
  return {
    content: dictionary[dictionaryKey] as JsonValue,
    media: defaultMedia[pageKey],
  };
}
