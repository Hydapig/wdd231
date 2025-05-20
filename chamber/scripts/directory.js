const date = new Date();
let year = date.getFullYear();
const formattedDate = date.toLocaleString('en-US', { timeZoneName: 'short' });
document.getElementById('year').innerHTML = year
document.getElementById('lastModified').innerHTML = formattedDate

const mainnav = document.querySelector('#animateMenu');
const hambutton = document.querySelector('#menuButton');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('open');
	hambutton.classList.toggle('open');
});