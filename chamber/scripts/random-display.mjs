import { getMemberData } from './members.mjs';

function getRandomItems(array, count) {
	const shuffled = array.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
}

export async function displayRandomCards() {
	const members = await getMemberData();
    const filteredMembers = members.filter(member =>
		member.membership === 2 || member.membership === 3
	);
	const randomMembers = getRandomItems(filteredMembers, 3);
    const membershipLevels = {
		1: "Member",
		2: "Silver",
		3: "Gold"
	};

	const container = document.getElementById('business-cards');
	container.innerHTML = '';

	randomMembers.forEach(member => {
		const card = document.createElement('div');
		card.classList.add('business-card');

		card.innerHTML = `
			<h3>${member.name}</h3>
			<p class="tagline">${member.tagline || ''}</p>
			<div class="card-content">
				<img src="${member.image}" alt="${member.name}" loading="lazy">
				<div class="contact-details">
					<p><strong>EMAIL:</strong> ${member.email}</p>
					<p><strong>PHONE:</strong> ${member.phone}</p>
					<p><strong>URL:</strong> <a href="#" target="_blank">${member.website}</a></p>
                    <p><strong>Membership Level:</strong> ${membershipLevels[member.membership] || "Unknown"}<p>
				</div>
			</div>
		`;

		container.appendChild(card);
	});
}
