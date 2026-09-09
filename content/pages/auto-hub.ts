import type { Locale } from "@/i18n/config";
import type { AutoHubContent, ProjectFigure, TeamMember } from "@/content/schema/site";

const teamEn: TeamMember[] = [
  { category: "The Founder", name: "Eng. Ahmed Sorour", image: "/team/Eng.Ahmed Sorour.jpeg", imagePosition: "50% 15%", biography: "Eng. Ahmed is the founder and CEO of DYNATECH, he has nearly 30 years of experience working with leading global automotive OEMs, including TOYOTA, BMW, JLR, and Volkswagen. His career includes serving in C suite roles and on the advisory boards of several major business conglomerates & sovereign wealth fund across the MENA region, contributing strategic leadership and industry expertise at the highest levels." },
  { category: "The Architect", name: "Eng. Peter Maher", image: "/team/Eng.Peter Maher.jpeg", imagePosition: "50% 35%", biography: "Eng. Peter brings over 20 years of experience in designing major residential, commercial, and hospitality projects. Throughout his career, he has collaborated with leading organizations, including Orascom Development, Living In, GIZ-GmbH, and government institutions such as CAOA. His architectural approach is guided by a modern design philosophy that prioritizes environmental sustainability, efficiency, and the principle of “form follows function” in both design and material selection, while preserving the aesthetic quality and visual appeal of each project. Peter is the founder of Genesis Design Studio, recognized as one of Egypt’s leading design houses" },
  { category: "The Structure Designer", name: "Dr. Ahmed El Nadi", image: "/team/Dr.Ahmed El Nadi.jpeg", imagePosition: "50% 12%", biography: "DR. Ahmed is a Structural Engineering Consultant and Assistant Professor (PHD) with over 18 years of experience in structural analysis and design across residential, commercial, industrial, high-rise, and special structures. He has contributed to major reinforced-concrete towers, infrastructure, water, and wastewater projects, with international research published in seismic behaviour, resilient structures, offshore foundations, strengthening, and advanced finite-element modelling." },
  { category: "The High-Tech Advisor", name: "Eng. Saleh Saadany", image: "/team/Eng.Saleh El Saadany.jpeg", imagePosition: "50% 28%", biography: "He brings over 30 years of experience in managing and operating automotive service centres, with a proven track record working with leading international automotive brands, including BMW and Land Rover. He has played a key role in redesigning, equipping, upgrading, and modernizing several BMW Group service centres across Egypt and the Gulf region, significantly enhancing their operational efficiency. He has also served as a consultant to multiple automotive agencies, supporting improvements in productivity, service quality, and overall operational performance." },
];

