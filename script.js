const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const cursor = document.querySelector('.cursor');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let inputLowerCase = str.toLowerCase();
	let results = [];
	fruits.filter(function(fruit){
		let fruitLowerCase = fruit.toLowerCase();
		if (fruitLowerCase.includes(inputLowerCase)){
			results.push(fruit);
		}
	});
	return results;
}

function searchHandler(e) {
	let results = search(input.value);
	//the next line clears out previous suggestions
	suggestions.innerHTML = '';
	suggestions.classList.remove('has-suggestions');
	showSuggestions(results, input.value); 
}

//I am unsure why inputVal as an arguement was part of the starter code
function showSuggestions(results, inputVal) {
	//this is to add a border box around suggestions
	suggestions.classList.add('has-suggestions')
	if (results.length === 0 || results.length > 10){
		suggestions.classList.remove('has-suggestions')
		suggestions.innerHTML = '';
	}
	else for(let suggestion of results){
		let newLi = document.createElement('li');
		newLi.innerText = suggestion
		suggestions.append(newLi);
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText
	suggestions.innerHTML = ''
	suggestions.classList.remove('has-suggestions');
}

function highlightSuggestion(e){
	let x = e.clientX
	let y = e.clientY
	// cursor.sytle.transform = `translate3d(${x}px, ${y}px, 0)`;
	cursor.sytle.display = `translate3d(${x}px, ${y}px, 0)`;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', highlightSuggestion)