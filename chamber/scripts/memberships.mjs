export async function getMembershipData() {
	const response = await fetch(url);
	const data = await response.json();
	return data.memberships;
}

const url = './data/memberships.json';