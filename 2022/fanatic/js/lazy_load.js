"use strict";

const lazyImages = document.querySelectorAll("img[data-src],source[data-srcset]");
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];

if (lazyImages.length > 0) {
  lazyImages.forEach((img) => {
    if (img.dataset.src || img.dataset.srcset) {
      lazyImagesPositions.push(img.getBoundingClientRect().top + scrollY);
      lazyScrollCheck();
    }
  });
}

window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
  if (document.querySelectorAll("img[data-src],source[data-srcset]").length > 0) {
    lazyScrollCheck();
  }
}

function lazyScrollCheck() {
  let imgIndex = lazyImagesPositions.findIndex((item) => scrollY > item - windowHeight);
  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute("data-src");
    } else if (lazyImages[imgIndex].dataset.srcset) {
      lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
      lazyImages[imgIndex].removeAttribute("data-srcset");
    }
    ibg();
    delete lazyImagesPositions[imgIndex];
  }
}

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
    if (ibg[i].querySelector("source")) {
      ibg[i].style.backgroundImage = "url(" + ibg[i].querySelector("source").getAttribute("srcset") + ")";
    }
  }
}
