// The safety notes that drift past the bottom of the screen.
//
// Each one is a single thought, short enough to be read in the time it is
// there, and written out in all four languages like everything else. The order
// is the order they arrive in, so the two that matter most on the way to
// changing a number — take a backup, never pass on the code — are not last.
//
// Where a note is about a setting the reader has to go and find, the name the
// app itself uses is quoted in Latin in all four languages, the way the step
// guides already write 'Account' and 'Personal information'. The apps are in
// English, so a purely translated name would leave the reader hunting for
// something that is not written anywhere on their screen.
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
      d: 'Some apps lose your chats when the number changes. If you have not saved them first, there is no getting them back afterwards.'
    },
    ar: {
      t: 'خذ نسخة احتياطية قبل أن تبدأ',
      d: 'بعض التطبيقات تفقد محادثاتك عند تغيير الرقم. إن لم تحفظها أولاً، فلا سبيل لاستعادتها بعد ذلك.'
    },
    ckb: {
      t: 'پێش دەستپێکردن چاتەکانت پاشەکەوت بکە',
      d: 'هەندێک ئەپ لە کاتی گۆڕینی ژمارەدا چاتەکان لەدەست دەدەن. ئەگەر پێشتر پاشەکەوتت نەکردبن، دوایی هیچ ڕێگایەک نییە بۆ گەڕاندنەوەیان.'
    },
    ku: {
      t: 'بەری دەست پێ بکەی چاتێن خۆ پاشکەفت بکە',
      d: 'هندەک ئەپ د دەمێ گوهۆڕینا ژمارەیێ دا چاتان ژ دەست ددەن. ئەگەر بەرێ تە ئەو پاشکەفت نەکربن, پاشی چو ڕێک نینە بۆ زڤڕاندنا وان.'
    }
  },
  {
    id: 'code',
    icon: 'speech',
    tone: 'danger',
    en: {
      t: 'The code is yours alone',
      d: 'No company, no friend and no support agent needs the code that arrives on your phone. Anyone who asks for it is taking your account.'
    },
    ar: {
      t: 'الرمز لك وحدك',
      d: 'لا شركة ولا صديق ولا موظف دعم يحتاج إلى الرمز الذي يصل إلى هاتفك. من يطلبه منك يريد أخذ حسابك.'
    },
    ckb: {
      t: 'کۆدەکە تەنها هی تۆیە',
      d: 'ئەو کۆدەی دێتە سەر مۆبایلەکەت، هیچ کۆمپانیایەک و هیچ هاوڕێیەک و هیچ کارمەندی پشتگیریەک پێویستی پێی نییە. هەرکەسێک داوای بکات، دەیەوێت هەژمارەکەت ببات.'
    },
    ku: {
      t: 'کۆد تنێ یێ تە یە',
      d: 'ئەو کۆدا دگەهیتە مۆبایلا تە, چو کۆمپانی و چو هەڤال و چو کارمەندێ پشتگیریێ پێدڤی پێ نینە. هەر کەسێ داخازا وێ بکەت, دخوازیت هەژمارا تە ببەت.'
    }
  },
  {
    id: 'twofactor',
    icon: 'shield',
    tone: 'success',
    en: {
      t: 'Turn on two step verification',
      d: 'A second lock on your account: after the password it wants a short code as well. Apps call it ‘Two step verification’, or ‘2FA’.'
    },
    ar: {
      t: 'فعّل التحقق بخطوتين',
      d: 'قفل ثانٍ على حسابك: بعد كلمة المرور يطلب رمزاً قصيراً أيضاً. التطبيقات تسميه ‘Two step verification’ أو ‘2FA’.'
    },
    ckb: {
      t: 'پشکنینی دوو هەنگاوی چالاک بکە',
      d: 'قوفڵێکی دووەمە لەسەر هەژمارەکەت: دوای وشەی نهێنی، کۆدێکی کورتیشی دەوێت. ئەپەکان بە ‘Two step verification’ یان ‘2FA’ ناوی دەبەن.'
    },
    ku: {
      t: 'پشکنینا دو گاڤی چالاک بکە',
      d: 'قوفلەکا دوێ یە ل سەر هەژمارا تە: پشتی پەیڤا ڤەشارتی, کۆدەکێ کورت ژی دڤێت. ئەپ ناڤێ وێ ‘Two step verification’ یان ‘2FA’ دانێن.'
    }
  },
  {
    id: 'authenticator',
    icon: 'phone',
    tone: 'info',
    en: {
      t: 'Take the code from an app, not a message',
      d: 'An ‘Authenticator’ app makes the code inside the phone itself. Nothing is ever sent, so a stolen SIM card has nothing to read.'
    },
    ar: {
      t: 'خذ الرمز من تطبيق لا من رسالة',
      d: 'تطبيق ‘Authenticator’ ينشئ الرمز داخل الهاتف نفسه. لا يُرسل شيء، فلا تجد الشريحة المسروقة ما تقرأه.'
    },
    ckb: {
      t: 'کۆدەکە لە ئەپێکەوە وەربگرە، نەک بە نامە',
      d: 'ئەپی ‘Authenticator’ خۆی کۆدەکە لەناو مۆبایلەکەتدا دروست دەکات. هیچ نامەیەک نانێردرێت، بۆیە سیمکارتی دزراو هیچی نییە بیخوێنێتەوە.'
    },
    ku: {
      t: 'کۆدێ ژ ئەپەکێ وەرگرە, نە ب نامەیێ',
      d: 'ئەپا ‘Authenticator’ بخۆ کۆدی د نێڤ مۆبایلی دا چێدکەت. چو نامە نایێنە هنارتن, لەو سیمکارتا دزیای چو تشت نینە بخوینیت.'
    }
  },
  {
    id: 'password',
    icon: 'lock',
    tone: 'warning',
    en: {
      t: 'Give it a long password',
      d: 'Length beats cleverness. Four ordinary words you will actually remember are far harder to break than one short word full of numbers and signs.'
    },
    ar: {
      t: 'اجعل كلمة المرور طويلة',
      d: 'الطول أهم من التعقيد. أربع كلمات عادية تتذكرها فعلاً أصعب في الكسر بكثير من كلمة قصيرة مليئة بالأرقام والرموز.'
    },
    ckb: {
      t: 'وشەیەکی نهێنی درێژ دابنێ',
      d: 'درێژی لە ئاڵۆزی گرنگترە. چوار وشەی ئاسایی کە بەڕاستی بیریان دەکەیتەوە، شکاندنیان زۆر قورستر لە یەک وشەی کورتی پڕ لە ژمارە و هێما.'
    },
    ku: {
      t: 'پەیڤەکا ڤەشارتی یا درێژ دانە',
      d: 'درێژی ژ ئالۆزیێ گرنگترە. چار پەیڤێن ئاسایی یێن تو ب ڕاستی ب بیر دئینی, شکاندنا وان پتر دژوارترە ژ ئێک پەیڤا کورت یا پڕ ژ ژمار و نیشانان.'
    }
  },
  {
    id: 'reuse',
    icon: 'copies',
    tone: 'danger',
    en: {
      t: 'Never use one password for everything',
      d: 'When one site is broken into, every account sharing that password is open too. A ‘Password manager’ remembers them all so you do not have to.'
    },
    ar: {
      t: 'لا تستخدم كلمة مرور واحدة لكل شيء',
      d: 'عندما يُخترق موقع واحد، كل حساب يشترك في تلك الكلمة يصبح مفتوحاً. تطبيق ‘Password manager’ يتذكرها كلها بدلاً عنك.'
    },
    ckb: {
      t: 'یەک وشەی نهێنی بۆ هەموو شتێک بەکارمەهێنە',
      d: 'ئەگەر یەک ماڵپەڕ بشکێنرێت، هەموو ئەو هەژمارانەی هەمان وشەیان هەیە دەکەونە مەترسییەوە. ئەپی ‘Password manager’ لە جیاتی تۆ هەموویان بیر دەکاتەوە.'
    },
    ku: {
      t: 'ئێک پەیڤا ڤەشارتی بۆ هەمی تشتان بکارنەینە',
      d: 'ئەگەر ئێک مالپەڕ هاتە شکاندن, هەمی هەژمارێن هەمان پەیڤ هەبن دکەڤنە مەترسیێ. ئەپا ‘Password manager’ د جهێ تە دا هەمیان ب بیر دئینیت.'
    }
  },
  {
    id: 'recovery',
    icon: 'mail',
    tone: 'info',
    en: {
      t: 'Keep a second way back in',
      d: 'Add an email you still open, and keep the ‘Backup codes’ somewhere off the phone. Once the phone is gone, they are the only way in.'
    },
    ar: {
      t: 'احتفظ بطريقة ثانية للعودة',
      d: 'أضف بريداً ما زلت تفتحه، واحفظ ‘Backup codes’ في مكان خارج الهاتف. حين يضيع الهاتف تكون هي الطريق الوحيد.'
    },
    ckb: {
      t: 'ڕێگایەکی دووەمی گەڕانەوە دابنێ',
      d: 'ئیمەیلێک زیاد بکە کە هێشتا دەیکەیتەوە، و ‘Backup codes’ لە شوێنێکی دەرەوەی مۆبایل هەڵبگرە. کاتێک مۆبایلەکە نەما، ئەوانە تەنها ڕێگان.'
    },
    ku: {
      t: 'ڕێکا دوێ یا زڤڕینێ دانە',
      d: 'ئیمەیلەکێ زێدە بکە یا هێشتا ڤەدکەی, و ‘Backup codes’ ل جهەکێ دەرڤەیی مۆبایلی هەلگرە. دەمێ مۆبایل نەما, ئەو تنێ ڕێک ن.'
    }
  },
  {
    id: 'sessions',
    icon: 'devices',
    tone: 'success',
    en: {
      t: 'Look at who is signed in',
      d: 'Every one of these apps lists the devices using your account under ‘Active sessions’. Read it once a month and sign out anything you do not know.'
    },
    ar: {
      t: 'راجع من دخل إلى حسابك',
      d: 'كل تطبيق من هذه التطبيقات يعرض في ‘Active sessions’ قائمة الأجهزة التي تستخدم حسابك. راجعها مرة في الشهر وأخرج أي جهاز لا تعرفه.'
    },
    ckb: {
      t: 'بزانە کێ چووەتە ناو هەژمارەکەتەوە',
      d: 'هەموو ئەم ئەپانە لە ‘Active sessions’ دا لیستی ئەو ئامێرانە پیشان دەدەن کە هەژمارەکەت بەکاردەهێنن. مانگی جارێک سەیری بکە و هەر ئامێرێکت نەناسی دەریبکە.'
    },
    ku: {
      t: 'بزانە کێ کەفتیە ناڤ هەژمارا تە',
      d: 'هەمی ڤان ئەپان د ‘Active sessions’ دا لیستا وان ئامیران دیار دکەن یێن هەژمارا تە بکاردئینن. مەهێ جارەکێ بەرێ خۆ بدەیێ و هەر ئامیرەکێ نەناسی دەرکە.'
    }
  }
];
