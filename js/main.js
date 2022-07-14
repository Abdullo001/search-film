const elForm = document.querySelector('.js-form');
const elInput = document.querySelector('.js-input');
const elList = document.querySelector('.js-list');

let url = 'https://www.omdbapi.com/?apikey=187a207&s=';

async function func(localurl) {
	const response = await fetch(localurl);
	const data = await response.json();
	console.log(data);

	if (data.Response == 'True') {
		render(data.Search, elList);
	}
}

func();

elForm.addEventListener('submit', (evt) => {
	evt.preventDefault();

	let elInputVal = elInput.value;

	console.log(url);
	func(`${url}${elInputVal}`);
});

function render(array, node) {
	node.innerHTML = '';
	array.forEach((el) => {
		let item = document.createElement('li');
		let elImg = document.createElement('img');
		let elBox = document.createElement('div');
		let elTitle = document.createElement('h3');
		let elYear = document.createElement('span');

		item.classList.add('film');
		elImg.src = el.Poster;
		elTitle.textContent = el.Title;
		elYear.textContent = `Year: ${el.Year}   Type: ${el.Type}`;

		item.appendChild(elImg);
		elBox.appendChild(elTitle);
		elBox.appendChild(elYear);
		item.appendChild(elBox);
		node.appendChild(item);
	});
}
