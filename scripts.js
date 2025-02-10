let slideIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
    setInterval(() => changeSlide(1), 5000); // Automatisch naar de volgende slide om de 5 seconden
});

function changeSlide(n) {
    showSlides(slideIndex + n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');

    if (slides.length === 0) return;

    slideIndex = (n + slides.length) % slides.length; // Zorgt voor een circulaire navigatie

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === slideIndex) {
            slide.classList.add('active');
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === slideIndex);
    });
}

function createDots() {
    let slides = document.querySelectorAll('.slide');
    let dotsContainer = document.querySelector('.dots');

    if (!dotsContainer || slides.length === 0) return;

    dotsContainer.innerHTML = ""; // Reset oude dots

    slides.forEach((_, index) => {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => showSlides(index));
        dotsContainer.appendChild(dot);
    });
}

createDots(); // Genereer de dots voor de slides
 

// Functie om het menu te openen
function toggleMenu() {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Functie om het menu te sluiten (sluitknop)
function closeMenu() {
    let navbar = document.querySelector('.navbar');
    navbar.classList.remove('active');
}XPathEvaluator