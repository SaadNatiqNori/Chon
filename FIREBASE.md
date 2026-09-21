# Firebase for Chon

Chon counts its own readers. Three numbers in the footer — people, visits, and
the hearts — plus a country list, and a full Google Analytics feed behind them
in the Firebase console.

None of it needs a server. The browser talks to Firebase directly, and the one
piece that cannot run in a browser (working out which country a reader is in)
is a Vercel edge function in [`api/geo.js`](api/geo.js). There is nothing to
keep alive and nothing to pay for a VPS to do.

---

## What you have to do once

Everything below is in the Firebase console and takes a few minutes. It is the
only part that cannot be automated, because creating a project means signing in
as you and accepting Google's terms as you.

### 1. Make the project

1. Go to <https://console.firebase.google.com> and press **Add project**.
2. Call it `chon` (the real name is generated, e.g. `chon-4f21c`).
3. **Leave Google Analytics switched on.** This is the half that gives you
   countries, devices, returning readers and everything else in the console.
   Turning it off later means making a new project.
4. Pick or create a Google Analytics account when it asks.

### 2. Register the web app

1. On the project overview, press the **`</>`** (Web) icon.
2. Nickname it `Chon web`. Do **not** tick Firebase Hosting — Vercel serves the
   site.
3. Copy the `firebaseConfig` object it shows you. You need all seven values,
   including `measurementId`.

### 3. Turn on Firestore

1. **Build → Firestore Database → Create database**.
2. Choose **Production mode**. The rules in this repo replace the default ones
   in step 6; production mode just means it does not start wide open.
3. For location, pick the one nearest your readers. `me-central1` (Doha) or
   `europe-west1` are both good for Iraq and the Kurdistan region.
   **This cannot be changed later.**

### 4. Turn on anonymous sign in

1. **Build → Authentication → Get started**.
2. **Sign-in method → Anonymous → Enable → Save**.

This is what gives each reader an id of their own, with no login and no name.
Without it the counters stay hidden, because every write is refused.

### 5. Allow your domain

**Authentication → Settings → Authorized domains → Add domain**, and add your
Vercel domain (`chon.vercel.app`, or whatever yours is) and any custom domain.
`localhost` is already there.

### 6. Write the config down

Copy `.env.example` to `.env` and paste the seven values in:

```sh
cp .env.example .env
```

These are **not secrets**. A Firebase web config is designed to ship inside the
JavaScript bundle where every visitor can read it. What protects the data is
[`firestore.rules`](firestore.rules), which is why step 7 matters more than
this one does.

### 7. Deploy the rules

```sh
npx firebase login
npx firebase use --add          # pick the project you just made
npm run deploy:rules
```

Until you do this, the default production rules refuse everything and the
footer stays empty.

### 8. Set the same values on Vercel

**Project → Settings → Environment Variables**, and add each `VITE_…` value for
Production, Preview and Development.

Vite bakes these in **at build time**, not at run time, so a variable added
after a deploy does nothing until you redeploy.

Leave `VITE_FIREBASE_EMULATOR` unset on Vercel.

---

## What you will see in the console

Google Analytics collects a great deal without being asked: country, city,
device, browser, operating system, language, session length, new against
returning. On top of that, Chon reports what a reader actually does:

| Event | When | Parameters |
|---|---|---|
| `page_view` | home, and every guide opened | `page_path`, `page_title` |
| `first_visit` | a reader seen for the first time | `country` |
| `guide_open` | a platform card is pressed | `platform_id`, `device`, `language`, `ready` |
| `device_switch` | the iPhone/Android tab is changed | `platform_id`, `device` |
| `like` / `unlike` | the heart in the footer | `surface` |
| `share` | the share button | `method` (`native` or `clipboard`), `platform_id` |
| `language_change` | a language is picked | `language`, `from` |
| `theme_change` | the theme button | `theme` |
| `go_home` | back to the home page | — |

Two user properties ride along on every event: `country` and `app_locale`.

**Analytics takes up to 24 hours to appear in the reports.** To see that it is
working straight away, use **Analytics → Realtime**, or **DebugView** with the
[GA Debugger extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna).

### Making the parameters usable in reports

GA4 ignores custom parameters in its standard reports until you register them.
**Admin → Data display → Custom definitions → Create custom dimension**:

| Name | Scope | Parameter |
|---|---|---|
| Platform | Event | `platform_id` |
| Device | Event | `device` |
| Guide language | Event | `language` |
| Share method | Event | `method` |
| Visitor country | User | `country` |
| App locale | User | `app_locale` |

Registering only counts from that moment on, so do it early. You do not need
`Visitor country` unless you want it — GA4 already reports country from the IP
address on its own.

---

## Where the data lives

Three small shapes in Firestore, all of them public to read and tightly
constrained to write:

```
counters/global   { likes, visitors, views }      one document, three numbers
countries/{CC}    { n }                           one document per country
visitors/{uid}    { country, liked, firstSeen, lastSeen }
```

`visitors/{uid}` is the honest part. It is readable only by the reader it
belongs to, it is never listed, and it holds an anonymous id and two letters of
country — no address, no name, no fingerprint. It exists so that one reader
counts once, and so the rules have something to check a like against.

## Why the counters cannot be faked

The Firebase key ships in the bundle, so anyone can open a console and start
issuing writes. [`firestore.rules`](firestore.rules) is what makes that
harmless. Every counter may only move by one, and only when the reader's own
document moves with it in the same batch:

- A like is allowed only if the reader's `liked` flag flips `false → true`.
  The second press cannot add a second like.
- A country is counted only on the batch that creates the visitor. Nobody can
  pad a country they were not in, or change their country later.
- A visitor is counted only on a first visit.
- The counters cannot be set to a chosen number, and cannot be deleted.

This is tested rather than asserted:

```sh
npm run test:rules      # needs Java 21+ for the emulator
```

Twenty-five cases, covering both the paths that should work and the attacks
that should not.

## Working locally without touching the real numbers

```sh
npx firebase emulators:start --project demo-chon --only firestore,auth
```

Then set `VITE_FIREBASE_EMULATOR=1` in `.env` and run `npm run dev`. The app
talks to the emulator instead of the live project, so reloading the page fifty
times does not put fifty visits into your real counters.

Note that `/api/geo` does not exist locally, so every local visitor is filed
under `ZZ`, shown as *Elsewhere*. That is expected.

---

## What it costs

Nothing, on Firebase's free Spark plan, at the traffic Chon is likely to see.

Roughly 11–13 document reads and 2–3 writes per visit, counting the reads the
security rules themselves perform. Against the free daily allowance of 50,000
reads and 20,000 writes, reads run out first, at somewhere around **4,000
visits a day**.

If Chon ever passes that, the cheapest fix is to stop reading the totals on
every single page load — cache them in `localStorage` for ten minutes in
[`src/firebase/pulse.js`](src/firebase/pulse.js) — which cuts the per visit
cost by more than half before anything needs paying for.

## If the footer numbers do not appear

They are hidden rather than shown as zeroes when anything fails, so an empty
footer is the symptom for all of these:

1. **Anonymous sign in is not enabled.** Step 4. The most common cause.
2. **The rules are not deployed.** Step 7.
3. **The domain is not authorized.** Step 5.
4. **The env vars were set on Vercel after the build.** Redeploy.
5. **An ad blocker.** uBlock and friends block Firestore and Analytics. Try a
   private window with extensions off.

Open the browser console and look at the network tab for requests to
`firestore.googleapis.com` — the failing one will say which of these it is.
