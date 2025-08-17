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
