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

const url = './data/members.json';
const cards = document.querySelector('#member-list');

async function getMemberData() {
	const response = await fetch(url);
	const data = await response.json();
	membersData = data.members;
	displayMembers(membersData, 'grid');
}

const displayMembers = (members, view = "grid") => {
	const membershipLevels = {
		1: "Member",
		2: "Silver",
		3: "Gold"
	};

	const memberList = document.getElementById('member-list');
    memberList.innerHTML = '';

    if (view === "list") {
        displayMembersTable(members);
        return;
    }

	memberList.className = 'grid-view';

	members.forEach((member) => {
		const card = document.createElement('section');
		const logo = document.createElement('img');
		const name = document.createElement('h3');
		const location = document.createElement('p');
		const number = document.createElement('p');
		const url = document.createElement('a');
		const membership = document.createElement('p');

		logo.setAttribute('src', member.image);
		logo.setAttribute('alt', `${member.name} logo`);
		logo.setAttribute('loading', 'lazy');
		logo.setAttribute('width', '340');
		logo.setAttribute('height', '440');

		name.textContent = `${member.name}`;
		location.textContent = `${member.address} ${member.city} UT 84319`;
		number.textContent = `${member.phone}`;
		url.href = member.website;
		url.textContent = member.website;
		url.target = "_blank";
		membership.textContent = `Membership Level: ${membershipLevels[member.membership] || "Unknown"}`;

		// card.classList.add('member-list');
		card.appendChild(logo);
		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(number);
		card.appendChild(url);
		card.appendChild(membership);

		cards.appendChild(card);
	});
}

const displayMembersTable = (members) => {
	function mapMembershipLevel(level) {
		return level === 1 ? "Member" : level === 2 ? "Silver" : "Gold";
	}
	
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    thead.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Membership</th>
        </tr>
    `;

    members.forEach(member => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${member.name}</td>
            <td>${member.address}, ${member.city}</td>
            <td>${member.phone}</td>
            <td><a href="${member.website}" target="_blank">${member.website}</a></td>
            <td>${mapMembershipLevel(member.membership)}</td>
        `;
        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    const memberList = document.getElementById('member-list');
    memberList.innerHTML = '';
	memberList.className = 'list-view';
    memberList.appendChild(table);
};

getMemberData()

const gridView = document.querySelector('#grid-view');
const listView = document.querySelector('#list-view');
// const memberList = document.querySelector('#member-list')

gridView.addEventListener('click', () => {
  displayMembers(membersData, 'grid');
});

listView.addEventListener('click', () => {
  displayMembers(membersData, 'list');
});
