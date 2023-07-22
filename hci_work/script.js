document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slide-image");
    let currentIndex = 0;
  
    function showImage(index) {
      if (index >= 0 && index < images.length) {
        images.forEach((img) => img.classList.remove("active"));
        images[index].classList.add("active");
      }
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    setInterval(nextImage, 8000);
  });
  