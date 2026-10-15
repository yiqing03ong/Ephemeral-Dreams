const titleCard = document.querySelector('.titlecard');
const sun = document.querySelector('.sun');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // title card slides to the left as you scroll
  titleCard.style.transform = `translateX(${-scrollY * 1.5}px)`;

  // sun drops down, stops near the bottom of the title card area
  const sunDrop = Math.min(scrollY * 1.5, 1000);
  sun.style.transform = `translateY(${sunDrop}px)`;
});