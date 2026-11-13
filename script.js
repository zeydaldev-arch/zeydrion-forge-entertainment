
document.addEventListener("DOMContentLoaded", function () {
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// ZEYDRION Cursor Glow

const cursorGlow = document.createElement("div");
cursorGlow.className = "cursor-glow";
document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", (event) => {
  cursorGlow.style.left = event.clientX + "px";
  cursorGlow.style.top = event.clientY + "px";
  cursorGlow.style.opacity = "1";
});

document.addEventListener("mouseleave", () => {
  cursorGlow.style.opacity = "0";
});

// ZEYDRION Brand Card Animation

const brandCards = document.querySelectorAll(".brand-card");

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      cardObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

brandCards.forEach((card) => {
  card.classList.add("reveal");
  cardObserver.observe(card);
});
