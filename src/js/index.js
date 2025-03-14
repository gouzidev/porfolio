document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    
    // Modern dark theme initial color (slate blue-gray)
    const initialColor = {
      r :0, g : 12,  b : 22
    };
    
    // Target color with red influence (dark burgundy)
    const targetColor = {
      r :8, g : 19,  b : 22
    };
    
    // Set initial background
    body.style.backgroundColor = `rgb(${initialColor.r}, ${initialColor.g}, ${initialColor.b})`;
    document.addEventListener("scroll", () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollProgress = Math.min(scrollPosition / scrollHeight, 1);
      
      // Calculate new color based on scroll progress
      const r = Math.floor(initialColor.r + (targetColor.r - initialColor.r) * scrollProgress);
      const g = Math.floor(initialColor.g + (targetColor.g - initialColor.g) * scrollProgress);
      const b = Math.floor(initialColor.b + (targetColor.b - initialColor.b) * scrollProgress);
      
      // Apply the new background color
      body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  });