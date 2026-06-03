import EventsMediaPage, {
  type EventsMediaContent,
} from "@/components/media/EventsMediaPage";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type MediaDictionary = {
  media: EventsMediaContent;
};

export default async function Page({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const dict = (await getDictionary(locale)) as MediaDictionary;

  return <EventsMediaPage content={dict.media} locale={locale} />;
}
