// What to do when the verification code never arrives.
//
// This is the question the site is asked most often, and almost none of it is
// the reader's fault: the message has to cross a provider's queue on its way
// to the phone, and in Iraq that queue is where codes go to die. So the fixes
// are written as nine things to try rather than as a diagnosis, ordered by how
// often each one turns out to be the actual problem: the mistyped number and
// the flat SIM card first, the provider's own switchboard last.
//
// Same shape as every other data file here: one entry per fix, written out in
// all four languages, nothing falling back to English. The number a reader
// sees beside each one is its place in this array, so the order below is the
// order of the list, and Latin terms the app prints on screen are quoted in
// ‘ ’ so the interface can isolate them inside right to left text.

export const OTP_FIXES = [
  {
    id: 'number',
    en: {
      t: 'Check the number you typed',
      d: 'Most codes that never arrive were sent somewhere else. The country code has to be +964 for Iraq, and the number after it drops its first zero: 7712345678, not 07712345678.'
    },
    ar: {
      t: 'تحقّق من الرقم الذي كتبته',
      d: 'أكثر الرموز التي لا تصل أُرسلت إلى مكان آخر. رمز الدولة يجب أن يكون +964 للعراق، والرقم بعده بدون الصفر الأول: 7712345678 وليس 07712345678.'
    },
    ckb: {
      t: 'ئەو ژمارەیەی نووسیوتە بپشکنە',
      d: 'زۆرینەی ئەو کۆدانەی هەرگیز نەگەیشتوون بۆ شوێنێکی تر نێردراون. کۆدی وڵات دەبێت +964 بێت بۆ عێراق، و ژمارەکەی دوای ئەوە بێ سفری یەکەمە: 7712345678، نەک 07712345678.'
    },
    ku: {
      t: 'ئەو ژمارا تە نڤیسی بپشکنە',
      d: 'زۆربەیا وان کۆدان یێن چو جاران نەگەهشتین, بۆ جهەکێ دی هاتینە هنارتن. کۆدا وەلاتی دڤێت +964 بیت بۆ عیراقێ, و ژمارا پشتی وێ بێ سفرا ئێکێ یە: 7712345678, نە 07712345678.'
    }
  },
  {
    id: 'sim',
    en: {
      t: 'Check the SIM card itself',
      d: 'The line has to be active and carry some balance. An empty or suspended line can still place a call while quietly refusing messages. If the phone holds two SIM cards, make sure the one you are waiting on is the one switched on.'
    },
    ar: {
      t: 'تحقّق من شريحة الهاتف نفسها',
      d: 'يجب أن يكون الخط فعّالاً وفيه رصيد. الخط الفارغ أو الموقوف قد يتصل وهو يرفض الرسائل بهدوء. وإذا كان الهاتف يحمل شريحتين، تأكّد أن الشريحة التي تنتظر عليها مفتوحة.'
    },
    ckb: {
      t: 'خودی سیمکارتەکە بپشکنە',
      d: 'هێڵەکە دەبێت چالاک بێت و کەمێک باڵانسی هەبێت. هێڵی بەتاڵ یان ڕاگیراو لەوانەیە پەیوەندی بکات و بەبێ دەنگ نامە ڕەت بکاتەوە. ئەگەر مۆبایلەکە دوو سیمکارت هەڵگرتووە، دڵنیابە لەوەی ئەوەی چاوەڕێی دەکەیت کراوەیە.'
    },
    ku: {
      t: 'سیمکارتێ بخۆ بپشکنە',
      d: 'هێل دڤێت چالاک بیت و هندەک بالانس هەبیت. هێلا ڤالا یان ڕاگرتی دشێت پەیوەندی بکەت و بێ دەنگ نامە ڕەت بکەت. ئەگەر مۆبایل دو سیمکارت هەلگرتین, دلنیا بە کو ئەوا تو چاڤەڕێ دکەی ڤەکری یە.'
    }
  },
  {
    id: 'airplane',
    en: {
      t: 'Turn airplane mode on, then off',
      d: 'Leave it on for about ten seconds, then turn it off and let the signal come back. The phone joins the network again, and a code held up behind it often lands within a minute. It works the same way on an iPhone and on an Android.'
    },
    ar: {
      t: 'شغّل وضع الطيران ثم أطفئه',
      d: 'اتركه مفتوحاً نحو عشر ثوان، ثم أطفئه واترك الشبكة تعود. الهاتف يدخل الشبكة من جديد، والرمز المحتجز خلفها يصل غالباً في أقل من دقيقة. يعمل بالطريقة نفسها على آيفون وعلى أندرويد.'
    },
    ckb: {
      t: 'دۆخی فڕۆکە چالاک بکە، پاشان بیکوژێنە',
      d: 'نزیکەی دە چرکە بە کراوەیی بهێڵە، پاشان بیکوژێنە و بهێڵە سیگناڵەکە بگەڕێتەوە. مۆبایلەکە لە نوێوە دەچێتە ناو تۆڕەکەوە، و ئەو کۆدەی لە پشتییەوە بەند بووە زۆر جار لە ماوەی خولەکێکدا دێت. لەسەر ئایفۆن و ئەندرۆید بە هەمان شێوە کار دەکات.'
    },
    ku: {
      t: 'دۆخێ فرۆکەیێ چالاک بکە, پاشی بتەمرینە',
      d: 'نێزیکی دە چرکان ڤەکری بهێلە, پاشی بتەمرینە و بهێلە سیگنال ڤەگەریت. مۆبایل ژ نوی دکەڤیتە ناڤ تۆرێ, و ئەو کۆدا ل پشتا وێ ڤەگرتی گەلەک جار د ناڤ خولەکەکێ دا دهێت. ل سەر ئایفۆن و ئەندرۆیدێ ب هەمان ئاوایی کار دکەت.'
    }
  },
  {
    id: 'wait',
    en: {
      t: 'Leave ten minutes between tries',
      d: 'Asking again and again does not push the code through. It puts you at the back of the queue, and after too many tries the app itself stops sending for a while. Ask once, wait ten minutes, then ask once more.'
    },
    ar: {
      t: 'اترك عشر دقائق بين محاولة وأخرى',
      d: 'الطلب مرة بعد مرة لا يدفع الرمز إلى الأمام. بل يضعك في آخر الصف، وبعد محاولات كثيرة يتوقف التطبيق نفسه عن الإرسال لفترة. اطلبه مرة، انتظر عشر دقائق، ثم اطلبه مرة أخرى.'
    },
    ckb: {
      t: 'دە خولەک لە نێوان هەوڵەکاندا بهێڵە',
      d: 'داواکردنی دووبارە و دووبارە کۆدەکە پێشەوە نابات. بەڵکو تۆ دەخاتە کۆتایی ڕیزەکە، و دوای هەوڵی زۆر خودی ئەپەکە بۆ ماوەیەک لە ناردن دەوەستێت. جارێک داوای بکە، دە خولەک چاوەڕێ بکە، پاشان جارێکی تر داوای بکە.'
    },
    ku: {
      t: 'دە خولەک د ناڤبەرا هەویلان دا بهێلە',
      d: 'داخازکرنا جار ب جار کۆدی بەرێڤە نابەت. بەلکو تە دئێخیتە دوماهیکا ڕیزێ, و پشتی هەولێن پر بخۆ ئەپ بۆ دەمەکێ ژ هنارتنێ ڤەدستیت. جارەکێ داخازێ بکە, دە خولەک چاڤەڕێ بکە, پاشی جارەکا دی داخازێ بکە.'
    }
  },
  {
    id: 'spam',
    en: {
      t: 'Look in the blocked and spam messages',
      d: 'A code that arrives from a name rather than a number is often filed away before you ever see it. On an iPhone look at the top of Messages for ‘Unknown Senders’. On an Android open Messages and look under ‘Spam & blocked’.'
    },
    ar: {
      t: 'ابحث في الرسائل المحجوبة والمزعجة',
      d: 'الرمز القادم من اسم لا من رقم كثيراً ما يُحفظ بعيداً قبل أن تراه. على آيفون انظر في أعلى تطبيق الرسائل إلى ‘Unknown Senders’. وعلى أندرويد افتح الرسائل وانظر تحت ‘Spam & blocked’.'
    },
    ckb: {
      t: 'لە نامەکانی بلۆککراو و سپامدا بگەڕێ',
      d: 'ئەو کۆدەی لە ناوێکەوە دێت نەک لە ژمارەیەک، زۆر جار پێش ئەوەی تۆ ببینیت لاوە هەڵدەگیرێت. لەسەر ئایفۆن سەرەوەی ئەپی نامەکان سەیری ‘Unknown Senders’ بکە. لەسەر ئەندرۆید ئەپی نامەکان بکەرەوە و لە ژێر ‘Spam & blocked’ بگەڕێ.'
    },
    ku: {
      t: 'ل نامێن بلۆککری و سپامێ دا بگەڕە',
      d: 'ئەو کۆدا ژ ناڤەکێ دهێت نە ژ ژمارەکێ, گەلەک جار بەری تو ببینی هێتە ڤەشارتن. ل سەر ئایفۆنێ ل سەرێ ئەپا نامان بەرێ خۆ بدە ‘Unknown Senders’. ل سەر ئەندرۆیدێ ئەپا نامان ڤەکە و د بنێ ‘Spam & blocked’ دا بگەڕە.'
    }
  },
  {
    id: 'call',
    en: {
      t: 'Ask for a voice call instead',
      d: 'Once the text has failed, most apps offer ‘Call me’ or ‘Call instead’ under the code box. The call travels a different road from the message, and it reads the code out to you.'
    },
    ar: {
      t: 'اطلب مكالمة صوتية بدلاً من الرسالة',
      d: 'بعد أن تفشل الرسالة، تعرض معظم التطبيقات ‘Call me’ أو ‘Call instead’ تحت خانة الرمز. المكالمة تسلك طريقاً غير طريق الرسالة، وتقرأ لك الرمز.'
    },
    ckb: {
      t: 'لە جیاتی نامە داوای پەیوەندی بکە',
      d: 'دوای ئەوەی نامەکە سەرکەوتوو نەبوو، زۆربەی ئەپەکان ‘Call me’ یان ‘Call instead’ لە ژێر خانەی کۆدەکە پیشان دەدەن. پەیوەندییەکە بە ڕێگایەکی تر دێت نەک ڕێگای نامەکە، و کۆدەکەت بۆ دەخوێنێتەوە.'
    },
    ku: {
      t: 'د جهێ نامەیێ دا داخازا پەیوەندیێ بکە',
      d: 'پشتی نامە سەرنەکەفت, زۆربەیا ئەپان ‘Call me’ یان ‘Call instead’ د بنێ خانا کۆدی دا دیار دکەن. پەیوەندی ب ڕێکەکا دی دهێت نە ب ڕێکا نامەیێ, و کۆدی بۆ تە دخوینیت.'
    }
  },
  {
    id: 'morning',
    en: {
      t: 'Try early in the morning',
      d: 'Every code in the country leaves through the same provider, and the queue is shortest while the country is asleep. Between four and five in the morning is the best hour to try a number that has refused all evening.'
    },
    ar: {
      t: 'جرّب في الصباح الباكر',
      d: 'كل رمز في البلد يخرج عبر المزوّد نفسه، والصف يكون أقصر ما يكون والبلد نائم. بين الرابعة والخامسة فجراً أفضل وقت لتجربة رقم رفض طوال المساء.'
    },
    ckb: {
      t: 'بەیانی زوو هەوڵ بدە',
      d: 'هەموو کۆدێک لە وڵاتدا بە هەمان دابینکەرەوە دەڕوات، و ڕیزەکە لەو کاتەدا کورتترینە کە وڵات نوستووە. نێوان چوار و پێنجی بەیانی باشترین کاتە بۆ ئەو ژمارەیەی هەموو ئێوارە ڕازی نەبووە.'
    },
    ku: {
      t: 'سپێدێ زوی هەویل بدە',
      d: 'هەر کۆدەک د وەلاتی دا ب هەمان دابینکەری دچیت, و ڕیز د وی دەمی دا کورتترین ە یێ وەلات نڤستی. د ناڤبەرا چار و پێنجێن سپێدێ دا باشترین دەم ە بۆ وێ ژمارێ یا هەمی ئێڤار ڕازی نەبووی.'
    }
  },
  {
    id: 'device',
    en: {
      t: 'Move the SIM card to another phone',
      d: 'Sometimes a code reaches one kind of phone and not the other. If you have been waiting on an iPhone, put the SIM card in an Android phone; if you have been waiting on an Android, put it in an iPhone, and ask for the code again there.'
    },
    ar: {
      t: 'انقل الشريحة إلى هاتف آخر',
      d: 'أحياناً يصل الرمز إلى نوع من الهواتف ولا يصل إلى الآخر. إن كنت تنتظر على آيفون فضع الشريحة في هاتف أندرويد، وإن كنت تنتظر على أندرويد فضعها في آيفون، واطلب الرمز من جديد هناك.'
    },
    ckb: {
      t: 'سیمکارتەکە بۆ مۆبایلێکی تر بگوازە',
      d: 'هەندێک جار کۆدەکە بۆ یەک جۆر مۆبایل دێت و بۆ ئەوی تر نا. ئەگەر لەسەر ئایفۆن چاوەڕێت کردووە، سیمکارتەکە بخە ناو مۆبایلێکی ئەندرۆید؛ ئەگەر لەسەر ئەندرۆید بووە، بخە ناو ئایفۆنێک، و لەوێ جارێکی تر داوای کۆدەکە بکە.'
    },
    ku: {
      t: 'سیمکارتێ بۆ مۆبایلەکێ دی بگوهێزە',
      d: 'هندەک جار کۆد بۆ ئێک جۆرێ مۆبایلان دهێت و بۆ یێ دی نە. ئەگەر ل سەر ئایفۆنێ چاڤەڕێ کری, سیمکارتێ بئێخە ناڤ مۆبایلەکێ ئەندرۆیدێ; ئەگەر ل سەر ئەندرۆیدێ بوو, بئێخە ناڤ ئایفۆنەکێ, و ل وێرێ جارەکا دی داخازا کۆدی بکە.'
    }
  },
  {
    id: 'provider',
    en: {
      t: 'Call your provider and ask',
      d: 'Customer service can see whether messages from outside the country are reaching your line at all, and they can lift a block that is sitting on it. Tell them a verification code is not arriving and give them the number you are waiting on.'
    },
    ar: {
      t: 'اتصل بمزوّد خدمتك واسأل',
      d: 'خدمة العملاء تستطيع أن ترى إن كانت الرسائل من خارج البلد تصل إلى خطك أصلاً، وتستطيع رفع الحجب الواقع عليه. أخبرهم أن رمز التحقق لا يصل، وأعطهم الرقم الذي تنتظر عليه.'
    },
    ckb: {
      t: 'پەیوەندی بە دابینکەرەکەت بکە و بپرسە',
      d: 'خزمەتگوزاری کڕیاران دەتوانێت ببینێت ئایا نامە لە دەرەوەی وڵات بە هێڵەکەت دەگات یان نا، و دەتوانن ئەو بلۆکە لابەرن کە لەسەری دانراوە. پێیان بڵێ کۆدی پشکنین نایەت، و ئەو ژمارەیەی چاوەڕێی دەکەیت بدە بەوان.'
    },
    ku: {
      t: 'پەیوەندیێ ب دابینکەرێ خۆ بکە و بپرسە',
      d: 'خزمەتگوزاریا کریاران دشێت ببینیت ئەرێ نامە ژ دەرڤەی وەلاتی دگەهنە هێلا تە یان نە, و دشێن وی بلۆکێ ڕاکەن یێ ل سەر وێ دانایی. بۆ وان بێژە کو کۆدا پشکنینێ نەهاتیە, و وێ ژمارێ تو چاڤەڕێ دکەی بدە وان.'
    }
  }
];
