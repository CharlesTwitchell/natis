/**
 * Natis — page-level interactivity.
 */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const banner = document.getElementById("form-status");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        showBanner("success", "Thanks — your message is in. We'll be in touch soon.");
        form.reset();
      } else {
        showBanner("error", "Something went wrong sending that. Try emailing us directly instead.");
      }
    } catch (err) {
      showBanner("error", "Network error — try emailing us directly instead.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send message";
    }
  });

  function showBanner(type, message) {
    banner.textContent = message;
    banner.className = `status-banner is-visible ${type}`;
  }
});
