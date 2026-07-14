/* Creative Interiors & Archs — site behaviour
   loader · custom cursor · smooth scroll · scroll reveals · parallax
   capsule stroke · marquee · counters · filters · modals · mobile menu */
/* ================= DATA ================= */
const PROJECTS = {
  p1:{cat:"Kitchen \u00b7 Dining",title:"Sage & Stone Kitchen",img:"assets/images/proj1.jpg",
    text:["This open-concept kitchen and dining space blends warmth with sophistication through a rich palette of sage green cabinetry, dark marble surfaces and natural wood accents.",
      "A statement island in black stone anchors the room, paired with olive-toned bar stools and brass pendant lighting that adds a soft, ambient glow. Textured stone backsplash, integrated LED accent lighting and sleek dark-finish appliances complete the space \u2014 striking a balance between everyday functionality and elevated design."],
    facts:{Discipline:"Interior Design",Palette:"Sage \u00b7 Marble \u00b7 Brass",Space:"Kitchen & Dining",Focus:"Open-concept living"}},
  p2:{cat:"Kitchen \u00b7 Dining",title:"Beige Glam Kitchen",img:"assets/images/proj2.jpg",
    text:["This warm, glam-inspired kitchen and dining space combines soft beige cabinetry with brass accents, creating an inviting yet luxurious feel. Marble-veined backsplash and countertops tie the space together, while glass-fronted display cabinets with integrated warm lighting showcase glassware and decor.",
      "Layered lighting \u2014 from recessed ceiling fixtures to pendant lights and under-cabinet glow \u2014 casts a cozy ambiance, complemented by fresh florals and greenery that soften the space and bring it to life."],
    facts:{Discipline:"Interior Design",Palette:"Beige \u00b7 Marble \u00b7 Brass",Space:"Kitchen & Dining",Focus:"Layered lighting"}},
  p3:{cat:"Bedroom",title:"Arched Mirror Suite",img:"assets/images/port2.jpg",
    text:["A restful primary suite where a backlit arched mirror becomes the room's quiet centrepiece. Fluted panelling, a veined marble feature and a soft, upholstered bed frame the space in tactile, tonal layers.",
      "Warm concealed lighting traces the architecture, letting materials \u2014 stone, timber, boucl\u00e9 \u2014 carry the mood rather than colour."],
    facts:{Discipline:"Interior Design",Palette:"Cream \u00b7 Timber \u00b7 Marble",Space:"Bedroom",Focus:"Feature lighting"}},
  p4:{cat:"Bathroom",title:"Ember Stone Bath",img:"assets/images/proj2b.jpg",
    text:["A moody, spa-like bathroom wrapped in dark textured stone, centred on a circular backlit mirror that floats against the wall. Matte-black fittings and a stone vessel basin keep the palette deep and grounded.",
      "Concealed strip lighting and a sculptural vanity give the room an intimate, hotel-suite calm."],
    facts:{Discipline:"Interior \u00b7 Architectural",Palette:"Charcoal \u00b7 Stone \u00b7 Black",Space:"Bathroom",Focus:"Ambient mood"}},
  p5:{cat:"Living",title:"Golden Arch Living",img:"assets/images/port1.jpg",
    text:["An elegant living space where a gilded arch and slender brass accents lift a calm, sage-and-cream base. Classic mouldings meet contemporary furnishings for a look that feels collected rather than styled.",
      "Layered greenery and sculptural objects add life, while soft daylight keeps the whole room breathing."],
    facts:{Discipline:"Interior Design",Palette:"Sage \u00b7 Cream \u00b7 Gold",Space:"Living Room",Focus:"Classic-modern mix"}},
  p6:{cat:"Bedroom",title:"Fluted Green Bedroom",img:"assets/images/port3.jpg",
    text:["A serene bedroom built around a fluted feature wall and a low, olive-green upholstered bed. A slim marble inset and warm cove lighting bring depth without clutter.",
      "The result is a quiet, enveloping room where texture does the talking \u2014 exactly the kind of space designed for the people who live in it."],
    facts:{Discipline:"Interior Design",Palette:"Olive \u00b7 Cream \u00b7 Marble",Space:"Bedroom",Focus:"Texture & calm"}}
};
const TEAM = [
  {id:"mubashir",pos:"50% 22%",posModal:"50% 36%",name:"Mubashir Rehman",role:"CEO / Founder",img:"assets/images/t_mubashir.jpg",
   bio:"As the Founder and Interior Designer, he leads every project with a passion for thoughtful design and a commitment to excellence. With expertise in interior design, space planning, and 3D visualization, he transforms ideas into functional, elegant, and timeless spaces. His client-focused approach, attention to detail, and dedication to quality ensure that every project reflects creativity, innovation, and lasting value."},
  {id:"ali",pos:"50% 22%",posModal:"50% 36%",name:"Ali Muhammad Hingoro",role:"Project Manager",img:"assets/images/t_ali.jpg",
   bio:"Ensures every project is delivered with precision, efficiency, and professionalism. From planning and coordination to execution and quality control, he oversees every stage of the process, ensuring seamless communication, timely delivery, and exceptional results while maintaining the highest standards of quality."},
  {id:"areeba",pos:"50% 22%",posModal:"50% 36%",name:"Areeba Ali",role:"Interior Designer",img:"assets/images/t_areeba.jpg",
   bio:"Specializes in creating refined, functional, and timeless interiors tailored to each client's vision. By combining innovative design, technical expertise, and meticulous attention to detail, she delivers spaces that balance aesthetics, comfort, and practicality with exceptional quality."},
  {id:"iqbal",pos:"50% 22%",posModal:"50% 36%",name:"Muhammad Iqbal",role:"Contractor",img:"assets/images/t_iqbal.jpg",
   bio:"As the Founder of Hingora Constructions & Developers, he brings extensive expertise in construction management, project execution, and quality craftsmanship. With a strong commitment to excellence, he oversees every phase of construction to ensure projects are completed efficiently, safely, and to the highest standards. His dedication to quality, reliability, and client satisfaction plays a vital role in turning design concepts into successful built environments."},
  {id:"muzammil",pos:"50% 22%",posModal:"50% 36%",name:"Muzammil",role:"Contractor / Supervisor",img:"assets/images/t_muzammil.jpg",
   bio:"Specializes in delivering premium painting, decorative wall textures, surface finishes, and wood polish solutions. With extensive on-site expertise and a commitment to quality craftsmanship, he ensures every detail is executed to the highest standards, providing durable, elegant, and flawless finishes that enhance the beauty and value of every project."},
  {id:"saddam",pos:"50% 22%",posModal:"50% 36%",name:"Saddam Hussain",role:"AutoCAD Expert",img:"assets/images/t_saddam.jpg",
   bio:"Specializes in producing accurate, detailed, and technically precise architectural and interior design drawings. With a strong focus on quality, efficiency, and industry standards, he ensures every plan, elevation, section, and construction drawing is prepared with exceptional accuracy to support seamless project execution."},
  {id:"rehmat",pos:"50% 22%",posModal:"50% 36%",name:"Rehmat Warsi",role:"3D Visualizer",img:"assets/images/t_rehmat.jpg",
   bio:"Specializes in transforming concepts into immersive, photorealistic visual experiences. With expertise in architectural visualization, realistic rendering, and detailed 3D modeling, she creates compelling visuals that accurately communicate design intent, helping clients confidently envision their spaces before construction begins."}
];

