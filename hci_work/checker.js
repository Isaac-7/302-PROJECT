document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const slides = document.querySelectorAll(".slide");
  
    let currentIndex = 0;
  
    function nextSlide() {
      const nextIndex = (currentIndex + 1) % slides.length;
  
      slides[currentIndex].style.transform = "translateX(-100%)";
      slides[nextIndex].style.transform = "translateX(0)";
  
      currentIndex = nextIndex;
    }
  
    setInterval(nextSlide, 5000);
  });
  