import { footerData } from "../../chamber/scripts/footer.mjs";
import { videos } from "../data/videos.mjs";
import { menuToggle } from "../../chamber/scripts/navigation.mjs";

menuToggle();
footerData();

const filterToggle = document.getElementById('filterToggle');
const filterOptions = document.getElementById('filterOptions');

filterToggle.addEventListener('click', () => {
    const expanded = filterToggle.getAttribute('aria-expanded') === 'true';
    filterToggle.setAttribute('aria-expanded', String(!expanded));
    filterOptions.hidden = expanded;
});

filterOptions.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        // Remove previous selection
        document.querySelectorAll('#filterOptions li').forEach(li => li.classList.remove('selected'));
        e.target.classList.add('selected');

        // Close dropdown
        filterOptions.hidden = true;
        filterToggle.setAttribute('aria-expanded', 'false');

        // Optionally trigger sort/filter logic here:
        const selectedValue = e.target.dataset.value;
        console.log("Selected filter:", selectedValue);
    }
});

function renderEpisodes(data) {
  const grid = document.getElementById('episodes-grid');
  grid.innerHTML = '';
  data.forEach(ep => {
    const a = document.createElement('a');
    a.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    a.target = '_blank';
    a.className = 'episode-card';
    a.innerHTML = `
      <img src="images/${ep.thumbnail}" alt="${ep.name} thumbnail" width="150px" height="150px">
      <div class="episode-info">
        <strong>Episode ${ep.id} - ${ep.name}</strong><br>
        ${ep.duration}  👍 ${ep.likes}
      </div>`;
    grid.appendChild(a);
  });
}

document.getElementById('filterOptions').addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    const sortBy = e.target.dataset.value; // recent, viewed, liked
    const sorted = [...videos].sort((a, b) => {
      if (sortBy === 'recent') return new Date(b.uploadDate) - new Date(a.uploadDate);
      if (sortBy === 'viewed') return b.views - a.views; // If views present
      if (sortBy === 'liked') return b.likes - a.likes;
      return 0;
    });
    renderEpisodes(sorted);
  }
});

// Initial render using "Most Recent"
renderEpisodes(videos);