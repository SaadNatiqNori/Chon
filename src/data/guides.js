// Step-by-step guides. Each step is one screenshot and one instruction,
// written out in every language — nothing here falls back to English.
//
// To add a platform: drop the photos in public/shots/<platform>/ and add an
// entry below with the same shape.

export const GUIDES = {
  // FastPay is the one guide with no tap sequence in it, and that is the
  // finding rather than a gap. Its own FAQ, in English and in Arabic, covers
  // the PIN and says nothing about the number; there is no walkthrough on its
  // channel; and the one first hand account says the option is not to be found.
  // Guessing a sequence for a wallet holding money would be worse than useless,
  // so these steps give the route instead: where to look, and who changes it
  // when it is not there. The hotline and the address are FastPay's own,
  // published at fast-pay.iq. The hotline is written as one unbroken run of
  // digits on purpose. Spaces would split it into separate neutral runs,
  // which a right to left paragraph then orders right to left, so
  // '066 231 0000' reads back to a Kurdish or Arabic reader as
  // '0000 231 066'. A wrong number is worse than an ugly one.
  fastpay: {
    ios: [
      {
        en: { t: 'Open Settings and look under Security', d: 'FastPay keeps account changes there. It is where the app sends you to change your PIN, so it is the first place to look for the number.', note: 'FastPay does not allow screenshots, and unlike every other app here it publishes no steps for changing a number. So this guide is the route rather than the screens, written from FastPay\'s own help pages.' },
        ar: { t: 'افتح الإعدادات وابحث تحت الأمان', d: 'فاست باي يضع تغييرات الحساب هناك. هو المكان الذي يرسلك إليه التطبيق لتغيير الرمز السري، فهو أول مكان تبحث فيه عن الرقم.', note: 'فاست باي لا يسمح بتصوير الشاشة، وخلافاً لكل تطبيق آخر هنا لا ينشر خطوات لتغيير الرقم. لذلك هذا الدليل يعطيك الطريق لا الشاشات، وهو مكتوب من صفحات المساعدة الخاصة بفاست باي.' },
        ckb: { t: 'ڕێکخستن بکەرەوە و لە ژێر Security بگەڕێ', d: 'فاست پەی گۆڕانکارییەکانی هەژمار لەوێ دادەنێت. ئەوە ئەو شوێنەیە کە ئەپەکە بۆ گۆڕینی کۆدی نهێنی دەتنێرێتە ئەوێ، بۆیە یەکەم شوێنە بۆ گەڕان بەدوای ژمارەکەدا.', note: 'فاست پەی ڕێگە بە وێنەگرتنی شاشە نادات، و بەپێچەوانەی هەموو ئەپێکی تری ئێرە هیچ هەنگاوێک بۆ گۆڕینی ژمارە بڵاو ناکاتەوە. بۆیە ئەم ڕێنماییە ڕێگاکەت پێ دەڵێت نەک شاشەکان، و لە پەڕەکانی یارمەتی خودی فاست پەی نووسراوە.' },
        ku: { t: 'ڕێکخستنان ڤەکە و د بنێ Security دا بگەڕە', d: 'فاست پەی گوهۆڕینێن هەژماری ل وێرێ دانیت. ئەو جهە یە ئەڤێ ئەپ بۆ گوهۆڕینا کۆدێ نهێنی تە بۆ دشینیت، لەوما ئێکەم جه یە بۆ گەڕیانا ل دویڤ ژمارێ.', note: 'فاست پەی دەستویر نادەت ئێکران بهێتە وێنەگرتن، و ب دژی هەمی ئەپێن دی یێن ڤێرێ چو گاڤان بۆ گوهۆڕینا ژمارێ بەلاڤ ناکەت. لەوما ئەڤ ڕێنمایی ڕێکا تە دبێژیتە تە نە ئێکرانان، و ژ پەلێن هاریکاریا خودێ فاست پەی هاتیە نڤیسین.' }
      },
      {
        en: { t: 'If there is no option for it, ask FastPay to change it', d: 'A wallet holding money will not move a number without checking who you are. Call 0662310000 or write to info@fast-pay.iq. You can also go to a FastPay showroom or agent; the app has a map of them.', scam: true },
        ar: { t: 'إذا لم يكن هناك خيار لذلك، اطلب من فاست باي تغييره', d: 'محفظة تحمل مالاً لن تنقل رقماً دون التحقق من هويتك. اتصل على 0662310000 أو راسل info@fast-pay.iq. يمكنك أيضاً الذهاب إلى صالة عرض أو وكيل لفاست باي، والتطبيق فيه خريطة بمواقعهم.', scam: true },
        ckb: { t: 'ئەگەر هیچ هەڵبژاردنێک بۆی نەبوو، داوا لە فاست پەی بکە بیگۆڕێت', d: 'جزدانێک کە پارەی تێدایە ژمارەیەک ناگوازێتەوە بێ ئەوەی بزانێت تۆ کێیت. پەیوەندی بکە بە 0662310000 یان بنووسە بۆ info@fast-pay.iq. هەروەها دەتوانیت بچیتە شوێنی پیشانگا یان بریکارێکی فاست پەی، ئەپەکە نەخشەیەکی شوێنەکانیانی تێدایە.', scam: true },
        ku: { t: 'ئەگەر چو هەلبژارتن بۆ وێ نەبوو، ژ فاست پەی بخازە کو بگوهۆڕیت', d: 'جزدانەک کو پارە تێدا هەی ژمارەکێ ناگوهێزیت بێی کو بزانیت تو کی یی. پەیوەندی ب 0662310000 بکە یان بۆ info@fast-pay.iq بنڤیسە. هەروەسا تو دشێی بچی جهەکێ پیشانگەهێ یان بریکارەکێ فاست پەی, ئەپ نەخشەیا جهێن وان تێدا هەی.', scam: true }
      },
      {
        en: { t: 'Have your ID and both numbers ready', d: 'The old number, the new one, and the identity document you opened the account with. Wait until FastPay tells you the change is done before you sign in with the new number.', done: true },
        ar: { t: 'جهّز هويتك والرقمين معاً', d: 'الرقم القديم، والجديد، ووثيقة الهوية التي فتحت بها الحساب. انتظر حتى يخبرك فاست باي أن التغيير تم قبل أن تسجّل الدخول بالرقم الجديد.', done: true },
        ckb: { t: 'ناسنامەکەت و هەردوو ژمارەکە ئامادە بکە', d: 'ژمارە کۆنەکە، نوێیەکە، و ئەو بەڵگەنامەی ناسنامەی کە هەژمارەکەت پێ کردەوە. چاوەڕێ بکە تا فاست پەی پێت دەڵێت گۆڕانکارییەکە تەواو بووە، پێش ئەوەی بە ژمارە نوێیەکە بچیتە ژوورەوە.', done: true },
        ku: { t: 'ناسناما خۆ و هەر دو ژمارا ئامادە بکە', d: 'ژمارا کەڤن, یا نوی, و ئەو بەلگەنامەیا ناسنامێ ئەڤێ تە هەژمار پێ ڤەکری. چاڤەڕێ بکە هەتا فاست پەی بێژیتە تە گوهۆڕین تەمام بوو, بەری تو ب ژمارا نوی هەری ژوور.', done: true }
      }
    ]
  },

  // SuperQi runs in Arabic, so the button names below are quoted as they are
  // printed on the screen with the meaning beside them, rather than translated
  // away. The app blocks screen capture on its camera step, which is why the
  // fourth picture is black, and a note there says so.
  superqi: {
    ios: [
      {
        shot: 'shots/superqi/q1.jpg', w: 720, h: 1395,
        en: { t: 'Open SuperQi and tap الاعدادات', d: 'The gear at the end of the row along the bottom of the screen.', note: 'SuperQi runs in Arabic, so every button named in this guide is written the way it appears on your screen, with the meaning beside it. الاعدادات means Settings.' },
        ar: { t: 'افتح سوبركي واضغط على الاعدادات', d: 'أيقونة الترس في آخر الصف أسفل الشاشة.', note: 'سوبركي بالعربية، وأسماء الأزرار في هذا الدليل مكتوبة كما تظهر على شاشتك.' },
        ckb: { t: 'سوپەرکی بکەرەوە و لە الاعدادات بدە', d: 'ئەو چەرخەی لە کۆتایی ڕیزی خوارەوەی شاشەکەیە.', note: 'سوپەرکی بە عەرەبییە، بۆیە ناوی هەموو دوگمەکان لەم ڕێنماییەدا وەک ئەوە نووسراوە کە لەسەر شاشەکەت دەردەکەوێت. الاعدادات مانای ڕێکخستنە.' },
        ku: { t: 'سوپەرکی ڤەکە و ل الاعدادات بدە', d: 'ئەو چەرخا ل دوماهیکا ڕیزا بنێ ئێکرانێ.', note: 'سوپەرکی ب عەرەبی یە، لەوما ناڤێ هەمی دوگمان د ڤێ ڕێنمایی دا وەکی ل سەر ئێکرانا تە دیار دبیت هاتیە نڤیسین. الاعدادات مانا ڕێکخستنێ یە.' }
      },
      {
        shot: 'shots/superqi/q2.jpg', w: 720, h: 1146,
        en: { t: 'Tap تغيير رقم الهاتف', d: 'Change phone number. It sits near the bottom, under the heading إعدادات التطبيق, App settings.' },
        ar: { t: 'اضغط على تغيير رقم الهاتف', d: 'قريب من الأسفل، تحت عنوان إعدادات التطبيق.' },
        ckb: { t: 'لە تغيير رقم الهاتف بدە', d: 'مانای گۆڕینی ژمارەی مۆبایلە. نزیک خوارەوەیە، لە ژێر سەردێری إعدادات التطبيق، ڕێکخستنی ئەپ.' },
        ku: { t: 'ل تغيير رقم الهاتف بدە', d: 'مانا گوهۆڕینا ژمارا مۆبایلی یە. نێزیکی بنێ یە، د بنێ سەرناڤا إعدادات التطبيق دا، ڕێکخستنا ئەپێ.' }
      },
      {
        shot: 'shots/superqi/q3.jpg', w: 720, h: 1388,
        en: { t: 'Tap التقط سيلفي', d: 'Take a selfie. SuperQi checks that it is really you before it will touch the number. The screen asks for three things: bright light behind you, a smile, and your face inside the frame.' },
        ar: { t: 'اضغط على التقط سيلفي', d: 'سوبركي يتأكد أنك أنت قبل أن يغيّر الرقم. الشاشة تطلب ثلاثة أمور: خلفية ساطعة خلفك، وابتسامة، ووجهك داخل الإطار.' },
        ckb: { t: 'لە التقط سيلفي بدە', d: 'مانای سێلفی گرتنە. سوپەرکی دڵنیا دەبێتەوە کە خۆتی، پێش ئەوەی دەست لە ژمارەکە بدات. شاشەکە سێ شت داوا دەکات: ڕووناکی بەهێز لە پشتت، پێکەنین، و ڕووت لەناو چوارچێوەکە.' },
        ku: { t: 'ل التقط سيلفي بدە', d: 'مانا سێلفی گرتنێ یە. سوپەرکی دلنیا دبیت کو تو خۆ ی، بەری دەست ل ژمارێ بدەت. ئێکران سێ تشتان دخازیت: ڕۆناهیا بهێز ل پشتا تە، کەنین، و ڕویێ تە د ناڤ چوارچێڤێ دا.' }
      },
      {
        shot: 'shots/superqi/q4.jpg', w: 720, h: 1376,
        en: { t: 'Hold your face inside the circle', d: 'The camera takes the picture by itself once your face is in the frame. There is nothing to tap.', note: 'The picture here is black because SuperQi does not let its camera screen be photographed. On your own phone you will see yourself.' },
        ar: { t: 'ثبّت وجهك داخل الدائرة', d: 'الكاميرا تأخذ الصورة وحدها عندما يكون وجهك داخل الإطار. لا شيء تضغط عليه.', note: 'الصورة هنا سوداء لأن سوبركي لا يسمح بتصوير شاشة الكاميرا. على هاتفك سترى نفسك.' },
        ckb: { t: 'ڕووت لەناو بازنەکە ڕاگرە', d: 'کامێراکە خۆی وێنەکە دەگرێت کاتێک ڕووت لەناو چوارچێوەکەیە. هیچ شتێک نییە لێی بدەیت.', note: 'وێنەکە لێرە ڕەشە چونکە سوپەرکی ڕێگە نادات شاشەی کامێراکەی وێنە بگیرێت. لەسەر مۆبایلی خۆت، خۆت دەبینی.' },
        ku: { t: 'ڕویێ خۆ د ناڤ خەلەکێ دا بگرە', d: 'کامێرا بخۆ وێنێ دگریت دەمێ ڕویێ تە د ناڤ چوارچێڤێ دا بیت. چو تشت نینە تو لێ بدەی.', note: 'وێنە ل ڤێرێ ڕەش ە چونکی سوپەرکی دەستویر نادەت ئێکرانا کامێرایا وی بهێتە وێنەگرتن. ل سەر مۆبایلا خۆ، تە خۆ دبینی.' }
      },
      {
        shot: 'shots/superqi/q5.jpg', w: 720, h: 1441,
        en: { t: 'Type the new number', d: 'Check the country code first, +964 for Iraq. Then type the number without its first zero, the way the grey example 7712345678 is written. إستمرار, Continue, wakes up once the number is complete.', scam: true },
        ar: { t: 'اكتب الرقم الجديد', d: 'تحقّق من رمز الدولة أولاً، +964 للعراق. ثم اكتب الرقم بدون الصفر الأول، مثل المثال الرمادي 7712345678. زر إستمرار يعمل بعد أن يكتمل الرقم.', scam: true },
        ckb: { t: 'ژمارە نوێیەکە بنووسە', d: 'سەرەتا کۆدی وڵات بپشکنە، +964 بۆ عێراق. پاشان ژمارەکە بێ سفری یەکەم بنووسە، وەک ئەو نموونە خۆڵەمێشییەی 7712345678. دوگمەی إستمرار کار دەکات دوای ئەوەی ژمارەکە تەواو بوو.', scam: true },
        ku: { t: 'ژمارا نوی بنڤیسە', d: 'بەرێ کۆدا وەلاتی بپشکنە، +964 بۆ عیراقێ. پاشی ژمارێ بێ سفرا ئێکێ بنڤیسە، وەکی وێ نموونا خۆلەمێشی 7712345678. دوگمەیا إستمرار کار دکەت پشتی ژمارە تەمام بوو.', scam: true }
      },
      {
        // No picture: what happens here happens after the app is closed, so
        // there is no screen to show. The step still earns its number, because
        // the number is not actually yours until this has run its course.
        en: { t: 'Wait for SuperQi to approve it', d: 'The request now goes to the SuperQi team. When they approve it, a notification arrives inside the app. After that, sign out and sign in again with the new number.', done: true },
        ar: { t: 'انتظر موافقة سوبركي', d: 'الطلب يذهب الآن إلى فريق سوبركي. عند موافقتهم يصلك إشعار داخل التطبيق. بعد ذلك، اخرج من حسابك وسجّل الدخول من جديد بالرقم الجديد.', done: true },
        ckb: { t: 'چاوەڕێی ڕەزامەندی سوپەرکی بکە', d: 'داواکارییەکە ئێستا بۆ تیمی سوپەرکی دەچێت. کاتێک ڕەزامەندی دەدەن، ئاگادارکردنەوەیەک لەناو ئەپەکە دێت. دوای ئەوە، لە هەژمارەکەت بچۆ دەرەوە و بە ژمارە نوێیەکە جارێکی تر بچۆ ژوورەوە.', done: true },
        ku: { t: 'چاڤەڕێیا ڕەزامەندیا سوپەرکی بکە', d: 'داخازی نوکە بۆ تیما سوپەرکی دچیت. دەمێ وان ڕەزامەندی دا، ئاگەهدارییەک د ناڤ ئەپێ دا دهێت. پشتی وێ، ژ هەژمارا خۆ دەرکەڤە و ب ژمارا نوی جارەکا دی هەرە ژوور.', done: true }
      }
    ]
  },

  // FIB blocks screenshots too, and its pictures are not taken yet. These steps
  // are written from the shape of the job rather than from photographs of it,
  // so they are the part of this file most in need of checking against a real
  // phone. The video under the closing panel is what a reader has meanwhile.
  fib: {
    ios: [
      {
        en: { t: 'Open FIB and tap More', d: 'The last item on the row along the bottom of the screen.', note: 'The pictures for FIB are not taken yet, because the app does not allow screenshots. The video at the bottom of this page shows the whole job in the meantime.' },
        ar: { t: 'افتح FIB واضغط على More', d: 'آخر عنصر في الصف أسفل الشاشة.', note: 'صور FIB لم تؤخذ بعد، لأن التطبيق لا يسمح بتصوير الشاشة. الفيديو أسفل هذه الصفحة يريك العملية كاملة في هذه الأثناء.' },
        ckb: { t: 'FIB بکەرەوە و لە More بدە', d: 'دوا شت لە ڕیزی خوارەوەی شاشەکە.', note: 'وێنەکانی FIB هێشتا نەگیراون، چونکە ئەپەکە ڕێگە بە وێنەگرتنی شاشە نادات. ئەو ڤیدیۆی خوارەوەی ئەم پەڕەیە لەم ماوەیەدا هەموو کارەکەت پیشان دەدات.' },
        ku: { t: 'FIB ڤەکە و ل More بدە', d: 'تشتێ دوماهیک ل ڕیزا بنێ ئێکرانێ.', note: 'وێنێن FIB هێشتا نەهاتینە گرتن، چونکی ئەپ دەستویر نادەت ئێکران بهێتە وێنەگرتن. ئەو ڤیدیۆیا بنێ ڤێ پەلێ د ڤێ دەمی دا هەمی کارێ تە نیشان ددەت.' }
      },
      {
        en: { t: 'Tap Settings', d: 'The gear, near the top of the list that opens.' },
        ar: { t: 'اضغط على Settings', d: 'أيقونة الترس، قريبة من أعلى القائمة التي تفتح.' },
        ckb: { t: 'لە Settings بدە', d: 'چەرخەکە، نزیک سەرەوەی ئەو لیستەی دەکرێتەوە.' },
        ku: { t: 'ل Settings بدە', d: 'چەرخ، نێزیکی سەرێ وێ لیستا ڤەدبیت.' }
      },
      {
        en: { t: 'Tap Change phone number', d: 'It is in the account section, under your own details.' },
        ar: { t: 'اضغط على Change phone number', d: 'في قسم الحساب، تحت بياناتك الشخصية.' },
        ckb: { t: 'لە Change phone number بدە', d: 'لە بەشی هەژمارەکە، لە ژێر زانیارییەکانی خۆت.' },
        ku: { t: 'ل Change phone number بدە', d: 'د بەشا هەژماری دا، د بنێ زانیاریێن خۆ دا.' }
      },
      {
        en: { t: 'Confirm that it is you', d: 'FIB asks for the passcode you open the app with. Some accounts are asked for a selfie instead.' },
        ar: { t: 'أكّد أنك أنت', d: 'يطلب FIB رمز المرور الذي تفتح به التطبيق. بعض الحسابات يطلب منها صورة سيلفي بدلاً من ذلك.' },
        ckb: { t: 'دڵنیای بکە کە خۆتی', d: 'FIB داوای ئەو کۆدە دەکات کە ئەپەکەی پێ دەکەیتەوە. لە هەندێک هەژمار لەبری ئەوە داوای سێلفی دەکرێت.' },
        ku: { t: 'دلنیاهی بکە کو تو خۆ ی', d: 'FIB داخازا وی کۆدی دکەت ئەڤێ تو ئەپ پێ ڤەدکەی. ژ هندەک هەژماران ل شوینا وێ داخازا سێلفی دهێتە کرن.' }
      },
      {
        en: { t: 'Type the new number', d: 'Pick +964 for Iraq, then type the number without its first zero.', scam: true },
        ar: { t: 'اكتب الرقم الجديد', d: 'اختر +964 للعراق، ثم اكتب الرقم بدون الصفر الأول.', scam: true },
        ckb: { t: 'ژمارە نوێیەکە بنووسە', d: '+964 بۆ عێراق هەڵبژێرە، پاشان ژمارەکە بێ سفری یەکەم بنووسە.', scam: true },
        ku: { t: 'ژمارا نوی بنڤیسە', d: '+964 بۆ عیراقێ هەلبژێرە، پاشی ژمارێ بێ سفرا ئێکێ بنڤیسە.', scam: true }
      },
      {
        en: { t: 'Type the code FIB sends you', d: 'It arrives by text on the new number. Once it is accepted, the new number is the one on the account.', done: true },
        ar: { t: 'اكتب الرمز الذي يرسله FIB', d: 'يصل برسالة نصية على الرقم الجديد. بعد قبوله يصبح الرقم الجديد هو رقم الحساب.', done: true },
        ckb: { t: 'ئەو کۆدەی FIB بۆت دەنێرێت بنووسە', d: 'بە نامەی نووسین بۆ ژمارە نوێیەکە دێت. دوای ئەوەی پەسەند کرا، ژمارە نوێیەکە دەبێتە ژمارەی هەژمارەکە.', done: true },
        ku: { t: 'ئەو کۆدێ FIB بۆ تە دشینیت بنڤیسە', d: 'ب نامەیا نڤیسینێ بۆ ژمارا نوی دهێت. پشتی هاتە پەسەندکرن، ژمارا نوی دبیتە ژمارا هەژماری.', done: true }
      }
    ]
  },

  threads: {
    android: [
      {
        shot: 'shots/threads/h1.jpg', w: 720, h: 1403,
        en: { t: 'Open Threads. Tap your picture, then the three lines.', d: 'Your picture is at the bottom right. The three lines are at the top right.' },
        ar: { t: 'افتح ثريدز واضغط على صورتك ثم على الخطوط الثلاثة', d: 'صورتك أسفل اليمين. الخطوط الثلاثة أعلى اليمين.' },
        ckb: { t: 'ثرێدز بکەرەوە، لە وێنەکەت بدە، پاشان لە سێ هێڵەکە', d: 'وێنەکەت لە خوارەوەی ڕاستە. سێ هێڵەکە لە سەرەوەی ڕاستە.' },
        ku: { t: 'ثرێدزێ ڤەکە، ل وێنا خۆ بدە، پاشی ل سێ خەزان', d: 'وێنا تە ل بنێ ڕاستێ یە. سێ خەز ل سەرێ ڕاستێ نە.' }
      },
      {
        shot: 'shots/threads/h2.jpg', w: 720, h: 1034,
        en: { t: 'Tap Account', d: 'It is under Accessibility, about halfway down the list.' },
        ar: { t: 'اضغط على Account', d: 'تحت Accessibility، في منتصف القائمة تقريباً.' },
        ckb: { t: 'لە Account بدە', d: 'لە ژێر Accessibility، نزیکەی ناوەڕاستی لیستەکە.' },
        ku: { t: 'ل Account بدە', d: 'د بنێ Accessibility دا، نێزیکی ناڤەڕاستا لیستێ.' }
      },
      {
        shot: 'shots/threads/h3.jpg', w: 720, h: 1077,
        en: { t: 'Tap Personal information', d: 'It is under ‘Other account settings’. These settings are shared with Instagram.' },
        ar: { t: 'اضغط على Personal information', d: 'تحت ‘Other account settings’. هذه الإعدادات مشتركة مع إنستغرام.' },
        ckb: { t: 'لە Personal information بدە', d: 'لە ژێر ‘Other account settings’. ئەم ڕێکخستنانە لەگەڵ ئینستاگرام هاوبەشن.' },
        ku: { t: 'ل Personal information بدە', d: 'د بنێ ‘Other account settings’ دا. ئەڤ ڕێکخستن دگەل ئینستاگرامێ هەڤبەش ن.' }
      },
      {
        shot: 'shots/threads/h4.jpg', w: 720, h: 1302,
        en: { t: 'Tap Personal details', d: 'Threads opens Meta\'s Accounts Center. Look under Account settings.' },
        ar: { t: 'اضغط على Personal details', d: 'ثريدز يفتح Accounts Center الخاص بميتا. ابحث تحت Account settings.' },
        ckb: { t: 'لە Personal details بدە', d: 'ثرێدز Accounts Center ی مێتا دەکاتەوە. لە ژێر Account settings بگەڕێ.' },
        ku: { t: 'ل Personal details بدە', d: 'ثرێدز Accounts Center یا مێتایێ ڤەدکەت. د بنێ Account settings دا بگەڕە.' }
      },
      {
        shot: 'shots/threads/h5.jpg', w: 720, h: 1082,
        en: { t: 'Tap Contact Info', d: 'Your old number is written under it.' },
        ar: { t: 'اضغط على Contact Info', d: 'رقمك القديم مكتوب تحته.' },
        ckb: { t: 'لە Contact Info بدە', d: 'ژمارە کۆنەکەت لە ژێری نووسراوە.' },
        ku: { t: 'ل Contact Info بدە', d: 'ژمارا تە یا کەڤن د بنێ دا نڤیسی یە.' }
      },
      {
        shot: 'shots/threads/h6.jpg', w: 720, h: 1454,
        en: { t: 'Tap Add new contact', d: 'The blue button at the bottom of the screen.' },
        ar: { t: 'اضغط على Add new contact', d: 'الزر الأزرق أسفل الشاشة.' },
        ckb: { t: 'لە Add new contact بدە', d: 'دوگمە شینەکە لە خوارەوەی شاشەکە.' },
        ku: { t: 'ل Add new contact بدە', d: 'دوگمەیا شین ل بنێ ئێکرانێ.' }
      },
      {
        shot: 'shots/instagram/i7.jpg', w: 720, h: 1477,
        en: { t: 'Tap Add mobile number', d: 'Meta asks whether you are adding a number or an email. Choose the number.', note: 'The pictures from here on were taken in Instagram on an iPhone. Accounts Center is one shared place, so Threads opens these same screens on Android too.' },
        ar: { t: 'اضغط على Add mobile number', d: 'ميتا تسألك إن كنت تضيف رقماً أم بريداً إلكترونياً. اختر الرقم.', note: 'الصور من هنا فصاعداً مأخوذة من إنستغرام على آيفون. Accounts Center مكان واحد مشترك، لذا يفتح ثريدز هذه الشاشات نفسها على أندرويد أيضاً.' },
        ckb: { t: 'لە Add mobile number بدە', d: 'مێتا پرسیارت لێ دەکات ئایا ژمارە زیاد دەکەیت یان ئیمەیل. ژمارەکە هەڵبژێرە.', note: 'وێنەکان لێرەوە لە ئینستاگرام لەسەر ئایفۆن گیراون. Accounts Center شوێنێکی هاوبەشە، بۆیە ثرێدز لەسەر ئەندرۆیدیش هەمان ئەم شاشانە دەکاتەوە.' },
        ku: { t: 'ل Add mobile number بدە', d: 'مێتا ژ تە دپرسیت ئەرێ تو ژمارەکێ زێدە دکەی یان ئیمەیلەکێ. ژمارێ هەلبژێرە.', note: 'وێنە ژ ڤێرێ ڤەدا د ئینستاگرامێ دا ل سەر ئایفۆنێ هاتینە گرتن. Accounts Center جهەکێ هەڤبەش ە, لەوما ثرێدز ل سەر ئەندرۆیدێ ژی هەمان ڤان ئێکرانان ڤەدکەت.' }
      },
      {
        shot: 'shots/instagram/i8.jpg', w: 720, h: 1470,
        en: { t: 'Type your new number, then tap Next', d: 'Tap Change first if the country is wrong. Tick the accounts that should use this number. A code then comes to that number by text. Type it in.', scam: true },
        ar: { t: 'اكتب رقمك الجديد ثم اضغط Next', d: 'اضغط Change أولاً إذا كانت الدولة خاطئة. ضع علامة على الحسابات التي ستستخدم هذا الرقم. بعدها يصل رمز إلى ذلك الرقم برسالة نصية. اكتبه.', scam: true },
        ckb: { t: 'ژمارە نوێیەکەت بنووسە، پاشان لە Next بدە', d: 'سەرەتا لە Change بدە ئەگەر وڵاتەکە هەڵە بوو. نیشانە لەو هەژمارانە بکە کە دەبێت ئەم ژمارەیە بەکاربهێنن. پاشان کۆدێک بە نامە بۆ ئەو ژمارەیە دێت. بینووسە.', scam: true },
        ku: { t: 'ژمارا خۆ یا نوی بنڤیسە، پاشی ل Next بدە', d: 'بەرێ ل Change بدە ئەگەر وەلات شاش بیت. نیشانێ ل وان هەژماران بکە یێن دڤێت ڤێ ژمارێ بکاربینن. پاشی کۆدەکێ ب نامەیێ بۆ وێ ژمارێ دهێت. بنڤیسە.', scam: true }
      },
      {
        shot: 'shots/instagram/i9.jpg', w: 720, h: 1504,
        en: { t: 'Now go back and tap your old number', d: 'You are back on Contact information. Your old number is still listed there.' },
        ar: { t: 'الآن ارجع واضغط على رقمك القديم', d: 'لقد عدت إلى Contact information. رقمك القديم ما زال موجوداً في القائمة.' },
        ckb: { t: 'ئێستا بگەڕێوە و لە ژمارە کۆنەکەت بدە', d: 'گەڕاویتەوە بۆ Contact information. ژمارە کۆنەکەت هێشتا لەوێدایە.' },
        ku: { t: 'نوکە بزڤڕە و ل ژمارا خۆ یا کەڤن بدە', d: 'تو زڤڕیی بۆ Contact information. ژمارا تە یا کەڤن هێشتا ل وێرێ یە.' }
      },
      {
        shot: 'shots/instagram/i10.jpg', w: 720, h: 1463,
        en: { t: 'Tap Delete number', d: 'It is the red writing under the list of accounts.' },
        ar: { t: 'اضغط على Delete number', d: 'هي الكتابة الحمراء تحت قائمة الحسابات.' },
        ckb: { t: 'لە Delete number بدە', d: 'نووسینە سوورەکەیە لە ژێر لیستی هەژمارەکان.' },
        ku: { t: 'ل Delete number بدە', d: 'نڤیسارا سۆر ە د بنێ لیستا هەژماران دا.' }
      },
      {
        shot: 'shots/instagram/i11.jpg', w: 720, h: 1490,
        en: { t: 'Tap Delete', d: 'Instagram asks you to confirm. Tap Delete. Your old number is now off the account.', done: true },
        ar: { t: 'اضغط على Delete', d: 'إنستغرام يطلب منك التأكيد. اضغط Delete. رقمك القديم لم يعد على الحساب.', done: true },
        ckb: { t: 'لە Delete بدە', d: 'ئینستاگرام داوای دڵنیابوونت لێ دەکات. لە Delete بدە. ژمارە کۆنەکەت ئێستا لەسەر هەژمارەکە نەماوە.', done: true },
        ku: { t: 'ل Delete بدە', d: 'ئینستاگرام ژ تە دخوازیت پشتڕاست بکەی. ل Delete بدە. ژمارا تە یا کەڤن نوکە ل سەر هەژمارێ نەما.', done: true }
      },
      {
        shot: 'shots/instagram/i12.jpg', w: 720, h: 1478,
        en: { t: 'If you see this message, stop', d: 'Meta will not delete the number while it is your two-factor number. Go to Password and security, then Two-factor authentication, and put your new number there first. Then come back and delete the old one.', note: 'This is the step that locks people out. Do it before your old SIM stops working.' },
        ar: { t: 'إذا ظهرت لك هذه الرسالة، توقّف', d: 'ميتا لن تحذف الرقم ما دام هو رقم المصادقة الثنائية. اذهب إلى Password and security ثم Two-factor authentication وضع رقمك الجديد هناك أولاً. ثم ارجع واحذف القديم.', note: 'هذه هي الخطوة التي تُغلق الحسابات على أصحابها. نفّذها قبل أن تتوقف شريحتك القديمة.' },
        ckb: { t: 'ئەگەر ئەم پەیامەت بۆ هات، بوەستە', d: 'مێتا ژمارەکە ناسڕێتەوە تا ئەو کاتەی ژمارەی دووقۆڵی دڵنیاییە. بڕۆ بۆ Password and security، پاشان Two-factor authentication، و سەرەتا ژمارە نوێیەکەت لەوێ دابنێ. پاشان بگەڕێوە و کۆنەکە بسڕەوە.', note: 'ئەمە ئەو هەنگاوەیە کە خەڵک لە هەژمارەکانیان دەردەکات. پێش ئەوەی سیمکارتە کۆنەکەت بوەستێت ئەنجامی بدە.' },
        ku: { t: 'ئەگەر ئەڤ پەیامە بۆ تە هات، بوەستە', d: 'مێتا دێ ژمارێ نەژێبیت هەتا ئەو ژمارا دووقۆلی یا پشتڕاستکرنێ بیت. هەڕە بۆ Password and security، پاشی Two-factor authentication، و بەرێ ژمارا خۆ یا نوی ل وێرێ دانە. پاشی بزڤڕە و یا کەڤن ژێبە.', note: 'ئەڤە ئەو گاڤە یە یا خەلکی ژ هەژمارێن وان دەردخیت. بەری سیمکارتا تە یا کەڤن بوەستیت وێ بکە.' }
      }
    ]
  },
  linkedin: {
    android: [
      {
        shot: 'shots/linkedin/n1.jpg', w: 720, h: 518,
        en: { t: 'Open LinkedIn. Tap your picture.', d: 'It is at the top of the screen, on the left, next to the search box.' },
        ar: { t: 'افتح لينكد إن واضغط على صورتك', d: 'موجودة أعلى الشاشة على اليسار، بجانب مربع البحث.' },
        ckb: { t: 'لینکدئین بکەرەوە و لە وێنەکەت بدە', d: 'لە سەرەوەی شاشەکەیە، لای چەپ، لەتەنیشت خانەی گەڕان.' },
        ku: { t: 'لینکدئینێ ڤەکە و ل وێنا خۆ بدە', d: 'ل سەرێ ئێکرانێ یە، ل چەپێ، ل تەنشتا خانا گەڕانێ.' }
      },
      {
        shot: 'shots/linkedin/n2.jpg', w: 720, h: 462,
        en: { t: 'Tap Settings', d: 'Go to the bottom of the panel that slides in. Settings has a cog next to it.' },
        ar: { t: 'اضغط على Settings', d: 'انزل إلى أسفل اللوحة التي تظهر. بجانب Settings ترس.' },
        ckb: { t: 'لە Settings بدە', d: 'بڕۆ بۆ خوارەوەی ئەو پانێڵەی دێتە ژوورەوە. چەرخێک لەتەنیشت Settings ـە.' },
        ku: { t: 'ل Settings بدە', d: 'هەڕە بۆ بنێ وێ پانێلا دهێتە ژۆر. چەرخەکێ ل تەنشتا Settings ە.' }
      },
      {
        shot: 'shots/linkedin/n3.jpg', w: 720, h: 723,
        en: { t: 'Tap Sign in & security', d: 'It is the second line, under Account preferences.' },
        ar: { t: 'اضغط على Sign in & security', d: 'هو ثاني سطر، تحت Account preferences.' },
        ckb: { t: 'لە Sign in & security بدە', d: 'دووەم دێڕە، لە ژێر Account preferences.' },
        ku: { t: 'ل Sign in & security بدە', d: 'دووێ ڕێز ە، د بنێ Account preferences دا.' }
      },
      {
        shot: 'shots/linkedin/n4.jpg', w: 720, h: 632,
        en: { t: 'Tap Phone numbers', d: 'Under Account access, just below Email addresses.' },
        ar: { t: 'اضغط على Phone numbers', d: 'تحت Account access، أسفل Email addresses مباشرة.' },
        ckb: { t: 'لە Phone numbers بدە', d: 'لە ژێر Account access، ڕاست لە ژێر Email addresses.' },
        ku: { t: 'ل Phone numbers بدە', d: 'د بنێ Account access دا، ڕاست د بنێ Email addresses دا.' }
      },
      {
        shot: 'shots/linkedin/n5.jpg', w: 720, h: 813,
        en: { t: 'Tap Add phone number', d: 'The blue button at the bottom of the screen.' },
        ar: { t: 'اضغط على Add phone number', d: 'الزر الأزرق أسفل الشاشة.' },
        ckb: { t: 'لە Add phone number بدە', d: 'دوگمە شینەکە لە خوارەوەی شاشەکە.' },
        ku: { t: 'ل Add phone number بدە', d: 'دوگمەیا شین ل بنێ ئێکرانێ.' }
      },
      {
        shot: 'shots/linkedin/n6.jpg', w: 720, h: 638,
        en: { t: 'Type the code from your email, then tap Submit', d: 'LinkedIn sends this code to your email, not to your phone. Open your email to find it.', note: 'You need to be able to open your email for this. If you cannot, fix your email first. Nothing else here will work without it.' },
        ar: { t: 'اكتب الرمز الذي وصل بريدك ثم اضغط Submit', d: 'لينكد إن يرسل هذا الرمز إلى بريدك الإلكتروني وليس إلى هاتفك. افتح بريدك لتجده.', note: 'تحتاج إلى أن تتمكّن من فتح بريدك الإلكتروني لهذا. إذا لم تستطع، أصلح بريدك أولاً. لن يعمل أي شيء آخر هنا بدونه.' },
        ckb: { t: 'ئەو کۆدە بنووسە کە بۆ ئیمەیڵەکەت هاتووە، پاشان لە Submit بدە', d: 'لینکدئین ئەم کۆدە بۆ ئیمەیڵەکەت دەنێرێت، نەک بۆ مۆبایلەکەت. ئیمەیڵەکەت بکەرەوە تا بیدۆزیتەوە.', note: 'پێویستە بتوانیت ئیمەیڵەکەت بکەیتەوە بۆ ئەمە. ئەگەر نەتوانیت، سەرەتا ئیمەیڵەکەت چاک بکە. بەبێ ئەو هیچ شتێکی تر لێرە کار ناکات.' },
        ku: { t: 'ئەو کۆدێ بۆ ئیمەیلا تە هاتی بنڤیسە، پاشی ل Submit بدە', d: 'لینکدئین ڤی کۆدی بۆ ئیمەیلا تە دشینیت، نە بۆ مۆبایلێ تە. ئیمەیلا خۆ ڤەکە دا وی بدۆزی.', note: 'دڤێت تو بشێی ئیمەیلا خۆ ڤەکەی بۆ ڤێ. ئەگەر نەشێی, بەرێ ئیمەیلا خۆ چاک بکە. بێی وێ چو تشتێ دی ل ڤێرێ ناخەبتیت.' }
      },
      {
        shot: 'shots/linkedin/n7.jpg', w: 720, h: 1157,
        en: { t: 'Type your new number, your country and your password', d: 'All three, then tap Send code. Type them here in LinkedIn and nowhere else.', scam: true },
        ar: { t: 'اكتب رقمك الجديد ودولتك وكلمة مرورك', d: 'الثلاثة معاً، ثم اضغط Send code. اكتبها هنا داخل لينكد إن فقط، وليس في أي مكان آخر.', scam: true },
        ckb: { t: 'ژمارە نوێیەکەت، وڵاتەکەت و وشەی تێپەڕەکەت بنووسە', d: 'هەر سێکیان، پاشان لە Send code بدە. لێرە لەناو لینکدئین بیاننووسە، لە هیچ شوێنێکی تر نا.', scam: true },
        ku: { t: 'ژمارا خۆ یا نوی، وەلاتێ خۆ و پەیڤا خۆ یا دەربازبوونێ بنڤیسە', d: 'هەر سێکان، پاشی ل Send code بدە. ل ڤێرێ د لینکدئینێ دا بنڤیسە، ل چو جهێن دی نە.', scam: true }
      },
      {
        shot: 'shots/linkedin/n8.jpg', w: 720, h: 549,
        en: { t: 'Type the code from the text, then tap Verify', d: 'This code goes to your new number by text message.' },
        ar: { t: 'اكتب الرمز الذي وصل برسالة نصية ثم اضغط Verify', d: 'هذا الرمز يصل إلى رقمك الجديد برسالة نصية.' },
        ckb: { t: 'ئەو کۆدە بنووسە کە بە نامە هاتووە، پاشان لە Verify بدە', d: 'ئەم کۆدە بە نامە بۆ ژمارە نوێیەکەت دێت.' },
        ku: { t: 'ئەو کۆدێ ب نامەیێ هاتی بنڤیسە، پاشی ل Verify بدە', d: 'ئەڤ کۆدە ب نامەیێ بۆ ژمارا تە یا نوی دهێت.' }
      },
      {
        shot: 'shots/linkedin/n9.jpg', w: 720, h: 968,
        en: { t: 'Make the new number primary, then remove the old one', d: 'Tap Make primary on your new number. Only then tap Remove on the old one. Leave ‘Use for resetting password’ switched on.', done: true },
        ar: { t: 'اجعل الرقم الجديد أساسياً ثم احذف القديم', d: 'اضغط Make primary على رقمك الجديد. وبعدها فقط اضغط Remove على القديم. اترك ‘Use for resetting password’ مفعّلاً.', done: true },
        ckb: { t: 'ژمارە نوێیەکە بکە بە سەرەکی، پاشان کۆنەکە لاببە', d: 'لە Make primary بدە لەسەر ژمارە نوێیەکەت. تەنها دوای ئەوە لە Remove بدە لەسەر کۆنەکە. ‘Use for resetting password’ بە کراوەیی بهێڵەوە.', done: true },
        ku: { t: 'ژمارا نوی بکە یا سەرەکی، پاشی یا کەڤن رابکە', d: 'ل Make primary بدە ل سەر ژمارا خۆ یا نوی. تنێ پشتی وێ ل Remove بدە ل سەر یا کەڤن. ‘Use for resetting password’ ڤەکری بهێلە.', done: true }
      }
    ]
  },
  google: {
    ios: [
      {
        shot: 'shots/google/g1.jpg', w: 960, h: 425,
        en: { t: 'Open Gmail. Tap your picture, then Manage your Google Account.', d: 'Your picture is at the top of the screen, on the right.' },
        ar: { t: 'افتح Gmail واضغط على صورتك ثم Manage your Google Account', d: 'صورتك موجودة أعلى الشاشة على اليمين.' },
        ckb: { t: 'جیمەیل بکەرەوە، لە وێنەکەت بدە، پاشان Manage your Google Account', d: 'وێنەکەت لە سەرەوەی شاشەکەیە، لای ڕاست.' },
        ku: { t: 'جیمەیلێ ڤەکە، ل وێنا خۆ بدە، پاشی Manage your Google Account', d: 'وێنا تە ل سەرێ ئێکرانێ یە، ل ڕاستێ.' }
      },
      {
        shot: 'shots/google/g2.jpg', w: 960, h: 958,
        en: { t: 'Tap Personal info, then Phone', d: 'Under Contact info you will see PHONE with your old number. Tap it, then tap the number again on the next screen.' },
        ar: { t: 'اضغط على Personal info ثم Phone', d: 'تحت Contact info سترى PHONE ورقمك القديم. اضغط عليه، ثم اضغط على الرقم مرة أخرى في الشاشة التالية.' },
        ckb: { t: 'لە Personal info بدە، پاشان Phone', d: 'لە ژێر Contact info دا PHONE و ژمارە کۆنەکەت دەبینیت. لێی بدە، پاشان لە شاشەی دواتر دیسان لە ژمارەکە بدە.' },
        ku: { t: 'ل Personal info بدە، پاشی Phone', d: 'د بنێ Contact info دا تو دێ PHONE و ژمارا خۆ یا کەڤن بینی. ل وێ بدە، پاشی د ئێکرانا دویڤ دا دیسا ل ژمارێ بدە.' }
      },
      {
        shot: 'shots/google/g3.jpg', w: 960, h: 958,
        en: { t: 'Tap the pencil, then UPDATE NUMBER', d: 'The pencil is at the top right of the number. Google warns that only some services move across.' },
        ar: { t: 'اضغط على القلم ثم UPDATE NUMBER', d: 'القلم في أعلى يمين الرقم. جوجل ينبّهك أن بعض الخدمات فقط ستنتقل.' },
        ckb: { t: 'لە پێنووسەکە بدە، پاشان UPDATE NUMBER', d: 'پێنووسەکە لە سەرەوەی ڕاستی ژمارەکەیە. گووگڵ ئاگادارت دەکاتەوە کە تەنها هەندێک خزمەتگوزاری دەگوازرێنەوە.' },
        ku: { t: 'ل پێنووسێ بدە، پاشی UPDATE NUMBER', d: 'پێنووس ل سەرێ ڕاستێ یا ژمارێ یە. گووگل ئاگەهدار دکەت کو تنێ هندەک خزمەتگوزاری دێ گوهێزن.' }
      },
      {
        shot: 'shots/google/g4.jpg', w: 960, h: 951,
        en: { t: 'Type your new number, then the code', d: 'Tap NEXT. Google sends a code by text. Type it in and tap VERIFY.', scam: true },
        ar: { t: 'اكتب رقمك الجديد ثم الرمز', d: 'اضغط NEXT. جوجل يرسل رمزاً برسالة نصية. اكتبه واضغط VERIFY.', scam: true },
        ckb: { t: 'ژمارە نوێیەکەت بنووسە، پاشان کۆدەکە', d: 'لە NEXT بدە. گووگڵ کۆدێک بە نامە دەنێرێت. بینووسە و لە VERIFY بدە.', scam: true },
        ku: { t: 'ژمارا خۆ یا نوی بنڤیسە، پاشی کۆدی', d: 'ل NEXT بدە. گووگل کۆدەکێ ب نامەیێ دشینیت. بنڤیسە و ل VERIFY بدە.', scam: true }
      },
      {
        shot: 'shots/google/g5.jpg', w: 960, h: 953,
        en: { t: 'No number there yet? Tap Add now', d: 'If PHONE says ‘Add a recovery phone’, there is nothing to change. Tap it, then tap Add now.' },
        ar: { t: 'لا يوجد رقم بعد؟ اضغط Add now', d: 'إذا كان PHONE مكتوباً فيه ‘Add a recovery phone’، فلا يوجد ما تغيّره. اضغط عليه ثم اضغط Add now.' },
        ckb: { t: 'هێشتا ژمارە نییە؟ لە Add now بدە', d: 'ئەگەر لە PHONE نووسرابوو ‘Add a recovery phone’، هیچ نییە بیگۆڕیت. لێی بدە، پاشان لە Add now بدە.' },
        ku: { t: 'هێشتا ژمارە نینە؟ ل Add now بدە', d: 'ئەگەر د PHONE دا نڤیسی بیت ‘Add a recovery phone’, چو تشت نینە یێ تو بگوهۆڕی. ل وێ بدە، پاشی ل Add now بدە.' }
      },
      {
        shot: 'shots/google/g6.jpg', w: 960, h: 956,
        en: { t: 'Type the number, then tap GET CODE', d: 'Tap NEXT first. Google shows the number back to you. Check it, then tap GET CODE.' },
        ar: { t: 'اكتب الرقم ثم اضغط GET CODE', d: 'اضغط NEXT أولاً. جوجل يعرض عليك الرقم. تحقق منه ثم اضغط GET CODE.' },
        ckb: { t: 'ژمارەکە بنووسە، پاشان لە GET CODE بدە', d: 'سەرەتا لە NEXT بدە. گووگڵ ژمارەکەت پیشان دەداتەوە. بیپشکنە، پاشان لە GET CODE بدە.' },
        ku: { t: 'ژمارێ بنڤیسە، پاشی ل GET CODE بدە', d: 'بەرێ ل NEXT بدە. گووگل ژمارێ نیشانا تە ددەت. بپشکنە، پاشی ل GET CODE بدە.' }
      },
      {
        shot: 'shots/google/g7.jpg', w: 960, h: 957,
        en: { t: 'Type the code, then tap VERIFY', d: 'You will see ‘Phone number added’ at the bottom, and Google emails you that the number changed.' },
        ar: { t: 'اكتب الرمز ثم اضغط VERIFY', d: 'سترى ‘Phone number added’ في الأسفل، ويرسل لك جوجل بريداً بأن الرقم تغيّر.' },
        ckb: { t: 'کۆدەکە بنووسە، پاشان لە VERIFY بدە', d: 'لە خوارەوە ‘Phone number added’ دەبینیت، و گووگڵ ئیمەیڵت بۆ دەنێرێت کە ژمارەکە گۆڕا.' },
        ku: { t: 'کۆدی بنڤیسە، پاشی ل VERIFY بدە', d: 'تو دێ ل بنێ ‘Phone number added’ بینی، و گووگل ئیمەیلەکێ بۆ تە دشینیت کو ژمارە هاتیە گوهۆڕین.' }
      },
      {
        shot: 'shots/google/g8.jpg', w: 960, h: 962,
        en: { t: 'Now open Security. Tap 2-Step Verification phones.', d: 'This is a different list. The number here is the one Google texts when you sign in. Changing your number above does not change this one.', note: 'This is the step that locks people out. If this list still shows your old number, add the new one here before your old SIM stops working.' },
        ar: { t: 'الآن افتح Security واضغط على 2-Step Verification phones', d: 'هذه قائمة مختلفة. الرقم هنا هو الذي يرسل إليه جوجل رمز الدخول. تغيير رقمك في الأعلى لا يغيّر هذا.', note: 'هذه هي الخطوة التي تُغلق الحسابات على أصحابها. إذا كانت هذه القائمة ما زالت تعرض رقمك القديم، أضف الجديد هنا قبل أن تتوقف شريحتك القديمة.' },
        ckb: { t: 'ئێستا Security بکەرەوە. لە 2-Step Verification phones بدە.', d: 'ئەمە لیستێکی جیاوازە. ئەو ژمارەیەی لێرەیە ئەوەیە کە گووگڵ کاتی چوونەژوورەوە نامەی بۆ دەنێرێت. گۆڕینی ژمارەکەت لە سەرەوە ئەمە ناگۆڕێت.', note: 'ئەمە ئەو هەنگاوەیە کە خەڵک لە هەژمارەکانیان دەردەکات. ئەگەر ئەم لیستە هێشتا ژمارە کۆنەکەت پیشان دەدات، نوێیەکە لێرە زیاد بکە پێش ئەوەی سیمکارتە کۆنەکەت بوەستێت.' },
        ku: { t: 'نوکە Security ڤەکە. ل 2-Step Verification phones بدە.', d: 'ئەڤە لیستەکا جودا یە. ئەو ژمارا ل ڤێرێ ئەو ە یا گووگل دەمێ تو دکەڤیە ژۆر نامەیێ بۆ دشینیت. گوهۆڕینا ژمارا تە ل سەرێ ڤێ ناگوهۆڕیت.', note: 'ئەڤە ئەو گاڤە یە یا خەلکی ژ هەژمارێن وان دەردخیت. ئەگەر ئەڤ لیستە هێشتا ژمارا تە یا کەڤن نیشان ددەت, یا نوی ل ڤێرێ زێدە بکە بەری سیمکارتا تە یا کەڤن بوەستیت.' }
      },
      {
        shot: 'shots/google/g9.jpg', w: 960, h: 960,
        en: { t: 'Only now remove the old number', d: 'Go back to Phone, tap the bin, then REMOVE NUMBER. Do this last, once the new number works everywhere.', done: true },
        ar: { t: 'الآن فقط احذف الرقم القديم', d: 'ارجع إلى Phone، اضغط على سلة المهملات ثم REMOVE NUMBER. افعل هذا في النهاية، بعد أن يعمل الرقم الجديد في كل مكان.', done: true },
        ckb: { t: 'تەنها ئێستا ژمارە کۆنەکە لاببە', d: 'بگەڕێوە بۆ Phone، لە تەنەکە خۆڵەکە بدە، پاشان REMOVE NUMBER. ئەمە لە کۆتاییدا بکە، دوای ئەوەی ژمارە نوێیەکە لە هەموو شوێنێک کاردەکات.', done: true },
        ku: { t: 'تنێ نوکە ژمارا کەڤن رابکە', d: 'بزڤڕە بۆ Phone، ل سەتلا خۆلێ بدە، پاشی REMOVE NUMBER. ڤێ ل دویماهیێ بکە، پشتی ژمارا نوی ل هەمی جهان بخەبتیت.', done: true }
      }
    ]
  },
  x: {
    android: [
      {
        shot: 'shots/x/e1.jpg', w: 720, h: 393,
        en: { t: 'Open X. Tap your picture.', d: 'It is at the top of the screen, on the left.' },
        ar: { t: 'افتح إكس واضغط على صورتك', d: 'موجودة أعلى الشاشة على اليسار.' },
        ckb: { t: 'ئێکس بکەرەوە و لە وێنەکەت بدە', d: 'لە سەرەوەی شاشەکەیە، لای چەپ.' },
        ku: { t: 'ئێکسێ ڤەکە و ل وێنا خۆ بدە', d: 'ل سەرێ ئێکرانێ یە، ل چەپێ.' }
      },
      {
        shot: 'shots/x/e2.jpg', w: 720, h: 981,
        en: { t: 'Tap Settings & Support', d: 'Go to the bottom of the menu. Tap it and it opens up.' },
        ar: { t: 'اضغط على Settings & Support', d: 'انزل إلى أسفل القائمة. اضغط عليها فتُفتح.' },
        ckb: { t: 'لە Settings & Support بدە', d: 'بڕۆ بۆ خوارەوەی لیستەکە. لێی بدە و دەکرێتەوە.' },
        ku: { t: 'ل Settings & Support بدە', d: 'هەڕە بۆ بنێ لیستێ. ل وێ بدە و ڤەدبیت.' }
      },
      {
        shot: 'shots/x/e3.jpg', w: 720, h: 557,
        en: { t: 'Tap Settings and privacy', d: 'It appears underneath, with a cog next to it.' },
        ar: { t: 'اضغط على Settings and privacy', d: 'تظهر تحتها، وبجانبها ترس.' },
        ckb: { t: 'لە Settings and privacy بدە', d: 'لە ژێریدا دەردەکەوێت، چەرخێکی لەتەنیشتە.' },
        ku: { t: 'ل Settings and privacy بدە', d: 'د بنێ دا دەردکەڤیت، چەرخەکێ ل تەنشتێ.' }
      },
      {
        shot: 'shots/x/e4.jpg', w: 720, h: 697,
        en: { t: 'Tap Your account', d: 'It is the first block on the page.' },
        ar: { t: 'اضغط على Your account', d: 'هو أول قسم في الصفحة.' },
        ckb: { t: 'لە Your account بدە', d: 'یەکەم بەشە لە پەڕەکە.' },
        ku: { t: 'ل Your account بدە', d: 'ئێکەم بەش ە د لاپەڕێ دا.' }
      },
      {
        shot: 'shots/x/e5.jpg', w: 720, h: 693,
        en: { t: 'Tap Account information', d: 'It says it shows your phone number and email address.' },
        ar: { t: 'اضغط على Account information', d: 'مكتوب أنه يعرض رقم هاتفك وبريدك الإلكتروني.' },
        ckb: { t: 'لە Account information بدە', d: 'دەڵێت ژمارەی مۆبایل و ئیمەیڵەکەت پیشان دەدات.' },
        ku: { t: 'ل Account information بدە', d: 'دبێژیت ژمارا مۆبایلی و ئیمەیلا تە نیشان ددەت.' }
      },
      {
        shot: 'shots/x/e6.jpg', w: 720, h: 1045,
        en: { t: 'Tap Phone', d: 'Your old number is written underneath it.' },
        ar: { t: 'اضغط على Phone', d: 'رقمك القديم مكتوب تحته.' },
        ckb: { t: 'لە Phone بدە', d: 'ژمارە کۆنەکەت لە ژێری نووسراوە.' },
        ku: { t: 'ل Phone بدە', d: 'ژمارا تە یا کەڤن د بنێ دا نڤیسی یە.' }
      },
      {
        shot: 'shots/x/e7.jpg', w: 720, h: 925,
        en: { t: 'Tap Update phone number', d: 'A small box opens with three choices. Take the first one.', note: 'Do not tap Delete phone number. That takes your number off without putting a new one on.' },
        ar: { t: 'اضغط على Update phone number', d: 'يفتح مربع صغير فيه ثلاثة خيارات. اختر الأول.', note: 'لا تضغط Delete phone number. هذا يزيل رقمك دون إضافة رقم جديد.' },
        ckb: { t: 'لە Update phone number بدە', d: 'چوارگۆشەیەکی بچووک دەکرێتەوە کە سێ هەڵبژاردەی تێدایە. یەکەمیان هەڵبژێرە.', note: 'لە Delete phone number مەدە. ئەوە ژمارەکەت لادەبات بەبێ ئەوەی نوێیەک دابنێت.' },
        ku: { t: 'ل Update phone number بدە', d: 'چوارگۆشەکا بچویک ڤەدبیت یا سێ هەلبژارتن تێدا. ئێکێ هەلبژێرە.', note: 'ل Delete phone number نەدە. ئەو ژمارا تە رادکەت بێی کو یەکا نوی دانیت.' }
      },
      {
        shot: 'shots/x/e8.jpg', w: 720, h: 1409,
        en: { t: 'Type your password, then tap Next', d: 'X asks for your password before it lets you change the number. After this, type the new number and the code X sends you by text.', scam: true, done: true },
        ar: { t: 'اكتب كلمة مرورك ثم اضغط Next', d: 'إكس يطلب كلمة مرورك قبل أن يسمح لك بتغيير الرقم. بعد ذلك اكتب الرقم الجديد والرمز الذي يرسله لك إكس برسالة نصية.', scam: true, done: true },
        ckb: { t: 'وشەی تێپەڕەکەت بنووسە، پاشان لە Next بدە', d: 'ئێکس داوای وشەی تێپەڕت لێ دەکات پێش ئەوەی ڕێگەت پێبدات ژمارەکە بگۆڕیت. دوای ئەوە ژمارە نوێیەکە و ئەو کۆدە بنووسە کە ئێکس بە نامە بۆت دەنێرێت.', scam: true, done: true },
        ku: { t: 'پەیڤا خۆ یا دەربازبوونێ بنڤیسە، پاشی ل Next بدە', d: 'ئێکس ژ تە پەیڤا دەربازبوونێ دخوازیت بەری دەستویریێ بدەتە تە کو ژمارێ بگوهۆڕی. پشتی وێ ژمارا نوی و ئەو کۆدێ ئێکس ب نامەیێ بۆ تە دشینیت بنڤیسە.', scam: true, done: true }
      }
    ]
  },
  viber: {
    ios: [
      {
        shot: 'shots/viber/b1.jpg', w: 720, h: 1431,
        en: { t: 'Open Viber. Tap More.', d: 'It is at the bottom of the screen, on the far right. It looks like three dots.' },
        ar: { t: 'افتح فايبر واضغط على More', d: 'موجود أسفل الشاشة في أقصى اليمين، وشكله ثلاث نقاط.' },
        ckb: { t: 'ڤایبەر بکەرەوە و لە More بدە', d: 'لە خوارەوەی شاشەکەیە، لای ڕاستی دواوە. وەک سێ خاڵ وایە.' },
        ku: { t: 'ڤایبەرێ ڤەکە و ل More بدە', d: 'ل بنێ ئێکرانێ یە، ل ڕاستێ یا دویماهیێ. وەکی سێ خالان ە.' }
      },
      {
        shot: 'shots/viber/b2.jpg', w: 720, h: 1438,
        en: { t: 'Tap Settings', d: 'Go down past Viber Plus and Sticker Market. Settings has a blue cog next to it.' },
        ar: { t: 'اضغط على Settings', d: 'انزل بعد Viber Plus و Sticker Market. بجانب Settings ترس أزرق.' },
        ckb: { t: 'لە Settings بدە', d: 'بەرەو خوارەوە بڕۆ دوای Viber Plus و Sticker Market. چەرخێکی شین لەتەنیشت Settings ـە.' },
        ku: { t: 'ل Settings بدە', d: 'بەرەڤ خوارێ بچە پشتی Viber Plus و Sticker Market. چەرخەکا شین ل تەنشتا Settings ە.' }
      },
      {
        shot: 'shots/viber/b3.jpg', w: 720, h: 1428,
        en: { t: 'Tap Account', d: 'It is the second line on the list.' },
        ar: { t: 'اضغط على Account', d: 'هو ثاني سطر في القائمة.' },
        ckb: { t: 'لە Account بدە', d: 'دووەم دێڕە لە لیستەکە.' },
        ku: { t: 'ل Account بدە', d: 'دووێ ڕێز ە د لیستێ دا.' }
      },
      {
        shot: 'shots/viber/b4.jpg', w: 720, h: 1438,
        en: { t: 'Tap Change Phone Number', d: 'It is the fourth line, just above Deactivate Account.' },
        ar: { t: 'اضغط على Change Phone Number', d: 'هو رابع سطر، فوق Deactivate Account مباشرة.' },
        ckb: { t: 'لە Change Phone Number بدە', d: 'چوارەم دێڕە، ڕاست لە سەرووی Deactivate Account.' },
        ku: { t: 'ل Change Phone Number بدە', d: 'چارێ ڕێز ە، ڕاست ل سەرێ Deactivate Account.' }
      },
      {
        shot: 'shots/viber/b5.jpg', w: 720, h: 1453,
        en: { t: 'Read the screen, then tap Continue', d: 'Viber tells you your chats, Communities and stickers all stay. Tap the purple Continue at the bottom.', note: 'If the new number already had Viber credit or a subscription on it, that credit is deleted when you move your account across.' },
        ar: { t: 'اقرأ الشاشة ثم اضغط Continue', d: 'فايبر يخبرك أن محادثاتك والمجتمعات والملصقات كلها تبقى. اضغط Continue البنفسجي في الأسفل.', note: 'إذا كان لدى الرقم الجديد رصيد فايبر أو اشتراك من قبل، فسيُحذف ذلك الرصيد عند نقل حسابك إليه.' },
        ckb: { t: 'شاشەکە بخوێنەرەوە، پاشان لە Continue بدە', d: 'ڤایبەر پێت دەڵێت چات و کۆمەڵگا و ستیکەرەکانت هەموو دەمێننەوە. لە Continue ی مۆر لە خوارەوە بدە.', note: 'ئەگەر ژمارە نوێیەکە پێشتر باڵانسی ڤایبەر یان بەشداریی هەبووبێت، ئەو باڵانسە دەسڕدرێتەوە کاتێک هەژمارەکەی بۆ دەگوازیتەوە.' },
        ku: { t: 'ئێکرانێ بخوینە، پاشی ل Continue بدە', d: 'ڤایبەر دبێژیتە تە چات و کۆمەلگەه و ستیکەرێن تە هەمی دمینن. ل Continue یا مۆر ل بنێ بدە.', note: 'ئەگەر ژمارا نوی بەری نوکە بالانسا ڤایبەری یان بەشداری هەبی، ئەو بالانس دهێتە ژێبرن دەمێ تو هەژمارا خۆ دگوهێزیە سەر.' }
      },
      {
        shot: 'shots/viber/b6.jpg', w: 720, h: 1446,
        en: { t: 'Tap New Phone Number', d: 'Choose this one if you are keeping the same phone. The other choice is only for when the phone is new as well.' },
        ar: { t: 'اضغط على New Phone Number', d: 'اختر هذا إذا كنت ستبقى على نفس الهاتف. الخيار الآخر يكون عندما يكون الهاتف جديداً أيضاً.' },
        ckb: { t: 'لە New Phone Number بدە', d: 'ئەمە هەڵبژێرە ئەگەر هەمان مۆبایل دەهێڵیتەوە. ئەوی تر تەنها بۆ کاتێکە کە مۆبایلەکەش نوێ بێت.' },
        ku: { t: 'ل New Phone Number بدە', d: 'ڤێ هەلبژێرە ئەگەر تو هەمان مۆبایلی دهێلی. یا دی تنێ بۆ وێ دەمێ یە کو مۆبایل ژی نوی بیت.' }
      },
      {
        shot: 'shots/viber/b7.jpg', w: 720, h: 1450,
        en: { t: 'Tap Continue', d: 'Viber warns that everyone who has your old number saved will be told it changed. That is normal.' },
        ar: { t: 'اضغط على Continue', d: 'فايبر ينبّهك أن كل من لديه رقمك القديم محفوظاً سيُبلّغ بأنه تغيّر. هذا أمر طبيعي.' },
        ckb: { t: 'لە Continue بدە', d: 'ڤایبەر ئاگادارت دەکاتەوە کە هەموو ئەوانەی ژمارە کۆنەکەت پاشەکەوت کردووە پێیان دەوترێت گۆڕاوە. ئەمە ئاساییە.' },
        ku: { t: 'ل Continue بدە', d: 'ڤایبەر ئاگەهدار دکەت کو هەمی ئەوێن ژمارا تە یا کەڤن پاراستی دێ هێنە ئاگەهدارکرن کو هاتیە گوهۆڕین. ئەڤە ئاسایی یە.' }
      },
      {
        shot: 'shots/viber/b8.jpg', w: 720, h: 1429,
        en: { t: 'Type your new number, then tap Continue', d: 'Pick your country first, then type the number. Make sure this number can receive a text or a call.', scam: true },
        ar: { t: 'اكتب رقمك الجديد ثم اضغط Continue', d: 'اختر دولتك أولاً ثم اكتب الرقم. تأكد أن هذا الرقم يستطيع استقبال رسالة أو مكالمة.', scam: true },
        ckb: { t: 'ژمارە نوێیەکەت بنووسە، پاشان لە Continue بدە', d: 'سەرەتا وڵاتەکەت هەڵبژێرە، پاشان ژمارەکە بنووسە. دڵنیابە ئەم ژمارەیە دەتوانێت نامە یان پەیوەندی وەربگرێت.', scam: true },
        ku: { t: 'ژمارا خۆ یا نوی بنڤیسە، پاشی ل Continue بدە', d: 'بەرێ وەلاتێ خۆ هەلبژێرە، پاشی ژمارێ بنڤیسە. دلنیا بە ئەڤ ژمارە دشێت نامەیەکێ یان تەلەفۆنەکێ وەرگریت.', scam: true }
      },
      {
        shot: 'shots/viber/b9.jpg', w: 720, h: 1443,
        en: { t: 'Check the number, then tap Yes', d: 'Read every digit. If one is wrong, tap Edit. After Yes, Viber sends a code by text or by call. Enter it and your number is changed.', done: true },
        ar: { t: 'تحقّق من الرقم ثم اضغط Yes', d: 'اقرأ كل رقم منه. إذا كان هناك خطأ، اضغط Edit. بعد Yes، يرسل لك فايبر رمزاً برسالة أو مكالمة. أدخله ويتغيّر رقمك.', done: true },
        ckb: { t: 'ژمارەکە بپشکنە، پاشان لە Yes بدە', d: 'هەموو ژمارەیەکی بخوێنەرەوە. ئەگەر یەکێکیان هەڵە بوو، لە Edit بدە. دوای Yes، ڤایبەر کۆدێک بە نامە یان پەیوەندی دەنێرێت. بیخە ژوورەوە و ژمارەکەت دەگۆڕێت.', done: true },
        ku: { t: 'ژمارێ بپشکنە، پاشی ل Yes بدە', d: 'هەر ژمارەکێ بخوینە. ئەگەر ئێک شاش بیت، ل Edit بدە. پشتی Yes، ڤایبەر کۆدەکێ ب نامەیێ یان ب تەلەفۆنێ دشینیت. بکە ژۆر و ژمارا تە دهێتە گوهۆڕین.', done: true }
      }
    ]
  },
  snapchat: {
    ios: [
      {
        shot: 'shots/snapchat/s1.jpg', w: 720, h: 307,
        en: { t: 'Open Snapchat. Tap your picture.', d: 'It is at the top of the screen, on the left.' },
        ar: { t: 'افتح سناب شات واضغط على صورتك', d: 'موجودة أعلى الشاشة على اليسار.' },
        ckb: { t: 'سناپچات بکەرەوە و لە وێنەکەت بدە', d: 'لە سەرەوەی شاشەکەیە، لای چەپ.' },
        ku: { t: 'سناپچاتێ ڤەکە و ل وێنا خۆ بدە', d: 'ل سەرێ ئێکرانێ یە، ل چەپێ.' }
      },
      {
        shot: 'shots/snapchat/s2.jpg', w: 720, h: 299,
        en: { t: 'Tap the gear', d: 'It is at the top of the screen, on the right. It looks like a small cog.' },
        ar: { t: 'اضغط على الترس', d: 'موجود أعلى الشاشة على اليمين، وشكله ترس صغير.' },
        ckb: { t: 'لە چەرخەکە بدە', d: 'لە سەرەوەی شاشەکەیە، لای ڕاست. وەک چەرخێکی بچووک وایە.' },
        ku: { t: 'ل چەرخی بدە', d: 'ل سەرێ ئێکرانێ یە، ل ڕاستێ. وەکی چەرخەکا بچویک ە.' }
      },
      {
        shot: 'shots/snapchat/s3.jpg', w: 720, h: 980,
        en: { t: 'Tap Mobile Number', d: 'Under MY ACCOUNT. It is just below Username.' },
        ar: { t: 'اضغط على Mobile Number', d: 'تحت MY ACCOUNT، أسفل Username مباشرة.' },
        ckb: { t: 'لە Mobile Number بدە', d: 'لە ژێر MY ACCOUNT. ڕاست لە ژێر Username دایە.' },
        ku: { t: 'ل Mobile Number بدە', d: 'د بنێ MY ACCOUNT دا. ڕاست د بنێ Username دا یە.' }
      },
      {
        shot: 'shots/snapchat/s4.jpg', w: 720, h: 1392,
        en: { t: 'Type your new number', d: 'Tap the country line first if it is wrong. Then type the new number. Snapchat sends you a code by text. Type it in and your number is changed.', done: true, note: 'Type your number here in Snapchat and nowhere else. The switch under it decides whether people can find you by your number. Leave it as you want it.' },
        ar: { t: 'اكتب رقمك الجديد', d: 'اضغط على سطر الدولة أولاً إذا كان خاطئاً. ثم اكتب الرقم الجديد. سناب شات يرسل لك رمزاً برسالة نصية. اكتبه ويتغيّر رقمك.', done: true, note: 'اكتب رقمك هنا داخل سناب شات فقط، وليس في أي مكان آخر. المفتاح الذي تحته يحدّد ما إذا كان بإمكان الناس العثور عليك برقمك. اتركه كما تريد.' },
        ckb: { t: 'ژمارە نوێیەکەت بنووسە', d: 'سەرەتا لە دێڕی وڵاتەکە بدە ئەگەر هەڵە بوو. پاشان ژمارە نوێیەکە بنووسە. سناپچات کۆدێکت بە نامە بۆ دەنێرێت. بینووسە و ژمارەکەت دەگۆڕێت.', done: true, note: 'ژمارەکەت لێرە لەناو سناپچات بنووسە، لە هیچ شوێنێکی تر نا. ئەو کلیلەی لە ژێریەتی دیاری دەکات ئایا خەڵک دەتوانن بە ژمارەکەت بتدۆزنەوە. وەک خۆت دەتەوێت بیهێڵەوە.' },
        ku: { t: 'ژمارا خۆ یا نوی بنڤیسە', d: 'بەرێ ل ڕێزا وەلاتی بدە ئەگەر شاش بیت. پاشی ژمارا نوی بنڤیسە. سناپچات کۆدەکێ ب نامەیێ بۆ تە دشینیت. بنڤیسە و ژمارا تە دهێتە گوهۆڕین.', done: true, note: 'ژمارا خۆ ل ڤێرێ د سناپچاتێ دا بنڤیسە، ل چو جهێن دی نە. ئەو کلیلا د بنێ دا دیار دکەت ئەرێ خەلک دشێن ب ژمارا تە تە بدۆزن. وەکی تو دخوازی بهێلە.' }
      }
    ]
  },
  tiktok: {
    ios: [
      {
        shot: 'shots/tiktok/k1.jpg', w: 720, h: 1487,
        en: { t: 'Open TikTok. Tap Profile.', d: 'It is at the bottom of the screen, on the far right.' },
        ar: { t: 'افتح تيك توك واضغط على Profile', d: 'موجود أسفل الشاشة في أقصى اليمين.' },
        ckb: { t: 'تیکتۆک بکەرەوە و لە Profile بدە', d: 'لە خوارەوەی شاشەکەیە، لای ڕاستی دواوە.' },
        ku: { t: 'تیکتۆکێ ڤەکە و ل Profile بدە', d: 'ل بنێ ئێکرانێ یە، ل ڕاستێ یا دویماهیێ.' }
      },
      {
        shot: 'shots/tiktok/k2.jpg', w: 720, h: 401,
        en: { t: 'Tap the three lines', d: 'They are at the top of the screen, on the right.' },
        ar: { t: 'اضغط على الخطوط الثلاثة', d: 'موجودة أعلى الشاشة على اليمين.' },
        ckb: { t: 'لە سێ هێڵەکە بدە', d: 'لە سەرەوەی شاشەکەیە، لای ڕاست.' },
        ku: { t: 'ل سێ خەزان بدە', d: 'ل سەرێ ئێکرانێ یە، ل ڕاستێ.' }
      },
      {
        shot: 'shots/tiktok/k3.jpg', w: 720, h: 575,
        en: { t: 'Tap Settings and privacy', d: 'It is the last item on the list that slides up from the bottom.' },
        ar: { t: 'اضغط على Settings and privacy', d: 'هو آخر عنصر في القائمة التي تظهر من الأسفل.' },
        ckb: { t: 'لە Settings and privacy بدە', d: 'دوایین شتە لەو لیستەی لە خوارەوە دێتە سەرەوە.' },
        ku: { t: 'ل Settings and privacy بدە', d: 'دویماهی تشت ە د وێ لیستێ دا یا ژ خوارێ دهێتە سەرێ.' }
      },
      {
        shot: 'shots/tiktok/k4.jpg', w: 720, h: 1443,
        en: { t: 'Tap Account', d: 'It is the first line, right at the top under the word Account.' },
        ar: { t: 'اضغط على Account', d: 'هو أول سطر، في الأعلى مباشرة تحت كلمة Account.' },
        ckb: { t: 'لە Account بدە', d: 'یەکەم دێڕە، ڕاست لە سەرەوە لە ژێر وشەی Account.' },
        ku: { t: 'ل Account بدە', d: 'ئێکەم ڕێز ە، ڕاست ل سەرێ د بنێ پەیڤا Account دا.' }
      },
      {
        shot: 'shots/tiktok/k5.jpg', w: 720, h: 1437,
        en: { t: 'Tap Account information', d: 'It is the first line on the page.' },
        ar: { t: 'اضغط على Account information', d: 'هو أول سطر في الصفحة.' },
        ckb: { t: 'لە Account information بدە', d: 'یەکەم دێڕە لە پەڕەکە.' },
        ku: { t: 'ل Account information بدە', d: 'ئێکەم ڕێز ە د لاپەڕێ دا.' }
      },
      {
        shot: 'shots/tiktok/k6.jpg', w: 720, h: 444,
        en: { t: 'Tap Phone number', d: 'Your old number is shown next to it.' },
        ar: { t: 'اضغط على Phone number', d: 'رقمك القديم معروض بجانبه.' },
        ckb: { t: 'لە Phone number بدە', d: 'ژمارە کۆنەکەت لەتەنیشتی پیشان دراوە.' },
        ku: { t: 'ل Phone number بدە', d: 'ژمارا تە یا کەڤن ل تەنشتێ دیار ە.' }
      },
      {
        shot: 'shots/tiktok/k7.jpg', w: 720, h: 1459,
        en: { t: 'Tap Change phone', d: 'TikTok shows your old number. Tap Change phone.', note: 'Do not tap Unlink phone. That takes your number off without putting a new one on, and you could lose your way back into the account.' },
        ar: { t: 'اضغط على Change phone', d: 'تيك توك يعرض رقمك القديم. اضغط Change phone.', note: 'لا تضغط Unlink phone. هذا يزيل رقمك دون إضافة رقم جديد، وقد تفقد طريقك للعودة إلى الحساب.' },
        ckb: { t: 'لە Change phone بدە', d: 'تیکتۆک ژمارە کۆنەکەت پیشان دەدات. لە Change phone بدە.', note: 'لە Unlink phone مەدە. ئەوە ژمارەکەت لادەبات بەبێ ئەوەی نوێیەک دابنێت، و لەوانەیە ڕێگای گەڕانەوەت بۆ هەژمارەکە لەدەست بدەیت.' },
        ku: { t: 'ل Change phone بدە', d: 'تیکتۆک ژمارا تە یا کەڤن نیشان ددەت. ل Change phone بدە.', note: 'ل Unlink phone نەدە. ئەو ژمارا تە رادکەت بێی کو یەکا نوی دانیت، و دبیت تو ڕێکا خۆ یا زڤڕینێ بۆ هەژمارێ ژ دەست بدەی.' }
      },
      {
        shot: 'shots/tiktok/k8.jpg', w: 720, h: 1446,
        en: { t: 'Tap the country box', d: 'It is the small box on the left, before the number. It may be showing the wrong country.' },
        ar: { t: 'اضغط على مربع الدولة', d: 'هو المربع الصغير على اليسار، قبل الرقم. قد يعرض دولة خاطئة.' },
        ckb: { t: 'لە چوارگۆشەی وڵاتەکە بدە', d: 'چوارگۆشە بچووکەکەیە لای چەپ، پێش ژمارەکە. لەوانەیە وڵاتێکی هەڵە پیشان بدات.' },
        ku: { t: 'ل چوارگۆشا وەلاتی بدە', d: 'چوارگۆشا بچویک ە ل چەپێ، بەری ژمارێ. دبیت وەلاتەکێ شاش نیشان بدەت.' }
      },
      {
        shot: 'shots/tiktok/k9.jpg', w: 720, h: 1438,
        en: { t: 'Find your country', d: 'Type the first letters of its name in the search box, then tap it in the list.' },
        ar: { t: 'ابحث عن دولتك', d: 'اكتب أول حروف اسمها في مربع البحث، ثم اضغط عليها في القائمة.' },
        ckb: { t: 'وڵاتەکەت بدۆزەرەوە', d: 'یەکەم پیتەکانی ناوەکەی لە خانەی گەڕان بنووسە، پاشان لە لیستەکە لێی بدە.' },
        ku: { t: 'وەلاتێ خۆ بدۆزە', d: 'ئێکەم تیپێن ناڤێ وی د خانا گەڕانێ دا بنڤیسە، پاشی د لیستێ دا ل وی بدە.' }
      },
      {
        shot: 'shots/tiktok/k10.jpg', w: 720, h: 1457,
        en: { t: 'Type your new number, then tap Continue', d: 'Type it here inside TikTok and nowhere else.', scam: true },
        ar: { t: 'اكتب رقمك الجديد ثم اضغط Continue', d: 'اكتبه هنا داخل تيك توك فقط، وليس في أي مكان آخر.', scam: true },
        ckb: { t: 'ژمارە نوێیەکەت بنووسە، پاشان لە Continue بدە', d: 'تەنها لێرە لەناو تیکتۆک بینووسە، لە هیچ شوێنێکی تر نا.', scam: true },
        ku: { t: 'ژمارا خۆ یا نوی بنڤیسە، پاشی ل Continue بدە', d: 'تنێ ل ڤێرێ د تیکتۆکێ دا بنڤیسە، ل چو جهێن دی نە.', scam: true }
      },
      {
        shot: 'shots/tiktok/k11.jpg', w: 720, h: 1474,
        en: { t: 'Type the 6 numbers you get by text. You are done.', d: 'TikTok sends six numbers to your new phone. Type them in and your number is changed.', done: true },
        ar: { t: 'اكتب الأرقام الستة التي تصلك برسالة. انتهيت.', d: 'تيك توك يرسل ستة أرقام إلى هاتفك الجديد. اكتبها ويتغيّر رقمك.', done: true },
        ckb: { t: 'ئەو شەش ژمارەیە بنووسە کە بە نامە بۆت دێت. تەواو بوو.', d: 'تیکتۆک شەش ژمارە بۆ مۆبایلە نوێیەکەت دەنێرێت. بیاننووسە و ژمارەکەت دەگۆڕێت.', done: true },
        ku: { t: 'ئەو شەش ژمارە بنڤیسە یێن ب نامەیێ بۆ تە دهێن. قەدیا.', d: 'تیکتۆک شەش ژمارا بۆ مۆبایلێ تە یێ نوی دشینیت. وان بنڤیسە و ژمارا تە دهێتە گوهۆڕین.', done: true }
      }
    ]
  },
  facebook: {
    ios: [
      {
        shot: 'shots/facebook/f1.jpg', w: 720, h: 1460,
        en: { t: 'Open Facebook. Tap the three lines.', d: 'They are at the top of the screen, on the left, next to the word facebook.' },
        ar: { t: 'افتح فيسبوك واضغط على الخطوط الثلاثة', d: 'موجودة أعلى الشاشة على اليسار، بجانب كلمة facebook.' },
        ckb: { t: 'فەیسبووک بکەرەوە و لە سێ هێڵەکە بدە', d: 'لە سەرەوەی شاشەکەیە، لای چەپ، لەتەنیشت وشەی facebook.' },
        ku: { t: 'فەیسبووکێ ڤەکە و ل سێ خەزان بدە', d: 'ل سەرێ ئێکرانێ یە، ل چەپێ، ل تەنشتا پەیڤا facebook.' }
      },
      {
        shot: 'shots/facebook/f2.jpg', w: 720, h: 1443,
        en: { t: 'Tap Settings', d: 'Open Settings and privacy, then tap Settings at the top of that list.' },
        ar: { t: 'اضغط على Settings', d: 'افتح Settings and privacy ثم اضغط Settings في أعلى تلك القائمة.' },
        ckb: { t: 'لە Settings بدە', d: 'Settings and privacy بکەرەوە، پاشان لە Settings ی سەرەوەی ئەو لیستە بدە.' },
        ku: { t: 'ل Settings بدە', d: 'Settings and privacy ڤەکە، پاشی ل Settings یا سەرێ وێ لیستێ بدە.' }
      },
      {
        shot: 'shots/facebook/f3.jpg', w: 720, h: 1444,
        en: { t: 'Tap See more in Accounts Centre', d: 'It is the blue writing inside the Meta box at the top.' },
        ar: { t: 'اضغط على See more in Accounts Centre', d: 'هي الكتابة الزرقاء داخل مربع Meta في الأعلى.' },
        ckb: { t: 'لە See more in Accounts Centre بدە', d: 'نووسینە شینەکەیە لەناو چوارگۆشەی Meta لە سەرەوە.' },
        ku: { t: 'ل See more in Accounts Centre بدە', d: 'نڤیسارا شین ە د چوارگۆشا Meta دا ل سەرێ.' }
      },
      {
        shot: 'shots/facebook/f4.jpg', w: 720, h: 1421,
        en: { t: 'Tap Personal details', d: 'Go down to Account settings. It sits under Password and security.' },
        ar: { t: 'اضغط على Personal details', d: 'انزل إلى Account settings. تقع تحت Password and security.' },
        ckb: { t: 'لە Personal details بدە', d: 'بەرەو خوارەوە بڕۆ بۆ Account settings. لە ژێر Password and security دایە.' },
        ku: { t: 'ل Personal details بدە', d: 'بەرەڤ خوارێ بچە بۆ Account settings. د بنێ Password and security دا یە.' }
      },
      {
        shot: 'shots/facebook/f5.jpg', w: 720, h: 1438,
        en: { t: 'Tap Contact info', d: 'It is the first line on the page.' },
        ar: { t: 'اضغط على Contact info', d: 'هو أول سطر في الصفحة.' },
        ckb: { t: 'لە Contact info بدە', d: 'یەکەم دێڕە لە پەڕەکە.' },
        ku: { t: 'ل Contact info بدە', d: 'ئێکەم ڕێز ە د لاپەڕێ دا.' }
      },
      {
        shot: 'shots/facebook/f6.jpg', w: 720, h: 1440,
        en: { t: 'Tap Add mobile number', d: 'The button near the bottom of the screen.' },
        ar: { t: 'اضغط على Add mobile number', d: 'الزر قرب أسفل الشاشة.' },
        ckb: { t: 'لە Add mobile number بدە', d: 'دوگمەکە نزیک خوارەوەی شاشەکە.' },
        ku: { t: 'ل Add mobile number بدە', d: 'دوگمە نێزیکی بنێ ئێکرانێ.' }
      },
      {
        shot: 'shots/facebook/f7.jpg', w: 720, h: 1444,
        en: { t: 'Type your new number, then tap Next', d: 'Tap Change first if the country is wrong. Tick the accounts that should use this number. Facebook then sends a code by text. Type it in and tap OK.', scam: true },
        ar: { t: 'اكتب رقمك الجديد ثم اضغط Next', d: 'اضغط Change أولاً إذا كانت الدولة خاطئة. ضع علامة على الحسابات التي ستستخدم هذا الرقم. بعدها يرسل لك فيسبوك رمزاً برسالة نصية. اكتبه واضغط OK.', scam: true },
        ckb: { t: 'ژمارە نوێیەکەت بنووسە، پاشان لە Next بدە', d: 'سەرەتا لە Change بدە ئەگەر وڵاتەکە هەڵە بوو. نیشانە لەو هەژمارانە بکە کە دەبێت ئەم ژمارەیە بەکاربهێنن. پاشان فەیسبووک کۆدێکت بە نامە بۆ دەنێرێت. بینووسە و لە OK بدە.', scam: true },
        ku: { t: 'ژمارا خۆ یا نوی بنڤیسە، پاشی ل Next بدە', d: 'بەرێ ل Change بدە ئەگەر وەلات شاش بیت. نیشانێ ل وان هەژماران بکە یێن دڤێت ڤێ ژمارێ بکاربینن. پاشی فەیسبووک کۆدەکێ ب نامەیێ بۆ تە دشینیت. بنڤیسە و ل OK بدە.', scam: true }
      },
      {
        shot: 'shots/facebook/f8.jpg', w: 720, h: 1448,
        en: { t: 'Now tap your old number', d: 'You are back on Contact information. Your old number is the line with the phone icon.' },
        ar: { t: 'الآن اضغط على رقمك القديم', d: 'لقد عدت إلى Contact information. رقمك القديم هو السطر الذي بجانبه رمز الهاتف.' },
        ckb: { t: 'ئێستا لە ژمارە کۆنەکەت بدە', d: 'گەڕاویتەوە بۆ Contact information. ژمارە کۆنەکەت ئەو دێڕەیە کە وێنەی مۆبایلی لەتەنیشتیەتی.' },
        ku: { t: 'نوکە ل ژمارا خۆ یا کەڤن بدە', d: 'تو زڤڕیی بۆ Contact information. ژمارا تە یا کەڤن ئەو ڕێز ە یا وێنا مۆبایلی ل تەنشتێ.' }
      },
      {
        shot: 'shots/facebook/f9.jpg', w: 720, h: 1411,
        en: { t: 'Tap Delete number', d: 'Facebook asks you to confirm. Confirm it, and your old number is off the account.', done: true, note: 'If Facebook refuses, your old number is still your two-factor number. Go to Password and security, then Two-factor authentication, put the new number there first, and come back.' },
        ar: { t: 'اضغط على Delete number', d: 'فيسبوك يطلب منك التأكيد. أكّد، وبذلك لم يعد رقمك القديم على الحساب.', done: true, note: 'إذا رفض فيسبوك، فرقمك القديم ما زال رقم المصادقة الثنائية. اذهب إلى Password and security ثم Two-factor authentication وضع الرقم الجديد هناك أولاً ثم ارجع.' },
        ckb: { t: 'لە Delete number بدە', d: 'فەیسبووک داوای دڵنیابوونت لێ دەکات. دڵنیای بکەرەوە، ئیتر ژمارە کۆنەکەت لەسەر هەژمارەکە نامێنێت.', done: true, note: 'ئەگەر فەیسبووک ڕەتی کردەوە، واتە ژمارە کۆنەکەت هێشتا ژمارەی دووقۆڵی دڵنیاییە. بڕۆ بۆ Password and security، پاشان Two-factor authentication، سەرەتا ژمارە نوێیەکە لەوێ دابنێ و بگەڕێوە.' },
        ku: { t: 'ل Delete number بدە', d: 'فەیسبووک ژ تە دخوازیت پشتڕاست بکەی. پشتڕاست بکە، ئیتر ژمارا تە یا کەڤن ل سەر هەژمارێ نامینیت.', done: true, note: 'ئەگەر فەیسبووکێ ڕەت کر، واتە ژمارا تە یا کەڤن هێشتا ژمارا دووقۆلی یا پشتڕاستکرنێ یە. هەڕە بۆ Password and security، پاشی Two-factor authentication، بەرێ ژمارا نوی ل وێرێ دانە و بزڤڕە.' }
      }
    ]
  },
  instagram: {
    ios: [
      {
        shot: 'shots/instagram/i1.jpg', w: 720, h: 1495,
        en: { t: 'Open Instagram. Tap your photo.', d: 'It is at the bottom of the screen, on the far right.' },
        ar: { t: 'افتح إنستغرام واضغط على صورتك', d: 'موجودة أسفل الشاشة في أقصى اليمين.' },
        ckb: { t: 'ئینستاگرام بکەرەوە و لە وێنەکەت بدە', d: 'لە خوارەوەی شاشەکەیە، لای ڕاستی دواوە.' },
        ku: { t: 'ئینستاگرامێ ڤەکە و ل وێنا خۆ بدە', d: 'ل بنێ ئێکرانێ یە، ل ڕاستێ یا دویماهیێ.' }
      },
      {
        shot: 'shots/instagram/i2.jpg', w: 720, h: 1498,
        en: { t: 'Tap the three lines', d: 'They are at the top of the screen, on the right.' },
        ar: { t: 'اضغط على الخطوط الثلاثة', d: 'موجودة أعلى الشاشة على اليمين.' },
        ckb: { t: 'لە سێ هێڵەکە بدە', d: 'لە سەرەوەی شاشەکەیە، لای ڕاست.' },
        ku: { t: 'ل سێ خەزان بدە', d: 'ل سەرێ ئێکرانێ یە، ل ڕاستێ.' }
      },
      {
        shot: 'shots/instagram/i3.jpg', w: 720, h: 1491,
        en: { t: 'Tap Accounts Centre', d: 'It is the first thing on the list, under Your account.' },
        ar: { t: 'اضغط على Accounts Centre', d: 'هي أول شيء في القائمة، تحت Your account.' },
        ckb: { t: 'لە Accounts Centre بدە', d: 'یەکەم شتە لە لیستەکە، لە ژێر Your account.' },
        ku: { t: 'ل Accounts Centre بدە', d: 'ئێکەم تشت ە د لیستێ دا، د بنێ Your account دا.' }
      },
      {
        shot: 'shots/instagram/i4.jpg', w: 720, h: 1473,
        en: { t: 'Tap Personal details', d: 'Go down to Account settings. It sits under Password and security.' },
        ar: { t: 'اضغط على Personal details', d: 'انزل إلى Account settings. تقع تحت Password and security.' },
        ckb: { t: 'لە Personal details بدە', d: 'بەرەو خوارەوە بڕۆ بۆ Account settings. لە ژێر Password and security دایە.' },
        ku: { t: 'ل Personal details بدە', d: 'بەرەڤ خوارێ بچە بۆ Account settings. د بنێ Password and security دا یە.' }
      },
      {
        shot: 'shots/instagram/i5.jpg', w: 720, h: 1457,
        en: { t: 'Tap Contact info', d: 'It is the first line on the page.' },
        ar: { t: 'اضغط على Contact info', d: 'هو أول سطر في الصفحة.' },
        ckb: { t: 'لە Contact info بدە', d: 'یەکەم دێڕە لە پەڕەکە.' },
        ku: { t: 'ل Contact info بدە', d: 'ئێکەم ڕێز ە د لاپەڕێ دا.' }
      },
      {
        shot: 'shots/instagram/i6.jpg', w: 720, h: 1472,
        en: { t: 'Tap Add new contact', d: 'The blue button at the bottom of the screen.' },
        ar: { t: 'اضغط على Add new contact', d: 'الزر الأزرق أسفل الشاشة.' },
        ckb: { t: 'لە Add new contact بدە', d: 'دوگمە شینەکە لە خوارەوەی شاشەکە.' },
        ku: { t: 'ل Add new contact بدە', d: 'دوگمەیا شین ل بنێ ئێکرانێ.' }
      },
      {
        shot: 'shots/instagram/i7.jpg', w: 720, h: 1477,
        en: { t: 'Tap Add mobile number', d: 'Instagram asks whether you are adding a number or an email. Choose the number.' },
        ar: { t: 'اضغط على Add mobile number', d: 'إنستغرام يسألك إن كنت تضيف رقماً أم بريداً إلكترونياً. اختر الرقم.' },
        ckb: { t: 'لە Add mobile number بدە', d: 'ئینستاگرام پرسیارت لێ دەکات ئایا ژمارە زیاد دەکەیت یان ئیمەیل. ژمارەکە هەڵبژێرە.' },
        ku: { t: 'ل Add mobile number بدە', d: 'ئینستاگرام ژ تە دپرسیت ئەرێ تو ژمارەکێ زێدە دکەی یان ئیمەیلەکێ. ژمارێ هەلبژێرە.' }
      },
      {
        shot: 'shots/instagram/i8.jpg', w: 720, h: 1470,
        en: { t: 'Type your new number, then tap Next', d: 'Tap Change first if the country is wrong. Tick the accounts that should use this number. Instagram then sends you a code by text. Type it in.', scam: true },
        ar: { t: 'اكتب رقمك الجديد ثم اضغط Next', d: 'اضغط Change أولاً إذا كانت الدولة خاطئة. ضع علامة على الحسابات التي ستستخدم هذا الرقم. بعدها يرسل لك إنستغرام رمزاً برسالة نصية. اكتبه.', scam: true },
        ckb: { t: 'ژمارە نوێیەکەت بنووسە، پاشان لە Next بدە', d: 'سەرەتا لە Change بدە ئەگەر وڵاتەکە هەڵە بوو. نیشانە لەو هەژمارانە بکە کە دەبێت ئەم ژمارەیە بەکاربهێنن. پاشان ئینستاگرام کۆدێکت بە نامە بۆ دەنێرێت. بینووسە.', scam: true },
        ku: { t: 'ژمارا خۆ یا نوی بنڤیسە، پاشی ل Next بدە', d: 'بەرێ ل Change بدە ئەگەر وەلات شاش بیت. نیشانێ ل وان هەژماران بکە یێن دڤێت ڤێ ژمارێ بکاربینن. پاشی ئینستاگرام کۆدەکێ ب نامەیێ بۆ تە دشینیت. بنڤیسە.', scam: true }
      },
      {
        shot: 'shots/instagram/i9.jpg', w: 720, h: 1504,
        en: { t: 'Now go back and tap your old number', d: 'You are back on Contact information. Your old number is still listed there.' },
        ar: { t: 'الآن ارجع واضغط على رقمك القديم', d: 'لقد عدت إلى Contact information. رقمك القديم ما زال موجوداً في القائمة.' },
        ckb: { t: 'ئێستا بگەڕێوە و لە ژمارە کۆنەکەت بدە', d: 'گەڕاویتەوە بۆ Contact information. ژمارە کۆنەکەت هێشتا لەوێدایە.' },
        ku: { t: 'نوکە بزڤڕە و ل ژمارا خۆ یا کەڤن بدە', d: 'تو زڤڕیی بۆ Contact information. ژمارا تە یا کەڤن هێشتا ل وێرێ یە.' }
      },
      {
        shot: 'shots/instagram/i10.jpg', w: 720, h: 1463,
        en: { t: 'Tap Delete number', d: 'It is the red writing under the list of accounts.' },
        ar: { t: 'اضغط على Delete number', d: 'هي الكتابة الحمراء تحت قائمة الحسابات.' },
        ckb: { t: 'لە Delete number بدە', d: 'نووسینە سوورەکەیە لە ژێر لیستی هەژمارەکان.' },
        ku: { t: 'ل Delete number بدە', d: 'نڤیسارا سۆر ە د بنێ لیستا هەژماران دا.' }
      },
      {
        shot: 'shots/instagram/i11.jpg', w: 720, h: 1490,
        en: { t: 'Tap Delete', d: 'Instagram asks you to confirm. Tap Delete. Your old number is now off the account.', done: true },
        ar: { t: 'اضغط على Delete', d: 'إنستغرام يطلب منك التأكيد. اضغط Delete. رقمك القديم لم يعد على الحساب.', done: true },
        ckb: { t: 'لە Delete بدە', d: 'ئینستاگرام داوای دڵنیابوونت لێ دەکات. لە Delete بدە. ژمارە کۆنەکەت ئێستا لەسەر هەژمارەکە نەماوە.', done: true },
        ku: { t: 'ل Delete بدە', d: 'ئینستاگرام ژ تە دخوازیت پشتڕاست بکەی. ل Delete بدە. ژمارا تە یا کەڤن نوکە ل سەر هەژمارێ نەما.', done: true }
      },
      {
        shot: 'shots/instagram/i12.jpg', w: 720, h: 1478,
        en: { t: 'If you see this message, stop', d: 'Instagram will not delete the number while it is your two-factor number. Go to Password and security, then Two-factor authentication, and put your new number there first. Then come back and delete the old one.', note: 'This is the step that locks people out. Do it before your old SIM stops working.' },
        ar: { t: 'إذا ظهرت لك هذه الرسالة، توقّف', d: 'إنستغرام لن يحذف الرقم ما دام هو رقم المصادقة الثنائية. اذهب إلى Password and security ثم Two-factor authentication وضع رقمك الجديد هناك أولاً. ثم ارجع واحذف القديم.', note: 'هذه هي الخطوة التي تُغلق الحسابات على أصحابها. نفّذها قبل أن تتوقف شريحتك القديمة.' },
        ckb: { t: 'ئەگەر ئەم پەیامەت بۆ هات، بوەستە', d: 'ئینستاگرام ژمارەکە ناسڕێتەوە تا ئەو کاتەی ژمارەی دووقۆڵی دڵنیاییە. بڕۆ بۆ Password and security، پاشان Two-factor authentication، و سەرەتا ژمارە نوێیەکەت لەوێ دابنێ. پاشان بگەڕێوە و کۆنەکە بسڕەوە.', note: 'ئەمە ئەو هەنگاوەیە کە خەڵک لە هەژمارەکانیان دەردەکات. پێش ئەوەی سیمکارتە کۆنەکەت بوەستێت ئەنجامی بدە.' },
        ku: { t: 'ئەگەر ئەڤ پەیامە بۆ تە هات، بوەستە', d: 'ئینستاگرام دێ ژمارێ نەژێبیت هەتا ئەو ژمارا دووقۆلی یا پشتڕاستکرنێ بیت. هەڕە بۆ Password and security، پاشی Two-factor authentication، و بەرێ ژمارا خۆ یا نوی ل وێرێ دانە. پاشی بزڤڕە و یا کەڤن ژێبە.', note: 'ئەڤە ئەو گاڤە یە یا خەلکی ژ هەژمارێن وان دەردخیت. بەری سیمکارتا تە یا کەڤن بوەستیت وێ بکە.' }
      }
    ]
  },
  telegram: {
    ios: [
      {
        shot: 'shots/telegram/t1.jpg', w: 720, h: 994,
        en: { t: 'Open Telegram. Tap Settings.', d: 'It is at the bottom of the screen, on the far right. It looks like a little cog.' },
        ar: { t: 'افتح تيليجرام واضغط على Settings', d: 'موجودة أسفل الشاشة في أقصى اليمين، وشكلها ترس صغير.' },
        ckb: { t: 'تێلێگرام بکەرەوە و لە Settings بدە', d: 'لە خوارەوەی شاشەکەیە، لای ڕاستی دواوە. وەک چەرخێکی بچووک وایە.' },
        ku: { t: 'تێلێگرامێ ڤەکە و ل Settings بدە', d: 'ل بنێ ئێکرانێ یە، ل ڕاستێ یا دویماهیێ. وەکی چەرخەکا بچویک ە.' }
      },
      {
        shot: 'shots/telegram/t2.jpg', w: 720, h: 995,
        en: { t: 'Tap Edit', d: 'It is at the top of the screen, on the right, above your photo.' },
        ar: { t: 'اضغط على Edit', d: 'موجودة أعلى الشاشة على اليمين، فوق صورتك.' },
        ckb: { t: 'لە Edit بدە', d: 'لە سەرەوەی شاشەکەیە لای ڕاست، لە سەرووی وێنەکەت.' },
        ku: { t: 'ل Edit بدە', d: 'ل سەرێ ئێکرانێ یە ل ڕاستێ، ل سەرێ وێنا تە.' }
      },
      {
        shot: 'shots/telegram/t3.jpg', w: 720, h: 1470,
        en: { t: 'Tap your phone number', d: 'Go down the list. Your number sits between Date of Birth and Your Color.' },
        ar: { t: 'اضغط على رقم هاتفك', d: 'انزل في القائمة. رقمك موجود بين Date of Birth و Your Color.' },
        ckb: { t: 'لە ژمارەی مۆبایلەکەت بدە', d: 'بەرەو خوارەوە بڕۆ لە لیستەکە. ژمارەکەت لە نێوان Date of Birth و Your Color دایە.' },
        ku: { t: 'ل ژمارا خۆ یا مۆبایلی بدە', d: 'د لیستێ دا بەرەڤ خوارێ بچە. ژمارا تە د ناڤبەرا Date of Birth و Your Color دا یە.' }
      },
      {
        shot: 'shots/telegram/t4.jpg', w: 720, h: 1458,
        en: { t: 'Tap the blue Change Number', d: 'Telegram tells you that your messages, photos and contacts all move to the new number.' },
        ar: { t: 'اضغط على Change Number الأزرق', d: 'تيليجرام يخبرك أن رسائلك وصورك وجهات اتصالك ستنتقل كلها إلى الرقم الجديد.' },
        ckb: { t: 'لە Change Number ی شین بدە', d: 'تێلێگرام پێت دەڵێت نامە و وێنە و پەیوەندییەکانت هەموو دەچنە سەر ژمارە نوێیەکە.' },
        ku: { t: 'ل Change Number یا شین بدە', d: 'تێلێگرام دبێژیتە تە نامە و وێنە و پەیوەندیێن تە هەمی دچنە سەر ژمارا نوی.' }
      },
      {
        shot: 'shots/telegram/t5.jpg', w: 720, h: 1478,
        en: { t: 'Choose your country, type the new number, tap Continue', d: 'Tap the country name first so the code at the start is right. Type the number here in Telegram and nowhere else.', scam: true },
        ar: { t: 'اختر دولتك واكتب الرقم الجديد ثم اضغط Continue', d: 'اضغط على اسم الدولة أولاً ليكون رمز البداية صحيحاً. اكتب الرقم هنا داخل تيليجرام فقط، وليس في أي مكان آخر.', scam: true },
        ckb: { t: 'وڵاتەکەت هەڵبژێرە، ژمارە نوێیەکە بنووسە، لە Continue بدە', d: 'سەرەتا لە ناوی وڵاتەکە بدە تا کۆدی سەرەتا ڕاست بێت. ژمارەکە تەنها لێرە لەناو تێلێگرام بنووسە، لە هیچ شوێنێکی تر نا.', scam: true },
        ku: { t: 'وەلاتێ خۆ هەلبژێرە، ژمارا نوی بنڤیسە، ل Continue بدە', d: 'بەرێ ل ناڤێ وەلاتی بدە دا کۆدا سەرێ ڕاست بیت. ژمارێ تنێ ل ڤێرێ د تێلێگرامێ دا بنڤیسە، ل چو جهێن دی نە.', scam: true }
      },
      {
        shot: 'shots/telegram/t6.jpg', w: 720, h: 1488,
        en: { t: 'Check the number, then tap Continue', d: 'Telegram shows the number back to you. Read every digit. If one is wrong, tap Edit.' },
        ar: { t: 'تحقّق من الرقم ثم اضغط Continue', d: 'تيليجرام يعرض عليك الرقم. اقرأ كل رقم منه. إذا كان هناك خطأ، اضغط Edit.' },
        ckb: { t: 'ژمارەکە بپشکنە، پاشان لە Continue بدە', d: 'تێلێگرام ژمارەکەت پیشان دەداتەوە. هەموو ژمارەیەکی بخوێنەرەوە. ئەگەر یەکێکیان هەڵە بوو، لە Edit بدە.' },
        ku: { t: 'ژمارێ بپشکنە، پاشی ل Continue بدە', d: 'تێلێگرام ژمارێ نیشانا تە ددەت. هەر ژمارەکێ بخوینە. ئەگەر ئێک شاش بوو، ل Edit بدە.' }
      },
      {
        shot: 'shots/telegram/t7.jpg', w: 720, h: 1463,
        en: { t: 'Type the code. You are done.', d: 'Telegram sends five numbers by text to your new number. Type them in. Your messages, groups and contacts stay exactly as they were.', done: true },
        ar: { t: 'اكتب الرمز. انتهيت.', d: 'تيليجرام يرسل خمسة أرقام برسالة نصية إلى رقمك الجديد. اكتبها. رسائلك ومجموعاتك وجهات اتصالك تبقى كما هي تماماً.', done: true },
        ckb: { t: 'کۆدەکە بنووسە. تەواو بوو.', d: 'تێلێگرام پێنج ژمارە بە نامە بۆ ژمارە نوێیەکەت دەنێرێت. بیاننووسە. نامە و گرووپ و پەیوەندییەکانت هەروەک خۆیان دەمێننەوە.', done: true },
        ku: { t: 'کۆدی بنڤیسە. قەدیا.', d: 'تێلێگرام پێنج ژمارا ب نامەیێ بۆ ژمارا تە یا نوی دشینیت. وان بنڤیسە. نامە و گرووپ و پەیوەندیێن تە هەروەکی خۆ دمینن.', done: true }
      }
    ]
  },
  whatsapp: {
    ios: [
      {
        shot: 'shots/whatsapp/w1.jpg', w: 720, h: 1421,
        en: { t: 'Open WhatsApp. Tap You.', d: 'It is at the bottom of the screen, on the far right. It has your photo on it.' },
        ar: { t: 'افتح واتساب واضغط على You', d: 'موجودة أسفل الشاشة في أقصى اليمين، وعليها صورتك.' },
        ckb: { t: 'واتسئاپ بکەرەوە و لە You بدە', d: 'لە خوارەوەی شاشەکەیە، لای ڕاستی دواوە. وێنەکەت لەسەرێتی.' },
        ku: { t: 'واتسئاپێ ڤەکە و ل You بدە', d: 'ل بنێ ئێکرانێ یە، ل ڕاستێ یا دویماهیێ. وێنا تە ل سەر ە.' }
      },
      {
        shot: 'shots/whatsapp/w2.jpg', w: 720, h: 1476,
        en: { t: 'Tap Account', d: 'Go down a little. Account has a small key next to it.' },
        ar: { t: 'اضغط على Account', d: 'انزل قليلاً. بجانب Account رمز مفتاح صغير.' },
        ckb: { t: 'لە Account بدە', d: 'کەمێک بەرەو خوارەوە بڕۆ. وێنەی کلیلێکی بچووک لەتەنیشتیەتی.' },
        ku: { t: 'ل Account بدە', d: 'هندەک بەرەڤ خوارێ بچە. وێنا کلیلەکا بچویک ل تەنشتێ یە.' }
      },
      {
        shot: 'shots/whatsapp/w3.jpg', w: 720, h: 1458,
        en: { t: 'Tap Change phone number', d: 'Look under Your account. It sits just below Username.' },
        ar: { t: 'اضغط على Change phone number', d: 'ابحث تحت Your account. تقع مباشرة أسفل Username.' },
        ckb: { t: 'لە Change phone number بدە', d: 'لە ژێر Your account بگەڕێ. ڕاستەوخۆ لە ژێر Username دایە.' },
        ku: { t: 'ل Change phone number بدە', d: 'د بنێ Your account دا بگەڕە. راستەڤخۆ د بنێ Username دا یە.' }
      },
      {
        shot: 'shots/whatsapp/w4.jpg', w: 720, h: 1474,
        en: { t: 'Tap Next', d: 'WhatsApp explains what will happen. Read it, then tap the green Next at the top right.' },
        ar: { t: 'اضغط على Next', d: 'واتساب يشرح ما سيحدث. اقرأه ثم اضغط Next الأخضر في الأعلى على اليمين.' },
        ckb: { t: 'لە Next بدە', d: 'واتسئاپ ڕوونی دەکاتەوە چی ڕوودەدات. بیخوێنەرەوە، پاشان لە Next ی سەوز لە سەرەوە لای ڕاست بدە.' },
        ku: { t: 'ل Next بدە', d: 'واتسئاپ دیار دکەت دێ چ ڕوی دەت. بخوینە، پاشی ل Next یا کەسک ل سەرێ ڕاستێ بدە.' }
      },
      {
        shot: 'shots/whatsapp/w5.jpg', w: 720, h: 1469,
        en: { t: 'Type your old number, then your new one', d: 'Choose the country for each one first. Type both here inside WhatsApp and nowhere else.', scam: true },
        ar: { t: 'اكتب رقمك القديم ثم رقمك الجديد', d: 'اختر الدولة لكل رقم أولاً. اكتبهما هنا داخل واتساب فقط، وليس في أي مكان آخر.', scam: true },
        ckb: { t: 'ژمارە کۆنەکەت بنووسە، پاشان نوێیەکە', d: 'سەرەتا وڵات بۆ هەردووکیان هەڵبژێرە. هەردووکیان تەنها لێرە لەناو واتسئاپ بنووسە، لە هیچ شوێنێکی تر نا.', scam: true },
        ku: { t: 'ژمارا خۆ یا کەڤن بنڤیسە، پاشی یا نوی', d: 'بەرێ وەلاتی بۆ هەر دووکان هەلبژێرە. هەر دووکان تنێ ل ڤێرێ د واتسئاپێ دا بنڤیسە، ل چو جهێن دی نە.', scam: true }
      },
      {
        shot: 'shots/whatsapp/w6.jpg', w: 720, h: 1481,
        en: { t: 'Choose who to tell, then tap the green tick', d: 'WhatsApp shows your old and new number. Leave Notify contacts switched on, then tap the green tick at the top right.' },
        ar: { t: 'اختر من تُخبره ثم اضغط علامة الصح الخضراء', d: 'واتساب يعرض رقمك القديم والجديد. اترك Notify contacts مُفعّلاً، ثم اضغط علامة الصح الخضراء في الأعلى على اليمين.' },
        ckb: { t: 'هەڵبژێرە کێ ئاگادار بکەیتەوە، پاشان لە نیشانە سەوزەکە بدە', d: 'واتسئاپ ژمارە کۆن و نوێیەکەت پیشان دەدات. Notify contacts بە کراوەیی بهێڵەوە، پاشان لە نیشانە سەوزەکە لە سەرەوە لای ڕاست بدە.' },
        ku: { t: 'هەلبژێرە کێ ئاگەهدار بکەی، پاشی ل نیشانا کەسک بدە', d: 'واتسئاپ ژمارا کەڤن و یا نوی نیشان ددەت. Notify contacts ڤەکری بهێلە، پاشی ل نیشانا کەسک ل سەرێ ڕاستێ بدە.' }
      },
      {
        shot: 'shots/whatsapp/w7.jpg', w: 720, h: 1455,
        en: { t: 'Type the code, then wait', d: 'WhatsApp sends six numbers by text to your new number. Type them in. This screen means it is checking them.' },
        ar: { t: 'اكتب الرمز ثم انتظر', d: 'واتساب يرسل ستة أرقام برسالة نصية إلى رقمك الجديد. اكتبها. هذه الشاشة تعني أنه يتحقق منها.' },
        ckb: { t: 'کۆدەکە بنووسە، پاشان چاوەڕێ بکە', d: 'واتسئاپ شەش ژمارە بە نامە بۆ ژمارە نوێیەکەت دەنێرێت. بیاننووسە. ئەم شاشەیە واتە خەریکە دەیانپشکنێت.' },
        ku: { t: 'کۆدی بنڤیسە، پاشی بسەخبرە', d: 'واتسئاپ شەش ژمارا ب نامەیێ بۆ ژمارا تە یا نوی دشینیت. وان بنڤیسە. ئەڤ ئێکرانە دبێژیت ئەو دهێنە پشکنین.' }
      },
      {
        shot: 'shots/whatsapp/w8.jpg', w: 720, h: 1465,
        en: { t: 'Tap OK. You are done.', d: 'WhatsApp confirms your number has changed. Your chats and your groups stay exactly as they were.', done: true },
        ar: { t: 'اضغط OK. انتهيت.', d: 'واتساب يؤكد أن رقمك قد تغيّر. محادثاتك ومجموعاتك تبقى كما هي تماماً.', done: true },
        ckb: { t: 'لە OK بدە. تەواو بوو.', d: 'واتسئاپ دڵنیایت دەکاتەوە کە ژمارەکەت گۆڕا. چات و گرووپەکانت هەروەک خۆیان دەمێننەوە.', done: true },
        ku: { t: 'ل OK بدە. قەدیا.', d: 'واتسئاپ پشتڕاست دکەت کو ژمارا تە هاتیە گوهۆڕین. چات و گرووپێن تە هەروەکی خۆ دمینن.', done: true }
      }
    ]
  }
};


