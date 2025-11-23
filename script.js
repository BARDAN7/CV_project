// Typing text for hero (looping)
const roles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "Analyst",
];
const typedEl = document.createElement("span");
typedEl.className = "typed-role";
document.querySelector(".hero-sub").insertAdjacentElement("afterend", typedEl);

let rIdx = 0,
  cIdx = 0,
  isDeleting = false;
function typeTick() {
  const role = roles[rIdx];
  typedEl.textContent = role.slice(0, cIdx);
  if (!isDeleting) {
    if (cIdx < role.length) {
      cIdx++;
      setTimeout(typeTick, 90);
    } else {
      isDeleting = true;
      setTimeout(typeTick, 1000);
    }
  } else {
    if (cIdx > 0) {
      cIdx--;
      setTimeout(typeTick, 40);
    } else {
      isDeleting = false;
      rIdx = (rIdx + 1) % roles.length;
      setTimeout(typeTick, 200);
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  typeTick();
});

// Smooth scroll for nav links
document.querySelectorAll(".nav-link").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const id = a.getAttribute("href").slice(1);
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Reveal on scroll (and initial)
const revealElems = document.querySelectorAll(".reveal");
function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  revealElems.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < trigger) el.classList.add("visible");
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Skill bars (optional animation) - not needed because tags used
// Avatar subtle parallax on mousemove (desktop)
const hero = document.querySelector(".hero");
const avatar = document.querySelector(".hero-avatar");
if (hero && avatar) {
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    avatar.style.transform = `translate3d(${x * 6}px, ${y * -6}px, 0)`;
  });
  hero.addEventListener("mouseleave", () => (avatar.style.transform = ""));
}

// // Theme toggle with persistence
// const themeToggle = document.getElementById("theme-toggle");
// const root = document.documentElement;
// const saved = localStorage.getItem("ds_theme_dark");
// function setTheme(dark) {
//   if (dark) {
//     root.style.setProperty("--bg", "#061017");
//     root.style.setProperty("--panel", "#0b1114");
//     themeToggle.textContent = "☀️";
//     localStorage.setItem("ds_theme_dark", "1");
//   } else {
//     root.style.setProperty("--bg", "#0b0f12");
//     root.style.setProperty("--panel", "#0f1417");
//     themeToggle.textContent = "🌙";
//     localStorage.setItem("ds_theme_dark", "0");
//   }
// }
// if (saved === "1") setTheme(true);
// else setTheme(false);
// themeToggle.addEventListener("click", () => {
//   const isDark = localStorage.getItem("ds_theme_dark") === "1";
//   setTheme(!isDark);
// });

// Contact form demo
const form = document.getElementById("contact-form");
const formMsg = document.getElementById("form-msg");
const clearBtn = document.getElementById("clear-btn");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formMsg.textContent = "Sending message...";
    setTimeout(() => {
      formMsg.textContent = "Message sent! I will contact you soon. (Demo)";
      form.reset();
    }, 900);
  });
  clearBtn.addEventListener("click", () => {
    form.reset();
    formMsg.textContent = "";
  });
}
