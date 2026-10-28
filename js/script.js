/* =====================================================================
   1. EDIT YOUR CONTENT HERE (everything below is SAMPLE content).
   Leave a value as "" or [] to hide that item. Nothing else needs editing.
   ===================================================================== */
const CONFIG = {
  name: "NASEEM",
  initials: "naseem",
  title: "Full Stack Developer",
  roles: ["Full Stack Developer", "Frontend Engineer", "Problem Solver"],
  headline: "I build fast, accessible web products.",
  heroText: "Sample text: describe your expertise and the value you bring to teams and clients in two sentences.",
  availability: "Open to new opportunities", // "" hides the badge
  avatar: "https://img.magnific.com/premium-vector/professional-male-avatar-profile-picture-employee-work_1322206-66523.jpg?semt=ais_hybrid&w=740&q=80", // add your photo here
  resume: "assets/resume.pdf",                // "" hides the button
  accentDark: "", accentLight: "",            // optional hex overrides, e.g. "#f1658a"

  about: [
    "Sample text: introduce yourself, your background and how you got into your field.",
    "Sample text: explain how you approach problems and what you want to do next."
  ],
  focus: ["Frontend development", "Backend APIs", "Databases"],
  stats: [], // e.g. [{ value: "3+", label: "Years of experience" }] (only add numbers you can verify)

  skills: {
    "Frontend": ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    "Backend": ["Node.js", "Express"],
    "Databases": ["MongoDB", "PostgreSQL"],
    "Tools": ["Git", "GitHub", "VS Code"]
  },

  // category: any text; filters are generated from these automatically
  projects: [
    { title: "Sample Project One", category: "Web Development", image: "", description: "Sample text: what it does and who it is for.", tech: ["JavaScript", "Node.js"], features: ["Sample feature one", "Sample feature two"], demo: "", code: "", caseStudy: "" },
    { title: "Sample Project Two", category: "Data Analytics", image: "", description: "Sample text: the problem and the result.", tech: ["Python", "Pandas"], features: ["Sample feature"], demo: "", code: "", caseStudy: "" },
    { title: "Sample Project Three", category: "Data Science", image: "", description: "Sample text: the approach and outcome.", tech: ["Python", "scikit-learn"], features: [], demo: "", code: "", caseStudy: "" }
  ],

  experience: [
    { role: "Sample Role", org: "Sample Company", start: "Month Year", end: "Present", points: ["Sample responsibility or achievement"], tech: ["JavaScript"] },
    { role: "Sample Degree", org: "Sample University", start: "Year", end: "Year", points: [], tech: [] }
  ],

  achievements: [], // e.g. [{ title: "Certification name", meta: "Issuer, Year", link: "" }]

  // Use real details only. Empty values hide the card.
  contact: {
    email: "muhammednaseem1050@gmail.com",
    phone: "+9562248526",        // digits with country code
    whatsapp: "9562248526",      // digits only, with country code, no "+"
    whatsappMessage: "Hi! I found your portfolio and would like to connect.",
    linkedin: "https://www.linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
    instagram: "am__naseem",
    location: "malappuram"
  }
};

