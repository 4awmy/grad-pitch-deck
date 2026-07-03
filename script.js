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

var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
var prevButton = document.getElementById("prev-slide");
var nextButton = document.getElementById("next-slide");
var currentEl = document.getElementById("slide-current");
var totalEl = document.getElementById("slide-total");
var dotNav = document.getElementById("dot-nav");
var currentSlide = 0;

function padSlideNumber(number) {
  return String(number).padStart(2, "0");
}

function renderDots() {
  if (!dotNav || !slides.length) return;
  dotNav.innerHTML = "";
  slides.forEach(function (slide, index) {
    var dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    dot.setAttribute("aria-label", "Go to slide " + (index + 1) + ": " + (slide.dataset.title || ""));
    dot.addEventListener("click", function () {
      goToSlide(index);
    });
    dotNav.appendChild(dot);
  });
}

function goToSlide(index) {
  if (!slides.length) return;
  currentSlide = Math.max(0, Math.min(index, slides.length - 1));
  slides.forEach(function (slide, slideIndex) {
    var isActive = slideIndex === currentSlide;
    slide.classList.toggle("active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  if (currentEl) currentEl.textContent = padSlideNumber(currentSlide + 1);
  if (totalEl) totalEl.textContent = padSlideNumber(slides.length);
  if (prevButton) prevButton.disabled = currentSlide === 0;
  if (nextButton) nextButton.disabled = currentSlide === slides.length - 1;

  if (dotNav) {
    Array.prototype.slice.call(dotNav.querySelectorAll(".dot")).forEach(function (dot, dotIndex) {
      dot.classList.toggle("active", dotIndex === currentSlide);
      dot.setAttribute("aria-current", dotIndex === currentSlide ? "step" : "false");
    });
  }
}

if (slides.length) {
  renderDots();
  goToSlide(0);

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      goToSlide(currentSlide - 1);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      goToSlide(currentSlide + 1);
    });
  }

  document.addEventListener("keydown", function (event) {
    var tagName = event.target && event.target.tagName;
    if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") return;

    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      goToSlide(currentSlide + 1);
    }

    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      goToSlide(currentSlide - 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      goToSlide(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      goToSlide(slides.length - 1);
    }
  });
}
