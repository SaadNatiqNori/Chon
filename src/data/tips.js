// The safety notes that drift past the bottom of the screen.
//
// Each one is a single thought, short enough to be read in the time it is
// there, and written out in all four languages like everything else. The order
// is the order they arrive in, so the two that matter most on the way to
// changing a number — take a backup, never pass on the code — are not last.
//
// `tone` picks the colour of the icon chip from the palette in styles.css, and
// `icon` is a path drawn on a 24 grid in the same stroked style as the rest of
// the interface.

export const TIP_ICONS = {
  backup: ['M12 3.8v9', 'm8.4 9.4 3.6 3.6 3.6-3.6', 'M4.8 15v3.2a2 2 0 0 0 2 2h10.4a2 2 0 0 0 2-2V15'],
  shield: ['M12 3.3 5.8 5.9v5.2c0 3.9 2.6 7 6.2 8.1 3.6-1.1 6.2-4.2 6.2-8.1V5.9Z', 'm9.4 11.9 1.9 1.9 3.5-3.7'],
  phone: ['M8.6 3.4h6.8a1.6 1.6 0 0 1 1.6 1.6v14a1.6 1.6 0 0 1-1.6 1.6H8.6A1.6 1.6 0 0 1 7 19V5a1.6 1.6 0 0 1 1.6-1.6Z', 'M10 8.6h4', 'M10 12.2h4'],
  lock: ['M6.8 10.4h10.4a1 1 0 0 1 1 1v7.2a1 1 0 0 1-1 1H6.8a1 1 0 0 1-1-1v-7.2a1 1 0 0 1 1-1Z', 'M9 10.4V8a3 3 0 0 1 6 0v2.4'],
  copies: ['M4.6 8.6h10.8v10.8H4.6z', 'M8.6 8.6V4.6h10.8v10.8h-4'],
  speech: ['M12 4.4c4.4 0 8 2.9 8 6.5 0 3.6-3.6 6.5-8 6.5a10 10 0 0 1-2.6-.4L5 19l1-3.1a6.1 6.1 0 0 1-2-4.5c0-3.6 3.6-6.5 8-6.5Z'],
  mail: ['M4.6 6.4h14.8v11.2H4.6z', 'm4.6 7.4 7.4 5.4 7.4-5.4'],
  devices: ['M3.6 5.6h10.8v8.2H3.6z', 'M6.6 17.6h6.8', 'M16.8 9.6h3.6v8h-3.6z']
};