const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
const HAS_GSAP = (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined');
const touch = matchMedia('(hover:none),(pointer:coarse)').matches;

/* ============ ALWAYS-RUN CORE (no animation lib needed) ============ */

/* year */
document.getElementById('yr').textContent=new Date().getFullYear();

/* team cards */
const teamGrid=document.getElementById('teamGrid');
TEAM.forEach(m=>{
  const el=document.createElement('article');
  el.className='tcard fade-up';el.dataset.reveal="";el.dataset.team=m.id;el.setAttribute('data-hov','');
  const media = m.img ? `<img loading="lazy" decoding="async" width="560" height="700" src="${m.img}" alt="${m.name}, ${m.role}" style="object-position:${m.pos||'50% 22%'}">`
                      : `<div class="tcard__mono"><span>${m.mono}</span></div>`;
  el.innerHTML=`<div class="tcard__img">${media}
      <div class="tcard__view"><svg viewBox="0 0 24 24" fill="none" stroke="#B4885E" stroke-width="1.6"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></div>
    </div>
    <h3 class="tcard__name">${m.name}</h3>
    <div class="tcard__role">${m.role}</div>`;
  teamGrid.appendChild(el);
});

/* mobile menu */
const burger=document.getElementById('burger'),mm=document.getElementById('mobileMenu');
let lenis=null; // set later if gsap present

/* ---- scroll lock ----------------------------------------------------------
   body{overflow:hidden} is ignored by iOS Safari, so the page kept scrolling
   behind an open menu/modal. position:fixed locks it properly; we remember the
   offset and put the user back exactly where they were on unlock.
   Reference-counted so a menu + modal open at once can't unlock each other. */
let _lockY=0,_locks=0;
function lockScroll(){
  if(_locks++>0)return;
  _lockY=window.scrollY||window.pageYOffset||0;
  document.body.style.top=(-_lockY)+'px';
  document.body.classList.add('no-scroll');
}
function unlockScroll(){
  if(_locks===0)return;
  if(--_locks>0)return;
  document.body.classList.remove('no-scroll');
  document.body.style.top='';
  /* position:fixed collapses the document height, so the full height is only
     back AFTER a reflow. Without this read, scrollTo() is clamped to 0 and the
     page jumps to the top when a modal/menu closes. */
  void document.body.offsetHeight;
  if(lenis){lenis.resize();lenis.scrollTo(_lockY,{immediate:true,force:true});}
  window.scrollTo(0,_lockY);
}

function toggleMenu(){document.body.classList.toggle('menu-open');const on=document.body.classList.contains('menu-open');
  mm.setAttribute('aria-hidden',!on);on?lockScroll():unlockScroll();if(lenis){on?lenis.stop():lenis.start();}}
function closeMenu(){if(document.body.classList.contains('menu-open'))toggleMenu();}
burger.addEventListener('click',toggleMenu);

/* anchor scroll (lenis if available, else native) */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');if(id.length<2)return;
    const t=document.querySelector(id);if(!t)return;
    e.preventDefault();closeMenu();
    if(lenis)lenis.scrollTo(t,{offset:0,duration:1.3});else t.scrollIntoView({behavior:'smooth'});
  });
});

