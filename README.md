# Creative Interiors & Archs — Website

The complete, production-ready website for the studio. Everything it needs is inside this
folder. There is nothing to install, nothing to compile, and no monthly cost.

---

## What's in this folder

```
Creative-Interiors-Archs/
├── index.html                  the website itself
├── README.md                   this guide
└── assets/
    ├── css/style.css           all styling
    ├── js/
    │   ├── main.js             animations, cursor, menus, popups
    │   ├── contact-form.js     the Send Enquiry form  ← you'll edit this one
    │   ├── gsap.min.js         animation library
    │   ├── ScrollTrigger.min.js
    │   └── lenis.min.js        smooth scrolling
    ├── images/                 every photo, from the company portfolio
    ├── fonts/                  Jost, Cormorant Garamond, Inter
    ├── icons/                  favicon / app icons
    └── site.webmanifest
```

Everything is stored inside this folder — no internet libraries, no CDNs. The site will
still work years from now even if an outside service disappears.

**Important:** keep the folder together. `index.html` needs the `assets` folder sitting
next to it. If you move or email just the `index.html` on its own, the pictures will vanish.

---

## 1. How to open and test the website on your Mac

1. Find the `Creative-Interiors-Archs` folder in Finder.
2. Double-click **`index.html`**.
3. It opens in Safari or Chrome. That's it — you're looking at the finished website.

Have a click around: the menu, the project cards, the team photos, the popups. Everything
works straight from your hard drive.

> **One thing that won't work yet:** the **Send Enquiry** form. Contact forms can only send
> email from a real web address, not from a file sitting on your Mac. It will work the
> moment the site is online (step 5). This is normal and expected.

---

## 2. The contact form is already connected ✅

Your Web3Forms Access Key is **already pasted into the website** — there is nothing left for
you to edit. The form is live-ready.

```
Access Key: a9e4b32c-e30c-488d-88da-bc4a21ed9149
```

(It sits in `assets/js/contact-form.js`. Web3Forms states this key is *not* a secret — it is
simply an alias for your email address — so it is safe in a public website file.)

Free plan: **250 enquiries per month.**

---

## 3. ⚠️ IMPORTANT — send enquiries to the studio inbox

You created the Web3Forms key while logged in as **muniba.offcial@gmail.com**.
Web3Forms delivers enquiries to *the account's email address*, which means client enquiries
will currently arrive in **your personal Gmail**, not the studio inbox.

Fix it once, in the Web3Forms dashboard:

1. Go to **https://app.web3forms.com** and open your form.
2. Find **Settings → Emails** (or "Email Notifications").
3. Add **creative.architecture000@gmail.com** as a linked email.
   *The free plan allows 3 addresses — one primary plus two linked — so this costs nothing.*
4. Web3Forms sends a verification link to that address. Open the Gmail and click it.
5. Set **creative.architecture000@gmail.com** as the form's recipient / notification email.

**Alternative (simpler):** log out of Web3Forms, sign up again using
creative.architecture000@gmail.com, create a new form, and replace the key on the
`accessKey` line in `assets/js/contact-form.js`.

Either way — do this before you start advertising the site, or enquiries will land in the
wrong inbox.

---

## 4. How to verify the contact form

You can only truly test this once the site is online, so do this **after** step 5.

1. Open your live website.
2. Scroll to **Our Contact**.
3. Fill in the form with your own name and email, and write a test message.
4. Click **Send Enquiry**.
5. You should see: *"Thank you, [name]. Your enquiry has reached the studio…"*
6. Check the inbox — the enquiry should arrive within a minute, with the subject
   *"New enquiry from [name] — Creative Interiors & Archs"*.
   (Check the Spam folder the first time, and mark it "Not spam" if it landed there.)
7. Press **Reply** — it replies straight to the visitor. Nothing else to set up.

**What visitors see if something goes wrong:** a polite message asking them to try again,
plus a direct "email us" link, so an enquiry is never silently lost.

