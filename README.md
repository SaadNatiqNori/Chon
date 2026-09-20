# Chon

Pick an app, follow the pictures, change your phone number. Four languages:
Central Kurdish (Sorani, the default), Badini Kurdish, Arabic and English.

## Running it

```
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
```

Under XAMPP the built site is served from `http://localhost/Chon/dist/`.
`vite.config.js` sets `base: './'` so it works from any subdirectory.

## The whole app

Two screens. Home lists the apps; tapping one shows its steps. Each step is a
number, one instruction, and one photograph of the real screen.

```
src/
  App.jsx             the two screens
  useApp.js           language, theme, which app, which device
  css.js              parses CSS declaration strings used in the JSX
  styles.css          colours, dark theme, RTL font swap
  data/
    platforms.js      the 22 apps offered on the home screen
    guides.js         the steps — screenshots plus text in all four languages
    ui.js             every interface string, in all four languages
    icons.js          brand glyphs (Simple Icons, CC0)
  tint.js             builds each card's gradient from its brand colour
  views/              Header, Footer, Home, Guide, Brand, motion
  assets/fonts/       Arkan Lyon (4 weights) + Noto Sans, self-hosted woff2
  assets/originals/   the full-size screenshots as shot, kept as source.
                      Nothing imports them, so they never reach the build.
public/shots/         the shrunk screenshots the site actually serves
```

## Adding a platform

1. Photograph each step on a real device. One screen per step, in order.
2. Shrink them and drop them in `public/shots/<platform>/`:

       sips -s format jpeg -s formatOptions 85 --resampleWidth 720 \
            shot.png --out public/shots/<platform>/1.jpg

3. Add an entry to `GUIDES` in `src/data/guides.js`:

       telegram: {
         ios: [
           { shot: 'shots/telegram/1.jpg', w: 720, h: 1460,
             en:  { t: '…', d: '…' },
             ar:  { t: '…', d: '…' },
             ckb: { t: '…', d: '…' },
             ku:  { t: '…', d: '…' } },
         ]
       }

`w` and `h` are the real pixel dimensions (`sips -g pixelWidth -g pixelHeight`);
they reserve the space so the page does not jump while the photos load.

## The home screen

Each app is a card: a squircle filled with a gradient built from its own brand
colour, its mark floating in the middle, and a frosted pill at the bottom. The
gradient is generated in `src/tint.js` rather than written out 22 times — it
lifts very dark brands (TikTok, X, Uber, Threads) harder than the rest, so they
read as cards and not as grey slabs.

The grid is fixed rather than fluid, because "two per row on a phone" is a
decision, not something to leave to `auto-fill`:

| width | cards per row |
| --- | --- |
| phone | 2 |
| 640px and up | 3 |
| 900px and up | 4 |
| 1180px and up | 5 |

The home screen runs to 1180px so the grid has room; a guide stays at 620px,
because a column of running text should not be that wide. `useApp` exposes
`wide` and the header and footer follow it.

Apps without a guide yet sit in a second grid under a *Soon* heading, dimmed,
with *Soon* on the pill instead of *Open guide*.

## How wide a picture is shown

A single upright phone is held to 330px — wider than that and the reader has to
scan their eyes up and down a column of empty screen. A shot that is not clearly
portrait gets the full width of the column instead: the two-panel composites in
the Google guide, and the tight strips in the Snapchat and X guides. The rule is
in `views/Guide.jsx` and keys off the `h`/`w` already stored per picture, so
adding a wide shot needs nothing extra.

## How the pictures load

A guide can run to a dozen photographs, so only the first one loads with the
page. It is what the reader sees on arrival, so it is marked `eager` with a high
fetch priority. Every other step is `lazy` at low priority and does not download
until the reader scrolls near it — opening the twelve-step Instagram guide
fetches three pictures, not twelve. All of them decode off the main thread.

Because `w` and `h` are known ahead of time, the space is reserved before the
picture arrives, so nothing shifts under the reader's thumb as they scroll.

The app picks up the rest on its own: the platform stops saying "Soon" on the
home screen, and device tabs appear if you supply more than one device.

The device key matters. Most guides sit under `ios`; X and LinkedIn sit under
`android` because that is the phone they were photographed on. When a platform has only one
device there are no tabs to show it, so the guide header prints it next to the
step count — *8 steps · Android* — and the reader knows what they are looking
at.

Inside each language's object a step may also carry:

- `scam: true` — adds the shared warning about never giving out your number or
  code.
- `note: '…'` — an amber note under the picture, written per language. Used for
  the Instagram two-factor dialog.
