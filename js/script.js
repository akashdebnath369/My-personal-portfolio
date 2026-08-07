/**
 * Akash Debnath — Premium Portfolio JavaScript
 * Loader · Particles · Typing · Scroll · GitHub API · Modals
 */

(function () {
  "use strict";

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loading");
    initLoader();
    initNavbar();
    initScrollReveal();
    initBackToTop();
    initTypingEffect();
    initParticles();
    initCursorGlow();
    initDynamicContent();
    initGitHubSection();
    initCertModal();
    initContactForm();
    initSmoothSections();
  });

  /* ---------- Loading Screen ---------- */
  function initLoader() {
    var loader = document.getElementById("loader");
    if (!loader) return;

    window.addEventListener("load", function () {
      setTimeout(function () {
        loader.classList.add("hidden");
        document.body.classList.remove("loading");
        document.querySelectorAll(".reveal").forEach(function (el, i) {
          var delay = el.getAttribute("data-delay") || i * 50;
          setTimeout(function () {
            el.classList.add("visible");
          }, parseInt(delay, 10));
        });
      }, 1200);
    });
  }

  /* ---------- Navbar ---------- */
  function initNavbar() {
    var navbar = document.getElementById("navbar");
    var navToggle = document.querySelector(".nav-toggle");
    var navMenu = document.querySelector(".nav-menu");
    var navLinks = document.querySelectorAll(".nav-link");

    if (navToggle && navMenu) {
      navToggle.addEventListener("click", function () {
        var isOpen = navMenu.classList.toggle("open");
        navToggle.classList.toggle("active");
        navToggle.setAttribute("aria-expanded", isOpen);
      });

      navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
          navToggle.classList.remove("active");
          navMenu.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    if (navbar) {
      window.addEventListener("scroll", function () {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
      });
    }

    /* Active section highlight */
    var sections = document.querySelectorAll("section[id]");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute("id");
            navLinks.forEach(function (link) {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + id
              );
            });
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---------- Scroll Reveal ---------- */
  function initScrollReveal() {
    var reveals = document.querySelectorAll(".reveal:not(.hero-content):not(.hero-visual)");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var delay = entry.target.getAttribute("data-delay") || 0;
            setTimeout(function () {
              entry.target.classList.add("visible");
            }, parseInt(delay, 10));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- Back to Top ---------- */
  function initBackToTop() {
    var btn = document.querySelector(".back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", function () {
      btn.classList.toggle("visible", window.scrollY > 400);
    });

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Typing Effect ---------- */
  function initTypingEffect() {
    var el = document.querySelector(".typing-text");
    if (!el || typeof PORTFOLIO === "undefined") return;

    var phrases = PORTFOLIO.typingPhrases;
    var phraseIndex = 0;
    var charIndex = 0;
    var isDeleting = false;

    function type() {
      var current = phrases[phraseIndex];

      if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
      }

      var speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === current.length) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
      }

      setTimeout(type, speed);
    }

    type();
  }

  /* ---------- Neural Network Particles ---------- */
  function initParticles() {
    var canvas = document.getElementById("particles-canvas");
    if (!canvas) return;

    var ctx = canvas.getContext("2d");
    var particles = [];
    var mouse = { x: null, y: null };
    var count = window.innerWidth < 768 ? 40 : 70;
    var connectionDist = 140;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function createParticles() {
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.5,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(function (p, i) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        /* Mouse interaction */
        if (mouse.x !== null) {
          var dx = mouse.x - p.x;
          var dy = mouse.y - p.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            p.x -= dx * 0.008;
            p.y -= dy * 0.008;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99, 102, 241, 0.6)";
        ctx.fill();

        /* Connect nearby particles */
        for (var j = i + 1; j < particles.length; j++) {
          var p2 = particles[j];
          var ddx = p.x - p2.x;
          var ddy = p.y - p2.y;
          var d = Math.sqrt(ddx * ddx + ddy * ddy);
          if (d < connectionDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "rgba(139, 92, 246, " + (1 - d / connectionDist) * 0.25 + ")";
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", function () {
      resize();
      createParticles();
    });

    canvas.addEventListener("mousemove", function (e) {
      var rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener("mouseleave", function () {
      mouse.x = null;
      mouse.y = null;
    });
  }

  /* ---------- Cursor Glow ---------- */
  function initCursorGlow() {
    var glow = document.getElementById("cursor-glow");
    if (!glow || !window.matchMedia("(hover: hover)").matches) return;

    document.addEventListener("mousemove", function (e) {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }

  /* ---------- Dynamic Content Rendering ---------- */
  function initDynamicContent() {
    if (typeof PORTFOLIO === "undefined") return;
    renderSkills();
    renderExperience();
    renderProjects();
    renderAchievements();
    renderCertifications();
  }

  var SKILL_ICONS = {
    code: "💻",
    web: "🌐",
    server: "⚡",
    brain: "🧠",
    library: "📚",
    tools: "🔧",
    users: "🤝",
  };

  var ACHIEVEMENT_ICONS = {
    award: "🏆",
    research: "🔬",
    microsoft: "🔷",
    lab: "🧪",
    rocket: "🚀",
    briefcase: "💼",
  };

  var PROJECT_ICONS = {
    aria: "👁️",
    suswastha: "🏥",
    "hate-speech": "🛡️",
    "connection-control": "🔗",
    "object-detection": "📷",
  };

  function renderSkills() {
    var grid = document.getElementById("skills-grid");
    if (!grid) return;

    grid.innerHTML = PORTFOLIO.skills
      .map(function (cat) {
        return (
          '<div class="skill-category-card reveal">' +
          '<div class="skill-cat-header">' +
          '<span class="skill-cat-icon">' +
          (SKILL_ICONS[cat.icon] || "⚙️") +
          "</span>" +
          "<h3>" +
          cat.category +
          "</h3>" +
          "</div>" +
          '<div class="skill-tags">' +
          cat.items
            .map(function (item) {
              return '<span class="skill-tag">' + item + "</span>";
            })
            .join("") +
          "</div></div>"
        );
      })
      .join("");

    initScrollReveal();
  }

  function renderExperience() {
    var timeline = document.getElementById("experience-timeline");
    if (!timeline) return;

    var typeLabels = {
      internship: "Internship",
      research: "Research",
      frontend: "Frontend",
    };

    timeline.innerHTML = PORTFOLIO.experience
      .map(function (exp) {
        return (
          '<div class="timeline-item reveal">' +
          '<span class="timeline-type">' +
          (typeLabels[exp.type] || "Experience") +
          "</span>" +
          "<h3>" +
          exp.title +
          "</h3>" +
          '<p class="timeline-org">' +
          exp.org +
          "</p>" +
          '<p class="timeline-period">' +
          exp.period +
          "</p>" +
          '<p class="timeline-project">' +
          exp.project +
          "</p>" +
          '<div class="timeline-highlights">' +
          exp.highlights
            .map(function (h) {
              return "<span>" + h + "</span>";
            })
            .join("") +
          "</div></div>"
        );
      })
      .join("");

    initScrollReveal();
  }

  function renderProjects() {
    var showcase = document.getElementById("projects-showcase");
    if (!showcase) return;

    showcase.innerHTML = PORTFOLIO.projects
      .map(function (p) {
        var statusClass =
          p.status === "Active Development"
            ? "status-active"
            : p.status === "Research"
            ? "status-research"
            : "status-completed";

        var demoBtn = p.demo
          ? '<a href="' +
            p.demo +
            '" class="btn btn-glass btn-sm" target="_blank" rel="noopener noreferrer">Live Demo</a>'
          : "";

        return (
          '<article class="project-card reveal">' +
          '<div class="project-visual ' +
          p.gradient +
          '">' +
          (p.featured
            ? '<span class="project-featured-badge">Featured</span>'
            : "") +
          '<span class="project-visual-icon">' +
          (PROJECT_ICONS[p.id] || "🚀") +
          "</span>" +
          '<span class="project-visual-label">' +
          p.subtitle +
          "</span>" +
          "</div>" +
          '<div class="project-body">' +
          '<div class="project-meta">' +
          '<span class="project-status ' +
          statusClass +
          '">' +
          p.status +
          "</span>" +
          '<span class="project-timeline">' +
          p.timeline +
          "</span>" +
          "</div>" +
          "<h3>" +
          p.title +
          "</h3>" +
          '<p class="project-subtitle">' +
          p.subtitle +
          "</p>" +
          '<p class="project-desc">' +
          p.description +
          "</p>" +
          '<ul class="project-features">' +
          p.features
            .map(function (f) {
              return "<li>" + f + "</li>";
            })
            .join("") +
          "</ul>" +
          '<div class="project-badges">' +
          p.tech
            .map(function (t) {
              return '<span class="badge">' + t + "</span>";
            })
            .join("") +
          "</div>" +
          '<div class="project-actions">' +
          '<a href="' +
          p.github +
          '" class="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>' +
          "View on GitHub</a>" +
          demoBtn +
          "</div></div></article>"
        );
      })
      .join("");

    initScrollReveal();
  }

  function renderAchievements() {
    var grid = document.getElementById("achievements-grid");
    if (!grid) return;

    grid.innerHTML = PORTFOLIO.achievements
      .map(function (a) {
        return (
          '<div class="achievement-card reveal">' +
          '<span class="achievement-icon">' +
          (ACHIEVEMENT_ICONS[a.icon] || "⭐") +
          "</span>" +
          "<h3>" +
          a.title +
          "</h3>" +
          "<p>" +
          a.desc +
          "</p></div>"
        );
      })
      .join("");

    initScrollReveal();
  }

  function renderCertifications() {
    var grid = document.getElementById("cert-grid");
    if (!grid) return;

    var certEmojis = ["🎓", "🔬", "🔷", "🐍", "☕", "💼"];

    grid.innerHTML = PORTFOLIO.certifications
      .map(function (cert, i) {
        return (
          '<div class="cert-card glass-card reveal" data-cert-id="' +
          cert.id +
          '" tabindex="0" role="button" aria-label="View ' +
          cert.title +
          ' certificate">' +
          '<div class="cert-preview">' +
          '<img src="' +
          cert.image +
          '" alt="' +
          cert.title +
          '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
          '<div class="cert-preview-fallback" style="display:none">' +
          certEmojis[i % certEmojis.length] +
          "</div>" +
          '<div class="cert-preview-overlay">View Certificate</div>' +
          "</div>" +
          '<div class="cert-body">' +
          "<h3>" +
          cert.title +
          "</h3>" +
          '<p class="cert-issuer">' +
          cert.issuer +
          "</p>" +
          "<p>" +
          cert.desc +
          "</p></div></div>"
        );
      })
      .join("");

    initScrollReveal();
  }

  /* ---------- GitHub API ---------- */
  function initGitHubSection() {
    var reposContainer = document.getElementById("github-repos");
    if (!reposContainer || typeof PORTFOLIO === "undefined") return;

    renderGitHubRepos(PORTFOLIO.githubRepos);

    fetch(
      "https://api.github.com/users/" + PORTFOLIO.githubUsername + "/repos?per_page=100&sort=updated"
    )
      .then(function (res) {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then(function (repos) {
        var pinnedNames = PORTFOLIO.githubRepos
          .filter(function (r) {
            return r.pinned;
          })
          .map(function (r) {
            return r.name;
          });

        var mapped = repos.map(function (repo) {
          return {
            name: repo.name,
            html_url: repo.html_url,
            description: repo.description || "No description available.",
            stargazers_count: repo.stargazers_count,
            language: repo.language || "—",
            pinned: pinnedNames.indexOf(repo.name) !== -1,
          };
        });

        mapped.sort(function (a, b) {
          if (a.pinned && !b.pinned) return -1;
          if (!a.pinned && b.pinned) return 1;
          return 0;
        });

        renderGitHubRepos(mapped.slice(0, 8));
      })
      .catch(function () {
        /* Fallback already rendered */
      });

    fetch("https://api.github.com/users/" + PORTFOLIO.githubUsername)
      .then(function (res) {
        return res.json();
      })
      .then(function (user) {
        var reposEl = document.getElementById("gh-repos");
        var followersEl = document.getElementById("gh-followers");
        if (reposEl) reposEl.textContent = user.public_repos;
        if (followersEl) followersEl.textContent = user.followers;
      })
      .catch(function () {
        var reposEl = document.getElementById("gh-repos");
        var followersEl = document.getElementById("gh-followers");
        if (reposEl) reposEl.textContent = "12";
        if (followersEl) followersEl.textContent = "1";
      });
  }

  var LANG_COLORS = {
    Python: "#3572A5",
    JavaScript: "#f1e05a",
    HTML: "#e34c26",
    CSS: "#563d7c",
    "Jupyter Notebook": "#DA5B0B",
  };

  function renderGitHubRepos(repos) {
    var container = document.getElementById("github-repos");
    if (!container) return;

    container.innerHTML = repos
      .map(function (repo) {
        var langColor = LANG_COLORS[repo.language] || "#8b5cf6";
        return (
          '<a href="' +
          repo.html_url +
          '" class="github-repo-card reveal' +
          (repo.pinned ? " pinned" : "") +
          '" target="_blank" rel="noopener noreferrer">' +
          '<div class="repo-header">' +
          '<span class="repo-name">' +
          '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1v9h-8a1 1 0 0 0-1 1v1.5a.25.25 0 0 0 .25.25h8.75a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H4.5a.25.25 0 0 0-.25.25V3h9z"/></svg>' +
          repo.name +
          "</span>" +
          (repo.pinned ? '<span class="pinned-badge">Pinned</span>' : "") +
          "</div>" +
          '<p class="repo-desc">' +
          repo.description +
          "</p>" +
          '<div class="repo-meta">' +
          '<span class="repo-lang"><span class="lang-dot" style="background:' +
          langColor +
          '"></span>' +
          repo.language +
          "</span>" +
          '<span class="repo-stars">⭐ ' +
          repo.stargazers_count +
          "</span>" +
          "</div></a>"
        );
      })
      .join("");

    initScrollReveal();
  }

  /* ---------- Certificate Modal ---------- */
  function initCertModal() {
    var modal = document.getElementById("cert-modal");
    if (!modal || typeof PORTFOLIO === "undefined") return;

    var certCards = document.getElementById("cert-grid");
    if (!certCards) return;

    certCards.addEventListener("click", function (e) {
      var card = e.target.closest(".cert-card");
      if (!card) return;
      openCertModal(card.getAttribute("data-cert-id"));
    });

    certCards.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var card = e.target.closest(".cert-card");
      if (!card) return;
      e.preventDefault();
      openCertModal(card.getAttribute("data-cert-id"));
    });

    modal.querySelectorAll("[data-close-modal]").forEach(function (el) {
      el.addEventListener("click", closeCertModal);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) closeCertModal();
    });

    function openCertModal(certId) {
      var cert = PORTFOLIO.certifications.find(function (c) {
        return c.id === certId;
      });
      if (!cert) return;

      document.getElementById("cert-modal-title").textContent = cert.title;
      document.getElementById("cert-modal-issuer").textContent = cert.issuer;
      document.getElementById("cert-modal-desc").textContent = cert.desc;

      var preview = document.getElementById("cert-modal-preview");
      preview.innerHTML =
        '<img src="' +
        cert.image +
        '" alt="' +
        cert.title +
        '" onerror="this.parentElement.innerHTML=\'<span style=\\\'font-size:4rem\\\'>🎓</span>\'">';

      modal.hidden = false;
      document.body.style.overflow = "hidden";
    }

    function closeCertModal() {
      modal.hidden = true;
      document.body.style.overflow = "";
    }
  }

  /* ---------- Contact Form ---------- */
  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var isValid = true;

      var name = document.getElementById("name");
      var email = document.getElementById("email");
      var subject = document.getElementById("subject");
      var message = document.getElementById("message");
      var successMsg = document.querySelector(".form-success");

      clearErrors();

      if (!name.value.trim()) {
        showError(name, "Name is required.");
        isValid = false;
      }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        showError(email, "Email is required.");
        isValid = false;
      } else if (!emailPattern.test(email.value)) {
        showError(email, "Please enter a valid email.");
        isValid = false;
      }

      if (!subject.value.trim()) {
        showError(subject, "Subject is required.");
        isValid = false;
      }

      if (!message.value.trim()) {
        showError(message, "Message is required.");
        isValid = false;
      } else if (message.value.trim().length < 10) {
        showError(message, "Message must be at least 10 characters.");
        isValid = false;
      }

      if (isValid && successMsg) {
        successMsg.classList.add("show");
        successMsg.textContent =
          "Thank you! Your message has been validated. Connect EmailJS or a backend to send emails.";
        form.reset();
        setTimeout(function () {
          successMsg.classList.remove("show");
        }, 5000);
      }
    });
  }

  function showError(input, msg) {
    input.classList.add("error");
    var errorEl = input.parentElement.querySelector(".form-error");
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.add("show");
    }
  }

  function clearErrors() {
    document
      .querySelectorAll(".contact-form input, .contact-form textarea")
      .forEach(function (input) {
        input.classList.remove("error");
        var errorEl = input.parentElement.querySelector(".form-error");
        if (errorEl) {
          errorEl.classList.remove("show");
          errorEl.textContent = "";
        }
      });
  }

  /* ---------- Parallax on Hero ---------- */
  function initSmoothSections() {
    var hero = document.querySelector(".hero-content");
    if (!hero) return;

    window.addEventListener(
      "scroll",
      function () {
        var scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
          var visual = document.querySelector(".hero-visual");
          if (visual) {
            visual.style.transform = "translateY(" + scrolled * 0.15 + "px)";
          }
        }
      },
      { passive: true }
    );
  }
})();
