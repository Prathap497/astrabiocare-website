// Theme toggle button functionality
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
});

// Load theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") document.body.classList.add("dark-theme");

  // Newsletter popup logic
  const modal = document.getElementById("newsletterModal");
  const closeBtn = document.getElementById("closeNewsletter");
  const form = document.getElementById("newsletterForm");

  if (modal && !localStorage.getItem("newsletter_shown")) {
    setTimeout(() => {
      modal.style.display = "block";
    }, 8000);
  }

  if (closeBtn && form) {
    closeBtn.onclick = () => {
      modal.style.display = "none";
      localStorage.setItem("newsletter_shown", "yes");
    };

    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        localStorage.setItem("newsletter_shown", "yes");
      }
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletterEmail").value;
      alert("Thank you for subscribing, " + email);
      modal.style.display = "none";
      localStorage.setItem("newsletter_shown", "yes");
    });
  }

  // Share button logic
  document.querySelectorAll(".share-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const shareData = {
        title: document.title,
        url: window.location.href,
      };
      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          console.error("Share failed", err);
        }
      } else if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(shareData.url);
          alert("Link copied to clipboard");
        } catch (err) {
          alert("Unable to copy link");
        }
      }
    });
  });

  // Smooth scroll for product pills
  const pills = document.querySelectorAll('[data-scroll-to]');
  const sections = Array.from(pills).map((pill) => document.querySelector(pill.dataset.scrollTo)).filter(Boolean);

  pills.forEach((pill) => {
    pill.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(pill.dataset.scrollTo);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activePill = document.querySelector(`[data-scroll-to="#${entry.target.id}"]`);
          if (activePill) {
            pills.forEach((p) => p.classList.remove('active'));
            activePill.classList.add('active');
          }
        }
      });
    }, { threshold: 0.4 });

    sections.forEach((section) => observer.observe(section));
  }
});

// Header behavior on scroll
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  const currentScrollY = window.scrollY;

  header.classList.toggle("shrink", currentScrollY > 50);

  if (currentScrollY > lastScrollY && currentScrollY > 50) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollY = currentScrollY;
});
