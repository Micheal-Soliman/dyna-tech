import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const disclaimerSections = [
  {
    title: "1. Ownership of Content & Intellectual Property",
    body:
      "All content published and made available on this site, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of DYNATECH, its content suppliers, partners, or affiliated companies, except information shared by other official known sources. All such content is protected by international and national copyright and intellectual property laws. Unauthorized copying, reproduction, redistribution, or publishing of any material from this website without explicit written consent is strictly prohibited.",
  },
  {
    title: "2. Informational Purposes Only",
    body:
      "The information provided on this website is for general informational purposes only and does not constitute professional advice. While we endeavour to keep the information up to date and correct, DYNATECH makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.",
  },
  {
    title: "3. Limitation of Liability",
    body:
      "In no event shall DYNATECH, its affiliated companies, directors, employees, or partners be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, use of, or inability to use this website, or any errors or omissions in its content.",
  },
  {
    title: "4. External Links Disclaimer",
    body:
      "This website may contain links to external websites that are not provided, maintained, or in any way affiliated with DYNATECH. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.",
  },
  {
    title: "5. Reservation of Rights",
    body:
      "We reserve the full right to make additions, deletions, or modifications to the content on this website, as well as to update this legal disclaimer, at any time without prior notice.",
  },
  {
    title: "6. Our Partners Rights",
    body:
      "All visual content, including teaser videos and audio tracks, is protected by intellectual property laws. Our partners, including FFT Produktionssysteme GmbH and Composites United (CU), and their affiliated entities retain all rights to their respective technical and non-technical information, trademarks, and engineering designs mentioned in this website.",
  },
];

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description: "DYNATECH privacy policy, website disclaimer, and terms of use.",
};

export default async function LegalDisclaimerPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const isAr = locale === "ar";

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-[#0a0f29] px-5 pb-20 pt-32 text-white sm:px-6 md:px-12 lg:px-20"
    >
      <section className="mx-auto max-w-5xl">
        <div className="mb-10 border-l border-[#43becc] pl-5">
          <p className="text-[10px] font-black uppercase tracking-[0.34em] text-[#43becc]">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">
            Privacy Policy / Website Disclaimer
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-semibold leading-relaxed text-zinc-400 md:text-base">
            This page outlines the legal terms, content ownership, liability limitations,
            and partner rights related to the use of the DYNATECH website.
          </p>
        </div>

        <div className="space-y-5">
          {disclaimerSections.map((section) => (
            <article
              key={section.title}
              className="border border-white/10 bg-[#121b43]/55 p-5 md:p-7"
            >
              <h2 className="text-base font-black uppercase tracking-[0.08em] text-white md:text-lg">
                {section.title}
              </h2>
              <p className="mt-4 text-sm font-medium leading-8 text-zinc-400 md:text-base">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