---

## 5. How to put the website online with Vercel (free)

Vercel will host the site for free, on a fast, secure (https) web address.

### Step 1 — Make a Vercel account
1. Go to **https://vercel.com/signup**
2. Choose **Continue with Email** (or GitHub if you have it) and follow the prompts.
3. When it asks what you're doing, choose the **Hobby / Personal** (free) option.

### Step 2 — Upload the site
1. On your Vercel dashboard, click **Add New…** → **Project**.
2. Look for the option to **deploy without a Git repository** — Vercel lets you drag a
   folder straight in. If you see a drag-and-drop area, **drag the entire
   `Creative-Interiors-Archs` folder into it**.
3. Vercel uploads the files and, after about 30 seconds, gives you a live address like:

   ```
   https://creative-interiors-archs.vercel.app
   ```

4. Click it. Your website is live on the internet.

> **If Vercel insists on a Git repository:** the simplest alternative is
> **https://app.netlify.com/drop** — you literally drag the folder onto the page and it
> goes live instantly, no account needed to try it. Both are free and both work perfectly
> with this site. Use whichever feels easier.

### Step 3 — Updating the site later
Changed a photo or some text? Just drag the folder in again — Vercel replaces the old
version. Your web address stays the same.

---

## 6. Connecting your own domain (optional, later)

When you're ready to use something like `creativeinteriorsarchs.com`:

1. Buy the domain from any registrar (Namecheap, GoDaddy, Google Domains…). Roughly
   $10–15 per year.
2. In Vercel, open your project → **Settings** → **Domains**.
3. Type your domain and click **Add**.
4. Vercel shows you a couple of DNS records (usually an `A` record and a `CNAME`).
5. Log in to wherever you bought the domain, find **DNS settings**, and copy those records
   in exactly as Vercel shows them.
6. Wait. It usually takes 10 minutes to a few hours to start working.

Vercel adds the padlock (https) automatically and for free. You don't need to do anything.

---

## 7. Before you go live — things worth knowing

- **Point the form at the studio inbox** (step 3). Right now enquiries go to
  muniba.offcial@gmail.com, not creative.architecture000@gmail.com. This is the one job left.
- **Send yourself one test enquiry** and reply to it, so you know the whole loop works.
- **Update the Website URL in Web3Forms** from `localhost` to your real Vercel address once
  the site is live (Web3Forms dashboard → your form → settings).
- **Two team members have no photograph** in the company portfolio — **Muzammil** and
  **Rehmat Warsi** — so their cards show an elegant branded monogram instead of a broken
  image. To add a real photo later:
  1. Save the photo as `assets/images/t_muzammil.jpg` (or `t_rehmat.jpg`).
  2. Open `assets/js/main.js`, find that person in the `TEAM` list, and change
     `img:""` to `img:"assets/images/t_muzammil.jpg"`.
  3. Add `pos:"50% 22%", posModal:"50% 36%"` to the same entry so the face is framed like
     the others. If the face still sits too high or low in the circle, nudge the second
     number in `pos` (a smaller number moves the face down, a larger one moves it up).
- **The free Web3Forms plan allows 250 enquiries a month** — plenty for a studio website.
  If it's ever exceeded, visitors are shown the direct email link instead, so nobody is
  turned away.
- **Watch the Spam folder** for the first week, and mark Web3Forms emails as "Not spam" so
  future enquiries land in the inbox.
- **Keep a copy of this folder** somewhere safe (Google Drive, an external disk). It is the
  entire website.
- All the photographs and wording come from the company portfolio PDF. Nothing was invented.

---

## Editing content later

Everything a non-developer usually wants to change lives in one place:
`assets/js/main.js`, right at the top.

- **Projects** — the `PROJECTS` list: titles, descriptions, categories.
- **Team** — the `TEAM` list: names, roles, biographies. The order of this list is the
  order the cards appear in, so re-ordering the team is just re-ordering the list.
