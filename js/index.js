// Carousel
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const slideWidth = slides[0].offsetWidth;
  const visibleSlides = 2; // Antal synlige billeder
  let currentIndex = 0;

  function updateCarousel() {
    const newTransformValue = -currentIndex * slideWidth + "px";
    track.style.transform = "translateX(" + newTransformValue + ")";
  }

  function nextSlide() {
    currentIndex++;
    track.style.transition = "transform 0.5s ease-in-out";
    updateCarousel();

    if (currentIndex >= slides.length - visibleSlides + 1) {
      // Når vi nærmer os slutningen, gå tilbage til starten uden animation
      currentIndex = 0;
      track.style.transition = "none";
      updateCarousel();
    }
  }

  function prevSlide() {
    currentIndex--;
    track.style.transition = "transform 0.5s ease-in-out";
    updateCarousel();

    if (currentIndex < 0) {
      // Når vi går baglæns forbi det første billede, gå tilbage til slutningen uden animation
      currentIndex = slides.length - 1;
      track.style.transition = "none";
      updateCarousel();
    }
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
});