// A platform may close with its own line instead of the shared one.
export const DONE = {
  fastpay: {
    en: 'Once FastPay confirms the change, sign in with the new number.',
    ar: 'بعد أن يؤكد فاست باي التغيير، سجّل الدخول بالرقم الجديد.',
    ckb: 'دوای ئەوەی فاست پەی گۆڕانکارییەکە پشتڕاست دەکاتەوە، بە ژمارە نوێیەکە بچۆ ژوورەوە.',
    ku: 'پشتی فاست پەی گوهۆڕینێ پشتڕاست کر, ب ژمارا نوی هەرە ژوور.'
  },
  // SuperQi is the one guide that does not end when the steps do, so its
  // closing line says what is still outstanding rather than congratulating
  // the reader on a number that is not live yet.
  superqi: {
    en: 'The request is with SuperQi. The new number only works once they have approved it and you have signed in again.',
    ar: 'الطلب الآن عند سوبركي. الرقم الجديد لا يعمل إلا بعد موافقتهم وتسجيل دخولك من جديد.',
    ckb: 'داواکارییەکە لای سوپەرکییە. ژمارە نوێیەکە تەنها کار دەکات دوای ئەوەی ڕەزامەندی دەدەن و جارێکی تر دەچیتەوە ژوورەوە.',
    ku: 'داخازی نوکە ل دەڤ سوپەرکی یە. ژمارا نوی تنێ کار دکەت پشتی وان ڕەزامەندی دا و تو جارەکا دی چووی ژوور.'
  },
  threads: {
    en: 'Your new number is on the account and the old one is gone. Threads and Instagram share it, so both are updated.',
    ar: 'رقمك الجديد على الحساب والقديم لم يعد موجوداً. ثريدز وإنستغرام يتشاركانه، لذا تم تحديث كليهما.',
    ckb: 'ژمارە نوێیەکەت لەسەر هەژمارەکەیە و کۆنەکە نەماوە. ثرێدز و ئینستاگرام هاوبەشن تێیدا، بۆیە هەردووکیان نوێ کرانەوە.',
    ku: 'ژمارا تە یا نوی ل سەر هەژمارێ یە و یا کەڤن نەما. ثرێدز و ئینستاگرام تێدا هەڤبەش ن, لەوما هەر دو هاتنە نوکرن.'
  },
  linkedin: {
    en: 'Your new number is on the account and the old one is gone. Your profile, connections and messages stay as they are.',
    ar: 'رقمك الجديد على الحساب والقديم لم يعد موجوداً. ملفك الشخصي وعلاقاتك ورسائلك تبقى كما هي.',
    ckb: 'ژمارە نوێیەکەت لەسەر هەژمارەکەیە و کۆنەکە نەماوە. پرۆفایل و پەیوەندی و نامەکانت وەک خۆیان دەمێننەوە.',
    ku: 'ژمارا تە یا نوی ل سەر هەژمارێ یە و یا کەڤن نەما. پرۆفایل و پەیوەندی و نامێن تە وەکی خۆ دمینن.'
  },
  google: {
    en: 'Your number is changed in both places, the one on your profile and the one Google texts when you sign in.',
    ar: 'تم تغيير رقمك في المكانين. الذي على ملفك الشخصي والذي يرسل إليه جوجل رمز الدخول.',
    ckb: 'ژمارەکەت لە هەردوو شوێنەکەدا گۆڕا. ئەوەی لەسەر پرۆفایلەکەتە و ئەوەی گووگڵ کاتی چوونەژوورەوە نامەی بۆ دەنێرێت.',
    ku: 'ژمارا تە ل هەر دو جهان هاتە گوهۆڕین. ئەو یا ل سەر پرۆفایلا تە و ئەو یا گووگل دەمێ تو دکەڤیە ژۆر نامەیێ بۆ دشینیت.'
  },
  x: {
    en: 'Your number is changed. Your posts, followers and messages stay as they are.',
    ar: 'تم تغيير رقمك. منشوراتك ومتابعوك ورسائلك تبقى كما هي.',
    ckb: 'ژمارەکەت گۆڕا. پۆست و شوێنکەوتووان و نامەکانت وەک خۆیان دەمێننەوە.',
    ku: 'ژمارا تە هاتە گوهۆڕین. پۆست و شوینکەفتی و نامێن تە وەکی خۆ دمینن.'
  },
  viber: {
    en: 'Your number is changed. Your chats, Communities and stickers stay exactly as they were.',
    ar: 'تم تغيير رقمك. محادثاتك والمجتمعات والملصقات تبقى كما هي تماماً.',
    ckb: 'ژمارەکەت گۆڕا. چات و کۆمەڵگا و ستیکەرەکانت هەروەک خۆیان دەمێننەوە.',
    ku: 'ژمارا تە هاتە گوهۆڕین. چات و کۆمەلگەه و ستیکەرێن تە هەروەکی خۆ دمینن.'
  },
  snapchat: {
    en: 'Your number is changed. Your friends, streaks and memories stay as they are.',
    ar: 'تم تغيير رقمك. أصدقاؤك وسلاسل التواصل وذكرياتك تبقى كما هي.',
    ckb: 'ژمارەکەت گۆڕا. هاوڕێ و ستریک و یادگارییەکانت وەک خۆیان دەمێننەوە.',
    ku: 'ژمارا تە هاتە گوهۆڕین. هەڤالێن تە و ستریک و بیرانینێن تە وەکی خۆ دمینن.'
  },
  tiktok: {
    en: 'Your number is changed. Your videos, followers and messages stay as they are.',
    ar: 'تم تغيير رقمك. فيديوهاتك ومتابعوك ورسائلك تبقى كما هي.',
    ckb: 'ژمارەکەت گۆڕا. ڤیدیۆ و شوێنکەوتووان و نامەکانت وەک خۆیان دەمێننەوە.',
    ku: 'ژمارا تە هاتە گوهۆڕین. ڤیدیۆ و شوینکەفتی و نامێن تە وەکی خۆ دمینن.'
  },
  facebook: {
    en: 'Your new number is on the account and the old one is gone.',
    ar: 'رقمك الجديد على الحساب والقديم لم يعد موجوداً.',
    ckb: 'ژمارە نوێیەکەت لەسەر هەژمارەکەیە و کۆنەکە نەماوە.',
    ku: 'ژمارا تە یا نوی ل سەر هەژمارێ یە و یا کەڤن نەما.'
  },
  instagram: {
    en: 'Your new number is on the account and the old one is gone.',
    ar: 'رقمك الجديد على الحساب والقديم لم يعد موجوداً.',
    ckb: 'ژمارە نوێیەکەت لەسەر هەژمارەکەیە و کۆنەکە نەماوە.',
    ku: 'ژمارا تە یا نوی ل سەر هەژمارێ یە و یا کەڤن نەما.'
  }
};

// Someone else's recording of the same job, for the apps that refuse to be
// photographed. It sits under the closing panel, after the steps, never in
// place of them: a video cannot be skimmed, and a reader halfway through a
// number change wants the one screen they are stuck on, not four minutes.
export const VIDEO = {
  fib: 'https://www.youtube.com/watch?v=EJkwzhwgCZo',
  superqi: 'https://www.youtube.com/watch?v=5njRr315oeQ'
};

export function guideFor(platformId, device) {
  const g = GUIDES[platformId];
  if (!g) return null;
  return g[device] || g[Object.keys(g)[0]] || null;
}

export function devicesWithGuides(platformId) {
  return Object.keys(GUIDES[platformId] || {});
}

export function hasGuide(platformId) {
  return !!GUIDES[platformId];
}
