document.addEventListener("DOMContentLoaded", function () {
    const movingImage = document.getElementById("movingImage");
  
    // Adjust the duration and distance as needed
    moveImage(movingImage, 5000, window.innerWidth - 100);
  });
  
  function moveImage(element, duration, distance) {
    let startTime;
  
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
  
      const progress = timestamp - startTime;
  
      // Calculate the new position based on progress, duration, and distance
      const newPosition = (progress / duration) * distance;
  
      // Apply the new position to the element
      element.style.transform = `translateX(${newPosition}px)`;
  
      if (progress < duration) {
        // Continue the animation
        requestAnimationFrame(step);
      }
    }
  
    // Start the animation
    requestAnimationFrame(step);
  }