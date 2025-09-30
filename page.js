// ---------------- Burger Menu ----------------
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ---------------- Dark/Light Mode Switch ----------------
const modeSwitch = document.getElementById("modeSwitch");
const body = document.body;

modeSwitch.addEventListener("change", () => {
  if (modeSwitch.checked) {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
  } else {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
  }
});

function typeEffect() {
  if (index < typingText.length) {
    typingElement.textContent += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

// Start typing animation when page loads
window.addEventListener("load", typeEffect);

// Smooth Scroll
document.getElementById("exploreBtn").addEventListener("click", function(e) {
  e.preventDefault();
  const target = document.getElementById("about");
  const startPos = window.pageYOffset;
  const targetPos = target.getBoundingClientRect().top + startPos;
  const duration = 1200;
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const r = Math.min(progress / duration, 1);
    window.scrollTo(0, startPos + (targetPos - startPos) * r);
    if (progress < duration) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
});



// Typewriter for name
  const text = "Jc Developer";
  let i = 0;
  const typingEl = document.getElementById("typing");

  // apply styles
  typingEl.style.color = "#ffb300"; 
  typingEl.style.textShadow = "0 0 5px #fcc74eff"; 

  function typeWriter() {
    if (i < text.length) {
      typingEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();

