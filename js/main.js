document.addEventListener("DOMContentLoaded", () => {
  /* Menú móvil */
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  navLinks?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );

  /* Botón volver arriba */
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("show", window.scrollY > 500);
    });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Newsletter demo */
  const newsletterForm = document.getElementById("newsletter-form");
  newsletterForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("¡Gracias por suscribirte! Revisa tu correo pronto 💌");
    newsletterForm.reset();
  });

  /* Formulario de contacto demo */
  const contactForm = document.getElementById("contact-form");
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("¡Mensaje enviado! Te responderemos muy pronto 🚀");
    contactForm.reset();
  });

  renderFeaturedPosts();
  renderBlogGrid();
  renderArticle();
  highlightActiveNav();
  initRevealObserver();
});

/* Revelar elementos al hacer scroll. Se ejecuta después de renderizar
   contenido dinámico (posts) para que el observer los detecte a todos. */
function initRevealObserver() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
}

function postCardHTML(post) {
  return `
    <article class="post-card reveal">
      <a href="post.html?id=${post.id}" class="post-thumb">
        <img src="${post.image}" alt="${post.title}" loading="lazy" />
        <span class="post-tag">${post.category}</span>
      </a>
      <div class="post-body">
        <div class="post-meta">
          <span><i class="fa-regular fa-calendar"></i> ${formatDate(post.date)}</span>
          <span><i class="fa-regular fa-clock"></i> ${post.readTime} min</span>
        </div>
        <h3><a href="post.html?id=${post.id}">${post.title}</a></h3>
        <p>${post.excerpt}</p>
        <a href="post.html?id=${post.id}" class="read-more">Leer artículo <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </article>
  `;
}

function renderFeaturedPosts() {
  const grid = document.getElementById("featured-posts");
  if (!grid || typeof POSTS === "undefined") return;
  const featured = POSTS.slice(0, 3);
  grid.innerHTML = featured.map(postCardHTML).join("");
}

function renderBlogGrid() {
  const grid = document.getElementById("blog-grid");
  if (!grid || typeof POSTS === "undefined") return;

  const filterBar = document.getElementById("filters-bar");
  const searchInput = document.getElementById("search-input");
  let activeCategory = "Todos";

  const draw = () => {
    const query = (searchInput?.value || "").toLowerCase().trim();
    const filtered = POSTS.filter((p) => {
      const matchCategory = activeCategory === "Todos" || p.category === activeCategory;
      const matchQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query);
      return matchCategory && matchQuery;
    });

    grid.innerHTML = filtered.length
      ? filtered.map(postCardHTML).join("")
      : `<div class="empty-state"><i class="fa-solid fa-magnifying-glass fa-2x"></i><p>No encontramos artículos que coincidan con tu búsqueda.</p></div>`;

    const revealEls = grid.querySelectorAll(".reveal");
    revealEls.forEach((el) => el.classList.add("visible"));
  };

  if (filterBar) {
    const cats = ["Todos", ...CATEGORIES.map((c) => c.name)];
    filterBar.innerHTML = cats
      .map(
        (c, i) =>
          `<button class="filter-btn ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`
      )
      .join("");

    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.cat;
      draw();
    });
  }

  searchInput?.addEventListener("input", draw);

  draw();
}

function renderArticle() {
  const container = document.getElementById("article-container");
  if (!container || typeof POSTS === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const post = getPostById(params.get("id")) || POSTS[0];

  document.title = `${post.title} | El Lado Extracultural`;

  const paragraphs = post.content
    .trim()
    .split("\n\n")
    .map((p) => `<p>${p}</p>`)
    .join("");

  document.getElementById("article-title").textContent = post.title;
  document.getElementById("article-category").textContent = post.category;
  document.getElementById("article-date").textContent = formatDate(post.date);
  document.getElementById("article-readtime").textContent = `${post.readTime} min de lectura`;
  document.getElementById("article-cover").src = post.image;
  document.getElementById("article-cover").alt = post.title;
  document.getElementById("article-content").innerHTML = paragraphs;

  const related = POSTS.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);
  const relatedFallback = related.length
    ? related
    : POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  document.getElementById("related-posts").innerHTML = relatedFallback
    .map(
      (p) => `
      <a href="post.html?id=${p.id}" class="related-item">
        <img src="${p.image}" alt="${p.title}" />
        <div>
          <h5>${p.title}</h5>
          <span>${formatDate(p.date)}</span>
        </div>
      </a>
    `
    )
    .join("");
}

function highlightActiveNav() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[data-page]").forEach((a) => {
    if (a.dataset.page === page) a.classList.add("active");
  });
}
