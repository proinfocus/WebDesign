const moveLeft = document.querySelector(".moveleft");
const moveRight = document.querySelector(".moveright");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    const el = document.querySelector(".nav ul");
    let currentState = el.style.display;
    el.style.display = (currentState === "none" || currentState === "") ? "block" : "";
});

let currentSlide = 0;
const imgElements = document.querySelector(".hero").querySelectorAll("img");
const maxSlide = imgElements.length - 1;
const speed = 8000;

function playSlides() {
    if (currentSlide >= maxSlide) {
        imgElements.forEach(element => {
            element.classList.remove("show");
        });
        currentSlide = 0;
    } else
        currentSlide++;

    imgElements[currentSlide - 1].classList.remove("show");
    imgElements[currentSlide].classList.add("show");
}

setInterval(playSlides, speed);
moveLeft.addEventListener("click", () => playSlides());
moveRight.addEventListener("click", () => playSlides());