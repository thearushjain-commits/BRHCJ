// ===============================
// BRHC EDITABLE SETTINGS
// Change these values first.
// ===============================
const BRHC = {
  whatsapp: "919910771122", // Replace with BRHC WhatsApp number, country code included, no + or spaces
  defaultMessage: "Hello BRHC, I would like to know more about your jewellery collection."
};

// WhatsApp buttons
document.querySelectorAll("[data-wa]").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const product = btn.dataset.product;
    let message = BRHC.defaultMessage;
    if (product) {
      message = `Hello BRHC, I am interested in product ${product}. Please share the current price and details.`;
    }
    window.open(`https://wa.me/${BRHC.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  });
});

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

// Header shadow after scroll
window.addEventListener("scroll", () => {
  document.getElementById("siteHeader")?.classList.toggle("scrolled", window.scrollY > 20);
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
