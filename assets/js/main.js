// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("nav-menu");

if (toggle && menu) {
	toggle.addEventListener("click", () => {
		const open = menu.classList.toggle("open");
		toggle.setAttribute("aria-expanded", String(open));
	});
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Basic contact form behavior (no backend yet)
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

if (form && statusEl) {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		statusEl.textContent = "Saved locally (demo). Next step: connect this form to email/submissions.";
		form.reset();
	});
}
