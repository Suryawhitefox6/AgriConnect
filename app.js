const slider = document.querySelector(".slider");
const slides = slider.querySelector(".slides");
const slideWidth = slides.querySelector("img").clientWidth;
let currentSlide = 0;
let slideInterval;

function slideNext() {
    currentSlide++;
    if (currentSlide >= slides.children.length) {
        currentSlide = 0;
    }
    position = -currentSlide * slideWidth;
    slides.style.transform = `translateX(${position}px)`;
}

function startSlide() {
    slideInterval = setInterval(() => {
        slideNext();
    }, 3000);
}

startSlide();
