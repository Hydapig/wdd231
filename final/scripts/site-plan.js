const date = new Date();
let year = date.getFullYear();
const formattedDate = date.toLocaleString('en-US', { timeZoneName: 'short' });
document.getElementById('year').innerHTML = year
document.getElementById('lastModified').innerHTML = formattedDate

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.clickable-img');
  const overlay = document.getElementById('overlay');
  const overlayImg = document.getElementById('overlayImg');
  const closeBtn = document.getElementById('closeBtn');

  images.forEach(img => {
    img.addEventListener('click', () => {
      overlayImg.src = img.src;
      overlay.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    overlayImg.src = '';
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.add('hidden');
      overlayImg.src = '';
    }
  });
});
