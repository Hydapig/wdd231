export async function getMemberData() {
	const response = await fetch(url);
	const data = await response.json();
	return data.members;
}

const url = './data/members.json';