/* =====================================================================
   2. APP LOGIC
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const on = (el, ev, fn, o) => el && el.addEventListener(ev, fn, o);
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const icon = (n) => `<i data-lucide="${n}" aria-hidden="true"></i>`;
const badges = (a) => (a && a.length ? `<div class="badges">${a.map((t) => `<span class="badge">${esc(t)}</span>`).join("")}</div>` : "");
const ext = ' target="_blank" rel="noopener noreferrer"';
const C = CONFIG.contact;

const NAV = [["home", "Home"], ["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["experience", "Experience"], ["contact", "Contact"]];

function socials() {
  const s = [[C.github, "GitHub", "github"], [C.linkedin, "LinkedIn", "linkedin"], [C.instagram, "Instagram", "instagram"]];
  return s.filter((x) => x[0]).map(([u, l, i]) => `<a class="soc" href="${esc(u)}"${ext} aria-label="${l}">${icon(i)}</a>`).join("");
}

function renderStatic() {
  document.title = `${CONFIG.name} | ${CONFIG.title} Portfolio`;
  if (CONFIG.accentDark) document.head.insertAdjacentHTML("beforeend", `<style>[data-theme=dark]{--accent:${CONFIG.accentDark}}</style>`);
  if (CONFIG.accentLight) document.head.insertAdjacentHTML("beforeend", `<style>[data-theme=light]{--accent:${CONFIG.accentLight}}</style>`);
  const links = NAV.map(([id, l]) => `<a class="nav-link" href="#${id}" data-nav="${id}">${l}</a>`).join("");
  $("#navDesktop").innerHTML = links;
  $("#mobileMenu").innerHTML = links + `<a class="btn btn-primary mt-2 justify-center" href="#contact">Let's Connect</a>`;
  $("#logo").textContent = CONFIG.initials;
  $("#footLogo").textContent = CONFIG.name;
  $("#footName").textContent = CONFIG.name;
  $("#footTag").textContent = CONFIG.title;
  $("#footNav").innerHTML = NAV.map(([id, l]) => `<a href="#${id}">${l}</a>`).join("");
  $("#footSocials").innerHTML = socials();
  $("#heroSocials").innerHTML = socials();
  $("#availability").textContent = CONFIG.availability;
  $("#greeting").textContent = `Hi, I'm ${CONFIG.name}.`;
  $("#headline").textContent = CONFIG.headline;
  $("#heroText").textContent = CONFIG.heroText;
  const av = $("#avatar");
  av.alt = `Portrait of ${CONFIG.name}`;
  av.src = CONFIG.avatar;
  on(av, "error", () => { av.src = "data:image/svg+xml," + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='#252c39'/><text x='50' y='58' font-size='28' text-anchor='middle' fill='#9ba5b5' font-family='sans-serif'>${CONFIG.initials}</text></svg>`); }, { once: true });
  $("#year").textContent = new Date().getFullYear();
}

function renderAbout() {
  $("#aboutText").innerHTML = CONFIG.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#aboutFocus").innerHTML = CONFIG.focus.map((f) => `<li>${esc(f)}</li>`).join("");
  $("#stats").innerHTML = CONFIG.stats.map((s) => `<div><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join("");
  if (CONFIG.resume) { const b = $("#resumeBtn"); b.href = CONFIG.resume; b.hidden = false; }
}

function renderSkills() {
  const cats = Object.entries(CONFIG.skills).filter(([, v]) => v.length);
  if (!cats.length) return hide("skills");
  $("#skillGrid").innerHTML = cats.map(([k, v]) => `<div class="card reveal"><h3>${esc(k)}</h3>${badges(v)}</div>`).join("");
}

function renderProjects() {
  const list = CONFIG.projects;
  if (!list.length) return hide("projects");
  const cats = ["All", ...new Set(list.map((p) => p.category).filter(Boolean))];
  const f = $("#filters");
  f.innerHTML = cats.length > 2 ? cats.map((c, i) => `<button type="button" class="chip" data-filter="${esc(c)}" aria-pressed="${i === 0}">${esc(c)}</button>`).join("") : "";
  $("#projectGrid").innerHTML = list.map((p) => {
    const thumb = p.image ? `<img class="thumb" src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" loading="lazy" width="640" height="400">` : `<div class="thumb thumb-ph" role="img" aria-label="Placeholder for ${esc(p.title)} screenshot">Add screenshot</div>`;
    const lk = [[p.demo, "Live demo", "external-link"], [p.code, "Source code", "github"], [p.caseStudy, "Case study", "file-text"]].filter((x) => x[0]).map(([u, l, i]) => `<a href="${esc(u)}"${ext} aria-label="${l} for ${esc(p.title)}">${icon(i)}${l}</a>`).join("");
    return `<article class="card project reveal" data-category="${esc(p.category || "")}">${thumb}<div class="project-body"><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>${p.features && p.features.length ? `<ul class="features">${p.features.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}${badges(p.tech)}${lk ? `<div class="project-links">${lk}</div>` : ""}</div></article>`;
  }).join("");
  on(f, "click", (e) => {
    const b = e.target.closest("[data-filter]");
    if (!b) return;
    f.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
    document.querySelectorAll(".project").forEach((card) => { card.hidden = !(b.dataset.filter === "All" || card.dataset.category === b.dataset.filter); });
  });
}

function renderExperience() {
  if (!CONFIG.experience.length) return hide("experience");
  $("#timeline").innerHTML = CONFIG.experience.map((e) => `<li class="reveal"><time>${esc(e.start)} to ${esc(e.end)}</time><h3>${esc(e.role)}</h3><p class="org">${esc(e.org)}</p>${e.points && e.points.length ? `<ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}${badges(e.tech)}</li>`).join("");
}

function renderAchievements() {
  if (!CONFIG.achievements.length) return hide("achievements");
  $("#achGrid").innerHTML = CONFIG.achievements.map((a) => {
    const inner = `<h3>${esc(a.title)}</h3><p class="muted text-sm">${esc(a.meta || "")}</p>`;
    return a.link ? `<a class="card reveal card-link" href="${esc(a.link)}"${ext}><div>${inner}</div></a>` : `<div class="card reveal">${inner}</div>`;
  }).join("");
}

function renderContact() {
  const wa = C.whatsapp ? `https://wa.me/${C.whatsapp.replace(/\D/g, "")}${C.whatsappMessage ? "?text=" + encodeURIComponent(C.whatsappMessage) : ""}` : "";
  const items = [
    [C.email && `mailto:${C.email}`, "mail", "Email", C.email, false],
    [C.phone && `tel:${C.phone.replace(/[^\d+]/g, "")}`, "phone", "Phone", C.phone, false],
    [wa, "message-circle", "WhatsApp", "Chat directly", true],
    [C.linkedin, "linkedin", "LinkedIn", "Connect professionally", true],
    [C.github, "github", "GitHub", "Browse my code", true],
    [C.instagram, "instagram", "Instagram", "Follow along", true]
  ].filter((x) => x[0]);
  let html = items.map(([u, i, l, d, ex]) => `<a class="card card-link reveal" href="${esc(u)}"${ex ? ext : ""}><span class="ico">${icon(i)}</span><span><b>${l}</b><small>${esc(d)}</small></span></a>`).join("");
  if (C.location) html += `<div class="card card-link reveal"><span class="ico">${icon("map-pin")}</span><span><b>Location</b><small>${esc(C.location)}</small></span></div>`;
  $("#contactGrid").innerHTML = html;
}

function hide(id) {
  const s = document.getElementById(id);
  if (s) s.hidden = true;
  document.querySelectorAll(`[data-nav="${id}"], #footNav a[href="#${id}"]`).forEach((a) => a.remove());
}

function initTheme() {
  const btn = $("#themeToggle");
  const set = (t) => {
    document.documentElement.dataset.theme = t;
    btn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
  };
  set(document.documentElement.dataset.theme || "dark");
  on(btn, "click", () => {
    const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    set(t);
    try { localStorage.setItem("theme", t); } catch (e) {}
  });
}

function initMenu() {
  const btn = $("#menuBtn"), menu = $("#mobileMenu");
  const toggle = (open) => {
    menu.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  on(btn, "click", () => toggle(menu.hidden));
  on(menu, "click", (e) => { if (e.target.closest("a")) toggle(false); });
  on(document, "click", (e) => { if (!menu.hidden && !menu.contains(e.target) && !btn.contains(e.target)) toggle(false); });
  on(document, "keydown", (e) => { if (e.key === "Escape" && !menu.hidden) { toggle(false); btn.focus(); } });
  on(matchMedia("(min-width: 768px)"), "change", (m) => { if (m.matches) toggle(false); });
}

function initScrollSpy() {
  const links = document.querySelectorAll("[data-nav]");
  const secs = NAV.map(([id]) => document.getElementById(id)).filter((s) => s && !s.hidden);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => { const on_ = a.dataset.nav === en.target.id; a.classList.toggle("active", on_); on_ ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current"); });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  secs.forEach((s) => io.observe(s));
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("in"));
  const io = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
}

function initRoles() {
  const el = $("#role"), roles = CONFIG.roles;
  if (!roles.length) return;
  if (reduceMotion || roles.length === 1) { el.textContent = roles[0]; return; }
  let r = 0, c = 0, del = false;
  (function tick() {
    const w = roles[r];
    c += del ? -1 : 1;
    el.textContent = w.slice(0, c);
    let d = del ? 40 : 80;
    if (!del && c === w.length) { del = true; d = 1600; }
    else if (del && c === 0) { del = false; r = (r + 1) % roles.length; d = 300; }
    setTimeout(tick, d);
  })();
}

function init() {
  renderStatic(); renderAbout(); renderSkills(); renderProjects(); renderExperience(); renderAchievements(); renderContact();
  initTheme(); initMenu(); initRoles();
  const refresh = () => window.lucide && lucide.createIcons();
  refresh(); on(window, "load", refresh);
  initScrollSpy(); initReveal();
  on($("#toTop"), "click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
}
document.readyState === "loading" ? on(document, "DOMContentLoaded", init) : init();