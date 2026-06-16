// js/features/contact-api.js
// Stub for future backend/email-service integration (e.g. EmailJS, Formspree, custom API).
// Wire this into contact-validation.js's submit handler when a backend is ready.

async function sendContactMessage({ name, email, message }) {
  // Example using Formspree-like endpoint:
  // const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ name, email, message }),
  // });
  // return res.ok;

  console.log("Contact form payload (no backend wired yet):", { name, email, message });
  return Promise.resolve(true);
}
