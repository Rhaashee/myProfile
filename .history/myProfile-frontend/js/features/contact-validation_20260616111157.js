// js/features/contact-validation.js
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#contact-name").value.trim();
    const email = form.querySelector("#contact-email-input").value.trim();
    const message = form.querySelector("#contact-message").value.trim();
    const statusEl = document.getElementById("form-status");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      showStatus(statusEl, "Please fill in all fields.", false);
      return;
    }

    if (!emailRegex.test(email)) {
      showStatus(statusEl, "Please enter a valid email address.", false);
      return;
    }

    // Simulated send (no backend) - replace with contact-api.js call when ready
    showStatus(statusEl, "Message sent! I'll get back to you soon.", true);
    form.reset();
  });

  function showStatus(el, msg, success) {
    if (!el) return;
    el.textContent = msg;
    el.style.color = success ? "#4caf50" : "#e53935";
    el.style.display = "block";
    setTimeout(() => {
      el.style.display = "none";
    }, 4000);
  }
}

document.addEventListener("DOMContentLoaded", initContactForm);
