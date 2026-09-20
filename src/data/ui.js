// Every string the interface shows, in all four languages.
export const LANGS = [
  { code: 'en',  native: 'English',        short: 'EN',  dir: 'ltr' },
  { code: 'ar',  native: 'العربية',         short: 'عربی', dir: 'rtl' },
  { code: 'ckb', native: 'کوردیی ناوەندی',  short: 'کوردی', dir: 'rtl' },
  { code: 'ku',  native: 'کوردی بادینی',    short: 'بادینی', dir: 'rtl' }
];

// Page metadata, one set per language. Deliberately written without a dash
// character in any of the four, per the brand's copy rules.
export const META = {
  en: {
    title: 'Chon · Change your phone number safely',
    description: 'Clear picture by picture guides for changing the phone number on WhatsApp, Telegram, Instagram, Facebook, TikTok, Google and more, without losing your accounts.',
    ogLocale: 'en_US'
  },
  ar: {
    title: 'چۆن · غيّر رقم هاتفك بأمان',
    description: 'أدلة مصوّرة خطوة بخطوة لتغيير رقم الهاتف في واتساب وتيليجرام وإنستغرام وفيسبوك وتيك توك وجوجل وغيرها، دون أن تفقد حساباتك.',
    ogLocale: 'ar_AR'
  },
  ckb: {
    title: 'چۆن · بە سەلامەتی ژمارەکەت بگۆڕە',
    description: 'ڕێنمایی وێنەیی هەنگاو بە هەنگاو بۆ گۆڕینی ژمارەی مۆبایل لە واتسئاپ و تێلێگرام و ئینستاگرام و فەیسبووک و تیکتۆک و گووگڵ و زیاتر، بەبێ ئەوەی هەژمارەکانت لەدەست بدەیت.',
    ogLocale: 'ckb_IQ'
  },
  ku: {
    title: 'چۆن · ب سەلامەتی ژمارا خۆ بگوهۆڕە',
    description: 'ڕێنمایێن وێنەیی گاڤ ب گاڤ بۆ گوهۆڕینا ژمارا مۆبایلی د واتسئاپ و تێلێگرام و ئینستاگرام و فەیسبووک و تیکتۆک و گووگلێ و پترێ دا، بێی کو هەژمارێن خۆ ژ دەست بدەی.',
    ogLocale: 'ku_TR'
  }
};

export const BRAND = { name: 'Chon', amber: '#FFC640', ink: '#1A1A1C' };

