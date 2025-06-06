const date = new Date();
let year = date.getFullYear();
const formattedDate = date.toLocaleString('en-US', { timeZoneName: 'short' });
document.getElementById('year').innerHTML = year
document.getElementById('lastModified').innerHTML = formattedDate

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById('overlay');
  const overlayImg = document.getElementById('overlayImg');
  const closeBtn = document.getElementById('closeBtn');

  document.querySelectorAll('.clickable-img').forEach(img => {
    img.addEventListener('click', () => {
      overlayImg.src = img.src;
      overlay.classList.remove('hidden');
    });
  });

  const closeOverlay = () => {
    overlay.classList.add('hidden');
    overlayImg.src = '';
  };

  closeBtn.addEventListener('click', closeOverlay);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeOverlay();
  });

  // Lightweight year/last modified updater
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});

