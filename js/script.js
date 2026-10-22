/* Centralized portfolio content. Update this file when adding real skills, projects, or experience. */
const portfolioConfig = {
  personal: {
    name: "Ahmed Elsharkawy",
    title: "Data Science & AI | Machine Learning",
    email: "elsharkawy55a@gmail.com",
    whatsapp: "201029984030", // Egypt country code +20; omit the leading zero.
    portrait: "assets/images/ahmed-portrait.jpeg"
  },
  social: {
    github: "https://github.com/elsharkawy55a-cyber",
    instagram: "https://www.instagram.com/ahmed_ragab.v?cplk=NXlqcmY1d3N5c2pu"
  },
  /* Replace these editable placeholders with skills you have personally confirmed. */
  skills: [
    { icon: "</>", category: "Programming", description: "Add your confirmed programming languages here." },
    { icon: "◈", category: "Data Science", description: "Add your data analysis and data science skills here." },
    { icon: "✳", category: "Machine Learning", description: "Add your machine learning skills here." },
    { icon: "◎", category: "Artificial Intelligence", description: "Add your AI topics and tools here." },
    { icon: "⌘", category: "Tools & Workflow", description: "Add your development tools here." },
    { icon: "↗", category: "Currently Learning", description: "Show what you are actively learning right now." }
  ],
   /* Add projects here. */
  projects: [
    {
      title: "Pet Haven",
      category: "WEB DEVELOPMENT",
      description: "A modern pet care website designed to help visitors explore pet-related services and discover a welcoming online experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "",
      demo: "https://elsharkawy55a-cyber.github.io/pet-haven-/"
    }
  ],

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function renderSkills() {
  const grid = $("#skills-grid");
  grid.innerHTML = portfolioConfig.skills.map((skill, index) => `
    <article class="skill-card reveal">
      <span class="skill-index">0${index + 1}</span>
      <span class="skill-icon" aria-hidden="true">${skill.icon}</span>
      <h3>${skill.category}</h3>
      <p>${skill.description}</p>
    </article>`).join("");
}

function renderProjects() {
  const grid = $("#projects-grid");
  const empty = $("#projects-empty");
  if (!portfolioConfig.projects.length) {
    empty.classList.remove("hidden");
    grid.innerHTML = "";
    return;
  }
  empty.classList.add("hidden");
  grid.innerHTML = portfolioConfig.projects.map((project, index) => {
    const image = project.image
      ? `<img src="${project.image}" alt="${project.title} project screenshot" loading="lazy">`
      : `<span class="project-placeholder" aria-hidden="true">✳</span>`;
    const technologies = Array.isArray(project.technologies) ? project.technologies.join(" · ") : "";
    const links = [
      project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer">GITHUB ↗</a>` : "",
      project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer">LIVE DEMO ↗</a>` : ""
    ].filter(Boolean).join("");
    return `<article class="project-card reveal">
      <div class="project-image">${image}</div>
      <div class="project-meta"><p class="eyebrow">${project.category || "PROJECT"}</p><span>0${index + 1} / ${String(portfolioConfig.projects.length).padStart(2, "0")}</span></div>
      <div class="project-content"><h3>${project.title}</h3><p>${project.description || ""}</p>
      ${technologies ? `<p class="project-tech">${technologies}</p>` : ""}
      ${links ? `<div class="project-links">${links}</div>` : ""}</div>
    </article>`;
  }).join("");
}

function renderContactLinks() {
  const links = [
    { label: "EMAIL", value: portfolioConfig.personal.email, href: `mailto:${portfolioConfig.personal.email}` },
    { label: "GITHUB", value: "Explore my repositories", href: portfolioConfig.social.github, external: true },
    { label: "WHATSAPP", value: "Send me a message", href: `https://wa.me/${portfolioConfig.personal.whatsapp}`, external: true },
    { label: "INSTAGRAM", value: "Connect on Instagram", href: portfolioConfig.social.instagram, external: true }
  ];
  $("#contact-links").innerHTML = links.map(item => `<div class="contact-item"><span>${item.label}</span><a href="${item.href}" ${item.external ? 'target="_blank" rel="noopener noreferrer"' : ""}>${item.value} ↗</a></div>`).join("");
}

function setupNavigation() {
  const toggle = $(".menu-toggle");
  const nav = $("#main-nav");
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    nav.classList.toggle("open", !isOpen);
  });
  $$(".nav-link").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
  }));

  const sections = $$("main section[id]");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$(".nav-link").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => observer.observe(section));

  window.addEventListener("scroll", () => $(".site-header").classList.toggle("scrolled", window.scrollY > 25), { passive: true });
}

function setupRevealAnimations() {
  const elements = $$(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach(element => element.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -25px 0px" });
  elements.forEach(element => observer.observe(element));
}

function initPortfolio() {
  renderSkills();
  renderProjects();
  renderContactLinks();
  $("#current-year").textContent = new Date().getFullYear();
  setupNavigation();
  setupRevealAnimations();
}
document.addEventListener("DOMContentLoaded", initPortfolio);
