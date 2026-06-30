/* ============================================
   Akash Debnath - Portfolio JavaScript
   Beginner-friendly vanilla JS
   ============================================ */

// Wait for DOM to load before running scripts
document.addEventListener("DOMContentLoaded", function () {
  initNavbar();
  initScrollAnimations();
  initBackToTop();
  initTypingEffect();
  initParticles();
  initSkillBars();
  initContactForm();
});

/* ---------- Mobile Navbar Toggle ---------- */
function initNavbar() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle hamburger menu on mobile
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("open");
    });

    // Close menu when a link is clicked
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.classList.remove("active");
        navMenu.classList.remove("open");
      });
    });
  }

  // Add shadow to navbar on scroll
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Highlight active page in navbar
  highlightActiveNav();
}

// Set active class on current page nav link
function highlightActiveNav() {
  let currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Handle opening index without filename in URL
  if (currentPage === "" || currentPage.endsWith("/")) {
    currentPage = "index.html";
  }

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    const href = link.getAttribute("href");
    if (
      href === currentPage ||
      window.location.href.endsWith("/" + href) ||
      window.location.href.endsWith(href)
    ) {
      link.classList.add("active");
    }
  });
}

/* ---------- Fade-in on Scroll ---------- */
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in");

  if (fadeElements.length === 0) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });
}

/* ---------- Back to Top Button ---------- */
function initBackToTop() {
  const backToTopBtn = document.querySelector(".back-to-top");

  if (!backToTopBtn) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Typing Text Effect (Home Page) ---------- */
function initTypingEffect() {
  const typingElement = document.querySelector(".typing-text");

  if (!typingElement) return;

  const phrases = [
    "AI/ML Developer",
    "Web Developer",
    "Problem Solver",
    "CS Student",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 2000;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ---------- Animated Background Particles (Home) ---------- */
function initParticles() {
  const canvas = document.getElementById("particles-canvas");

  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  const particleCount = 60;

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(function (p) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(139, 92, 246, 0.5)";
      ctx.fill();

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    });

    requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  createParticles();
  drawParticles();

  window.addEventListener("resize", function () {
    resizeCanvas();
    createParticles();
  });
}

/* ---------- Skill Progress Bars ---------- */
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");

  if (skillBars.length === 0) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute("data-width");
          bar.style.width = width + "%";
        }
      });
    },
    { threshold: 0.3 }
  );

  skillBars.forEach(function (bar) {
    observer.observe(bar);
  });
}

/* ---------- Contact Form Validation ---------- */
function initContactForm() {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const successMsg = document.querySelector(".form-success");

    // Clear previous errors
    clearErrors();

    // Validate name
    if (!name.value.trim()) {
      showError(name, "Name is required.");
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      showError(email, "Email is required.");
      isValid = false;
    } else if (!emailPattern.test(email.value)) {
      showError(email, "Please enter a valid email.");
      isValid = false;
    }

    // Validate subject
    if (!subject.value.trim()) {
      showError(subject, "Subject is required.");
      isValid = false;
    }

    // Validate message
    if (!message.value.trim()) {
      showError(message, "Message is required.");
      isValid = false;
    } else if (message.value.trim().length < 10) {
      showError(message, "Message must be at least 10 characters.");
      isValid = false;
    }

    if (isValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success || data.error === undefined) {
          if (successMsg) {
            successMsg.classList.add("show");
            successMsg.textContent = "Thank you! Your message has been sent successfully.";
            successMsg.style.color = "#2ed573";
          }
          form.reset();
        } else {
          throw new Error(data.error || 'Failed to send message');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        if (successMsg) {
          successMsg.classList.add("show");
          successMsg.textContent = "An error occurred. Please try again later or email directly.";
          successMsg.style.color = "#ff4757";
        }
      })
      .finally(() => {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
        
        setTimeout(function () {
          if (successMsg) {
            successMsg.classList.remove("show");
            successMsg.style.color = ""; // Reset color
          }
        }, 5000);
      });
    }
  });
}

function showError(input, message) {
  input.classList.add("error");
  const errorEl = input.parentElement.querySelector(".form-error");
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.add("show");
  }
}

function clearErrors() {
  const inputs = document.querySelectorAll(".contact-form input, .contact-form textarea");
  inputs.forEach(function (input) {
    input.classList.remove("error");
    const errorEl = input.parentElement.querySelector(".form-error");
    if (errorEl) {
      errorEl.classList.remove("show");
      errorEl.textContent = "";
    }
  });
}
