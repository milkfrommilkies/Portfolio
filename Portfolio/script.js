const hero = document.querySelector(".hero");

let mouseX = 0;
let mouseY = 0;
let blobX = 0;
let blobY = 0;

/* HERO MOUSE BLOB */

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();

  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;

  hero.style.setProperty("--x", `${mouseX}px`);
  hero.style.setProperty("--y", `${mouseY}px`);

  hero.style.setProperty("--mouse-x", `${mouseX}px`);
  hero.style.setProperty("--mouse-y", `${mouseY}px`);
});

function animateBlob() {
  blobX += (mouseX - blobX) * 0.08;
  blobY += (mouseY - blobY) * 0.08;

  hero.style.setProperty("--blob-x", `${blobX}px`);
  hero.style.setProperty("--blob-y", `${blobY}px`);

  requestAnimationFrame(animateBlob);
}

animateBlob();

/* SCROLL BUTTON */

const scrollButton = document.querySelector(".scroll-indicator");

scrollButton.addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth"
  });
});

/* FADE ON SCROLL */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
revealOnScroll();

/* PROJECT 1 — POSTER OVERLAY */

const postersTrigger = document.querySelector(".posters-trigger");
const posterOverlay = document.querySelector(".poster-overlay");
const closePosters = document.querySelector(".close-posters");

postersTrigger.addEventListener("click", () => {
  posterOverlay.classList.add("active");
});

closePosters.addEventListener("click", () => {
  posterOverlay.classList.remove("active");
});

/* PROJECT 2 — GRAPHIC DESIGN PUBLICATION */

const editorialTrigger = document.querySelector(".editorial-trigger");
const bookOverlay = document.querySelector(".book-overlay");
const closeBook = document.querySelector(".close-book");
const bookViewer = document.querySelector(".book-viewer");
const bookContainer = document.getElementById("book");

let pageFlip = null;

function createBook() {
  if (pageFlip) return;

  for (let i = 1; i <= 116; i++) {
    const page = document.createElement("div");
    page.classList.add("page");

    const img = document.createElement("img");

    img.src = i === 1
      ? "Book/page_.jpg"
      : `Book/page_${i}.jpg`;

    img.alt = `Page ${i}`;

    page.appendChild(img);
    bookContainer.appendChild(page);
  }

  pageFlip = new St.PageFlip(bookContainer, {
    width: 640,
    height: 452,
    size: "fixed",
    showCover: true,
    usePortrait: false,
    flippingTime: 900,
    maxShadowOpacity: 0.5,
    mobileScrollSupport: false
  });

  pageFlip.loadFromHTML(bookContainer.querySelectorAll(".page"));
}

editorialTrigger.addEventListener("click", () => {
  bookOverlay.classList.add("active");
  bookViewer.classList.add("active");
  createBook();
});

closeBook.addEventListener("click", () => {
  bookOverlay.classList.remove("active");
});

/* PROJECT 3 — CHILDREN'S PICTURE BOOK */

const squareBookTrigger = document.querySelector(".square-book-trigger");
const book2Overlay = document.querySelector(".book2-overlay");
const closeBook2 = document.querySelector(".close-book2");
const book2Viewer = document.querySelector(".book2-viewer");
const book2Container = document.getElementById("book2");

let pageFlip2 = null;

function createBook2() {
  if (pageFlip2) return;

  for (let i = 1; i <= 25; i++) {
    const page = document.createElement("div");
    page.classList.add("page");

    const img = document.createElement("img");

    img.src = i === 1
      ? "Slikanica/Auri_page_.jpg"
      : `Slikanica/Auri_page_${i}.jpg`;

    img.alt = `Auri Page ${i}`;

    page.appendChild(img);
    book2Container.appendChild(page);
  }

  pageFlip2 = new St.PageFlip(book2Container, {
    width: 450,
    height: 450,
    size: "fixed",
    showCover: true,
    usePortrait: false,
    flippingTime: 900,
    maxShadowOpacity: 0.5,
    mobileScrollSupport: false
  });

  pageFlip2.loadFromHTML(book2Container.querySelectorAll(".page"));
}

squareBookTrigger.addEventListener("click", () => {
  book2Overlay.classList.add("active");
  book2Viewer.classList.add("active");
  createBook2();
});

closeBook2.addEventListener("click", () => {
  book2Overlay.classList.remove("active");
});

/* PROJECT 4 — GIF OVERLAY */

const gifTrigger = document.querySelector(".gif-trigger");
const gifOverlay = document.querySelector(".gif-overlay");
const closeGif = document.querySelector(".close-gif");

gifTrigger.addEventListener("click", () => {
  gifOverlay.classList.add("active");
});

closeGif.addEventListener("click", () => {
  gifOverlay.classList.remove("active");
});

/* HERO FLOAT ON SCROLL */

const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  heroSection.style.transform =
    `translateY(${scrollY * 0.12}px)`;

});

/* PROJECT 5 — AGRFT ABONMA 80 POSTER OVERLAY */

const abonmaTrigger = document.querySelector(".abonma-trigger");
const abonmaOverlay = document.querySelector(".abonma-overlay");
const closeAbonma = document.querySelector(".close-abonma");

abonmaTrigger.addEventListener("click", () => {
  abonmaOverlay.classList.add("active");
});

closeAbonma.addEventListener("click", () => {
  abonmaOverlay.classList.remove("active");
});