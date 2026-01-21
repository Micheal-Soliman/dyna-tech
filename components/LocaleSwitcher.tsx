"use client";

import { usePathname, useRouter } from "next/navigation";

export function LocaleSwitcher({
  className,
}: {
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const parts = pathname.split("/").filter(Boolean);
  const currentLocale = parts[0] === "ar" ? "ar" : "en";
  const nextLocale = currentLocale === "ar" ? "en" : "ar";

  const rest = parts.slice(1).join("/");
  const nextPath = rest ? `/${nextLocale}/${rest}` : `/${nextLocale}`;

  return (
    <button
      type="button"
      className={`inline-flex items-center rounded-full border border-black/[.08] px-4 py-2 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] ${
        className ?? ""
      }`}
      onClick={() => router.push(nextPath)}
    >
      {nextLocale.toUpperCase()}
    </button>
  );
}