const teamAr: TeamMember[] = [
  { category: "المؤسس", name: "م. أحمد سرور", image: "/team/Eng.Ahmed Sorour.jpeg", imagePosition: "50% 15%", biography: "م. أحمد هو مؤسس والرئيس التنفيذي لشركة دايناتك، ويتمتع بخبرة تقارب 30 عاما في العمل مع كبرى شركات تصنيع السيارات العالمية، بما في ذلك TOYOTA وBMW وJLR وVolkswagen. وشملت مسيرته تولي مناصب تنفيذية عليا والعمل في المجالس الاستشارية لعدد من كبرى التكتلات التجارية وصناديق الثروة السيادية في منطقة الشرق الأوسط وشمال أفريقيا، مساهما بقيادة استراتيجية وخبرة صناعية على أعلى المستويات." },
  { category: "المعماري", name: "م. بيتر ماهر", image: "/team/Eng.Peter Maher.jpeg", imagePosition: "50% 35%", biography: "يتمتع م. بيتر بخبرة تزيد على 20 عاما في تصميم المشروعات السكنية والتجارية والفندقية الكبرى. وخلال مسيرته، تعاون مع مؤسسات رائدة، بما في ذلك Orascom Development وLiving In وGIZ-GmbH، ومؤسسات حكومية مثل CAOA. ويسترشد نهجه المعماري بفلسفة تصميم حديثة تعطي الأولوية للاستدامة البيئية والكفاءة ومبدأ «الشكل يتبع الوظيفة» في التصميم واختيار المواد، مع الحفاظ على الجودة الجمالية والجاذبية البصرية لكل مشروع. بيتر هو مؤسس Genesis Design Studio، المعترف به كأحد بيوت التصميم الرائدة في مصر." },
  { category: "المصمم الإنشائي", name: "د. أحمد النادي", image: "/team/Dr.Ahmed El Nadi.jpeg", imagePosition: "50% 12%", biography: "د. أحمد استشاري هندسة إنشائية وأستاذ مساعد حاصل على الدكتوراه، ويتمتع بخبرة تزيد على 18 عاما في التحليل والتصميم الإنشائي للمشروعات السكنية والتجارية والصناعية والأبراج والمنشآت الخاصة. وقد ساهم في أبراج كبرى من الخرسانة المسلحة ومشروعات البنية التحتية والمياه والصرف الصحي، وله أبحاث دولية منشورة في السلوك الزلزالي والمنشآت المرنة والأساسات البحرية والتدعيم والنمذجة المتقدمة بالعناصر المحدودة." },
  { category: "مستشار التكنولوجيا المتقدمة", name: "م. صالح سعدني", image: "/team/Eng.Saleh El Saadany.jpeg", imagePosition: "50% 28%", biography: "يتمتع بخبرة تزيد على 30 عاما في إدارة وتشغيل مراكز خدمة السيارات، وسجل مثبت في العمل مع علامات سيارات عالمية رائدة، بما في ذلك BMW وLand Rover. وقد أدى دورا رئيسيا في إعادة تصميم وتجهيز وتطوير وتحديث عدد من مراكز خدمة BMW Group في مصر ومنطقة الخليج، مما عزز كفاءتها التشغيلية بشكل كبير. كما عمل مستشارا لعدد من وكالات السيارات، داعما تحسين الإنتاجية وجودة الخدمة والأداء التشغيلي العام." },
];

const figuresEn: ProjectFigure[] = [
  { label: "Built-Up Area (BUA)", value: "6,000 sqm", countTo: 6000, suffix: " sqm", description: "of state-of-the-art facility space" },
  { label: "Service Capacity", value: "36", countTo: 36, description: "fully equipped work bays handling up to 40 vehicles daily" },
  { label: "Strategic Infrastructure", value: "6", countTo: 6, description: "Structured across 6 Strategic Business Units (SBUs)" },
  { label: "Financial Investment", value: "250M EGP", countTo: 250, suffix: "M EGP", description: "projected initial investment" },
  { label: "Profitability", value: "12%", countTo: 12, suffix: "%", description: "expected Return on Investment (ROI)" },
  { label: "Leadership Expertise", value: "30 years", countTo: 30, suffix: " years", description: "Backed by 30 years of automotive industry management experience" },
  { label: "Project Timeline", value: "Q4 2027", description: "Soft opening projected for Q4 2027" },
  { label: "Market Innovation", value: "1ST", countTo: 1, suffix: "ST", description: "service centre in Egypt& MENA region featuring real-time Battery Electric Vehicle (BEV) diagnostics powered by AI and Machine Learning" },
];

const figuresAr: ProjectFigure[] = [
  { label: "المساحة المبنية (BUA)", value: "6,000 متر مربع", countTo: 6000, suffix: " متر مربع", description: "من مساحة المنشأة الحديثة" },
  { label: "الطاقة الخدمية", value: "36", countTo: 36, description: "مساحة عمل مجهزة بالكامل تتعامل مع ما يصل إلى 40 سيارة يوميا" },
  { label: "البنية التحتية الاستراتيجية", value: "6", countTo: 6, description: "مهيكلة عبر 6 وحدات أعمال استراتيجية (SBUs)" },
  { label: "الاستثمار المالي", value: "250 مليون جنيه", countTo: 250, suffix: " مليون جنيه", description: "استثمار أولي متوقع" },
  { label: "الربحية", value: "12%", countTo: 12, suffix: "%", description: "عائد متوقع على الاستثمار (ROI)" },
  { label: "خبرة القيادة", value: "30 عاما", countTo: 30, suffix: " عاما", description: "مدعومة بخبرة 30 عاما في إدارة صناعة السيارات" },
  { label: "الجدول الزمني للمشروع", value: "الربع الرابع 2027", description: "الافتتاح التجريبي المتوقع في الربع الرابع من عام 2027" },
  { label: "ابتكار السوق", value: "الأول", countTo: 1, suffix: "ST", description: "مركز خدمة في مصر ومنطقة الشرق الأوسط وشمال أفريقيا يوفر تشخيصا لحظيا للمركبات الكهربائية بالبطارية (BEV) مدعوما بالذكاء الاصطناعي وتعلم الآلة" },
];

