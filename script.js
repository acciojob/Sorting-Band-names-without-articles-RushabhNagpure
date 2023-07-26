//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeArticle(touristSpots) {
	return touristSpots.replace(/^(a | an | the )/i,'').trim();
}
let sortNames = touristSpots.map(removeArticle).sort((a,b) => a.localeCompare(b));
const ulElement = document.getElementById('band');

sortNames.forEach(touristSpots => {
	const liElement = document.createElement('li');
	liElement.textContent = touristSpots;
	ulElement.appendChild(liElement)
});
