const TODAY = new Date('2026-09-20T00:00:00Z');

const CATS = [
  ['social','Social Media','وسائل التواصل','تۆڕی کۆمەڵایەتی','تۆرێن جڤاکی'],
  ['messaging','Messaging','المراسلة','پەیامنێری','پەیامنێری'],
  ['email','Email','البريد الإلكتروني','ئیمەیل','ئیمەیل'],
  ['cloud','Cloud','الخدمات السحابية','هەور','هەور'],
  ['shopping','Shopping','التسوق','بازاڕکردن','بازاڕکرن'],
  ['banking','Banking','البنوك','بانکەکان','بانکان'],
  ['travel','Travel','السفر','گەشتکردن','گەشتکرن'],
  ['transport','Transportation','النقل','گواستنەوە','گوهاستن'],
  ['entertainment','Entertainment','الترفيه','کاتبەسەربردن','کاتبەسەربرن'],
  ['work','Work','العمل','کار','کار'],
  ['dev','Developer Services','خدمات المطورين','خزمەتگوزاری پەرەپێدەر','خزمەتا پەرەپێدەری'],
  ['gov','Government','الحكومة','حکومەت','حکومەت'],
  ['other','Other','أخرى','هیتر','دی']
];

// status: official = workflow documented in the platform's own help centre;
// reference = community/reference wording, flagged in UI; pending = no guide written yet.
const P = (o) => o;
const PLATFORMS = [
  P({id:'whatsapp',name:'WhatsApp',cat:'messaging',mono:'W',tile:'#128C7E',url:'https://faq.whatsapp.com/',src:'Official WhatsApp Help Center',status:'official',diff:'easy',min:'3–5',verified:'2026-09-18',devices:['ios','android'],oldNumber:true,sms:true,email:false,twofa:true,direct:true}),
  P({id:'telegram',name:'Telegram',cat:'messaging',mono:'T',tile:'#2AABEE',url:'https://telegram.org/faq',src:'Official Telegram FAQ',status:'official',diff:'easy',min:'2–4',verified:'2026-09-15',devices:['ios','android'],oldNumber:false,sms:true,email:false,twofa:true,direct:true}),
  P({id:'google',name:'Google Account',cat:'email',mono:'G',tile:'#1A73E8',url:'https://support.google.com/accounts',src:'Official Google Account Help',status:'official',diff:'medium',min:'5–10',verified:'2026-09-17',devices:['web','android','ios'],oldNumber:false,sms:true,email:true,twofa:true,direct:true}),
  P({id:'instagram',name:'Instagram',cat:'social',mono:'I',tile:'#C13584',url:'https://help.instagram.com/',src:'Instagram Help Center',status:'reference',diff:'easy',min:'3–5',verified:'2026-08-02',devices:['ios','web'],oldNumber:false,sms:true,email:true,twofa:true,direct:true}),
  P({id:'facebook',name:'Facebook',cat:'social',mono:'F',tile:'#1877F2',url:'https://www.facebook.com/help/',src:'Facebook Help Center',status:'reference',diff:'easy',min:'3–6',verified:'2026-08-02',devices:['web'],oldNumber:false,sms:true,email:true,twofa:true,direct:true}),
  P({id:'apple',name:'Apple Account',cat:'cloud',mono:'A',tile:'#3B3B3D',url:'https://support.apple.com/apple-account',src:'Apple Support',status:'reference',diff:'medium',min:'5–10',verified:'2026-09-10',devices:['ios','web'],oldNumber:false,sms:true,email:true,twofa:true,direct:true}),
  P({id:'tiktok',name:'TikTok',cat:'social',mono:'K',tile:'#111214',url:'https://support.tiktok.com/',src:'TikTok Support',status:'pending',diff:'easy',min:'3–5',verified:'2026-03-04',devices:['ios','android'],oldNumber:true,sms:true,email:true,twofa:true,direct:true}),
  P({id:'snapchat',name:'Snapchat',cat:'social',mono:'S',tile:'#F7C900',url:'https://help.snapchat.com/',src:'Snapchat Support',status:'pending',diff:'easy',min:'3–5',verified:'2026-04-11',devices:['ios','android'],oldNumber:false,sms:true,email:true,twofa:true,direct:true}),
  P({id:'linkedin',name:'LinkedIn',cat:'work',mono:'L',tile:'#0A66C2',url:'https://www.linkedin.com/help/linkedin',src:'LinkedIn Help',status:'pending',diff:'easy',min:'2–4',verified:'2026-05-20',devices:['web','ios','android'],oldNumber:false,sms:true,email:true,twofa:true,direct:true}),
  P({id:'microsoft',name:'Microsoft Account',cat:'email',mono:'M',tile:'#0067B8',url:'https://support.microsoft.com/account-billing',src:'Microsoft Support',status:'pending',diff:'medium',min:'5–10',verified:'2026-06-01',devices:['web'],oldNumber:false,sms:true,email:true,twofa:true,direct:true}),
  P({id:'signal',name:'Signal',cat:'messaging',mono:'S',tile:'#3A76F0',url:'https://support.signal.org/',src:'Signal Support',status:'pending',diff:'easy',min:'2–4',verified:'2026-07-14',devices:['ios','android'],oldNumber:true,sms:true,email:false,twofa:false,direct:true}),
  P({id:'x',name:'X / Twitter',cat:'social',mono:'X',tile:'#15181C',url:'https://help.x.com/',src:'X Help Center',status:'pending',diff:'easy',min:'2–4',verified:'2026-04-28',devices:['web','ios','android'],oldNumber:false,sms:true,email:true,twofa:true,direct:true}),
  P({id:'discord',name:'Discord',cat:'messaging',mono:'D',tile:'#5865F2',url:'https://support.discord.com/',src:'Discord Support',status:'pending',diff:'easy',min:'2–4',verified:'2026-05-02',devices:['web','ios','android'],oldNumber:false,sms:true,email:true,twofa:true,direct:true}),
  P({id:'viber',name:'Viber',cat:'messaging',mono:'V',tile:'#7360F2',url:'https://help.viber.com/',src:'Viber Support',status:'pending',diff:'medium',min:'5–10',verified:'2026-02-19',devices:['ios','android'],oldNumber:true,sms:true,email:false,twofa:false,direct:false}),
  P({id:'threads',name:'Threads',cat:'social',mono:'@',tile:'#101010',url:'https://help.instagram.com/',src:'Instagram Help Center',status:'pending',diff:'easy',min:'2–4',verified:'2026-06-09',devices:['ios','android'],oldNumber:false,sms:false,email:true,twofa:true,direct:false}),
  P({id:'reddit',name:'Reddit',cat:'social',mono:'R',tile:'#FF4500',url:'https://support.reddithelp.com/',src:'Reddit Help',status:'pending',diff:'easy',min:'2–4',verified:'2026-03-30',devices:['web','ios','android'],oldNumber:false,sms:true,email:true,twofa:true,direct:false}),
  P({id:'paypal',name:'PayPal',cat:'banking',mono:'P',tile:'#003087',url:'https://www.paypal.com/smarthelp/home',src:'PayPal Help Center',status:'pending',diff:'medium',min:'5–10',verified:'2026-05-12',devices:['web','ios','android'],oldNumber:false,sms:true,email:true,twofa:true,direct:true}),
  P({id:'amazon',name:'Amazon',cat:'shopping',mono:'a',tile:'#FF9900',url:'https://www.amazon.com/gp/help/customer/display.html',src:'Amazon Customer Service',status:'pending',diff:'easy',min:'3–5',verified:'2026-04-02',devices:['web','ios','android'],oldNumber:false,sms:true,email:true,twofa:true,direct:true}),
  P({id:'uber',name:'Uber',cat:'transport',mono:'U',tile:'#0E0E0E',url:'https://help.uber.com/',src:'Uber Help',status:'pending',diff:'easy',min:'2–4',verified:'2026-04-22',devices:['ios','android'],oldNumber:true,sms:true,email:true,twofa:false,direct:true}),
  P({id:'airbnb',name:'Airbnb',cat:'travel',mono:'A',tile:'#FF5A5F',url:'https://www.airbnb.com/help',src:'Airbnb Help Center',status:'pending',diff:'easy',min:'2–4',verified:'2026-03-18',devices:['web','ios','android'],oldNumber:false,sms:true,email:true,twofa:true,direct:true}),
  P({id:'spotify',name:'Spotify',cat:'entertainment',mono:'S',tile:'#1DB954',url:'https://support.spotify.com/',src:'Spotify Support',status:'pending',diff:'easy',min:'2–4',verified:'2026-02-28',devices:['web'],oldNumber:false,sms:false,email:true,twofa:false,direct:false}),
  P({id:'netflix',name:'Netflix',cat:'entertainment',mono:'N',tile:'#E50914',url:'https://help.netflix.com/',src:'Netflix Help Center',status:'pending',diff:'easy',min:'2–4',verified:'2026-02-10',devices:['web'],oldNumber:false,sms:true,email:true,twofa:false,direct:true})
];

const row = (label, hint, tap) => ({label, hint: hint || '', tap: !!tap});