/* services accordion */
document.querySelectorAll('.srow').forEach(row=>{
  const main=row.querySelector('.srow__main'),detail=row.querySelector('.srow__detail');
  main.addEventListener('click',()=>{
    const open=row.classList.contains('open');
    document.querySelectorAll('.srow').forEach(r=>{r.classList.remove('open');r.querySelector('.srow__detail').style.maxHeight=null;});
    if(!open){row.classList.add('open');detail.style.maxHeight=detail.scrollHeight+'px';}
    if(HAS_GSAP)ScrollTrigger.refresh();
  });
});

/* filters */
const filters=document.getElementById('filters');
filters.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  filters.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active');
  const f=b.dataset.filter;
  document.querySelectorAll('.pcard').forEach(c=>c.classList.toggle('hide',!(f==='all'||c.dataset.cat===f)));
  if(HAS_GSAP)ScrollTrigger.refresh();
});

/* modal */
const modal=document.getElementById('modal'),
      mImg=document.getElementById('mImg'),
      mMedia=document.getElementById('mMedia'),
      mBody=document.getElementById('mBody'),
      mPanel=document.getElementById('mPanel'),
      mClose=document.getElementById('mClose');
let lastFocused=null;

/* opts: {img, alt, pos, team} — media is removed entirely when there is no photo,
   so a member without a portrait never leaves an empty box above the text. */
function openModal(html, opts={}){
  const {img=null, alt='', pos='50% 50%', team=false} = opts;
  if(img){
    mMedia.hidden=false;
    mImg.src=img; mImg.alt=alt; mImg.style.objectPosition=pos;
  }else{
    mMedia.hidden=true; mImg.removeAttribute('src'); mImg.alt='';
  }
  modal.classList.toggle('modal--team', !!team);
  modal.classList.toggle('modal--nomedia', !img);
  mBody.innerHTML=html;
  mPanel.scrollTop=0;                       // always start at the top of the story
  lastFocused=document.activeElement;
  modal.classList.add('on');
  modal.setAttribute('aria-hidden','false');
  lockScroll();
  if(lenis)lenis.stop();
  mClose.focus({preventScroll:true});
}
function closeModal(){
  if(!modal.classList.contains('on'))return;
  modal.classList.remove('on');
  modal.setAttribute('aria-hidden','true');
  unlockScroll();
  if(lenis && !document.body.classList.contains('menu-open'))lenis.start();
  if(lastFocused && lastFocused.focus)lastFocused.focus({preventScroll:true});
}
modal.querySelectorAll('[data-close]').forEach(x=>x.addEventListener('click',closeModal));
mClose.addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
/* keep tabbing inside the dialog while it is open */
document.addEventListener('keydown',e=>{
  if(e.key!=='Tab'||!modal.classList.contains('on'))return;
  const f=[mClose,...mPanel.querySelectorAll('a[href],button,input,textarea,[tabindex]:not([tabindex="-1"])')]
          .filter(el=>el.offsetParent!==null||el===mClose);
  if(!f.length)return;
  const first=f[0], last=f[f.length-1];
  if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
});

