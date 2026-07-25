/* Creative Interiors & Archs — contact form
   >>> Paste your Formspree ID into FORM_CONFIG below. See README.md, step 3. <<< */
/* ============================================================
   CONTACT FORM  —  delivers enquiries to the studio inbox
   ------------------------------------------------------------
   >>> ONE-TIME SETUP: paste your Web3Forms Access Key below. <<<

   1. Go to https://web3forms.com
   2. Type creative.architecture000@gmail.com into the
      "Create Access Key" box and press the button.
   3. Web3Forms emails you an Access Key (a long code like
      a1b2c3d4-e5f6-7890-abcd-ef1234567890).
   4. Paste it into accessKey below, between the quote marks.
   5. Done. Every enquiry now lands in the studio inbox.

   No account, no password, no credit card. 250 enquiries/month
   free. The Access Key is NOT a secret — it is safe to keep in
   this file, even on a public website.

   Other options are supported too — just change "provider":
     "formspree" + formspreeId   (50/month free)
     "netlify"                   (only if hosted on Netlify)
   ============================================================ */
const FORM_CONFIG = {
  provider   : "web3forms",                          // "web3forms" | "formspree" | "netlify"
  accessKey  : "a9e4b32c-e30c-488d-88da-bc4a21ed9149",   // Web3Forms key (public-safe)
  formspreeId: "",                                   // only used if provider is "formspree"
  recipient  : "creative.architecture000@gmail.com", // studio inbox
  formName   : "contact"                             // only used if provider is "netlify"
};

