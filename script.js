var menuButton = document.querySelector(".menu-button");
var siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", function () {
    var isOpen = siteNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      siteNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}
