// ===== Feather Icons =====
if (window.feather) {
  feather.replace();
}

// ===== Navbar Shadow =====
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 30) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    header.style.background = "rgba(10,15,30,.85)";
  } else {
    header.style.boxShadow = "none";
    header.style.background = "rgba(0,0,0,.3)";
  }
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ===== Fade Animation =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".card,.project,.section,.glass").forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(40px)";
  item.style.transition = "0.8s ease";

  observer.observe(item);
});

// ===== Button Effect =====
document.querySelectorAll(".btn,.primary,button").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-4px) scale(1.03)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0) scale(1)";
  });
});

console.log("✅ NovaAI Website Loaded Successfully");
