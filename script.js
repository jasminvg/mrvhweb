// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Scroll reveal for tick marks / cards
const revealTargets = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealTargets.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("in-view"));
}

// Formspree submission (AJAX so we can show an inline confirmation)
const contactForm = document.querySelector("#inquiry-form");
if (contactForm) {
  const statusBox = document.querySelector("#form-status");
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        statusBox.textContent =
          "Thanks for reaching out — your message has been sent. We'll get back to you soon.";
        statusBox.className = "form-status success";
        contactForm.reset();
      } else {
        statusBox.textContent =
          "Something went wrong sending your message. Please try again, or email us directly below.";
        statusBox.className = "form-status error";
      }
    } catch (err) {
      statusBox.textContent =
        "Something went wrong sending your message. Please try again, or email us directly below.";
      statusBox.className = "form-status error";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Inquiry";
      statusBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });
}