- `done: true` — marks the step that finishes the job.

A platform whose ending differs from the usual one can override the closing
line through `DONE` in the same file; Instagram does, because nothing moves —
a number is added and another removed.

A step's `shot` can point at another platform's picture. Threads does this for
its last six steps, which are Instagram's: Accounts Center is one shared screen,
so photographing it twice would only risk the two drifting apart. The file is
generated by copying Instagram's step objects, so the wording stays in step too
— only the app name is swapped.

Done so far, both on iPhone:

- **WhatsApp**, 8 steps — shot on the current app, the one with a **You** tab
  rather than the old Settings tab.
- **Telegram**, 7 steps — Settings → Edit → phone number → Change Number →
  new number → confirm → code.
- **Instagram**, 12 steps — add the new number through Accounts Centre, then
  delete the old one. The last step is the dialog Instagram shows when the old
  number is still your two-factor number and it refuses to delete it.
- **Facebook**, 9 steps — the same Accounts Centre as Instagram, reached from
  Facebook's own menu. Add, then delete, with the same two-factor catch noted on
  the delete step.
- **TikTok**, 11 steps — a real change rather than an add-and-delete. Includes
  picking the country from the search list, and a warning not to tap *Unlink
  phone*, which sits directly under *Change phone*.
- **Snapchat**, 4 steps — the shortest of them. Picture → gear → Mobile Number →
  type the new number. The code screen was not photographed, so step 4 says what
  happens after rather than showing it.
- **Viber**, 9 steps — More → Settings → Account → Change Phone Number, then two
  confirmations. Step 6 picks *New Phone Number* rather than *New Phone Number
  and New Device*, and step 5 warns that credit already sitting on the new number
  is wiped.
- **X / Twitter**, 8 steps — **the only Android guide so far**; everything else
  was shot on an iPhone. Ends at the password prompt, which is the last screen
  that was photographed.
- **Threads**, 12 steps (Android) — six steps of its own to reach Meta's
  Accounts Center, then the same six as Instagram. Those last six **reuse
  Instagram's pictures and text**, because Accounts Center is one shared place
  and Threads opens the identical screens; step 7 says so. App names inside the
  reused steps read "Meta" rather than "Instagram".
- **LinkedIn**, 9 steps (Android) — the odd one out: before it will let you touch
  a phone number it emails you a code, so you need your email working first. Step
  7 wants the number, the country and your password on one screen, and step 9 is
  *Make primary* on the new number before *Remove* on the old.
- **Google**, 9 steps — the one where doing the obvious thing still locks you
  out. Steps 2–4 change the number on your profile, steps 5–7 cover the case
  where there was no number there to begin with, and **step 8 is the point of the
  whole guide**: the number Google texts you at sign-in lives in a separate list
  under Security, and changing your profile number does not touch it. Removing
  the old number comes last, deliberately.

## Corners

Every card, button, pill, badge and callout is a squircle, not a rounded
rectangle, drawn by `corner-smoothing` (0.1.5). It clips with `clip-path`, which
has two consequences worth knowing.

**Shadows.** A `box-shadow` on a clipped element is cut away with everything
else outside the path. Card depth therefore lives on a wrapper, `.pcard-shell`,
as a `drop-shadow` filter, which follows the squircle silhouette instead of a
rectangle. Hover lift and the shadow both sit on that shell; the squircle itself
only carries colour.

**Borders.** A border, or an inset box-shadow standing in for one, follows the
element's rectangle. Clipping then removes everything outside the squircle, so
the ring survives along the straight edges and disappears around every corner.
`views/Ring.jsx` draws one properly instead: two nested squircles, the outer in
the ring colour and the inner set `width` pixels inside it carrying the fill.
The language control, theme button, back button, device tabs, quiet button and
all three callouts go through it. Nothing in the stylesheet draws a ring on a
clipped element any more.

Ring resets `border`, `appearance` and `text-decoration` on its outer element,
because a button and an anchor each arrive with user agent chrome of their own.
A default `2px outset` border sits inside the clip and eats the ring from the
inside, which is exactly what it did before this was handled. `button` carries
the same reset in the stylesheet as a second line of defence.

## Brand

The logo is the word چۆن with a question mark set into it, so the mark reads as
"how?". Two files, because the question mark is white and would vanish on a pale
page: `logo-dark.png` keeps it white for dark backgrounds, `logo-light.png` sets
it in ink for light ones, and CSS swaps them on `data-theme`. Both are generated
from the single source artwork, as are the app icons, whose square tile is that
question mark in ink on the brand amber.