export function getAutoHubContent(locale: Locale): AutoHubContent {
  if (locale === "ar") {
    return {
      heroLines: ["6 وحدات أعمال استراتيجية.", "مركز سيارات واحد متكامل."],
      introductionTitle: "مقدمة المشروع",
      introduction: "مشروع مركز السيارات هو منشأة شاملة من فئة 3S تقع استراتيجيا في المنطقة الصناعية بالقاهرة الجديدة. بمساحة تشغيلية مبنية تبلغ 6,000 متر مربع، صمم المركز لخدمة ما يصل إلى 40 سيارة يوميا، لتلبية احتياجات ما بعد البيع لكل من سيارات محركات الاحتراق الداخلي (ICE) وجميع أنواع سيارات الطاقة الجديدة (NEVs). ستجمع المنشأة مجموعة واسعة من خدمات السيارات المتكاملة، بما في ذلك الخدمات الميكانيكية والكهربائية، والسمكرة، وقطع الغيار، والإصلاح الذكي، ومراكز التدريب المتخصصة لأحدث تقنيات السيارات. كما ستشمل معرضا للسيارات المستعملة يقدم سيارات بضمان ممتد وباقات صيانة. سيمثل هذا المشروع علامة فارقة في سوق السيارات المصري، إذ يخطط له أن يصبح أول مركز خدمة مدعوم بأدوات الذكاء الاصطناعي المتقدمة، بما في ذلك تعلم الآلة وتقنيات التوأم الرقمي، لينقل صيانة السيارات من الصيانة الوقائية إلى الصيانة التنبؤية. ومن خلال منصات الذكاء الاصطناعي المتقدمة هذه، أصبح من الممكن في صيانة السيارات التنبؤ بالأعطال المحتملة واكتشافها مبكرا، وتحديد موقعها بدقة، والتدخل في الوقت المناسب لمنع الأعطال مع خفض تكاليف الإصلاح ووقت التوقف، بما يعود بالنفع في النهاية على مالكي السيارات.",
      teamTitle: "فريق إدارة المشروع", team: teamAr, figuresTitle: "أهم أرقام مشروع مركز السيارات", figures: figuresAr, galleryTitle: "معرض المشروع",
    };
  }
  return {
    heroLines: ["6 STRATEGIC BUSINESS UNITS .", "ONE INEGRATED AUTO HUB ."],
    introductionTitle: "Project INTRODUCTION",
    introduction: "The Automotive Hub Project is a comprehensive 3S Facility strategically located in the New Cairo Industrial Zone. With an operational built-up area of 6,000 sqm, the hub is designed to serve up to 40 car/day, addressing the aftermarket needs of both (ICE) & all types of (NEVs) cars. The facility will bring together a wide range of integrated automotive services, including mechanical and Electrical services, Body Shop, spare parts, SMART Repair, and specialized training centres for the latest automotive technologies. It will also include A Showroom for pre-owned vehicles , offering vehicles with extended warranty and maintenance packages. This project will be a milestone in the Egyptian automotive market, as it is planned to become the First Service Centre Powered by advanced AI tools, including Machine Learning & Digital Twin technologies, transforming car maintenance from preventive maintenance into predictive maintenance. Through these advanced AI platforms, it has become possible in car maintenance to predict and detect potential faults early, identify their exact location, and intervene at the right time to prevent breakdowns while reducing repair costs and downtime, ultimately benefiting car owners.",
    teamTitle: "Project Management Team", team: teamEn, figuresTitle: "The Auto Hub — Key Project Figures", figures: figuresEn, galleryTitle: "Project Gallery",
  };
}
