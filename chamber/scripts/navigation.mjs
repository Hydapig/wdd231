export function menuToggle() {
  const mainnav = document.querySelector('#animateMenu');
  const hambutton = document.querySelector('#menuButton');

  if (mainnav && hambutton) {
    hambutton.addEventListener('click', () => {
      mainnav.classList.toggle('open');
      hambutton.classList.toggle('open');
    });
  }
}