Two things distorted the artwork, both worth remembering. A column flex
container stretches its children, which squashed the footer lockup; the wordmark
now carries `align-self: flex-start` and `object-fit: contain` wherever it
appears. And an `<img>` that carries `width` and `height` attributes keeps that
intrinsic height unless CSS releases it, so sizing the watermark by width alone
left it 220 wide by 482 tall. Every image sized by one axis now sets the other
to `auto`.

A third file, `logo-outline.png`, is the same artwork reduced to a stroke: the
shape dilated by nine pixels with the shape itself subtracted. It sits in the
footer at seven per cent opacity as a watermark, inverted under the light theme
so it stays a pale line on paper rather than a dark one.

Everything in `--c-*` comes from the logo: amber `#FFC640`, ink `#1A1A1C`, and a
warm paper white. Amber never carries white text anywhere, only ink, because
white on amber does not pass contrast. Type is Arkan Lyon Arabic Display, which
carries Latin as well, so it sets headings in every language and the whole
interface in the three right-to-left ones. Latin brand names stay in Noto Sans:
Arkan's Latin is a display companion and reads oddly next to running text.

## Defaults

Dark, then Sorani. The theme cycle runs dark, light, system rather than starting
at system, so the first tap goes somewhere deliberate.

## Callouts

`.callout` is one shape in three tempers: warn, danger and done. Each is a
squircle with an inset ring rather than a border, and a filled badge instead of
a bare glyph, so a warning reads as a thing on the page rather than a tinted
paragraph. The guide uses the same component for the opening note, the scam
warning, the per step notes and the closing panel.

## The footer

Not just a line of legal text: the lockup and tagline, what the project covers
so far, counted from the data rather than typed in, the four languages as live
switches, and the disclaimer under a rule. The watermark sits behind it.

## Cards by theme

`cardGradient` takes the resolved theme, never the literal `system`. Under the
light theme a card is the brand colour, lifted and lightly saturated. Under the
dark one the brand colour is first pulled a third of the way toward the page
background and drained of a little chroma, and the sheen and the lift are both
cut roughly by half, so a wall of cards sits on a dark page rather than glowing
off it. `useApp` resolves the theme and re-resolves it when the system
preference changes, so cards restyle with the page.

## Motion

`views/motion.jsx` holds two components in the spirit of ReactBits:
`AnimatedContent` lifts and fades a block in as it scrolls into view, and
`BlurText` unblurs a line one word at a time. ReactBits is a copy in library
rather than a runtime package, so these are local: an IntersectionObserver over
CSS transitions, no animation engine shipped to the reader. Home staggers its
cards, a guide reveals each step as you reach it.

The reduced motion rules in `styles.css` do not merely shorten these, they land
everything in its final state at once. That matters here more than on most
sites, since the audience includes people who find screens hard going already.

## Copy rules

No dash characters in any language. Not in the interface, not in the guides, not
in the metadata. Where a dash used to join two clauses there is now a full stop
or a comma. Hyphens that belong to something printed on the phone itself, like
2-Step Verification or Sign-In & Security, are left alone: those are what the
reader will actually see.

## Metadata

`META` in `data/ui.js` carries a title, a description and an Open Graph locale
for each of the four languages. `applyDoc` rewrites the document title and the
description, Open Graph and Twitter tags whenever the language changes, so a
page shared from the Kurdish interface previews in Kurdish. `index.html` ships
the Sorani set as the default, alongside `site.webmanifest` and the icon set.

## Translations

No string falls back to English. `data/ui.js` holds the interface text and
`data/guides.js` holds the steps, each with `en`, `ar`, `ckb` and `ku`.

Words that appear on the phone itself — *You*, *Account*, *Change phone number*,
*Next*, *OK*, *Settings*, *Edit*, *Continue* — are deliberately left in English
inside the translated sentences, because that is what the reader will see on
their screen. The sentence around them is translated.

That assumes the reader's phone is in English. If these users run their phones
in Arabic or Kurdish, those labels need the localised wording alongside, which
means re-shooting or at least re-checking each screen.

Picking a language sets `lang` and `dir` on the document, which flips the layout
and swaps the font to Vazirmatn for Arabic and Kurdish.

## src/_retired/

The fuller earlier version: the searchable platform library, the four-question
wizard, the saved checklist, the Safety & 2FA page, the fullscreen step viewer,
and the drawn phone screens used before real screenshots existed. Nothing there
is imported. `_retired/data/source.js` still holds written guide text for
Telegram, Google, Instagram, Facebook and Apple, worth pulling from when those
platforms get photographed.