const GUIDES = {
  "whatsapp": {
    "ios": {
      "prereqs": [
        "Your new SIM is in the phone and can get texts or calls.",
        "You can still open WhatsApp with your old number.",
        "You backed up your chats today."
      ],
      "steps": [
        {
          "title": "Open WhatsApp. Tap Settings.",
          "desc": "Settings is at the bottom of the screen, on the far right.",
          "mock": {
            "title": "WhatsApp",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Updates",
                "hint": "Status, Channels",
                "tap": false
              },
              {
                "label": "Calls",
                "hint": "Recent",
                "tap": false
              },
              {
                "label": "Communities",
                "hint": "",
                "tap": false
              },
              {
                "label": "Chats",
                "hint": "All messages",
                "tap": false
              },
              {
                "label": "Settings",
                "hint": "Account, privacy, chats",
                "tap": true
              }
            ]
          }
        },
        {
          "title": "Tap Account",
          "desc": "It is the first line on the list.",
          "mock": {
            "title": "Settings",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Account",
                "hint": "Security notifications, change number",
                "tap": true
              },
              {
                "label": "Privacy",
                "hint": "Last seen, blocked",
                "tap": false
              },
              {
                "label": "Chats",
                "hint": "Theme, wallpaper, backup",
                "tap": false
              },
              {
                "label": "Notifications",
                "hint": "",
                "tap": false
              },
              {
                "label": "Storage and data",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Change Number",
          "desc": "Look near the bottom of the list.",
          "mock": {
            "title": "Account",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Security notifications",
                "hint": "",
                "tap": false
              },
              {
                "label": "Passkeys",
                "hint": "",
                "tap": false
              },
              {
                "label": "Email address",
                "hint": "Add a recovery email",
                "tap": false
              },
              {
                "label": "Two-step verification",
                "hint": "On",
                "tap": false
              },
              {
                "label": "Change Number",
                "hint": "",
                "tap": true
              },
              {
                "label": "Delete my account",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Continue",
          "desc": "WhatsApp shows you what will happen. Read it, then tap Continue.",
          "mock": {
            "title": "Change Number",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Your account info moves",
                "hint": "",
                "tap": false
              },
              {
                "label": "Your groups move",
                "hint": "",
                "tap": false
              },
              {
                "label": "Your chat history stays",
                "hint": "",
                "tap": false
              },
              {
                "label": "Continue",
                "hint": "",
                "tap": true
              }
            ]
          },
          "note": "Lost your old number? WhatsApp may let you start again with the new one. But your old chats will not come with you."
        },
        {
          "title": "Type your old number. Then your new one.",
          "desc": "Start both with your country code, like +964. Type them here in WhatsApp and nowhere else.",
          "mock": {
            "title": "Change Number",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Old phone number",
                "hint": "Country code + number",
                "tap": false
              },
              {
                "label": "New phone number",
                "hint": "Country code + number",
                "tap": false
              },
              {
                "label": "Next",
                "hint": "",
                "tap": true
              }
            ]
          },
          "note": "Never type your number or a code into a website that offers to do this for you. That is always a scam."
        },
        {
          "title": "Choose who to tell",
          "desc": "Tap \"Contacts I have chats with\". That is the normal choice.",
          "mock": {
            "title": "Notify contacts",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Notify my contacts",
                "hint": "Everyone in your address book",
                "tap": false
              },
              {
                "label": "Contacts I have chats with",
                "hint": "",
                "tap": true
              },
              {
                "label": "Custom",
                "hint": "Pick manually",
                "tap": false
              },
              {
                "label": "Done",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Type the 6 numbers you get by text",
          "desc": "WhatsApp sends a text to your new number. Type those 6 numbers in. You are done.",
          "mock": {
            "title": "Verify your number",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Enter 6-digit code",
                "hint": "Sent by SMS",
                "tap": true
              },
              {
                "label": "Resend SMS",
                "hint": "",
                "tap": false
              },
              {
                "label": "Call me instead",
                "hint": "",
                "tap": false
              }
            ]
          },
          "note": "Your PIN stays the same. If that PIN was linked to an old email you cannot open any more, change the email now."
        }
      ],
      "warnings": [
        {
          "level": "high",
          "text": "Do your other accounts first. If your old number is the only way back into them, you will be locked out when the SIM stops working."
        },
        {
          "level": "medium",
          "text": "Back up your chats before you start. Afterwards, check the backup still works."
        }
      ]
    },
    "android": {
      "prereqs": [
        "Your new SIM is in the phone and can get texts or calls.",
        "You can still open WhatsApp with your old number.",
        "You backed up your chats to Google Drive today."
      ],
      "steps": [
        {
          "title": "Open WhatsApp. Tap the three dots.",
          "desc": "The three dots are at the top right. Tap them, then tap Settings.",
          "mock": {
            "title": "WhatsApp",
            "chrome": "Android",
            "rows": [
              {
                "label": "Search",
                "hint": "",
                "tap": false
              },
              {
                "label": "New group",
                "hint": "",
                "tap": false
              },
              {
                "label": "New broadcast",
                "hint": "",
                "tap": false
              },
              {
                "label": "Linked devices",
                "hint": "",
                "tap": false
              },
              {
                "label": "Settings",
                "hint": "",
                "tap": true
              }
            ]
          }
        },
        {
          "title": "Tap Account",
          "desc": "It is the first line on the list.",
          "mock": {
            "title": "Settings",
            "chrome": "Android",
            "rows": [
              {
                "label": "Account",
                "hint": "Security notifications, change number",
                "tap": true
              },
              {
                "label": "Privacy",
                "hint": "",
                "tap": false
              },
              {
                "label": "Chats",
                "hint": "Backup, history",
                "tap": false
              },
              {
                "label": "Notifications",
                "hint": "",
                "tap": false
              },
              {
                "label": "Storage and data",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Change number",
          "desc": "Look near the bottom of the list.",
          "mock": {
            "title": "Account",
            "chrome": "Android",
            "rows": [
              {
                "label": "Security notifications",
                "hint": "",
                "tap": false
              },
              {
                "label": "Passkeys",
                "hint": "",
                "tap": false
              },
              {
                "label": "Email address",
                "hint": "",
                "tap": false
              },
              {
                "label": "Two-step verification",
                "hint": "",
                "tap": false
              },
              {
                "label": "Change number",
                "hint": "",
                "tap": true
              },
              {
                "label": "Delete my account",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Next",
          "desc": "WhatsApp shows you what will happen. Read it, then tap Next.",
          "mock": {
            "title": "Change number",
            "chrome": "Android",
            "rows": [
              {
                "label": "Account info moves",
                "hint": "",
                "tap": false
              },
              {
                "label": "Groups move",
                "hint": "",
                "tap": false
              },
              {
                "label": "Next",
                "hint": "",
                "tap": true
              }
            ]
          }
        },
        {
          "title": "Type your old number. Then your new one.",
          "desc": "Start both with your country code, like +964. Type them here in WhatsApp and nowhere else.",
          "mock": {
            "title": "Change number",
            "chrome": "Android",
            "rows": [
              {
                "label": "Old number",
                "hint": "+ country code",
                "tap": false
              },
              {
                "label": "New number",
                "hint": "+ country code",
                "tap": false
              },
              {
                "label": "Next",
                "hint": "",
                "tap": true
              }
            ]
          },
          "note": "Chon never asks for your number. Nobody honest will ever ask you for a code from a text message."
        },
        {
          "title": "Choose who to tell",
          "desc": "Tap \"Contacts I have chats with\". That is the normal choice.",
          "mock": {
            "title": "Notify contacts",
            "chrome": "Android",
            "rows": [
              {
                "label": "All my contacts",
                "hint": "",
                "tap": false
              },
              {
                "label": "Contacts I have chats with",
                "hint": "",
                "tap": true
              },
              {
                "label": "Custom",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Type the 6 numbers you get by text",
          "desc": "WhatsApp sends a text to your new number. Type those 6 numbers in.",
          "mock": {
            "title": "Verify your number",
            "chrome": "Android",
            "rows": [
              {
                "label": "Enter 6-digit code",
                "hint": "",
                "tap": true
              },
              {
                "label": "Resend SMS",
                "hint": "",
                "tap": false
              },
              {
                "label": "Call me instead",
                "hint": "",
                "tap": false
              }
            ]
          },
          "note": "Afterwards, check that your chat backup still saves to the right Google account."
        }
      ],
      "warnings": [
        {
          "level": "high",
          "text": "Do not delete WhatsApp until this is finished. If you do, you start again from empty and your chats are gone."
        },
        {
          "level": "medium",
          "text": "Check that the Google account holding your backup is still yours."
        }
      ]
    }
  },
  "telegram": {
    "ios": {
      "prereqs": [
        "Your new number works and can get texts.",
        "You can still open Telegram on a phone or a computer."
      ],
      "steps": [
        {
          "title": "Open Telegram. Tap Settings.",
          "desc": "Settings is at the bottom of the screen, on the right.",
          "mock": {
            "title": "Telegram",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Contacts",
                "hint": "",
                "tap": false
              },
              {
                "label": "Chats",
                "hint": "",
                "tap": false
              },
              {
                "label": "Settings",
                "hint": "Account, privacy",
                "tap": true
              }
            ]
          }
        },
        {
          "title": "Tap your phone number",
          "desc": "It is near the top of the list.",
          "mock": {
            "title": "Settings",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Phone Number",
                "hint": "Tap to change",
                "tap": true
              },
              {
                "label": "Username",
                "hint": "",
                "tap": false
              },
              {
                "label": "Bio",
                "hint": "",
                "tap": false
              },
              {
                "label": "Privacy and Security",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Change Number",
          "desc": "Telegram tells you your chats and contacts will move. That is normal.",
          "mock": {
            "title": "Phone Number",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Change Number",
                "hint": "",
                "tap": true
              },
              {
                "label": "Cancel",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Type your new number",
          "desc": "Pick your country first. Then type the number.",
          "mock": {
            "title": "Change Number",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Country",
                "hint": "",
                "tap": false
              },
              {
                "label": "New phone number",
                "hint": "",
                "tap": false
              },
              {
                "label": "Next",
                "hint": "",
                "tap": true
              }
            ]
          },
          "note": "Already have a Telegram account on the new number? You have to delete that one first."
        },
        {
          "title": "Type the code you get",
          "desc": "Telegram sends a code by text, or inside the app. Type it in. You are done.",
          "mock": {
            "title": "Verification",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Enter code",
                "hint": "",
                "tap": true
              },
              {
                "label": "Resend",
                "hint": "",
                "tap": false
              }
            ]
          },
          "note": "Your chats and groups come with you. Your contacts will see the new number."
        }
      ],
      "warnings": [
        {
          "level": "medium",
          "text": "Your friends will see that your number changed. The old number stops working straight away."
        },
        {
          "level": "low",
          "text": "If you set a Telegram password, make sure its recovery email is one you can still open."
        }
      ]
    }
  },
  "google": {
    "web": {
      "prereqs": [
        "You are signed in to Google on a computer you trust.",
        "Your new number can get texts.",
        "You know how Google sends you login codes today."
      ],
      "steps": [
        {
          "title": "Go to myaccount.google.com",
          "desc": "Open it in your browser and sign in. Then tap Personal info.",
          "mock": {
            "title": "Google Account",
            "chrome": "Web",
            "rows": [
              {
                "label": "Home",
                "hint": "",
                "tap": false
              },
              {
                "label": "Personal info",
                "hint": "Name, birthday, phone",
                "tap": true
              },
              {
                "label": "Data and privacy",
                "hint": "",
                "tap": false
              },
              {
                "label": "Security",
                "hint": "",
                "tap": false
              },
              {
                "label": "People and sharing",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Phone",
          "desc": "It is under Contact info.",
          "mock": {
            "title": "Personal info",
            "chrome": "Web",
            "rows": [
              {
                "label": "Name",
                "hint": "",
                "tap": false
              },
              {
                "label": "Birthday",
                "hint": "",
                "tap": false
              },
              {
                "label": "Phone",
                "hint": "Used for profile and sign-in",
                "tap": true
              },
              {
                "label": "Email",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Add your new number",
          "desc": "Add the new one and confirm it first. Only then remove the old one.",
          "mock": {
            "title": "Phone",
            "chrome": "Web",
            "rows": [
              {
                "label": "Old number",
                "hint": "Remove after the new one works",
                "tap": false
              },
              {
                "label": "Add recovery phone",
                "hint": "",
                "tap": true
              },
              {
                "label": "Verify",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Now open Security. Tap 2-Step Verification.",
          "desc": "This is a different phone number. Most people forget this one.",
          "mock": {
            "title": "Security",
            "chrome": "Web",
            "rows": [
              {
                "label": "2-Step Verification",
                "hint": "Phone, authenticator, keys",
                "tap": true
              },
              {
                "label": "Recovery phone",
                "hint": "",
                "tap": false
              },
              {
                "label": "Recovery email",
                "hint": "",
                "tap": false
              },
              {
                "label": "Your devices",
                "hint": "",
                "tap": false
              }
            ]
          },
          "note": "This is the step that locks people out. Google can still text your old number, even after you change your profile number."
        },
        {
          "title": "Change the number here too",
          "desc": "Put your new number in and confirm it. Do the same for Recovery phone.",
          "mock": {
            "title": "2-Step Verification",
            "chrome": "Web",
            "rows": [
              {
                "label": "Voice or text message",
                "hint": "Change phone",
                "tap": true
              },
              {
                "label": "Authenticator app",
                "hint": "",
                "tap": false
              },
              {
                "label": "Backup codes",
                "hint": "Generate new set",
                "tap": false
              },
              {
                "label": "Security keys",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Get your backup codes",
          "desc": "Tap Get backup codes. Print them, or write them down. Keep them somewhere safe at home.",
          "mock": {
            "title": "Backup codes",
            "chrome": "Web",
            "rows": [
              {
                "label": "Get backup codes",
                "hint": "",
                "tap": true
              },
              {
                "label": "Download",
                "hint": "",
                "tap": false
              },
              {
                "label": "Print",
                "hint": "",
                "tap": false
              }
            ]
          },
          "note": "Backup codes work with no phone at all. They are the best safety net you can have."
        }
      ],
      "warnings": [
        {
          "level": "high",
          "text": "Google keeps your number in three places: your profile, your recovery phone, and 2-Step Verification. Change all three."
        },
        {
          "level": "medium",
          "text": "If other apps send their reset emails to Gmail, check those too."
        }
      ]
    },
    "android": {
      "prereqs": [
        "You are signed in on your Android phone.",
        "Your new SIM can get texts."
      ],
      "steps": [
        {
          "title": "Open Settings. Tap Google.",
          "desc": "This is your phone’s own Settings app.",
          "mock": {
            "title": "Settings",
            "chrome": "Android",
            "rows": [
              {
                "label": "Network and internet",
                "hint": "",
                "tap": false
              },
              {
                "label": "Apps",
                "hint": "",
                "tap": false
              },
              {
                "label": "Google",
                "hint": "Services and preferences",
                "tap": true
              },
              {
                "label": "System",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Manage your Google Account",
          "desc": "It is at the top.",
          "mock": {
            "title": "Google",
            "chrome": "Android",
            "rows": [
              {
                "label": "Manage your Google Account",
                "hint": "",
                "tap": true
              },
              {
                "label": "Backup",
                "hint": "",
                "tap": false
              },
              {
                "label": "Find My Device",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Personal info, then Phone",
          "desc": "Add your new number and confirm it. Then remove the old one.",
          "mock": {
            "title": "Personal info",
            "chrome": "Android",
            "rows": [
              {
                "label": "Name",
                "hint": "",
                "tap": false
              },
              {
                "label": "Phone",
                "hint": "",
                "tap": true
              },
              {
                "label": "Email",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Security, then 2-Step Verification",
          "desc": "This is a different phone number. Change it here too.",
          "mock": {
            "title": "Security",
            "chrome": "Android",
            "rows": [
              {
                "label": "2-Step Verification",
                "hint": "",
                "tap": true
              },
              {
                "label": "Recovery phone",
                "hint": "",
                "tap": false
              },
              {
                "label": "Recovery email",
                "hint": "",
                "tap": false
              }
            ]
          },
          "note": "Also look at \"Your devices\". Sign out of any phone you do not have any more."
        },
        {
          "title": "Get your backup codes",
          "desc": "Write them down and keep them at home. They work with no phone.",
          "mock": {
            "title": "Backup codes",
            "chrome": "Android",
            "rows": [
              {
                "label": "Get backup codes",
                "hint": "",
                "tap": true
              },
              {
                "label": "Download",
                "hint": "",
                "tap": false
              }
            ]
          }
        }
      ],
      "warnings": [
        {
          "level": "high",
          "text": "Do not remove your old number until the new one works. You could lock yourself out."
        }
      ]
    }
  },
  "instagram": {
    "ios": {
      "prereqs": [
        "Your new number can get texts.",
        "You know if you get a code by text when you log in."
      ],
      "steps": [
        {
          "title": "Open your profile. Tap the menu.",
          "desc": "Tap your photo at the bottom right. Then tap the lines at the top right.",
          "mock": {
            "title": "Profile",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Edit profile",
                "hint": "",
                "tap": false
              },
              {
                "label": "Insights",
                "hint": "",
                "tap": false
              },
              {
                "label": "Menu",
                "hint": "Settings and activity",
                "tap": true
              }
            ]
          }
        },
        {
          "title": "Tap Accounts Centre",
          "desc": "It is at the top. Instagram, Facebook and Threads all share this.",
          "mock": {
            "title": "Settings and activity",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Accounts Centre",
                "hint": "Personal details, passwords",
                "tap": true
              },
              {
                "label": "Your account",
                "hint": "",
                "tap": false
              },
              {
                "label": "How you use Instagram",
                "hint": "",
                "tap": false
              },
              {
                "label": "Who can see your content",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Personal details",
          "desc": "Then tap Contact info.",
          "mock": {
            "title": "Accounts Centre",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Personal details",
                "hint": "Contact info, birthday",
                "tap": true
              },
              {
                "label": "Password and security",
                "hint": "",
                "tap": false
              },
              {
                "label": "Ad preferences",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Add your new number",
          "desc": "Add the new one and confirm it first. Only then remove the old one.",
          "mock": {
            "title": "Contact info",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Phone number",
                "hint": "Old number",
                "tap": true
              },
              {
                "label": "Email address",
                "hint": "",
                "tap": false
              },
              {
                "label": "Add new contact info",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Type the code you get by text",
          "desc": "Instagram sends a code to your new number.",
          "mock": {
            "title": "Confirm number",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Enter code",
                "hint": "",
                "tap": true
              },
              {
                "label": "Resend code",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Now check Two-factor authentication",
          "desc": "Go back to Accounts Centre. Tap Password and security, then Two-factor authentication.",
          "mock": {
            "title": "Password and security",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Two-factor authentication",
                "hint": "",
                "tap": true
              },
              {
                "label": "Login activity",
                "hint": "",
                "tap": false
              },
              {
                "label": "Saved login info",
                "hint": "",
                "tap": false
              }
            ]
          },
          "note": "This one matters. Changing your number above does not change the number Instagram texts when you log in."
        }
      ],
      "warnings": [
        {
          "level": "high",
          "text": "Instagram, Facebook and Threads share one settings page. Changing one can change the others. Open each app afterwards and check."
        },
        {
          "level": "medium",
          "text": "If your new number is already on another Instagram account, remove it from that one first."
        }
      ]
    },
    "web": {
      "prereqs": [
        "You can sign in on a computer.",
        "Your new number can get texts."
      ],
      "steps": [
        {
          "title": "Open Instagram in your browser. Tap More.",
          "desc": "More is at the bottom of the menu on the left.",
          "mock": {
            "title": "Instagram",
            "chrome": "Web",
            "rows": [
              {
                "label": "Home",
                "hint": "",
                "tap": false
              },
              {
                "label": "Search",
                "hint": "",
                "tap": false
              },
              {
                "label": "Profile",
                "hint": "",
                "tap": false
              },
              {
                "label": "More",
                "hint": "Settings",
                "tap": true
              }
            ]
          }
        },
        {
          "title": "Tap Accounts Centre",
          "desc": "Instagram, Facebook and Threads all share this.",
          "mock": {
            "title": "Settings",
            "chrome": "Web",
            "rows": [
              {
                "label": "Accounts Centre",
                "hint": "",
                "tap": true
              },
              {
                "label": "Notifications",
                "hint": "",
                "tap": false
              },
              {
                "label": "Privacy and security",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Personal details, then Contact info",
          "desc": "Add your new number and confirm it. Then remove the old one.",
          "mock": {
            "title": "Personal details",
            "chrome": "Web",
            "rows": [
              {
                "label": "Contact info",
                "hint": "",
                "tap": true
              },
              {
                "label": "Birthday",
                "hint": "",
                "tap": false
              },
              {
                "label": "Identity confirmation",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Type the code you get by text",
          "desc": "The code goes to your new number.",
          "mock": {
            "title": "Confirm number",
            "chrome": "Web",
            "rows": [
              {
                "label": "Enter code",
                "hint": "",
                "tap": true
              },
              {
                "label": "Resend",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Check Two-factor authentication",
          "desc": "Tap Password and security. Check every account listed there.",
          "mock": {
            "title": "Password and security",
            "chrome": "Web",
            "rows": [
              {
                "label": "Two-factor authentication",
                "hint": "",
                "tap": true
              },
              {
                "label": "Where you are logged in",
                "hint": "",
                "tap": false
              },
              {
                "label": "Login alerts",
                "hint": "",
                "tap": false
              }
            ]
          }
        }
      ],
      "warnings": [
        {
          "level": "medium",
          "text": "The website and the app share the same settings. Change it once, then check in the app."
        }
      ]
    }
  },
  "facebook": {
    "web": {
      "prereqs": [
        "You can sign in on a computer.",
        "Your new number can get texts.",
        "You know if you get a code by text when you log in."
      ],
      "steps": [
        {
          "title": "Tap your photo, then Settings & privacy",
          "desc": "Your photo is at the top right.",
          "mock": {
            "title": "Facebook",
            "chrome": "Web",
            "rows": [
              {
                "label": "See all profiles",
                "hint": "",
                "tap": false
              },
              {
                "label": "Settings & privacy",
                "hint": "Settings, language",
                "tap": true
              },
              {
                "label": "Help & support",
                "hint": "",
                "tap": false
              },
              {
                "label": "Log out",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Accounts Centre",
          "desc": "Facebook keeps phone numbers here now.",
          "mock": {
            "title": "Settings",
            "chrome": "Web",
            "rows": [
              {
                "label": "Accounts Centre",
                "hint": "Personal details, password, security",
                "tap": true
              },
              {
                "label": "Privacy",
                "hint": "",
                "tap": false
              },
              {
                "label": "Notifications",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Personal details",
          "desc": "Then tap Contact info. It shows every number on your account.",
          "mock": {
            "title": "Accounts Centre",
            "chrome": "Web",
            "rows": [
              {
                "label": "Personal details",
                "hint": "",
                "tap": true
              },
              {
                "label": "Password and security",
                "hint": "",
                "tap": false
              },
              {
                "label": "Your information and permissions",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Add your new number",
          "desc": "Add the new one and confirm it first. Only then remove the old one.",
          "mock": {
            "title": "Contact info",
            "chrome": "Web",
            "rows": [
              {
                "label": "Add new contact info",
                "hint": "",
                "tap": true
              },
              {
                "label": "Old number",
                "hint": "Remove after verifying",
                "tap": false
              },
              {
                "label": "Email address",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Type the code you get by text",
          "desc": "Facebook sends a code to your new number.",
          "mock": {
            "title": "Confirm number",
            "chrome": "Web",
            "rows": [
              {
                "label": "Enter code",
                "hint": "",
                "tap": true
              },
              {
                "label": "Resend code",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Check Two-factor authentication",
          "desc": "Tap Password and security. Change the number there too.",
          "mock": {
            "title": "Password and security",
            "chrome": "Web",
            "rows": [
              {
                "label": "Two-factor authentication",
                "hint": "",
                "tap": true
              },
              {
                "label": "Where you are logged in",
                "hint": "",
                "tap": false
              },
              {
                "label": "Login alerts",
                "hint": "",
                "tap": false
              },
              {
                "label": "Recovery codes",
                "hint": "",
                "tap": false
              }
            ]
          },
          "note": "Get recovery codes while you are here. Then you never need a text message to get back in."
        }
      ],
      "warnings": [
        {
          "level": "high",
          "text": "If Facebook still texts your old number when you log in, removing it will lock you out next time."
        },
        {
          "level": "medium",
          "text": "Facebook may still use your old number to let you back in. Check the recovery settings too."
        }
      ]
    }
  },
  "apple": {
    "ios": {
      "prereqs": [
        "You are signed in to your Apple Account on the iPhone.",
        "Your new number can get texts or calls.",
        "If you can, have a second Apple device nearby."
      ],
      "steps": [
        {
          "title": "Open Settings. Tap your name.",
          "desc": "Your name is right at the top.",
          "mock": {
            "title": "Settings",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Your name",
                "hint": "Apple Account, iCloud",
                "tap": true
              },
              {
                "label": "Wi-Fi",
                "hint": "",
                "tap": false
              },
              {
                "label": "Bluetooth",
                "hint": "",
                "tap": false
              },
              {
                "label": "Notifications",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Sign-In & Security",
          "desc": "It is the second line.",
          "mock": {
            "title": "Apple Account",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Personal Information",
                "hint": "",
                "tap": false
              },
              {
                "label": "Sign-In & Security",
                "hint": "Email, phone, 2FA",
                "tap": true
              },
              {
                "label": "Payment & Shipping",
                "hint": "",
                "tap": false
              },
              {
                "label": "iCloud",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Email & Phone Numbers",
          "desc": "This shows every number Apple can reach you on.",
          "mock": {
            "title": "Sign-In & Security",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Email & Phone Numbers",
                "hint": "",
                "tap": true
              },
              {
                "label": "Two-Factor Authentication",
                "hint": "",
                "tap": false
              },
              {
                "label": "Account Recovery",
                "hint": "",
                "tap": false
              },
              {
                "label": "Legacy Contact",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Add your new number",
          "desc": "Apple sends you a code. Type it in to confirm.",
          "mock": {
            "title": "Email & Phone Numbers",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Add Email or Phone Number",
                "hint": "",
                "tap": true
              },
              {
                "label": "Old number",
                "hint": "Remove after verifying",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Two-Factor Authentication",
          "desc": "Then tap Trusted Phone Numbers. Add your new number here too.",
          "mock": {
            "title": "Two-Factor Authentication",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Trusted Phone Numbers",
                "hint": "Add the new number",
                "tap": true
              },
              {
                "label": "Get Verification Code",
                "hint": "",
                "tap": false
              },
              {
                "label": "Turn Off Two-Factor",
                "hint": "",
                "tap": false
              }
            ]
          },
          "note": "This one matters. Apple keeps a separate list for login codes. Add the new number before you remove the old one."
        },
        {
          "title": "Set up Account Recovery",
          "desc": "Pick someone you trust as a Recovery Contact. Or get a Recovery Key and write it down.",
          "mock": {
            "title": "Account Recovery",
            "chrome": "iPhone",
            "rows": [
              {
                "label": "Recovery Contact",
                "hint": "",
                "tap": true
              },
              {
                "label": "Recovery Key",
                "hint": "",
                "tap": false
              },
              {
                "label": "Legacy Contact",
                "hint": "",
                "tap": false
              }
            ]
          }
        }
      ],
      "warnings": [
        {
          "level": "high",
          "text": "Getting an Apple account back can take days. Set up a Recovery Contact now, while everything still works."
        },
        {
          "level": "medium",
          "text": "If the phone with your old number is gone, removing that number can be slow and difficult."
        }
      ]
    },
    "web": {
      "prereqs": [
        "You can sign in at account.apple.com.",
        "Your new number can get texts."
      ],
      "steps": [
        {
          "title": "Go to account.apple.com and sign in",
          "desc": "You may need a code from your iPhone or Mac.",
          "mock": {
            "title": "Apple Account",
            "chrome": "Web",
            "rows": [
              {
                "label": "Sign in",
                "hint": "",
                "tap": true
              },
              {
                "label": "Forgot password?",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Sign-In and Security",
          "desc": "This holds your emails, your numbers and your login settings.",
          "mock": {
            "title": "Apple Account",
            "chrome": "Web",
            "rows": [
              {
                "label": "Personal Information",
                "hint": "",
                "tap": false
              },
              {
                "label": "Sign-In and Security",
                "hint": "",
                "tap": true
              },
              {
                "label": "Payment",
                "hint": "",
                "tap": false
              },
              {
                "label": "Devices",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Email and Phone Numbers",
          "desc": "Add your new number and confirm it. Then remove the old one.",
          "mock": {
            "title": "Sign-In and Security",
            "chrome": "Web",
            "rows": [
              {
                "label": "Email and Phone Numbers",
                "hint": "",
                "tap": true
              },
              {
                "label": "Two-Factor Authentication",
                "hint": "",
                "tap": false
              },
              {
                "label": "Account Recovery",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Tap Two-Factor Authentication",
          "desc": "Then tap Trusted Phone Numbers. Add your new number here too.",
          "mock": {
            "title": "Two-Factor Authentication",
            "chrome": "Web",
            "rows": [
              {
                "label": "Trusted Phone Numbers",
                "hint": "",
                "tap": true
              },
              {
                "label": "Trusted Devices",
                "hint": "",
                "tap": false
              }
            ]
          }
        },
        {
          "title": "Check Account Recovery",
          "desc": "Make sure you still have a Recovery Contact or a Recovery Key.",
          "mock": {
            "title": "Account Recovery",
            "chrome": "Web",
            "rows": [
              {
                "label": "Recovery Contact",
                "hint": "",
                "tap": true
              },
              {
                "label": "Recovery Key",
                "hint": "",
                "tap": false
              }
            ]
          }
        }
      ],
      "warnings": [
        {
          "level": "medium",
          "text": "If no Apple device of yours can get a code, the only way back in is account recovery. Sort this out before the old SIM stops."
        }
      ]
    }
  }
};

const GEN = {
  tiktok:    {home:'Profile',        settings:'Settings and privacy', account:'Account',            phone:'Phone number'},
  snapchat:  {home:'Profile',        settings:'Settings',             account:'Mobile Number',      phone:'Mobile Number'},
  linkedin:  {home:'Me',             settings:'Settings & Privacy',   account:'Sign in & security', phone:'Phone numbers'},
  microsoft: {home:'Your info',      settings:'Security',             account:'Advanced security',  phone:'Phone number'},
  signal:    {home:'Settings',       settings:'Account',              account:'Change phone number',phone:'Change phone number'},
  x:         {home:'Settings and privacy', settings:'Your account',   account:'Account information',phone:'Phone'},
  discord:   {home:'User Settings',  settings:'My Account',           account:'Phone Number',       phone:'Phone Number'},
  paypal:    {home:'Settings',       settings:'Account',              account:'Phone',              phone:'Phone'},
  amazon:    {home:'Your Account',   settings:'Login & security',     account:'Mobile phone number',phone:'Mobile phone number'},
  uber:      {home:'Account',        settings:'Settings',             account:'Phone number',       phone:'Phone number'},
  airbnb:    {home:'Profile',        settings:'Account',              account:'Personal info',      phone:'Phone number'},
  netflix:   {home:'Account',        settings:'Membership details',   account:'Phone number',       phone:'Phone number'}
};

const GUIDE_TROUBLE = {
  whatsapp: [
    {q:'I do not receive the verification SMS', a:'Wait for the full countdown, then use the "Call me" option. Check that the new SIM has signal, that SMS is not blocked by your carrier, and that you entered the country code. If nothing arrives, contact your carrier before contacting the platform.'},
    {q:'I no longer have my old number', a:'You can still register the new number, but your chats will not migrate through Change Number. Follow the "I lost my old number" guide first, and check the platform help centre for account-recovery options.'},
    {q:'My new number already has an account', a:'The new number must be free before it can take over your account. Delete or migrate the account on the new number first.'},
    {q:'I changed my number but my chats are gone', a:'Restore from the backup you created before the change. Backups are tied to the device account (iCloud or Google Drive), not to the phone number.'}
  ],
  telegram: [
    {q:'The new number already has a Telegram account', a:'Telegram will not move your account onto a number that is already in use. Delete the other account or pick a different number.'},
    {q:'I did not get the code', a:'If you are still logged in on another device, the code arrives as an in-app message there instead of by SMS.'}
  ],
  google: [
    {q:'I updated my profile number but still get codes to the old number', a:'2-Step Verification stores its own phone number. Update it in Security → 2-Step Verification, not in Personal info.'},
    {q:'I cannot sign in and my old number is gone', a:'Use backup codes or another second factor if you have one. Otherwise start Google account recovery from a device and network you have used before.'},
    {q:'Should I keep SMS as a second factor at all?', a:'An authenticator app or passkey is not tied to a phone number, so it survives a number change. Consider moving before you change the SIM.'}
  ],
  instagram: [
    {q:'The change did not appear in the Facebook app', a:'Accounts Centre changes can take a moment to propagate. Re-open each app and check contact info per profile.'},
    {q:'Two-factor still asks for my old number', a:'Two-factor authentication is set per profile under Password and security. Update it there, and save recovery codes.'}
  ],
  facebook: [
    {q:'I removed the old number and now cannot log in', a:'Use a saved recovery code, a trusted device, or start account recovery from the login screen. Never pay anyone who offers to restore an account.'},
    {q:'My account is locked after the change', a:'Follow the in-product recovery flow only. Links from search results and social posts are often phishing.'}
  ],
  apple: [
    {q:'I cannot get a verification code', a:'Try a trusted device you still own, then a recovery contact, then account recovery. Recovery can take several days by design.'},
    {q:'Can I remove the old number right away?', a:'Only after the new number is verified and appears under trusted phone numbers.'}
  ]
};

const GLOBAL_TROUBLE = [
  {q:'I do not receive the verification SMS', a:'Confirm the new SIM has signal and can receive an SMS from a friend. Check the country code, wait out the resend timer, then use a voice-call option if the platform offers one. Carrier-level SMS filtering is a common cause on newly activated numbers.'},
  {q:'I do not have access to my old number', a:'Do not start deleting accounts. Work through the "order matters" list above, and for each platform use its own account-recovery flow with an email address or device you still control.'},
  {q:'My new number is already associated with another account', a:'Most platforms allow one account per number. You must release the number on the old account — delete it or move it to a different number — before the new account can claim it.'},
  {q:'The app says my number cannot be changed', a:'Some platforms only let the number be changed from one surface (app but not web, or the reverse), and some treat the number as permanent. Check the platform help centre link on the guide page rather than following third-party tutorials.'},
  {q:'I lost my SIM', a:'Ask your carrier for a replacement SIM with the same number first. Keeping the number alive is almost always easier than recovering a dozen accounts without it.'},
  {q:'My account is locked', a:'Use only the platform official recovery process. No third party — including Chon — can unlock an account, and anyone who claims otherwise is attempting fraud.'},
  {q:'My account was banned', a:'A ban is unrelated to a number change and can only be appealed through the platform own appeal form.'},
  {q:'I changed my number but cannot log in', a:'You are probably being asked for a second factor that still points at the old number. Try backup codes, an authenticator app, or a trusted device, then fix the second factor before anything else.'},
  {q:'My 2FA stopped working', a:'Authenticator codes are tied to a secret stored in the app, not to your phone number — but if you also replaced the phone, the secret may be gone. Use recovery codes, then re-enrol.'}
];

const LOST_STEPS = [
  [
    "Do not cancel your old number yet",
    "If there is any way to keep it, keep it. It is the easiest way back into your accounts."
  ],
  [
    "Call your phone company",
    "Ask if you can get the old number back, or a new SIM with the same number. Do this first."
  ],
  [
    "Get the old SIM back if you can",
    "If you get it back, everything below becomes easy instead of risky."
  ],
  [
    "Write a list of your important accounts",
    "Email, bank, WhatsApp, Facebook, work. Put the worst one to lose at the top."
  ],
  [
    "Fix your email first",
    "Almost everything else sends its \"forgot password\" message to your email. Start there."
  ],
  [
    "Change your recovery phone numbers",
    "Most apps keep a second number just for emergencies. It is not the same as the number on your profile."
  ],
  [
    "Change your two-factor numbers",
    "This is the number that gets a code when you log in. It does not change by itself."
  ],
  [
    "Get recovery codes and write them down",
    "Recovery codes work with no phone at all. Write them on paper. Do not keep them as a photo."
  ],
  [
    "Test that your email reset works",
    "Send yourself a \"forgot password\" email. Make sure it arrives and works."
  ],
  [
    "Check your bank and payment apps",
    "Some banks make you come in person, or call them. Start this early."
  ],
  [
    "Check your password manager",
    "If it sends codes to your old number, fix that now, before you need it."
  ],
  [
    "Check WhatsApp, Telegram and Signal",
    "These apps use your phone number as your name. They need the change too."
  ],
  [
    "Only now let the old number go",
    "When every important account works without it, you are safe to stop paying for it."
  ]
];

const TWOFA_CARDS = [
  ['SMS codes','high','Tied directly to the phone number. This is the factor that breaks when a number changes, and the one people forget.'],
  ['Authenticator apps','low','Codes are generated from a secret stored in the app, not from your number. They survive a number change — but not a lost phone without a backup.'],
  ['Recovery codes','safe','One-time codes that work with no phone and no network. Generate a set for every important account and store them offline.'],
  ['Backup email','medium','Only as strong as the email account itself. Make sure that email is not recovered by the old number.'],
  ['Security keys','safe','A physical key is unaffected by a number change. Register two if you can — one to carry, one to keep safe.'],
  ['Passkeys','low','Bound to your device and its unlock, not your number. Check the passkey is synced to an account you still control.'],
  ['Trusted devices','medium','Some platforms treat a signed-in device as a second factor. Do not wipe or sell the old phone until the migration is finished.']
];

const EXTRA_ITEMS = [
  ['gen-email','Email account recovery','email'],
  ['gen-bank','Banking and payment apps','banking'],
  ['gen-2fa','Authenticator app / 2FA','other'],
  ['gen-pm','Password manager recovery','other'],
  ['gen-work','Work accounts and SSO','work']
];

const I18N = {
  en: {
    tagline:'Change your number safely', navHome:'Home', navGuides:'Guides', navWizard:'Number change plan', navChecklist:'My checklist', navSafety:'Safety & 2FA',
    heroBadge:'Independent guide · verified September 2026',
    heroTitle:'Changing your phone number?',
    heroSub:'Don\u2019t lose access to your accounts. Follow step-by-step instructions to update your phone number across your favourite apps and services.',
    searchPh:'Search for an app or service…', searchBtn:'Search', tryLabel:'Try:',
    riskTitle:'Before you cancel the old SIM',
    riskBody:'You may lose access to your accounts if the old number is still the only way to receive a recovery or two-factor code. Update the accounts first, then let the number go.',
    popular:'Popular guides', viewAll:'Show all guides', byCategory:'Browse by category',
    privacyTitle:'We never need your number',
    privacyBody:'Chon never asks for your old number, your new number, a password, a one-time code or any account credential. Everything you enter stays on your own device.',
    otpWarning:'Never give your OTP, verification code, recovery code, password or authentication token to anyone who offers to change your number for you.',
    libTitle:'Platform library', libSub:'Every platform we track, with what the number is actually used for.',
    filters:'Filters', clear:'Clear all', category:'Category', device:'Device', difficulty:'Difficulty', requirements:'Requirements',
    reqOld:'Needs old number', directChange:'Direct change', twofaAffected:'2FA affected',
    emptyTitle:'Nothing matches those filters', emptyBody:'Try a different platform name, or clear the filters and browse by category.',
    resultsOne:'1 platform', resultsMany:'{n} platforms',
    deviceTabs:'Choose your device', beforeYouStart:'Before you start', stepsTitle:'Steps', important:'Important', troubleshooting:'Troubleshooting',
    source:'Source', openOfficial:'Open official help', related:'Related guides', atAGlance:'At a glance',
    viewStep:'View step', whatTap:'What should I tap?', zoom:'Zoom', close:'Close',
    mockNote:'Original recreation of the screen layout — not a screenshot of the app.',
    statusOfficial:'Official source checked', statusReference:'Community reference', statusPending:'Guide in review',
    freshVerified:'Last verified {d}', freshReview:'Review recommended · {d}', freshStale:'Potentially outdated · {d}',
    staleBody:'This guide has not been re-checked recently. Platform interfaces change often — confirm each step against the official help centre before relying on it.',
    pendingTitle:'We have not verified this platform recently',
    pendingBody:'We track this platform but have not confirmed its current screens, so we are not publishing steps that might be wrong. Use the official help centre below, and add the platform to your checklist so you don\u2019t forget it.',
    transFallback:'Step text for this guide is not translated yet, so it is shown in English. The interface and your checklist follow your chosen language.',
    factDirect:'Direct number change', factOld:'Old number required', factSms:'SMS verification', factEmail:'Email instead of SMS', factTwofa:'Affects 2FA', factDevices:'Works on',
    yes:'Yes', no:'No', unknown:'Not verified',
    addToChecklist:'Add to my checklist', addedToChecklist:'On your checklist ✓',
    checklistTitle:'Your number migration', checklistSub:'Saved on this device only. No account, no sign-in.',
    progress:'Progress', reset:'Reset', rerunWizard:'Change my answers', openGuide:'Open guide',
    checklistEmptyTitle:'Your checklist is empty', checklistEmptyBody:'Answer four questions and Chon will build a personalised list of what to update.',
    startWizard:'Build my checklist', localOnly:'Stored locally in this browser. Clearing your browser data clears the checklist.',
    countLabel:'{done} / {total} completed',
    back:'Back', next:'Next', finish:'Build my checklist',
    wizardPrivacy:'No phone numbers, no codes, no account needed.',
    wizStep:'Step {n} of {total}',
    q1:'What are you trying to do?', q1hint:'This sets the order of your checklist.',
    q2:'Can you still receive messages on the old number?', q2hint:'It changes which accounts you should fix first.',
    q3:'Which device will you be using?', q3hint:'We show instructions for that device only.',
    q4:'Which of these do you use?', q4hint:'Pick everything that holds your number. You can add more later.',
    lostTitle:'I lost access to my old phone number',
    lostSub:'Changing a number and recovering an account after losing a number are two different problems. This page is for the second one.',
    lostWarn:'High risk: if the old number is still the only recovery method on an account, you may not be able to prove the account is yours. Work through the accounts in order, starting with email.',
    orderMatters:'The order matters',
    twofaTitle:'Before changing your number, check your 2FA',
    twofaSub:'Changing your phone number does not automatically update how you log in. Two-factor settings are stored separately on nearly every platform.',
    disclaimer:'Chon is an independent educational resource and is not affiliated with WhatsApp, Meta, Instagram, TikTok, Google, Apple, Microsoft, Telegram or any other third-party service. Platform interfaces change frequently; always confirm steps against the official help centre linked on each guide.',
    buildNote:'Content verified against official help centres where available. Guides without a verified current interface are marked and withheld rather than guessed.',
    themeLabel:'Change theme', prev:'Previous', stepOf:'Step {n} of {total}'
  },
  ar: {
    tagline:'غيّر رقمك بأمان', navHome:'الرئيسية', navGuides:'الأدلة', navWizard:'خطة تغيير الرقم', navChecklist:'قائمتي', navSafety:'الأمان والمصادقة',
    heroBadge:'مرجع مستقل · تم التحقق في أيلول ٢٠٢٦',
    heroTitle:'هل تغيّر رقم هاتفك؟',
    heroSub:'لا تفقد الوصول إلى حساباتك. اتبع خطوات واضحة لتحديث رقم هاتفك في التطبيقات والخدمات التي تستخدمها.',
    searchPh:'ابحث عن تطبيق أو خدمة…', searchBtn:'بحث', tryLabel:'جرّب:',
    riskTitle:'قبل إلغاء الشريحة القديمة',
    riskBody:'قد تفقد الوصول إلى حساباتك إذا كان الرقم القديم هو الطريقة الوحيدة لاستلام رمز الاسترداد أو رمز التحقق. حدّث الحسابات أولاً ثم تخلَّ عن الرقم.',
    popular:'أدلة شائعة', viewAll:'عرض كل الأدلة', byCategory:'التصفح حسب الفئة',
    privacyTitle:'لا نحتاج إلى رقمك',
    privacyBody:'لا يطلب Chon رقمك القديم أو الجديد أو كلمة المرور أو رمزاً لمرة واحدة أو أي بيانات دخول. كل ما تدخله يبقى على جهازك.',
    otpWarning:'لا تعطِ أبداً رمز التحقق أو رمز الاسترداد أو كلمة المرور لأي شخص يعرض عليك تغيير رقمك.',
    libTitle:'مكتبة المنصات', libSub:'كل منصة نتابعها، وما يُستخدم الرقم فيه فعلياً.',
    filters:'عوامل التصفية', clear:'مسح الكل', category:'الفئة', device:'الجهاز', difficulty:'الصعوبة', requirements:'المتطلبات',
    reqOld:'يحتاج الرقم القديم', directChange:'تغيير مباشر', twofaAffected:'يؤثر على المصادقة',
    emptyTitle:'لا نتائج مطابقة', emptyBody:'جرّب اسم منصة آخر أو امسح عوامل التصفية.',
    resultsOne:'منصة واحدة', resultsMany:'{n} منصة',
    deviceTabs:'اختر جهازك', beforeYouStart:'قبل أن تبدأ', stepsTitle:'الخطوات', important:'مهم', troubleshooting:'حل المشكلات',
    source:'المصدر', openOfficial:'فتح المساعدة الرسمية', related:'أدلة ذات صلة', atAGlance:'نظرة سريعة',
    viewStep:'عرض الخطوة', whatTap:'ما الذي يجب أن أضغط عليه؟', zoom:'تكبير', close:'إغلاق',
    mockNote:'إعادة رسم أصلية لتخطيط الشاشة — وليست لقطة شاشة من التطبيق.',
    statusOfficial:'تم التحقق من مصدر رسمي', statusReference:'مرجع مجتمعي', statusPending:'الدليل قيد المراجعة',
    freshVerified:'آخر تحقق {d}', freshReview:'يُستحسن المراجعة · {d}', freshStale:'قد يكون قديماً · {d}',
    staleBody:'لم يُعد التحقق من هذا الدليل مؤخراً. تتغير واجهات المنصات كثيراً — تأكد من كل خطوة من مركز المساعدة الرسمي.',
    pendingTitle:'لم نتحقق من هذه المنصة مؤخراً',
    pendingBody:'نتابع هذه المنصة لكننا لم نتأكد من شاشاتها الحالية، ولن ننشر خطوات قد تكون خاطئة. استخدم مركز المساعدة الرسمي أدناه، وأضف المنصة إلى قائمتك.',
    transFallback:'لم تُترجم خطوات هذا الدليل بعد، لذا تظهر بالإنجليزية. الواجهة وقائمتك تتبعان لغتك المختارة.',
    factDirect:'تغيير مباشر للرقم', factOld:'الرقم القديم مطلوب', factSms:'تحقق برسالة نصية', factEmail:'بريد بدل الرسالة', factTwofa:'يؤثر على المصادقة', factDevices:'يعمل على',
    yes:'نعم', no:'لا', unknown:'غير مُتحقق',
    addToChecklist:'أضف إلى قائمتي', addedToChecklist:'في قائمتك ✓',
    checklistTitle:'ترحيل رقمك', checklistSub:'محفوظة على هذا الجهاز فقط. بدون حساب ولا تسجيل دخول.',
    progress:'التقدم', reset:'إعادة تعيين', rerunWizard:'تغيير إجاباتي', openGuide:'فتح الدليل',
    checklistEmptyTitle:'قائمتك فارغة', checklistEmptyBody:'أجب عن أربعة أسئلة وسينشئ Chon قائمة مخصصة لما يجب تحديثه.',
    startWizard:'أنشئ قائمتي', localOnly:'محفوظة محلياً في هذا المتصفح. مسح بيانات المتصفح يمسح القائمة.',
    countLabel:'{done} / {total} مكتملة',
    back:'رجوع', next:'التالي', finish:'أنشئ قائمتي',
    wizardPrivacy:'لا أرقام هاتف، لا رموز، لا حساب.',
    wizStep:'الخطوة {n} من {total}',
    q1:'ما الذي تحاول فعله؟', q1hint:'يحدد هذا ترتيب قائمتك.',
    q2:'هل ما زلت تستلم الرسائل على الرقم القديم؟', q2hint:'يغيّر الحسابات التي يجب إصلاحها أولاً.',
    q3:'أي جهاز ستستخدم؟', q3hint:'نعرض التعليمات لذلك الجهاز فقط.',
    q4:'أي من هذه تستخدم؟', q4hint:'اختر كل ما يحتوي رقمك. يمكنك الإضافة لاحقاً.',
    lostTitle:'فقدت الوصول إلى رقمي القديم',
    lostSub:'تغيير الرقم واسترداد حساب بعد فقدان الرقم مشكلتان مختلفتان. هذه الصفحة للمشكلة الثانية.',
    lostWarn:'خطر مرتفع: إذا كان الرقم القديم هو وسيلة الاسترداد الوحيدة، فقد لا تتمكن من إثبات ملكية الحساب. ابدأ بالبريد الإلكتروني.',
    orderMatters:'الترتيب مهم',
    twofaTitle:'قبل تغيير رقمك، تحقق من المصادقة الثنائية',
    twofaSub:'تغيير رقم الهاتف لا يحدّث طريقة تسجيل دخولك تلقائياً. إعدادات المصادقة تُحفظ بشكل منفصل في معظم المنصات.',
    disclaimer:'Chon مرجع تعليمي مستقل وغير مرتبط بـ WhatsApp أو Meta أو Instagram أو TikTok أو Google أو Apple أو Microsoft أو Telegram أو أي خدمة أخرى. تتغير واجهات المنصات باستمرار؛ تأكد دائماً من الخطوات عبر مركز المساعدة الرسمي.',
    buildNote:'تم التحقق من المحتوى عبر مراكز المساعدة الرسمية حيث توفرت. الأدلة غير المتحقق منها موسومة وغير منشورة بدل تخمينها.',
    themeLabel:'تغيير المظهر', prev:'السابق', stepOf:'الخطوة {n} من {total}'
  },
  ckb: {
    tagline:'بە سەلامەتی ژمارەکەت بگۆڕە', navHome:'سەرەتا', navGuides:'ڕێنماییەکان', navWizard:'پلانی گۆڕینی ژمارە', navChecklist:'لیستی من', navSafety:'سەلامەتی و ٢FA',
    heroBadge:'سەرچاوەی سەربەخۆ · پشتڕاستکراو لە ئەیلولی ٢٠٢٦',
    heroTitle:'ژمارەی مۆبایلت دەگۆڕی؟',
    heroSub:'دەستڕاگەیشتن بە هەژمارەکانت لەدەست نەدە. هەنگاو بە هەنگاو ژمارەکەت لە ئەپ و خزمەتگوزارییەکانت نوێ بکەرەوە.',
    searchPh:'گەڕان بۆ ئەپ یان خزمەتگوزاری…', searchBtn:'گەڕان', tryLabel:'تاقی بکەرەوە:',
    riskTitle:'پێش ئەوەی سیمکارتی کۆن هەڵبوەشێنیت',
    riskBody:'ئەگەر ژمارەی کۆن تەنها ڕێگا بێت بۆ وەرگرتنی کۆدی گەڕانەوە یان کۆدی دووەم، ڕەنگە دەستڕاگەیشتنت لەدەست بدەیت. یەکەم هەژمارەکان نوێ بکەرەوە، پاشان ژمارە بەردە.',
    popular:'ڕێنمایی بەناوبانگ', viewAll:'هەموو ڕێنماییەکان', byCategory:'بەپێی پۆل',
    privacyTitle:'ئێمە هەرگیز ژمارەکەت ناخوازین',
    privacyBody:'Chon هەرگیز داوای ژمارەی کۆن یان نوێ، وشەی نهێنی، کۆدی یەک‌جارە یان زانیاری هەژمار ناکات. هەرچی دەنووسی لەسەر ئامێری خۆت دەمێنێت.',
    otpWarning:'هەرگیز کۆدی پشتڕاستکردن، کۆدی گەڕانەوە یان وشەی نهێنی بە هیچ کەس مەدە کە بڵێت یارمەتیت دەدات ژمارەکەت بگۆڕی.',
    libTitle:'کتێبخانەی پلاتفۆرمەکان', libSub:'هەموو پلاتفۆرمێک کە بەدوایدا دەچین، و ژمارە بۆ چی بەکاردێت.',
    filters:'فلتەرەکان', clear:'سڕینەوەی هەموو', category:'پۆل', device:'ئامێر', difficulty:'قەبارەی ئاستەنگی', requirements:'پێداویستییەکان',
    reqOld:'ژمارەی کۆن پێویستە', directChange:'گۆڕینی ڕاستەوخۆ', twofaAffected:'کاریگەری لە ٢FA',
    emptyTitle:'هیچ ئەنجامێک نەدۆزرایەوە', emptyBody:'ناوێکی تر تاقی بکەرەوە یان فلتەرەکان بسڕەوە.',
    resultsOne:'١ پلاتفۆرم', resultsMany:'{n} پلاتفۆرم',
    deviceTabs:'ئامێرەکەت هەڵبژێرە', beforeYouStart:'پێش دەستپێکردن', stepsTitle:'هەنگاوەکان', important:'گرنگ', troubleshooting:'چارەسەری کێشەکان',
    source:'سەرچاوە', openOfficial:'کردنەوەی یارمەتی فەرمی', related:'ڕێنمایی پەیوەندیدار', atAGlance:'کورتەیەک',
    viewStep:'بینینی هەنگاو', whatTap:'چی لێبدەم؟', zoom:'گەورەکردن', close:'داخستن',
    mockNote:'دروستکردنەوەی ڕەسەنی شێوەی شاشە — وێنەی ڕاستەقینەی ئەپ نییە.',
    statusOfficial:'سەرچاوەی فەرمی پشکنراو', statusReference:'سەرچاوەی کۆمەڵگە', statusPending:'ڕێنمایی لە پێداچوونەوەدا',
    freshVerified:'دوا پشتڕاستکردن {d}', freshReview:'پێداچوونەوە پێشنیار دەکرێت · {d}', freshStale:'ڕەنگە کۆن بووبێت · {d}',
    staleBody:'ئەم ڕێنماییە بەم دواییە پشکنین نەکراوە. ڕووکاری پلاتفۆرمەکان زوو دەگۆڕێن — هەر هەنگاوێک لەگەڵ یارمەتی فەرمی بپشکنە.',
    pendingTitle:'بەم دواییە ئەم پلاتفۆرمە پشتڕاست نەکراوە',
    pendingBody:'ئێمە ئەم پلاتفۆرمە بەدوایدا دەچین بەڵام شاشەکانی ئێستای پشتڕاست نەکراوە، بۆیە هەنگاوی ڕەنگە هەڵە بڵاو ناکەینەوە. یارمەتی فەرمی بەکاربهێنە و بخەیە سەر لیستەکەت.',
    transFallback:'دەقی هەنگاوەکانی ئەم ڕێنماییە هێشتا وەرنەگێردراوە، بۆیە بە ئینگلیزی نیشان دەدرێت. ڕووکار و لیستەکەت بە زمانی هەڵبژارد دەمێنن.',
    factDirect:'گۆڕینی ڕاستەوخۆی ژمارە', factOld:'ژمارەی کۆن پێویستە', factSms:'پشتڕاستکردن بە SMS', factEmail:'ئیمەیل لە جیاتی SMS', factTwofa:'کاریگەری لە ٢FA', factDevices:'کار دەکات لەسەر',
    yes:'بەڵێ', no:'نەخێر', unknown:'پشتڕاست نەکراوە',
    addToChecklist:'زیادکردن بۆ لیستەکەم', addedToChecklist:'لەسەر لیستەکەتە ✓',
    checklistTitle:'گواستنەوەی ژمارەکەت', checklistSub:'تەنها لەسەر ئەم ئامێرە پاشەکەوت دەکرێت. بێ هەژمار، بێ چوونەژوورەوە.',
    progress:'بەرەوپێشچوون', reset:'ڕێکخستنەوە', rerunWizard:'گۆڕینی وەڵامەکانم', openGuide:'کردنەوەی ڕێنمایی',
    checklistEmptyTitle:'لیستەکەت بەتاڵە', checklistEmptyBody:'وەڵامی چوار پرسیار بدە و Chon لیستێکی تایبەت بۆت دروست دەکات.',
    startWizard:'لیستەکەم دروست بکە', localOnly:'لە ناو ئەم وێبگەڕە پاشەکەوت کراوە. سڕینەوەی داتای وێبگەڕ لیستەکە دەسڕێت.',
    countLabel:'{done} / {total} تەواو',
    back:'گەڕانەوە', next:'دواتر', finish:'لیستەکەم دروست بکە',
    wizardPrivacy:'بێ ژمارەی مۆبایل، بێ کۆد، بێ هەژمار.',
    wizStep:'هەنگاوی {n} لە {total}',
    q1:'دەتەوێت چی بکەیت؟', q1hint:'ئەمە ڕیزبەندی لیستەکەت دیاری دەکات.',
    q2:'هێشتا نامە لەسەر ژمارەی کۆن وەردەگری؟', q2hint:'دیاری دەکات کام هەژمار پێشتر چاک بکەیت.',
    q3:'کام ئامێر بەکاردەهێنی؟', q3hint:'تەنها ڕێنمایی ئەو ئامێرە نیشان دەدەین.',
    q4:'کامەیان بەکاردەهێنی؟', q4hint:'هەموو ئەوانە هەڵبژێرە کە ژمارەکەت لێیە.',
    lostTitle:'دەستڕاگەیشتنم بە ژمارەی کۆن لەدەستدا',
    lostSub:'گۆڕینی ژمارە و گەڕاندنەوەی هەژمار دوای لەدەستدانی ژمارە دوو کێشەی جیاوازن. ئەم پەڕەیە بۆ دووەمە.',
    lostWarn:'مەترسی بەرز: ئەگەر ژمارەی کۆن تەنها ڕێگای گەڕانەوە بێت، ڕەنگە نەتوانی هەژمارەکە بسەلمێنی. بە ئیمەیل دەست پێبکە.',
    orderMatters:'ڕیزبەندی گرنگە',
    twofaTitle:'پێش گۆڕینی ژمارە، ٢FA بپشکنە',
    twofaSub:'گۆڕینی ژمارەی مۆبایل بەخۆکارانە شێوازی چوونەژوورەوەت نوێ ناکاتەوە. ڕێکخستنی ٢FA جیاواز پاشەکەوت دەکرێت.',
    disclaimer:'Chon سەرچاوەیەکی فێرکاری سەربەخۆیە و پەیوەندی بە WhatsApp، Meta، Instagram، TikTok، Google، Apple، Microsoft، Telegram یان هیچ خزمەتگوزارییەکی تر نییە. ڕووکاری پلاتفۆرمەکان زوو دەگۆڕێن؛ هەمیشە لەگەڵ یارمەتی فەرمی بپشکنە.',
    buildNote:'ناوەڕۆک لەگەڵ یارمەتی فەرمی پشتڕاست کراوە کاتێک بەردەست بووە. ئەو ڕێنماییانەی پشتڕاست نەکراون نیشانە کراون و بڵاو نەکراونەوە.',
    themeLabel:'گۆڕینی ڕووکار', prev:'پێشتر', stepOf:'هەنگاوی {n} لە {total}'
  },
  ku: {
    tagline:'بی سەلامەتی ژمارا خۆ بگوهۆڕە', navHome:'دەستپێک', navGuides:'ڕێبەرییان', navWizard:'پلانا گوهۆڕینا ژمارێ', navChecklist:'لیستا من', navSafety:'سەلامەتی و ٢FA',
    heroBadge:'سەرچاوەیا سەربخۆ · پشتڕاستکری ئەیلولا ٢٠٢٦',
    heroTitle:'ژمارا تەلەفۆنا خۆ دگوهۆڕی؟',
    heroSub:'دەستگەهاندنا خۆ ب هەژمارێن خۆ وێنەکە. گاڤ ب گاڤ ژمارا خۆ ل ئەپ و خزمەتگوزارییان نو بکە.',
    searchPh:'ل ئەپەکێ یان خزمەتگوزارییەکێ بگەڕە…', searchBtn:'گەڕان', tryLabel:'بجەڕبینە:',
    riskTitle:'بەرێ هێشتنا سیمکارتا کەڤن',
    riskBody:'ئەگەر ژمارا کەڤن تنێ ڕێکا وەرگرتنا کۆدا ڤەگەڕانێ بیت، دبیت دەستگەهاندنا خۆ وێنەکەی. ئێکەم هەژماران نو بکە، پاشێ ژمارێ بەردە.',
    popular:'ڕێبەرییێن ناسیار', viewAll:'هەمی ڕێبەرییان', byCategory:'ل گۆرا بەشان',
    privacyTitle:'ئەم چو جاران ژمارا تە ناخوازین',
    privacyBody:'Chon چو جاران داخوازا ژمارا کەڤن یان نو، پەیڤا نڤێ، کۆدا ئێکجارێ یان زانیارییێن هەژمارێ ناکەت. هەرچی تو دنڤێسی ل سەر ئامێرا تە دمینیت.',
    otpWarning:'چو جاران کۆدا پشتڕاستکرنێ، کۆدا ڤەگەڕانێ یان پەیڤا نڤێ نەدە کەسێ کو دبێژیت دێ ژمارا تە گوهۆڕیت.',
    libTitle:'پەرتووکخانا پلاتفۆرمان', libSub:'هەمی پلاتفۆرمێن ئەم دشۆپینین، و ژمارە بۆ چی تێت بکارئینان.',
    filters:'فلتەران', clear:'پاقژکرنا هەمییان', category:'بەش', device:'ئامێر', difficulty:'ئاستا زەحمەتییێ', requirements:'پێدڤی',
    reqOld:'ژمارا کەڤن پێدڤیە', directChange:'گوهۆڕینا ڕاستەڕاست', twofaAffected:'کارتێکرن ل ٢FA',
    emptyTitle:'چو ئەنجام نەهاتنە دیتن', emptyBody:'ناڤەکێ دی بجەڕبینە یان فلتەران پاقژ بکە.',
    resultsOne:'١ پلاتفۆرم', resultsMany:'{n} پلاتفۆرم',
    deviceTabs:'ئامێرا خۆ هەلبژێرە', beforeYouStart:'بەرێ دەستپێکرنێ', stepsTitle:'گاڤان', important:'گرنگ', troubleshooting:'چارەسەرکرنا کێشەیان',
    source:'سەرچاوە', openOfficial:'ڤەکرنا هاریکارییا فەرمی', related:'ڕێبەرییێن پەیوەندیدار', atAGlance:'کورتی',
    viewStep:'دیتنا گاڤێ', whatTap:'ئەز ل چی بدەم؟', zoom:'مەزنکرن', close:'گرتن',
    mockNote:'دروستکرنەکا ڕەسەن یا شێوەیا ئێکرانێ — نە وێنەیێ ڕاستەقینێ ئەپێ.',
    statusOfficial:'سەرچاوەیا فەرمی هاتیە پشکنین', statusReference:'سەرچاوەیا کۆمەڵێ', statusPending:'ڕێبەری د پێداچوونێ دایە',
    freshVerified:'دویماهیک پشتڕاستکرن {d}', freshReview:'پێداچوون تێت پێشنیارکرن · {d}', freshStale:'دبیت کەڤن بیت · {d}',
    staleBody:'ئەڤ ڕێبەری ب دویماهی نەهاتیە پشکنین. ڕوویێ پلاتفۆرمان زۆی دگوهۆڕیت — هەر گاڤەکێ ل گەل هاریکارییا فەرمی بپشکنە.',
    pendingTitle:'ئەڤ پلاتفۆرمە ب دویماهی نەهاتیە پشتڕاستکرن',
    pendingBody:'ئەم ڤێ پلاتفۆرمێ دشۆپینین بەلێ ئێکرانێن وێ یێن نوکە نەهاتینە پشتڕاستکرن، لەوما گاڤێن دبیت خەلەت بن بەلاڤ ناکەین. هاریکارییا فەرمی بکاربینە.',
    transFallback:'دەقا گاڤێن ڤێ ڕێبەرییێ هێشتا نەهاتیە وەرگێران، لەوما ب ئینگلیزی دهێتە نیشاندان. ڕوویێ ئەپێ و لیستا تە ب زمانا تە دمینن.',
    factDirect:'گوهۆڕینا ڕاستەڕاست یا ژمارێ', factOld:'ژمارا کەڤن پێدڤیە', factSms:'پشتڕاستکرن ب SMS', factEmail:'ئیمەیل ل شوینا SMS', factTwofa:'کارتێکرن ل ٢FA', factDevices:'کار دکەت ل سەر',
    yes:'بەلێ', no:'نە', unknown:'نەهاتیە پشتڕاستکرن',
    addToChecklist:'زێدەکرن بۆ لیستا من', addedToChecklist:'ل سەر لیستا تەیە ✓',
    checklistTitle:'گواستنا ژمارا تە', checklistSub:'تنێ ل سەر ڤێ ئامێرێ تێت پاشەکەفتکرن. بێ هەژمار، بێ چوونا ژ‌ور.',
    progress:'پێشکەفتن', reset:'ژ نو ڤەکرن', rerunWizard:'گوهۆڕینا بەرسڤان', openGuide:'ڤەکرنا ڕێبەرییێ',
    checklistEmptyTitle:'لیستا تە ڤالایە', checklistEmptyBody:'بەرسڤا چار پرسیاران بدە و Chon دێ لیستەکا تایبەت بۆ تە دروست کەت.',
    startWizard:'لیستا من دروست بکە', localOnly:'ل ڤێ وێبگەڕێ هاتیە پاشەکەفتکرن. پاقژکرنا داتایان لیستێ ژی پاقژ دکەت.',
    countLabel:'{done} / {total} تەمام',
    back:'ڤەگەر', next:'پاشتر', finish:'لیستا من دروست بکە',
    wizardPrivacy:'بێ ژمارا تەلەفۆنێ، بێ کۆد، بێ هەژمار.',
    wizStep:'گاڤا {n} ژ {total}',
    q1:'تو دخوازی چ بکەی؟', q1hint:'ئەڤە ڕێزا لیستا تە دیار دکەت.',
    q2:'هێشتا پەیام ل سەر ژمارا کەڤن وەردگری؟', q2hint:'دیار دکەت کیژ هەژمار بەرێ چاک بکەی.',
    q3:'کیژ ئامێر دێ بکارئینی؟', q3hint:'تنێ ڕێنمایێن وی ئامێری نیشان ددەین.',
    q4:'کیژان ژ وان بکارئینی؟', q4hint:'هەمی هەلبژێرە کو ژمارا تە د وان دایە.',
    lostTitle:'دەستگەهاندنا خۆ ب ژمارا کەڤن وێنەکر',
    lostSub:'گوهۆڕینا ژمارێ و ڤەگەڕاندنا هەژمارێ پشتی وێنەکرنا ژمارێ دو کێشەیێن جودا نە. ئەڤ پەلە بۆ یا دوویێ یە.',
    lostWarn:'مەترسی یا بلند: ئەگەر ژمارا کەڤن تنێ ڕێکا ڤەگەڕانێ بیت، دبیت نەشێی هەژمارێ بسەلمینی. ب ئیمەیلێ دەست پێ بکە.',
    orderMatters:'ڕێز گرنگە',
    twofaTitle:'بەرێ گوهۆڕینا ژمارێ، ٢FA بپشکنە',
    twofaSub:'گوهۆڕینا ژمارا تەلەفۆنێ ب خۆ‌کار شێوازا چوونا ژ‌ور نو ناکەت. ڕێکخستنێن ٢FA ب جودا تێنە پاشەکەفتکرن.',
    disclaimer:'Chon سەرچاوەیەکا فێرکارییا سەربخۆیە و پەیوەندی ب WhatsApp، Meta، Instagram، TikTok، Google، Apple، Microsoft، Telegram یان چو خزمەتگوزارییەکا دی نینە. ڕوویێ پلاتفۆرمان زۆی دگوهۆڕیت؛ هەردەم ل گەل هاریکارییا فەرمی بپشکنە.',
    buildNote:'ناڤەڕۆک ل گەل هاریکارییا فەرمی هاتیە پشتڕاستکرن ئەگەر بەردەست بویە. ڕێبەرییێن نەپشتڕاستکری هاتینە نیشانکرن و نەهاتینە بەلاڤکرن.',
    themeLabel:'گوهۆڕینا ڕوویێ', prev:'بەرێ', stepOf:'گاڤا {n} ژ {total}'
  }
};

// Short status/severity labels are translated even where body copy falls back to English.
const LBL = {
  high:   { en:'HIGH RISK',        ar:'خطر مرتفع',        ckb:'مەترسی بەرز',      ku:'مەترسی یا بلند' },
  medium: { en:'CHECK THIS',       ar:'تحقق من هذا',      ckb:'ئەمە بپشکنە',       ku:'ئەڤە بپشکنە' },
  low:    { en:'GOOD TO KNOW',     ar:'معلومة مفيدة',     ckb:'زانینی بەکارهاتوو', ku:'زانیارییا بکێرهاتی' },
  breaks: { en:'BREAKS ON CHANGE', ar:'يتعطل عند التغيير', ckb:'بە گۆڕین تێک دەچێت', ku:'ب گوهۆڕینێ تێک دچیت' },
  checkit:{ en:'CHECK IT',         ar:'تحقق منه',         ckb:'بپشکنە',            ku:'بپشکنە' },
  safest: { en:'SAFEST',           ar:'الأكثر أماناً',     ckb:'سەلامەتترین',       ku:'سەلامەتترین' },
  fine:   { en:'USUALLY FINE',     ar:'عادةً جيد',        ckb:'زۆربەی کات باشە',   ku:'پترا جاران باشە' },
  statusGeneric: { en:'Generic steps · verify', ar:'خطوات عامة · تحقق منها', ckb:'هەنگاوی گشتی · بپشکنە', ku:'گاڤێن گشتی · بپشکنە' }
};

const LANGS = [
  {code:'en', native:'English', meta:'English · LTR', short:'EN', dir:'ltr'},
  {code:'ar', native:'العربية', meta:'Arabic · RTL', short:'AR', dir:'rtl'},
  {code:'ku', native:'کوردی', meta:'Kurdish (Badini) · RTL', short:'KU', dir:'rtl'},
  {code:'ckb', native:'کوردیی ناوەندی', meta:'Central Kurdish / Sorani · RTL', short:'CKB', dir:'rtl'}
];

const WIZ_Q1 = [
  ['have-old','I have my old number','It still receives SMS'],
  ['no-old','I don\u2019t have my old number','Lost, expired or disconnected'],
  ['new-sim','I changed my SIM','Same phone, new number'],
  ['moved','I moved to another country','New country code'],
  ['expiring','My old number is about to expire','I still have a few days'],
  ['stolen','My phone was lost or stolen','Device and number both gone'],
  ['all','I need to update all my accounts','General clean-up']
];
const WIZ_Q2 = [
  ['yes','Yes, it still receives SMS','Easiest case — most platforms can migrate directly'],
  ['soon','Only for a few more days','Do the SMS-dependent accounts first'],
  ['no','No, I cannot use it','We will prioritise recovery paths']
];
const WIZ_Q3 = [
  ['ios','iPhone','Instructions for iOS'],
  ['android','Android','Instructions for Android'],
  ['web','Desktop / web','Browser instructions where available']
];

export {
  TODAY, CATS, PLATFORMS, GUIDES, GEN, GUIDE_TROUBLE, GLOBAL_TROUBLE,
  LOST_STEPS, TWOFA_CARDS, EXTRA_ITEMS, I18N, LBL, LANGS,
  WIZ_Q1, WIZ_Q2, WIZ_Q3, row
};