document.querySelectorAll('[data-modal]').forEach(c=>{
  c.addEventListener('click',()=>{
    const p=PROJECTS[c.dataset.modal];if(!p)return;
    const facts=Object.entries(p.facts).map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
    openModal(`<div class="modal__cat">${p.cat}</div><h3 class="modal__title" id="mTitle">${p.title}</h3>
      <div class="modal__text">${p.text.map(t=>`<p>${t}</p>`).join('')}</div>
      <dl class="modal__facts">${facts}</dl>`, {img:p.img, alt:p.title});
  });
});
teamGrid.addEventListener('click',e=>{
  const card=e.target.closest('[data-team]');if(!card)return;
  const m=TEAM.find(t=>t.id===card.dataset.team);if(!m)return;
  const body=`<div class="modal__cat">${m.role}</div><h3 class="modal__title serif" id="mTitle">${m.name}</h3>
    <div class="modal__text"><p>${m.bio}</p></div>
    <dl class="modal__facts"><div><dt>Role</dt><dd>${m.role}</dd></div><div><dt>Studio</dt><dd>Creative Interiors &amp; Archs</dd></div></dl>
    <div class="modal__socials">
      <a href="https://instagram.com/Creative_Interi0rs" target="_blank" rel="noopener" aria-label="Instagram" data-hov><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
      <a href="mailto:Creative.Architecture000@gmail.com" aria-label="Email" data-hov><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg></a>
    </div>`;
  openModal(body, {img:m.img||null, alt:m.name, pos:m.posModal||'50% 36%', team:true});
  if(window.bindHovers)window.bindHovers();
});

/* contact form */

/* custom cursor */
(function(){
  const c=document.getElementById('cursor'),d=document.getElementById('cursorDot');
  if(touch){if(c)c.style.display='none';if(d)d.style.display='none';window.bindHovers=function(){};return;}
  let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my,dx=mx,dy=my;
  addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
  (function loop(){cx+=(mx-cx)*.16;cy+=(my-cy)*.16;dx+=(mx-dx)*.5;dy+=(my-dy)*.5;
    c.style.transform=`translate(${cx}px,${cy}px)`;d.style.transform=`translate(${dx}px,${dy}px)`;requestAnimationFrame(loop);})();
  function bind(){
    document.querySelectorAll('[data-hov]').forEach(el=>{if(el.__b)return;el.__b=1;
      el.addEventListener('mouseenter',()=>c.classList.add('hover'));
      el.addEventListener('mouseleave',()=>c.classList.remove('hover'));});
    document.querySelectorAll('[data-modal],[data-team]').forEach(el=>{if(el.__bv)return;el.__bv=1;
      el.addEventListener('mouseenter',()=>{c.classList.add('view');c.setAttribute('data-label','View');});
      el.addEventListener('mouseleave',()=>c.classList.remove('view'));});
  }
  window.bindHovers=bind;bind();
})();

/* ---------- Capsule outline geometry ----------
   Computes each sage stroke from the element's real box so the outline
   traces the image's pill shape exactly, at any viewport size.        */
const CAPSULE_OFFSET = 14; // svg is inset:-14px around the media
function layoutCapsule(cap){
  const svg=cap.querySelector('svg'), rect=cap.querySelector('rect'),
        media=cap.querySelector('.capsule__img');
  if(!svg||!rect||!media) return;
  // ignore degenerate boxes (images not laid out yet) rather than writing bogus geometry
  if(media.offsetWidth < 40 || media.offsetHeight < 40) return;
  const w=Math.round(media.offsetWidth  + CAPSULE_OFFSET*2);
  const h=Math.round(media.offsetHeight + CAPSULE_OFFSET*2);
  const inner=parseFloat(getComputedStyle(media).borderTopLeftRadius)||0;
  const r=Math.min(inner+CAPSULE_OFFSET, Math.min(w,h)/2);
  svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
  svg.setAttribute('preserveAspectRatio','none');
  rect.setAttribute('x',1); rect.setAttribute('y',1);
  rect.setAttribute('width',  Math.max(0,w-2));
  rect.setAttribute('height', Math.max(0,h-2));
  rect.setAttribute('rx',r); rect.setAttribute('ry',r);
}
function layoutCapsules(){ document.querySelectorAll('.capsule').forEach(layoutCapsule); }

