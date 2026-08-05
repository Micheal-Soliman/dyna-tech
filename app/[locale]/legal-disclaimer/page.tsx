import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

const disclaimerSectionsEn = [
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

const disclaimerSectionsAr = [
  {
    title: "1. ملكية المحتوى وحقوق الملكية الفكرية",
    body: "جميع المحتويات المنشورة والمتاحة على هذا الموقع، بما في ذلك على سبيل المثال لا الحصر النصوص والرسومات والشعارات والصور والمقاطع الصوتية والتنزيلات الرقمية وتجميعات البيانات والبرمجيات، هي ملك لشركة DYNATECH أو موردي محتواها أو شركائها أو الشركات التابعة لها، باستثناء المعلومات المنقولة عن مصادر رسمية أخرى معروفة. وتخضع جميع هذه المحتويات لقوانين حقوق النشر والملكية الفكرية الوطنية والدولية. ويُحظر تماما نسخ أي مادة من هذا الموقع أو إعادة إنتاجها أو توزيعها أو نشرها دون موافقة كتابية صريحة.",
  },
  {
    title: "2. لأغراض معلوماتية فقط",
    body: "المعلومات الواردة في هذا الموقع مقدمة لأغراض معلوماتية عامة فقط ولا تشكل مشورة مهنية. ورغم حرص DYNATECH على تحديث المعلومات وصحتها، فإنها لا تقدم أي تعهدات أو ضمانات، صريحة أو ضمنية، بشأن اكتمال الموقع أو دقته أو موثوقيته أو ملاءمته أو توافره، أو بشأن المعلومات أو المنتجات أو الخدمات أو الرسومات ذات الصلة الواردة فيه.",
  },
  {
    title: "3. حدود المسؤولية",
    body: "لا تتحمل DYNATECH أو شركاتها التابعة أو مديروها أو موظفوها أو شركاؤها، تحت أي ظرف، المسؤولية عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية أو عقابية تنتج عن دخولك إلى هذا الموقع أو استخدامه أو عدم قدرتك على استخدامه، أو عن أي أخطاء أو سهو في محتواه.",
  },
  {
    title: "4. إخلاء المسؤولية عن الروابط الخارجية",
    body: "قد يحتوي هذا الموقع على روابط لمواقع خارجية لا توفرها DYNATECH ولا تديرها ولا ترتبط بها بأي شكل. وننوه إلى أننا لا نضمن دقة المعلومات الموجودة على هذه المواقع الخارجية أو مدى صلتها أو حداثتها أو اكتمالها.",
  },
  {
    title: "5. الاحتفاظ بالحقوق",
    body: "نحتفظ بالحق الكامل في إضافة محتوى هذا الموقع أو حذفه أو تعديله، وكذلك تحديث إخلاء المسؤولية القانونية هذا، في أي وقت ودون إشعار مسبق.",
  },
  {
    title: "6. حقوق شركائنا",
    body: "تخضع جميع المواد المرئية، بما في ذلك مقاطع الفيديو التشويقية والمسارات الصوتية، لقوانين الملكية الفكرية. ويحتفظ شركاؤنا، ومنهم FFT Produktionssysteme GmbH وComposites United (CU) والكيانات التابعة لهم، بجميع الحقوق المتعلقة بمعلوماتهم الفنية وغير الفنية وعلاماتهم التجارية وتصميماتهم الهندسية المذكورة في هذا الموقع.",
  },
];

export async function generateMetadata({ params }: { params: { locale: Locale } | Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);
  return locale === "ar"
    ? { title: "إخلاء المسؤولية القانونية", description: "سياسة الخصوصية وإخلاء مسؤولية موقع DYNATECH وشروط الاستخدام." }
    : { title: "Legal Disclaimer", description: "DYNATECH privacy policy, website disclaimer, and terms of use." };
}

export default async function LegalDisclaimerPage({
  params,
}: {
  params: { locale: Locale } | Promise<{ locale: Locale }>;
}) {
  const { locale } = await Promise.resolve(params);
  const isAr = locale === "ar";
  const disclaimerSections = isAr ? disclaimerSectionsAr : disclaimerSectionsEn;

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen bg-[#0a0f29] px-5 pb-20 pt-32 text-white sm:px-6 md:px-12 lg:px-20"
    >
      <section className="mx-auto max-w-5xl">
        <div className={`mb-10 ${isAr ? "border-r pr-5" : "border-l pl-5"} border-[#43becc]`}>
          <p className="text-[10px] font-black uppercase tracking-[0.34em] text-[#43becc]">
            {isAr ? "قانوني" : "Legal"}
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">
            {isAr ? "سياسة الخصوصية / إخلاء مسؤولية الموقع" : "Privacy Policy / Website Disclaimer"}
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-semibold leading-relaxed text-zinc-400 md:text-base">
            {isAr
              ? "توضح هذه الصفحة الشروط القانونية وملكية المحتوى وحدود المسؤولية وحقوق الشركاء المتعلقة باستخدام موقع DYNATECH."
              : "This page outlines the legal terms, content ownership, liability limitations, and partner rights related to the use of the DYNATECH website."}
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
