export function footerData() {
	const date = new Date();
	let year = date.getFullYear();
	const formattedDate = date.toLocaleString('en-US', { timeZoneName: 'short' });
	document.getElementById('year').innerHTML = year
	document.getElementById('lastModified').innerHTML = formattedDate
}