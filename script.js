const titleCard = document.querySelector('.titlecard');
const sun = document.querySelector('.sun');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // title card slides to the left as you scroll
  titleCard.style.transform = `translateX(${-scrollY * 1.5}px)`;

  // sun drops down, stops near the bottom of the title card area
  const sunDrop = Math.min(scrollY * 1.5, 1700);
  sun.style.transform = `translateY(${sunDrop}px)`;
});

const fishOverlay = document.querySelector('.fish-overlay');
const panel2 = document.querySelector('.panel-2-wrapper');

window.addEventListener('scroll', () => {
  const panel2Top = panel2.getBoundingClientRect().top;
  const panel2Height = panel2.offsetHeight;
  
  // start sliding in when 2/3 down panel 2 enters the viewport
  const triggerPoint = window.innerHeight - (panel2Height * 0.1);
  
  if (panel2Top < triggerPoint) {
    // how far we've scrolled into the trigger zone
    const progress = Math.min((triggerPoint - panel2Top) / (panel2Height * 0.8), 1);
    
    // goes from -100% (off screen left) to 0% (fully in place)
    const xPos = -100 + (progress * 100);
    fishOverlay.style.transform = `translateX(${xPos}%)`;
  }
});