export const TIPS = [
  {
    id: 'backup',
    icon: 'backup',
    tone: 'warning',
    en: {
      t: 'Back up before you start',
      d: 'Save a backup of your chats first. Some apps lose them when the number changes, and there is no getting them back afterwards.'
    },
    ar: {
      t: 'خذ نسخة احتياطية قبل أن تبدأ',
      d: 'احفظ نسخة احتياطية من محادثاتك أولاً. بعض التطبيقات تفقدها عند تغيير الرقم، ولا سبيل لاستعادتها بعد ذلك.'
    },
    ckb: {
      t: 'پێش دەستپێکردن پاڵپشت دروست بکە',
      d: 'سەرەتا پاڵپشتێک لە چاتەکانت هەڵبگرە. هەندێک ئەپ لە کاتی گۆڕینی ژمارەدا لەدەستیان دەدەن، و دواتر هیچ ڕێگایەک نییە بۆ گەڕاندنەوەیان.'
    },
    ku: {
      t: 'بەری دەست پێ بکەی پاشکەفتەکێ چێکە',
      d: 'بەرێ پاشکەفتەکا چاتێن خۆ هەلگرە. هندەک ئەپ د دەمێ گوهۆڕینا ژمارەیێ دا وان ژ دەست ددەن, و پاشی چو ڕێک نینە بۆ زڤڕاندنا وان.'
    }
  },
  {
    id: 'code',
    icon: 'speech',
    tone: 'danger',
    en: {
      t: 'The code is yours alone',
      d: 'No company, no friend and no support agent ever needs the code that arrives on your phone. Anyone who asks for it is taking your account.'
    },
    ar: {
      t: 'الرمز لك وحدك',
      d: 'لا شركة ولا صديق ولا موظف دعم يحتاج أبداً إلى الرمز الذي يصل إلى هاتفك. من يطلبه منك يريد سرقة حسابك.'
    },
    ckb: {
      t: 'کۆدەکە تەنها هی تۆیە',
      d: 'هیچ کۆمپانیایەک، هیچ هاوڕێیەک و هیچ کارمەندی پشتگیری هەرگیز پێویستی بەو کۆدە نییە کە دێتە مۆبایلەکەت. هەرکەسێک داوای بکات، هەژمارەکەت دەبات.'
    },
    ku: {
      t: 'کۆد تنێ یێ تە یە',
      d: 'چو کۆمپانی, چو هەڤال و چو کارمەندێ پشتگیریێ چو جاران پێدڤی ب وی کۆدی نینە یێ دگەهیتە مۆبایلا تە. هەر کەسێ داخازا وی بکەت, هەژمارا تە دبەت.'
    }
  },
  {
    id: 'twofactor',
    icon: 'shield',
    tone: 'success',
    en: {
      t: 'Turn on two step verification',
      d: 'It is a second lock on your account. Even someone who learns your password cannot get in without it. Every app on this site has it.'
    },
    ar: {
      t: 'فعّل التحقق بخطوتين',
      d: 'هو قفل ثانٍ على حسابك. حتى من يعرف كلمة مرورك لا يستطيع الدخول بدونه. كل تطبيق في هذا الموقع يوفره.'
    },
    ckb: {
      t: 'پشتڕاستکردنەوەی دوو هەنگاوی چالاک بکە',
      d: 'قوفڵێکی دووەمە لەسەر هەژمارەکەت. تەنانەت ئەوەی وشەی نهێنیەکەت بزانێت، بەبێ ئەو ناتوانێت بچێتە ژوورەوە. هەموو ئەپێکی ئەم ماڵپەڕە هەیەتی.'
    },
    ku: {
      t: 'پشتڕاستکرنا دو گاڤی چالاک بکە',
      d: 'قوفلەکا دوێ یە ل سەر هەژمارا تە. تەنانەت ئەوێ پەیڤا تە یا ڤەشارتی بزانیت, بێی وێ نەشێت بکەڤیتە ژوور. هەر ئەپەکێ ڤی مالپەڕی وێ هەیە.'
    }
  },
  {
    id: 'authenticator',
    icon: 'phone',
    tone: 'info',
    en: {
      t: 'Use an authenticator app',
      d: 'Codes made by an app are safer than codes sent by message. A stolen SIM card cannot read them, because they never travel.'
    },
    ar: {
      t: 'استخدم تطبيق مصادقة',
      d: 'الرموز التي ينشئها تطبيق أأمن من الرموز المرسلة برسالة. الشريحة المسروقة لا تستطيع قراءتها، لأنها لا تُرسل أصلاً.'
    },
    ckb: {
      t: 'ئەپی ئۆتەنتیکەیتەر بەکاربهێنە',
      d: 'ئەو کۆدانەی ئەپ دروستیان دەکات لەو کۆدانە سەلامەتترن کە بە نامە دێن. سیمکارتی دزراو ناتوانێت بیانخوێنێتەوە، چونکە هەرگیز ناگوازرێنەوە.'
    },
    ku: {
      t: 'ئەپەکا ئۆتەنتیکەیتەری بکاربینە',
      d: 'ئەو کۆدێن ئەپ چێدکەت ژ وان کۆدان سەلامەتترن یێن ب نامەیێ دهێن. سیمکارتا دزیای نەشێت وان بخوینیت, چنکو چو جاران نایێنە هنارتن.'
    }
  },
  {
    id: 'password',
    icon: 'lock',
    tone: 'warning',
    en: {
      t: 'Give it a long password',
      d: 'Long beats clever. Four ordinary words you will actually remember are harder to break than one short word with numbers stuck on the end.'
    },
    ar: {
      t: 'اجعل كلمة المرور طويلة',
      d: 'الطول أهم من الذكاء. أربع كلمات عادية تتذكرها فعلاً أصعب في الكسر من كلمة قصيرة مع أرقام في آخرها.'
    },
    ckb: {
      t: 'وشەیەکی نهێنی درێژ دابنێ',
      d: 'درێژی لە زیرەکی باشترە. چوار وشەی ئاسایی کە بەڕاستی بیریان دەکەیتەوە، شکاندنیان قورستر لە یەک وشەی کورتە کە چەند ژمارەیەکی بە دوایەوە بێت.'
    },
    ku: {
      t: 'پەیڤەکا ڤەشارتی یا درێژ دانە',
      d: 'درێژی ژ زیرەکیێ چێترە. چار پەیڤێن ئاسایی یێن ب ڕاستی ب بیر دئینی, شکاندنا وان دژوارترە ژ ئێک پەیڤا کورت یا چەند ژمار ل دویڤ.'
    }
  },
  {
    id: 'reuse',
    icon: 'copies',
    tone: 'danger',
    en: {
      t: 'Never use one password twice',
      d: 'When one site is broken into, every other account sharing that password is open as well. A password manager remembers them so you do not have to.'
    },
    ar: {
      t: 'لا تستخدم كلمة المرور نفسها مرتين',
      d: 'عندما يُخترق موقع واحد، كل حساب آخر يشترك في تلك الكلمة يصبح مفتوحاً. مدير كلمات المرور يتذكرها بدلاً عنك.'
    },
    ckb: {
      t: 'یەک وشەی نهێنی دوو جار بەکارمەهێنە',
      d: 'کاتێک یەک ماڵپەڕ دەشکێنرێت، هەموو هەژمارێکی تر کە هەمان وشەی هەیە ئەویش کراوەیە. بەڕێوەبەری وشەی نهێنی لە جیاتی تۆ بیریان دەکاتەوە.'
    },
    ku: {
      t: 'ئێک پەیڤا ڤەشارتی دو جاران بکارنەینە',
      d: 'دەمێ ئێک مالپەڕ دهێتە شکاندن, هەر هەژمارەکا دی یا وێ پەیڤێ هەبیت ئەو ژی ڤەکری یە. بەڕێڤەبەرێ پەیڤێن ڤەشارتی د جهێ تە دا وان ب بیر دئینیت.'
    }
  },
  {
    id: 'recovery',
    icon: 'mail',
    tone: 'info',
    en: {
      t: 'Keep a second way back in',
      d: 'Add an email address you still read, and save the backup codes somewhere off the phone. That is what lets you in when the phone is gone.'
    },
    ar: {
      t: 'احتفظ بطريقة ثانية للعودة',
      d: 'أضف بريداً إلكترونياً ما زلت تقرأه، واحفظ رموز الاسترداد في مكان خارج الهاتف. هذا ما يُدخلك عندما يضيع الهاتف.'
    },
    ckb: {
      t: 'ڕێگایەکی دووەمی گەڕانەوە هەڵبگرە',
      d: 'ئیمەیلێک زیاد بکە کە هێشتا دەیخوێنیتەوە، و کۆدە پاڵپشتەکان لە شوێنێکی دەرەوەی مۆبایل هەڵبگرە. ئەوەیە کە دەتخاتە ژوورەوە کاتێک مۆبایلەکە نەما.'
    },
    ku: {
      t: 'ڕێکا دوێ یا زڤڕینێ هەلگرە',
      d: 'ئیمەیلەکێ زێدە بکە یا هێشتا دخوینی, و کۆدێن پاشکەفتی ل جهەکێ دەرڤەیی مۆبایلی هەلگرە. ئەو ئەوە یە یا تە دکەتە ژوور دەمێ مۆبایل نەما.'
    }
  },
  {
    id: 'sessions',
    icon: 'devices',
    tone: 'success',
    en: {
      t: 'Look at who is signed in',
      d: 'Every one of these apps keeps a list of the devices using your account. Read it once a month and sign out anything you do not recognise.'
    },
    ar: {
      t: 'راجع الأجهزة المسجّلة',
      d: 'كل تطبيق من هذه التطبيقات يحتفظ بقائمة الأجهزة التي تستخدم حسابك. راجعها مرة في الشهر وأخرج أي جهاز لا تعرفه.'
    },
    ckb: {
      t: 'سەیری ئەوە بکە کێ چووەتە ژوورەوە',
      d: 'هەریەکێک لەم ئەپانە لیستێکی ئەو ئامێرانەی هەیە کە هەژمارەکەت بەکاردەهێنن. مانگی جارێک بیخوێنەوە و هەر شتێک نەتناسی دەریبکە.'
    },
    ku: {
      t: 'بەرێ خۆ بدە کێ کەفتیە ژوور',
      d: 'هەر ئێک ژ ڤان ئەپان لیستەکا وان ئامیران هەلدگریت یێن هەژمارا تە بکاردئینن. مەهێ جارەکێ بخوینە و هەر تشتەکێ نەناسی دەرکە.'
    }
  }
];