(function(){
  const form   = document.getElementById('contactForm');
  const note   = document.getElementById('formNote');
  const btn    = document.getElementById('submitBtn');
  const btnTxt = document.getElementById('submitTxt');
  if(!form) return;

  const F = {
    name   : document.getElementById('f-name'),
    email  : document.getElementById('f-email'),
    phone  : document.getElementById('f-phone'),
    subject: document.getElementById('f-type'),
    message: document.getElementById('f-msg'),
    trap   : document.getElementById('f-company')
  };
  const IDLE = "We reply within one business day.";
  let sending = false;

  const setNote = (msg, kind) => {
    note.innerHTML = msg;
    note.classList.toggle('is-ok',  kind === 'ok');
    note.classList.toggle('is-err', kind === 'err');
  };
  const mark = (el, bad) => el.closest('.field').classList.toggle('is-invalid', bad);
  const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const mailtoLink = () => {
    const body = encodeURIComponent(
      `Name: ${F.name.value}\nEmail: ${F.email.value}\nPhone: ${F.phone.value}\n` +
      `Project type: ${F.subject.value}\n\n${F.message.value}`);
    const subj = encodeURIComponent(`Website enquiry — ${F.name.value || 'New enquiry'}`);
    return `mailto:${FORM_CONFIG.recipient}?subject=${subj}&body=${body}`;
  };

  const notConfigured = () => {
    const e = new Error('NOT_CONFIGURED'); e.code = 'NOT_CONFIGURED'; return e;
  };

  /* clear the error state as soon as the visitor starts fixing it */
  [F.name, F.email, F.message].forEach(el =>
    el.addEventListener('input', () => mark(el, false)));

  function validate(){
    const bad = [];
    const nameBad = F.name.value.trim().length < 2;
    const mailBad = !emailOk(F.email.value.trim());
    const msgBad  = F.message.value.trim().length < 5;
    mark(F.name, nameBad); mark(F.email, mailBad); mark(F.message, msgBad);
    if(nameBad) bad.push('your name');
    if(mailBad) bad.push('a valid email address');
    if(msgBad)  bad.push('a short message');
    if(bad.length){
      const list = bad.length > 1
        ? bad.slice(0,-1).join(', ') + ' and ' + bad.slice(-1)
        : bad[0];
      setNote(`Please add ${list} so we can reply.`, 'err');
      (nameBad ? F.name : mailBad ? F.email : F.message).focus();
      return false;
    }
    return true;
  }

  async function send(){
    const name    = F.name.value.trim();
    const email   = F.email.value.trim();
    const phone   = F.phone.value.trim()   || 'Not provided';
    const project = F.subject.value.trim() || 'General enquiry';
    const message = F.message.value.trim();
    const emailSubject = `New enquiry from ${name} \u2014 Creative Interiors & Archs`;

    /* ---------- Web3Forms (default) ---------- */
    if(FORM_CONFIG.provider === 'web3forms'){
      if(!FORM_CONFIG.accessKey) throw notConfigured();
      const res = await fetch('https://api.web3forms.com/submit', {
        method : 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body   : JSON.stringify({
          access_key  : FORM_CONFIG.accessKey,
          from_name   : 'Creative Interiors & Archs \u2014 Website',
          subject     : emailSubject,
          replyto     : email,          // hitting Reply answers the visitor directly
          name, email, phone, message,
          project_type: project
        })
      });
      if(res.status === 429) throw new Error('RATE_LIMIT');
      const data = await res.json().catch(() => ({}));
      if(!res.ok || !data.success) throw new Error(data.message || 'Request failed');
      return;
    }

    /* ---------- Netlify Forms ---------- */
    if(FORM_CONFIG.provider === 'netlify'){
      const body = new URLSearchParams({
        'form-name': FORM_CONFIG.formName,
        name, email, phone, message, subject: project, _subject: emailSubject
      });
      const res = await fetch('/', {
        method : 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      });
      if(!res.ok) throw new Error('Netlify responded ' + res.status);
      return;
    }

    /* ---------- Formspree ---------- */
    if(!FORM_CONFIG.formspreeId) throw notConfigured();
    const res = await fetch(`https://formspree.io/f/${FORM_CONFIG.formspreeId}`, {
      method : 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body   : JSON.stringify({ name, email, phone, message,
                                subject: project, _subject: emailSubject })
    });
    if(res.status === 429) throw new Error('RATE_LIMIT');
    if(!res.ok){
      const data = await res.json().catch(() => ({}));
      throw new Error((data.errors && data.errors[0] && data.errors[0].message) || 'Request failed');
    }
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if(sending) return;                       // no duplicate submissions
    if(F.trap && F.trap.value) return;        // silently drop bots
    if(!validate()) return;

    sending = true;
    btn.disabled = true;
    btn.setAttribute('aria-busy','true');
    btnTxt.textContent = 'Sending\u2026';
    setNote('Sending your enquiry\u2026', null);

    const firstName = F.name.value.trim().split(' ')[0];
    try{
      await send();
      btnTxt.textContent = 'Sent \u2713';
      setNote(`Thank you, ${firstName}. Your enquiry has reached the studio \u2014 ` +
              `we\u2019ll be in touch within one business day.`, 'ok');
      form.reset();
      [F.name, F.email, F.message].forEach(el => mark(el, false));
      setTimeout(() => {
        btnTxt.textContent = 'Send enquiry';
        btn.disabled = false;
        btn.removeAttribute('aria-busy');
        setNote(IDLE, null);
        sending = false;
      }, 6000);
      return;                                  // stay locked during the thank-you
    }catch(err){
      const notSetUp = err.code === 'NOT_CONFIGURED';
      const busy     = err.message === 'RATE_LIMIT';
      setNote(notSetUp
        ? `This form isn\u2019t connected to the inbox yet. You can ` +
          `<a href="${mailtoLink()}">email us directly</a> in the meantime.`
        : busy
        ? `We\u2019re receiving a lot of enquiries right now. Please ` +
          `<a href="${mailtoLink()}">email us directly</a> and we\u2019ll reply straight away.`
        : `Something went wrong sending your enquiry. Please try again, or ` +
          `<a href="${mailtoLink()}">email us directly</a>.`, 'err');
      btnTxt.textContent = 'Send enquiry';
      btn.disabled = false;
      btn.removeAttribute('aria-busy');
      sending = false;
      if(!notSetUp) console.warn('Contact form:', err.message);
    }
  });
})();