/* Self-healing: recompute a stroke whenever its media box actually changes size
   (covers late image decode, font swap, orientation change, container queries). */
if('ResizeObserver' in window){
  const ro=new ResizeObserver(entries=>{
    entries.forEach(e=>{const cap=e.target.closest('.capsule'); if(cap) layoutCapsule(cap);});
  });
  document.querySelectorAll('.capsule__img').forEach(m=>ro.observe(m));
}
layoutCapsules();
addEventListener('load',layoutCapsules);
let capT; addEventListener('resize',()=>{clearTimeout(capT);capT=setTimeout(()=>{
  layoutCapsules(); if(HAS_GSAP && !reduce) ScrollTrigger.refresh();
},150)});

/* reveal-all helper (used by fallback + reduced motion) */
function revealAll(){
  document.body.classList.remove('loading');
  const l=document.getElementById('loader');if(l)l.style.display='none';
  const cu=document.getElementById('curtain');if(cu)cu.style.display='none';
  document.querySelectorAll('.fade-up,.blur-in').forEach(e=>{e.style.opacity=1;e.style.transform='none';e.style.filter='none';});
  document.querySelectorAll('.reveal-line>*, .hero__title h1 .row span').forEach(e=>e.style.transform='none');
  document.querySelectorAll('.hero__media').forEach(e=>e.style.clipPath='none');
  document.querySelectorAll('.hero__intro,.scrollcue').forEach(e=>{e.style.opacity=1;e.style.transform='none';});
  document.querySelectorAll('.capsule__img img').forEach(e=>e.style.transform='scale(1)');
  document.querySelectorAll('.draw').forEach(e=>{e.style.strokeDasharray='none';e.style.strokeDashoffset='0';});
}

/* marquee (rAF, no gsap) */
(function(){const track=document.getElementById('marquee');if(!track||reduce)return;
  let x=0;(function loop(){x-=.4;const w=track.scrollWidth/2;if(-x>=w)x+=w;track.style.transform=`translateX(${x}px)`;requestAnimationFrame(loop);})();})();