export const UI = {
  tagline: {
    en: 'Change your number safely',
    ar: 'غيّر رقمك بأمان',
    ckb: 'بە سەلامەتی ژمارەکەت بگۆڕە',
    ku: 'ب سەلامەتی ژمارا خۆ بگوهۆڕە'
  },
  pickTitle: {
    en: 'Which app?',
    ar: 'أي تطبيق؟',
    ckb: 'کام ئەپ؟',
    ku: 'کیژ ئەپ؟'
  },
  pickSub: {
    en: 'Tap the app you want to change your number in.',
    ar: 'اضغط على التطبيق الذي تريد تغيير رقمك فيه.',
    ckb: 'لەو ئەپە بدە کە دەتەوێت ژمارەکەت تێیدا بگۆڕیت.',
    ku: 'ل وی ئەپی بدە یێ کو دخوازی ژمارا خۆ تێدا بگوهۆڕی.'
  },
  ready: {
    en: 'Ready', ar: 'جاهز', ckb: 'ئامادەیە', ku: 'ئامادەیە'
  },
  soon: {
    en: 'Soon', ar: 'قريباً', ckb: 'بەم زووانە', ku: 'ب زوویی'
  },
  openGuide: {
    en: 'Open guide', ar: 'افتح الدليل', ckb: 'ڕێنمایی بکەرەوە', ku: 'ڕێنمایێ ڤەکە'
  },
  back: {
    en: 'Back', ar: 'رجوع', ckb: 'گەڕانەوە', ku: 'زڤڕین'
  },
  stepOf: {
    en: 'Step {n} of {total}',
    ar: 'الخطوة {n} من {total}',
    ckb: 'هەنگاوی {n} لە {total}',
    ku: 'گاڤا {n} ژ {total}'
  },
  stepsCount: {
    en: '{n} steps', ar: '{n} خطوات', ckb: '{n} هەنگاو', ku: '{n} گاڤ'
  },
  notReadyTitle: {
    en: 'Not ready yet',
    ar: 'غير جاهز بعد',
    ckb: 'هێشتا ئامادە نییە',
    ku: 'هێشتا ئامادە نینە'
  },
  notReadyBody: {
    en: 'We have not photographed the steps for this app yet. Until we do, the official help page is the safest place to look.',
    ar: 'لم نصوّر خطوات هذا التطبيق بعد. إلى أن نفعل، صفحة المساعدة الرسمية هي أأمن مكان للبحث.',
    ckb: 'هێشتا وێنەی هەنگاوەکانی ئەم ئەپەمان نەگرتووە. تا ئەو کاتە، لاپەڕەی یارمەتی فەرمی سەلامەتترین شوێنە.',
    ku: 'هێشتا مە وێنێن گاڤێن ڤی ئەپی نەگرتینە. هەتا وێ دەمێ، لاپەڕا هاریکاریا فەرمی سەلامەتترین جهە.'
  },
  watchVideo: {
    en: 'Watch someone do it',
    ar: 'شاهد شخصاً يقوم بها',
    ckb: 'سەیری کەسێک بکە کە دەیکات',
    ku: 'بەرێ خۆ بدە کەسەکێ کو دکەت'
  },
  videoNote: {
    en: 'Not our video. It is on YouTube, in Arabic, and it opens in another app.',
    ar: 'الفيديو ليس لنا. هو على يوتيوب، بالعربية، ويفتح في تطبيق آخر.',
    ckb: 'ڤیدیۆکە هی ئێمە نییە. لەسەر یوتیوبە، بە عەرەبی، و لە ئەپێکی تردا دەکرێتەوە.',
    ku: 'ڤیدیۆ نە یا مە یە. ل سەر یوتیوبێ یە، ب عەرەبی، و د ئەپەکێ دی دا ڤەدبیت.'
  },
  openOfficial: {
    en: 'Open official help',
    ar: 'افتح المساعدة الرسمية',
    ckb: 'یارمەتی فەرمی بکەرەوە',
    ku: 'هاریکاریا فەرمی ڤەکە'
  },
  warnTitle: {
    en: 'Before you start',
    ar: 'قبل أن تبدأ',
    ckb: 'پێش ئەوەی دەست پێبکەیت',
    ku: 'بەری دەست پێ بکەی'
  },
  warnBody: {
    en: 'Keep your old SIM working until you finish. If your old number is the only way back into your other accounts, change those first.',
    ar: 'أبقِ شريحتك القديمة تعمل حتى تنتهي. إذا كان رقمك القديم هو الطريقة الوحيدة للعودة إلى حساباتك الأخرى، فغيّرها أولاً.',
    ckb: 'سیمکارتە کۆنەکەت بەکاری بهێڵەوە تا تەواو دەبیت. ئەگەر ژمارە کۆنەکەت تەنها ڕێگای گەڕانەوەیە بۆ هەژمارەکانی تر، سەرەتا ئەوانە بگۆڕە.',
    ku: 'سیمکارتا خۆ یا کەڤن بهێلە بخەبتیت هەتا قەدیای. ئەگەر ژمارا تە یا کەڤن تنێ ڕێکا زڤڕینێ یە بۆ هەژمارێن تە یێن دی, بەرێ وان بگوهۆڕە.'
  },
  scamNote: {
    en: 'Never give your number or your code to anyone who offers to do this for you.',
    ar: 'لا تعطِ رقمك أو رمزك لأي شخص يعرض أن يقوم بهذا نيابةً عنك.',
    ckb: 'هەرگیز ژمارە یان کۆدەکەت مەدە بە کەسێک کە پێشنیاری ئەوە دەکات لە جیاتی تۆ ئەمە بکات.',
    ku: 'چو جاران ژمارا خۆ یان کۆدێ خۆ نەدە کەسەکێ یێ دبێژیت ئەز دێ ڤێ بۆ تە کەم.'
  },
  doneTitle: {
    en: 'That is everything',
    ar: 'هذا كل شيء',
    ckb: 'هەموویی ئەوەیە',
    ku: 'هەمی ئەوە یە'
  },
  doneBody: {
    en: 'Your number is changed. Your chats and groups stay where they are.',
    ar: 'تم تغيير رقمك. محادثاتك ومجموعاتك تبقى كما هي.',
    ckb: 'ژمارەکەت گۆڕا. چات و گرووپەکانت لە شوێنی خۆیان دەمێننەوە.',
    ku: 'ژمارا تە هاتە گوهۆڕین. چات و گرووپێن تە ل جهێ خۆ دمینن.'
  },
  disclaimer: {
    en: 'Chon is an independent guide and is not connected to WhatsApp or any other company. Apps change; if a screen looks different, check the official help page.',
    ar: 'تشون دليل مستقل وغير مرتبط بواتساب أو أي شركة أخرى. التطبيقات تتغيّر؛ إذا بدت الشاشة مختلفة، راجع صفحة المساعدة الرسمية.',
    ckb: 'چۆن ڕێنمایەکی سەربەخۆیە و پەیوەندی بە واتسئاپ یان هیچ کۆمپانیایەکی تر نییە. ئەپەکان دەگۆڕێن؛ ئەگەر شاشەیەک جیاواز بوو، لاپەڕەی یارمەتی فەرمی ببینە.',
    ku: 'چۆن ڕێنمایەکا سەربخۆ یە و گرێدانا وێ ب واتسئاپ یان هیچ کۆمپانیایەکا دی نینە. ئەپ دهێنە گوهۆڕین؛ ئەگەر ئێکران جودا بوو, لاپەڕا هاریکاریا فەرمی ببینە.'
  },
  device: {
    ios: { en: 'iPhone', ar: 'آيفون', ckb: 'ئایفۆن', ku: 'ئایفۆن' },
    android: { en: 'Android', ar: 'أندرويد', ckb: 'ئەندرۆید', ku: 'ئەندرۆید' },
    web: { en: 'Computer', ar: 'كمبيوتر', ckb: 'کۆمپیوتەر', ku: 'کۆمپیوتەر' }
  },
  homeLabel: {
    en: 'Chon home', ar: 'الصفحة الرئيسية', ckb: 'پەڕەی سەرەکی', ku: 'لاپەڕا سەرەکی'
  },
  languageLabel: {
    en: 'Language', ar: 'اللغة', ckb: 'زمان', ku: 'زمان'
  },
  coverageTitle: {
    en: 'Covered so far', ar: 'ما تمت تغطيته', ckb: 'ئەوەی تا ئێستا کراوە', ku: 'یا هەتا نوکە هاتیە کرن'
  },
  coverageApps: {
    en: 'apps ready', ar: 'تطبيقات جاهزة', ckb: 'ئەپی ئامادە', ku: 'ئەپێن ئامادە'
  },
  coverageSteps: {
    en: 'steps photographed', ar: 'خطوة مصوّرة', ckb: 'هەنگاوی وێنەگیراو', ku: 'گاڤێن وێنەگرتی'
  },
  coverageLangs: {
    en: 'languages', ar: 'لغات', ckb: 'زمان', ku: 'زمان'
  },
  // The panel at the foot of a guide, for the code that never came. Its own
  // nine fixes live in data/otp.js; these three are the interface around them.
  otpTitle: {
    en: 'The code is not arriving?',
    ar: 'الرمز لا يصل؟',
    ckb: 'کۆدەکە نایەت؟',
    ku: 'کۆد نەهات؟'
  },
  otpSub: {
    en: 'Nine things to try, in the order worth trying them.',
    ar: 'تسعة أمور جرّبها، بالترتيب الذي يستحق أن تُجرَّب به.',
    ckb: 'نۆ شت بۆ هەوڵدان، بەو ڕیزبەندییەی شایانی هەوڵدانە.',
    ku: 'نۆ تشت بۆ هەویلدانێ, ب وێ ڕیزبەندیا هەویلدان بۆ وێ دڤێت.'
  },
  otpNote: {
    en: 'None of this is your mistake. The message has to cross a network nobody here controls, and nothing on your account changes while you wait.',
    ar: 'لا شيء من هذا خطؤك. الرسالة تعبر شبكة ليست بيد أحد هنا، ولا يتغيّر شيء في حسابك وأنت تنتظر.',
    ckb: 'هیچ لەمانە هەڵەی تۆ نییە. نامەکە دەبێت بەناو تۆڕێکدا بڕوات کە بەدەست هیچ کەسێکی ئێرە نییە، و هیچ شتێک لە هەژمارەکەت ناگۆڕێت تاکو چاوەڕێ دەکەیت.',
    ku: 'چو ژ ڤان نە شاشیا تە یە. نامە دڤێت د ناڤ تۆرەکێ دا بچیت یێ نە ب دەستێ چو کەسێ ڤێرێ یە, و چو تشت د هەژمارا تە دا ناهێتە گوهۆڕین دەمێ تو چاڤەڕێ دکەی.'
  },
  themeLabel: {
    en: 'Change theme', ar: 'تغيير المظهر', ckb: 'گۆڕینی ڕووکار', ku: 'گوهۆڕینا ڕوکاری'
  },
  share: {
    en: 'Share', ar: 'مشاركة', ckb: 'هاوبەشکردن', ku: 'پارڤەکرن'
  },
  shareCopied: {
    en: 'Link copied', ar: 'تم نسخ الرابط', ckb: 'بەستەرەکە کۆپی کرا', ku: 'لینک هاتە کۆپی کرن'
  },
  // The message that travels with the link when the phone's own share sheet
  // asks for one. {app} is the brand as that language writes it.
  tipsDismiss: {
    en: 'Hide these notes',
    ar: 'إخفاء هذه الملاحظات',
    ckb: 'شاردنەوەی ئەم تێبینیانە',
    ku: 'ڤەشارتنا ڤان تێبینیان'
  },
  shareText: {
    en: 'A step by step guide to changing your number on {app}.',
    ar: 'دليل مصوّر خطوة بخطوة لتغيير رقمك في {app}.',
    ckb: 'ڕێنمایی وێنەیی هەنگاو بە هەنگاو بۆ گۆڕینی ژمارەکەت لە {app}.',
    ku: 'ڕێنمایا وێنەیی گاڤ ب گاڤ بۆ گوهۆڕینا ژمارا تە د {app} دا.'
  }
};

export function t(key, locale, vars) {
  const entry = UI[key];
  let s = (entry && (entry[locale] || entry.en)) || key;
  if (vars) Object.keys(vars).forEach(k => { s = s.split('{' + k + '}').join(vars[k]); });
  return s;
}

export function deviceLabel(d, locale) {
  const m = UI.device[d];
  return (m && (m[locale] || m.en)) || d;
}
