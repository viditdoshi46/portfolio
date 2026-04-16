const nav = document.querySelector(".site-nav");
const toggle = document.querySelector(".menu-toggle");
const links = [...document.querySelectorAll(".site-nav a")];

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(nav.classList.contains("open")));
  });
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});

document.addEventListener("click", (event) => {
  if (!nav || !toggle) {
    return;
  }

  const clickedInsideMenu = nav.contains(event.target);
  const clickedToggle = toggle.contains(event.target);
  if (!clickedInsideMenu && !clickedToggle) {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";
links.forEach((link) => {
  const href = link.getAttribute("href")?.replace("./", "") || "";
  link.classList.toggle("active", href === currentPage);
});