/* If no animation library OR reduced motion -> show everything, stop here */
if(!HAS_GSAP || reduce){ revealAll(); }
else {

/* ============ GSAP ENHANCEMENTS ============ */
if(typeof Lenis!=='undefined'){
  lenis=new Lenis({lerp:.09,wheelMultiplier:1,smoothWheel:true});
  (function raf(t){lenis.raf(t);requestAnimationFrame(raf);})();
  lenis.on('scroll',ScrollTrigger.update);
}
gsap.registerPlugin(ScrollTrigger);

/* loader */
(function(){
  const bar=document.getElementById('loadBar'),num=document.getElementById('loadNum');
  const curtain=document.getElementById('curtain'),loader=document.getElementById('loader');
  let p=0;
  const tick=setInterval(()=>{
    p+=Math.random()*16+6;if(p>100)p=100;num.textContent=Math.floor(p);
    gsap.to(bar,{scaleX:p/100,duration:.4,ease:"power2.out"});
    if(p>=100){clearInterval(tick);finish();}
  },170);
  function finish(){
    gsap.timeline({onComplete:()=>{document.body.classList.remove('loading');ScrollTrigger.refresh();intro();}})
      .to(loader,{opacity:0,duration:.5,delay:.25})
      .set(loader,{display:"none"})
      .fromTo(curtain,{y:"100%"},{y:"0%",duration:.65,ease:"power4.inOut"},"-=.3")
      .to(curtain,{y:"-100%",duration:.75,ease:"power4.inOut"},"+=.05")
      .set(curtain,{display:"none"});
  }
  // safety: never let the loader trap the page
  setTimeout(()=>{ if(document.body.classList.contains('loading')){clearInterval(tick);revealAll();} },6000);
})();

function intro(){
  gsap.set('.hero__media',{clipPath:"inset(0 0 100% 0)"});
  gsap.set('.hero__intro,.scrollcue',{opacity:0,y:30});
  gsap.timeline({defaults:{ease:"power4.out"}})
    .to('.hero__title h1 .row span',{y:0,duration:1.15,stagger:.12})
    .to('.hero__media',{clipPath:"inset(0 0 0 0)",duration:1,ease:"power3.out"},"-=.9")
    .from('.hero__media .capsule__img img',{scale:1.4,duration:1.4,ease:"power3.out"},"<")
    .to('.hero__intro,.scrollcue',{opacity:1,y:0,duration:.9,stagger:.12},"-=.8");
  drawCapsule(document.querySelector('.hero__media'),true);
}

function initReveals(){
  gsap.utils.toArray('[data-reveal]').forEach(el=>{
    ScrollTrigger.create({trigger:el,start:"top 88%",once:true,onEnter:()=>{
      if(el.classList.contains('reveal-line'))gsap.to(el.children,{y:0,duration:1.05,ease:"power4.out",stagger:.08});
      else if(el.classList.contains('blur-in'))gsap.to(el,{opacity:1,filter:"blur(0px)",y:0,duration:1.1,ease:"power3.out"});
      else gsap.to(el,{opacity:1,y:0,duration:1,ease:"power3.out"});
    }});
  });
}
function drawCapsule(scope,now){
  layoutCapsules();
  const rects=(scope||document).querySelectorAll('.draw');
  rects.forEach(r=>{
    gsap.set(r,{strokeDasharray:1,strokeDashoffset:1});
    if(now){gsap.to(r,{strokeDashoffset:0,duration:1.8,ease:"power2.inOut",delay:.3});return;}
    ScrollTrigger.create({trigger:r.closest('.capsule'),start:"top 85%",once:true,
      onEnter:()=>gsap.to(r,{strokeDashoffset:0,duration:2,ease:"power2.inOut"})});
  });
}
function initParallax(){
  gsap.utils.toArray('[data-parallax]').forEach(el=>{
    const sp=parseFloat(el.dataset.speed||"-30");
    gsap.to(el,{yPercent:sp/6,ease:"none",scrollTrigger:{trigger:el,start:"top bottom",end:"bottom top",scrub:true}});
  });
  gsap.utils.toArray('.capsule__img img').forEach(img=>{
    gsap.to(img,{scale:1,ease:"none",scrollTrigger:{trigger:img,start:"top bottom",end:"top 40%",scrub:true}});
  });
}
function initCounters(){
  gsap.utils.toArray('[data-count]').forEach(el=>{
    const end=+el.dataset.count;
    ScrollTrigger.create({trigger:el,start:"top 90%",once:true,onEnter:()=>{
      gsap.to({v:0},{v:end,duration:1.6,ease:"power2.out",onUpdate:function(){el.textContent=Math.floor(this.targets()[0].v)}});
    }});
  });
}
function initMagnetic(){
  if(touch)return;
  document.querySelectorAll('.btn-mag,.nav__cta,.form__submit').forEach(btn=>{
    btn.addEventListener('mousemove',e=>{const r=btn.getBoundingClientRect();
      gsap.to(btn,{x:(e.clientX-r.left-r.width/2)*.3,y:(e.clientY-r.top-r.height/2)*.4,duration:.6,ease:"power3.out"});});
    btn.addEventListener('mouseleave',()=>gsap.to(btn,{x:0,y:0,duration:.6,ease:"elastic.out(1,.4)"}));
  });
}

/* nav solidify + active link + progress */
const nav=document.getElementById('nav');
ScrollTrigger.create({start:"top -80",onUpdate:s=>nav.classList.toggle('solid',s.scroll()>80)});
['about','services','projects','vision','team'].forEach(id=>{
  const sec=document.getElementById(id);if(!sec)return;
  ScrollTrigger.create({trigger:sec,start:"top 50%",end:"bottom 50%",
    onToggle:self=>{if(self.isActive)document.querySelectorAll('.nav__links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));}});
});
gsap.to('#progress',{scaleX:1,ease:"none",scrollTrigger:{start:0,end:"max",scrub:.3}});

window.addEventListener('load',()=>{
  initReveals();initParallax();initCounters();initMagnetic();drawCapsule(null,false);ScrollTrigger.refresh();
});
} /* end gsap enhancements */
