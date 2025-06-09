import { footerData } from "./footer.mjs";
import { menuToggle } from "./navigation.mjs";
import { locations } from "../data/locations.mjs";


menuToggle();
footerData();

const showHere = document.querySelector("#locations");

function displayLocations(locations) {
	locations.forEach( x => {
		const card = document.createElement('div');
		const figure = document.createElement('figure');
		const figcaption = document.createElement('figcaption');
		const photo = document.createElement('img');
		const title = document.createElement('h2');
		const address = document.createElement('address');
		const desc = document.createElement('p');
		const button = document.createElement('button');

		photo.src = `images/${x.photo_url}`;
		photo.alt = x.name;
		photo.loading = "lazy";
		figcaption.innerHTML = x.name;
		figure.appendChild(photo);
		// figure.appendChild(figcaption);
		card.appendChild(figure);

		title.innerHTML = x.name;
		card.appendChild(title);
		
		address.innerHTML = x.address;
		card.appendChild(address);

		desc.innerHTML = x.description;
		card.appendChild(desc);

		button.innerHTML = "Learn More";
		card.append(button);

		showHere.appendChild(card);
		
	});
}

displayLocations(locations);

// visited message
const now = new Date();
const messageContainer = document.querySelector('#visitMessage');
const lastVisit = localStorage.getItem("lastVisit");

if (lastVisit) {
  const lastDate = new Date(lastVisit);
  const timeDiff = now - lastDate;
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff === 0) {
    messageContainer.textContent = "Welcome back! You visited earlier today.";
  } else if (daysDiff === 1) {
    messageContainer.textContent = "Welcome back! You last visited yesterday.";
  } else {
    messageContainer.textContent = `Welcome back! It's been ${daysDiff} days since your last visit.`;
  }
} else {
  messageContainer.textContent = "Welcome! This is your first visit.";
}

localStorage.setItem("lastVisit", now.toString());