- **Phone, email, address** — these are in `index.html`, in the "Our Contact" section.

Change the words between the quote marks, save, and drag the folder to Vercel again.

---

## Deploying somewhere other than Vercel?

The site is plain HTML — it runs anywhere. Upload the contents of this folder to any web
host's public directory (`public_html`, `www`, …) and it just works.

**Prefer a different form service?** Open `assets/js/contact-form.js` and change `provider`:

- `"web3forms"` — the default. 250 enquiries/month free, no account. (Recommended.)
- `"formspree"` — 50/month free. Also paste your form ID into `formspreeId`.
- `"netlify"` — only if you host on Netlify. Nothing else to paste; the form is already set
  up for it. Then in Netlify go to **Site settings → Forms → Form notifications** and add
  creative.architecture000@gmail.com.

All three are already coded and working. You're only choosing which one to switch on.

---

## Responsive QA pass — what changed (July 2026)

The site was tested at 320, 375, 390, 430, 599, 768, 820, 1024, 1280, 1440 and 1920px,
in portrait and landscape, on both touch and mouse. **The design was not touched** —
no colours, fonts, spacing, animations or layout were redesigned. Four responsive bugs
were fixed:

1. **Mobile menu was cut off in landscape.** On a phone held sideways the menu was taller
   than the screen, so "Contact" and the phone/Instagram strip at the bottom were
   unreachable — and the menu could not be scrolled. It now scrolls when it does not fit.

2. **The page scrolled behind an open menu/project popup on iPhone.** iOS Safari ignores
   the usual way of freezing the page, and closing a popup dumped you back at the top of
   the site. The page is now properly frozen and you return to exactly where you were.

3. **The map label spilled outside the map on small phones.** "Bukhari Commercial · DHA
   Phase 6" was clipped at the right edge on a 375px screen. It now wraps onto two lines
   and stays inside the map.

4. **Some buttons were too small to tap comfortably.** The project filters (All / Kitchen
   / Bedroom …), the "Let's talk" button and the footer links were 37px tall; Apple's
   minimum is 44px. Their tap areas are now 44px **on touch devices only** — the buttons
   look exactly the same, they are just easier to hit. (Footer links sit a few pixels
   further apart on phones and tablets as a result. Desktop is pixel-for-pixel unchanged.)

Verified afterwards: zero horizontal scrolling, zero overlapping elements, zero broken
images, zero console errors, and the custom cursor stays hidden on touch screens.

### Round 2 — fixes from real-phone testing

Testing on an actual Android phone surfaced three more problems that emulators had hidden:

5. **Phone dark mode made the site unreadable.** Android Chrome / Samsung Internet have an
   "auto dark theme" that force-inverts any website. This site is a *light* design, so the
   inversion turned the cream backgrounds dark and the dark text nearly black-on-black.
   The site now tells the browser it is a light design (`color-scheme: only light`), so
   phone dark mode leaves it alone. **Nothing about the design changed — it simply displays
   its real colours again.**

6. **The services thumbnail was stuck on top of the text.** That image is meant to appear
   only when a *mouse* hovers over a service row. Some Android browsers wrongly claim they
   support hovering, so tapping a row made the hover stick and parked the picture over the
   words. Touch is now detected from the hardware, not from the browser's claim, and the
   thumbnail is switched off entirely on phones and tablets.

7. **Project titles were invisible on phones.** Same root cause, and more serious: the
   project card captions ("Sage & Stone Kitchen", etc.) were also revealed only on hover —
   so on a real iPhone they never appeared at all. On touch they are now shown by default,
   exactly as a desktop visitor sees them on hover. The small arrow button on team cards
   is shown for the same reason, and a tapped filter chip no longer stays looking selected.

Desktop and laptop behaviour is unchanged — hovering still reveals the thumbnail and the
captions exactly as before.
