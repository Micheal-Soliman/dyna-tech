import type { Locale } from "@/i18n/config";

import type { DynatechContent } from "./types";

export const aboutContent: Record<Locale, DynatechContent> = {
  en: {
    company: {
      kicker: "About DYNATECH",
      title: "The Company",
      lead: "",
      paragraphs: [
        "Founded in 2017 under the name DYNATECH Corporation and operating in Egypt under a registered mark (DYNATECH), the company works along with its subsidiary DYNATECH for Industrial Development, this company is capitalized with EGP 15 million fully paid. Currently DYNATECH is investing in the constructing a Fully Integrated Automotive Centre for the automotive services for ICE & BEV, training, and advanced R&D automotive technologies. This Strategic Business Model built on exclusive partnerships with leading global technology entities and platforms.",
        "This model establishes a unique ecosystem that connects international technology providers with opportunities for knowledge transfer, technology localization, and the development of a modern platform that drives business growth and contributes to shaping the future of Egypt’s automotive industry.",
      ],
    },
    founder: {
      kicker: "Leadership",
      name: "Eng. Ahmed Sorour",
      role: "Founder & CEO",
      description:
        "Eng. Ahmed Sorour Is The Founder and CEO of DYNATECH , he brings nearly three decades of experience working with leading global automotive OEMs, including Toyota, BMW, JLR, and Volkswagen. His career includes serving in C suite roles and on the advisory boards of several major business conglomerates across the MENA region, contributing strategic leadership and industry expertise at the highest levels.",
      imageSrc: "/ceo.jpeg",
      imageAlt: "Eng. Ahmed Sorour, Founder and CEO of DYNATECH",
      linkedinUrl:
        "https://www.linkedin.com/in/eng-ahmedsorour?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      linkedinLabel: "Learn More",
    },
    ceoMessage: {
      kicker: "From The CEO",
      title: "CEO Message",
      paragraphs: [
        "It is our pleasure today to launch the new DYNATECH website, which will offer our customers a unique experience to learn more about our services delivered through our technology partner FFT Produktionssysteme, the world-leading German company in innovative, flexible, and complex manufacturing systems. ",
        "FFT specializes in the development, planning, and execution of turn-key solutions worldwide across the automotive, aerospace, white goods sectors and beyond.",
        "Our new website will also showcase the services of our technology partner, Composites United (CU), one of the world’s largest networks dedicated to the design of composite materials and lightweight multi-material components such as aluminium, CFRP . CU brings together 350 prominent members, including Airbus, BMW, VW, and others, making it one of the largest global networks providing research, development, and design solutions for lightweight components across multiple industrial sectors.",
        "Through our website, visitors will also be able to follow the progress of our new project in the New Cairo Industrial Zone, spanning 6,000 sqm. This project will be a milestone in the Egyptian automotive market as the first fully integrated car service centre powered by AI tools such as Machine Learning and Digital Twin technologies, transforming car maintenance from preventive maintenance into predictive maintenance. Through these advanced AI platforms, it has become possible in car maintenance to predict and detect potential faults early, identify their exact location, and intervene at the right time to prevent breakdowns while reducing repair costs and downtime, ultimately benefiting car owners.",
        "The global automotive industry is undergoing an unprecedented technological transformation, moving from ICE powertrain to the New Energy Vehicles NEV . Currently the automotive industry is  evolving rapidly toward the software-defined vehicle (SDV), a moving digital platform connected to the network, reliant on software, over-the-air updates (OTA), and advanced AI platforms for analysing driver and vehicle behaviour to improve safety and performance.",
        "Ultimately, we aim for DYNATECH EGYPT to contribute to industrial development and technology transfer, supporting the goals pursued by the state through Egypt Vision 2030 and placing Egypt on the new global automotive map.",
      ],
      signatureName: "Ahmed Sorour",
      signatureRole: "CEO",
      signatureCompany: "DYNATECH Corp – Egypt",
    },
    timeline: {
      kicker: "Our Progress",
      title: "Timeline",
      items: [
        { year: "2017", desc: "DYNATECH Corp. was established alongside integration into the CFK Valley network in Germany." },
        { year: "2018", desc: "Composites United membership completed and a strategic letter of intent was signed." },
        { year: "2020", desc: "DYNATECH for Industrial Development was established, and land was acquired from NUCA in New Cairo." },
        { year: "2021", desc: "Composites United officially appointed DYNATECH as its exclusive representative in Egypt." },
        { year: "2022", desc: "A strategic partnership agreement was announced during Hannover Messe." },
        { year: "2023", desc: "An exclusive agency agreement was signed with FFT Produktionssysteme GmbH in Fulda, Germany." },
        { year: "2024", desc: "An additional expansion area was acquired for the Auto Hub alongside completion of the CFC Main Office fit-out." },
        { year: "2025", desc: "The Auto Hub design phase was completed, and the CFC office was officially handed over." },
        { year: "2026", desc: "Construction completion and fit-out phase of the Auto Hub." },
        { year: "2027", desc: "Soft opening and operational launch of the DYNATECH Auto Hub." },
      ],
    },
    locations: {
      kicker: "Our Presence",
      title: "Locations",
      items: [
        {
          name: "DYNATECH Main Office",
          detail: "Cairo Festival City, The Podium, P6-109, New Cairo, Egypt.",
        },
        {
          name: "DYNATECH Auto Hub",
          detail: "Industrial Zone, New Cairo, Egypt.",
          status: "Currently Under Construction",
          imageSrc: "/autohub/main.jpeg",
          imageAlt: "DYNATECH Auto Hub project",
        },
      ],
    },
  },
  ar: {
    company: {
      kicker: "عن دايناتك",
      title: "الشركة",
      lead: "",
      paragraphs: [
        "تأسست الشركة عام 2017 تحت اسم دايناتك كوربوريشن وعلامة (دايناتك) المسجلة والشركة التابعة لها دايناتك للتنمية الصناعية وبراس مال مدفوع بالكامل بقيمة 15 مليون جنيه مصري وتقوم دايناتك بالاستثمارلإنشاء مركز متكامل البنية التحتية لخدمة السيارات والتدريب والبحث والتطويرفي التكنولوجيا المتقدمة لصناعة السيارات وذلك لتطويروتشغيل نموذج أعمال يجمع بين الشراكات الحصرية مع كيانات ومنصات تكنولوجية عالمية لخدمة قطاعات متعددة.  هذا النموذج يخلق منظومة فريدة تربط بين مزودي التكنولوجيا العالميين وفرص نقل المعرفة وتوطين التكنولوجيا وبناء منصة تدعم نمو الاعمال وتساهم في دعم مستقبل قطاع صناعة السيارات في مصر.",
      ],
    },
    founder: {
      kicker: "القيادة",
      name: "م. أحمد سرور",
      role: "المؤسس والرئيس التنفيذي",
      description:
        "المهندس أحمد سرور هو مؤسس شركة دايناتك ورئيسها التنفيذي، ويتمتع بخبرة تقارب ثلاثة عقود من العمل مع كبرى شركات تصنيع السيارات العالمية، ومنها Toyota وBMW وJLR وVolkswagen. وشملت مسيرته تولي مناصب تنفيذية عليا وعضوية المجالس الاستشارية لعدد من كبرى مجموعات الأعمال في منطقة الشرق الأوسط وشمال أفريقيا، مقدما خبرة صناعية وقيادة استراتيجية على أعلى المستويات.",
      imageSrc: "/ceo.jpeg",
      imageAlt: "م. أحمد سرور، مؤسس شركة دايناتك ورئيسها التنفيذي",
      linkedinUrl:
        "https://www.linkedin.com/in/eng-ahmedsorour?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      linkedinLabel: "اعرف المزيد",
    },
    ceoMessage: {
      kicker: "من الرئيس التنفيذي",
      title: "كلمة الرئيس التنفيذي",
      paragraphs: [
        "إنه لمن دواعي سرورنا اليوم ان نطلق موقع شركتنا الجديد Dynatech والذي سيمثل لعملائنا تجربة فريدة للتعرف علي خدماتنا التي نقدمها من خلال شركاءنا FFT Produktionssysteme الشركة الالمانية الرائدة عالميا في أنظمة التصنيع المبتكرة المرنة والمعقدة وهي شركة متخصصة في تطويروتخطيط مثل هذه المشاريع وتنفيذها في جميع أنحاء العالم في قطاعي السيارات والطيران .",
        "سيتيح موقعنا الجديد ايضا التعرف علي خدمات شريكنا التكنولوجي  Composites United  وهي واحدة من أكبر الشبكات في العالم لتصميم المواد المركبة والمكونات متعددة المواد الخفيفة مثل الالومنيوم والألياف الكربونية، وتتكون CU  من 350 عضوًابارزأ مثل    Air Bus ,BMW, VW وغيرها لتشكل في النهاية واحدة من اكبر الشبكات في العالم لتقديم تقنيات بحثية وتطويرحلول لتصميم المكونات والقطع من المواد خفيفة الوزن في قطاعات صناعية متعددة.",
        "ومن خلال موقعنا الجديد ايضا يمكن متابعة مراحل تطور مشروعنا الجديد في المنطقة الصناعية بالقاهرة الجديدة علي مساحة تشغيلية 6000 متر مربع والذي سيكون علامة فارقة في سوق السيارات المصري كونه اول مركز خدمة سيارات متكامل تستخدم فيه تكنولوجياMachine Learning & Digital Twin  والذي سيحول تكنولوجيا صيانة السيارات من [الصيانة الوقائية الي الصيانه التنبؤية] فمن خلال هذه المنصات المتقدمة للذكاء الاصطناعي اصبح من السهل التنبؤ والإنذار المبكر عن اي عطل قد يحدث في اي جزء في السيارة وتحديد مكانه بدقه، مما يسمح بالتدخل في الوقت المناسب لمنع الأعطال وتقليل تكاليف الإصلاح والوقت مما يعود بالنفع علي مالك السيارة.",
        "ان صناعة السيارات عالميا حاليا تمر بمرحلة تحول تكنولوجي متسارع و غير مسبوق إنتقالاً من سيارات محركات الاحتراق الداخليICE  الي سيارات  الطاقة الجديدة بانواعها وصولا لتصنيع سيارة تكون بمثابه منصة الكترونيه متحركة SDV و متصلة بالشبكة وتعتمد علي البرمجيات والتحديث عبر الهواء OTA ومنصات متقدمة للذكاء الاصطناعي  لتحليل سلوكيات السائق والمركبة لتحسين السلامة والاداء.",
        "في النهاية نحن نسعي كي تساهم شركتنا دايناتك-مصر في تقديم الدعم للتطورالصناعي ونقل التكنولوجيا وهو الهدف الذي تسعي اليه الدولة من خلال رؤية مصر 2030 لوضع مصرعلي الخارطة الجديدة لصناعة السيارات في العالم.",
      ],
      signatureName: "احمد سرور",
      signatureRole: "الرئيس التنفيذي",
      signatureCompany: "دايناتك كورب- مصر",
    },
    timeline: {
      kicker: "مسيرتنا",
      title: "الخط الزمني",
      items: [
        { year: "2017", desc: "تأسست DYNATECH Corp. بالتوازي مع الانضمام إلى شبكة CFK Valley في ألمانيا." },
        { year: "2018", desc: "اكتملت عضوية Composites United وتم توقيع خطاب نوايا استراتيجي." },
        { year: "2020", desc: "تأسست DYNATECH for Industrial Development، وتم الحصول على أرض من هيئة المجتمعات العمرانية الجديدة في القاهرة الجديدة." },
        { year: "2021", desc: "عينت Composites United شركة دايناتك ممثلا حصريا لها في مصر." },
        { year: "2022", desc: "تم الإعلان عن اتفاقية شراكة استراتيجية خلال Hannover Messe." },
        { year: "2023", desc: "تم توقيع اتفاقية وكالة حصرية مع FFT Produktionssysteme GmbH في فولدا، ألمانيا." },
        { year: "2024", desc: "تم الحصول على مساحة توسعة إضافية لمشروع Auto Hub إلى جانب استكمال تجهيز مقر CFC الرئيسي." },
        { year: "2025", desc: "اكتملت مرحلة تصميم Auto Hub، وتم تسليم مكتب CFC رسميا." },
        { year: "2026", desc: "مرحلة اكتمال إنشاء Auto Hub وأعمال التجهيز." },
        { year: "2027", desc: "الافتتاح التجريبي والإطلاق التشغيلي لمشروع دايناتك Auto Hub." },
      ],
    },
    locations: {
      kicker: "تواجدنا",
      title: "المواقع",
      items: [
        {
          name: "المقر الرئيسي لدايناتك",
          detail: "كايرو فيستيفال سيتي، ذا بوديوم، P6-109، القاهرة الجديدة، مصر.",
        },
        {
          name: "دايناتك Auto Hub",
          detail: "المنطقة الصناعية، القاهرة الجديدة، مصر.",
          status: "قيد الإنشاء حاليا",
          imageSrc: "/autohub/main.jpeg",
          imageAlt: "مشروع دايناتك Auto Hub",
        },
      ],
    },
  },
};
