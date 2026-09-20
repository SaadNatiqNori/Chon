// The apps people ask about, in the order they are offered. `names` carries the
// brand as it is written in each right to left language; English uses `name`.
// `tile` is the colour the card is built from; the optional `glow` overrides it
// for the light behind the card and the mark on it, where a brand's darker tile
// reads flat against the two things meant to carry its colour.
export const PLATFORMS = [
  {"id":"whatsapp","name":"WhatsApp","tile":"#128C7E","glow":"#25D366","url":"https://faq.whatsapp.com/","devices":["ios","android"],"names":{"ar": "واتساب", "ckb": "واتسئاپ", "ku": "واتسئاپ"}},
  {"id":"telegram","name":"Telegram","tile":"#2AABEE","url":"https://telegram.org/faq","devices":["ios","android"],"names":{"ar": "تيليجرام", "ckb": "تێلێگرام", "ku": "تێلێگرام"}},
  {"id":"google","name":"Google Account","tile":"#1A73E8","url":"https://support.google.com/accounts","devices":["web","android","ios"],"names":{"ar": "حساب جوجل", "ckb": "هەژماری گووگڵ", "ku": "هەژمارا گووگلێ"}},
  {"id":"instagram","name":"Instagram","tile":"#C13584","url":"https://help.instagram.com/","devices":["ios","web"],"names":{"ar": "إنستغرام", "ckb": "ئینستاگرام", "ku": "ئینستاگرام"}},
  {"id":"facebook","name":"Facebook","tile":"#1877F2","url":"https://www.facebook.com/help/","devices":["web"],"names":{"ar": "فيسبوك", "ckb": "فەیسبووک", "ku": "فەیسبووک"}},
  {"id":"fib","name":"FIB","tile":"#00A69C","url":"https://fib.iq/","devices":["ios","android"],"names":{"ar": "مصرف FIB", "ckb": "بانکی FIB", "ku": "بانکێ FIB"}},
  {"id":"superqi","name":"SuperQi","tile":"#F2CE00","url":"https://superqi.iq/","devices":["ios","android"],"names":{"ar": "سوبركي", "ckb": "سوپەرکی", "ku": "سوپەرکی"}},
  {"id":"fastpay","name":"FastPay","tile":"#EE3264","url":"https://www.fast-pay.iq/","devices":["ios","android"],"names":{"ar": "فاست باي", "ckb": "فاست پەی", "ku": "فاست پەی"}},
  {"id":"apple","name":"Apple Account","tile":"#3B3B3D","url":"https://support.apple.com/apple-account","devices":["ios","web"],"names":{"ar": "حساب أبل", "ckb": "هەژماری ئەپڵ", "ku": "هەژمارا ئەپڵێ"}},
  {"id":"tiktok","name":"TikTok","tile":"#111214","url":"https://support.tiktok.com/","devices":["ios","android"],"names":{"ar": "تيك توك", "ckb": "تیکتۆک", "ku": "تیکتۆک"}},
  {"id":"snapchat","name":"Snapchat","tile":"#F7C900","url":"https://help.snapchat.com/","devices":["ios","android"],"names":{"ar": "سناب شات", "ckb": "سناپچات", "ku": "سناپچات"}},
  {"id":"linkedin","name":"LinkedIn","tile":"#0A66C2","url":"https://www.linkedin.com/help/linkedin","devices":["web","ios","android"],"names":{"ar": "لينكد إن", "ckb": "لینکدئین", "ku": "لینکدئین"}},
  {"id":"microsoft","name":"Microsoft Account","tile":"#0067B8","url":"https://support.microsoft.com/account-billing","devices":["web"],"names":{"ar": "حساب مايكروسوفت", "ckb": "هەژماری مایکرۆسۆفت", "ku": "هەژمارا مایکرۆسۆفتێ"}},
  {"id":"signal","name":"Signal","tile":"#3A76F0","url":"https://support.signal.org/","devices":["ios","android"],"names":{"ar": "سيجنال", "ckb": "سیگناڵ", "ku": "سیگنال"}},
  {"id":"x","name":"X / Twitter","tile":"#15181C","url":"https://help.x.com/","devices":["web","ios","android"],"names":{"ar": "إكس / تويتر", "ckb": "ئێکس / تویتەر", "ku": "ئێکس / تویتەر"}},
  {"id":"discord","name":"Discord","tile":"#5865F2","url":"https://support.discord.com/","devices":["web","ios","android"],"names":{"ar": "ديسكورد", "ckb": "دیسکۆرد", "ku": "دیسکۆرد"}},
  {"id":"viber","name":"Viber","tile":"#7360F2","url":"https://help.viber.com/","devices":["ios","android"],"names":{"ar": "فايبر", "ckb": "ڤایبەر", "ku": "ڤایبەر"}},
  {"id":"threads","name":"Threads","tile":"#101010","url":"https://help.instagram.com/","devices":["ios","android"],"names":{"ar": "ثريدز", "ckb": "ثرێدز", "ku": "ثرێدز"}},
  {"id":"reddit","name":"Reddit","tile":"#FF4500","url":"https://support.reddithelp.com/","devices":["web","ios","android"],"names":{"ar": "ريديت", "ckb": "ڕێدیت", "ku": "ڕێدیت"}},
  {"id":"paypal","name":"PayPal","tile":"#003087","url":"https://www.paypal.com/smarthelp/home","devices":["web","ios","android"],"names":{"ar": "باي بال", "ckb": "پەیپاڵ", "ku": "پەیپال"}},
  {"id":"amazon","name":"Amazon","tile":"#FF9900","url":"https://www.amazon.com/gp/help/customer/display.html","devices":["web","ios","android"],"names":{"ar": "أمازون", "ckb": "ئەمازۆن", "ku": "ئەمازۆن"}},
  {"id":"uber","name":"Uber","tile":"#0E0E0E","url":"https://help.uber.com/","devices":["ios","android"],"names":{"ar": "أوبر", "ckb": "ئووبەر", "ku": "ئووبەر"}},
  {"id":"airbnb","name":"Airbnb","tile":"#FF5A5F","url":"https://www.airbnb.com/help","devices":["web","ios","android"],"names":{"ar": "إير بي إن بي", "ckb": "ئێیربی ئێن بی", "ku": "ئێیربی ئێن بی"}},
  {"id":"spotify","name":"Spotify","tile":"#1DB954","url":"https://support.spotify.com/","devices":["web"],"names":{"ar": "سبوتيفاي", "ckb": "سپۆتیفای", "ku": "سپۆتیفای"}},
  {"id":"netflix","name":"Netflix","tile":"#E50914","url":"https://help.netflix.com/","devices":["web"],"names":{"ar": "نتفليكس", "ckb": "نێتفلیکس", "ku": "نێتفلیکس"}},
];
