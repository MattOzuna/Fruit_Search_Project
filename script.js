const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

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
	showSuggestions(results, input.value); 
}

//I am unsure why inputVal as an arguement was part of the starter code
function showSuggestions(results, inputVal) {
	for(let suggestion of results){
		let newLi = document.createElement('li');
		newLi.innerText = suggestion
		suggestions.append(newLi);
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText
	suggestions.innerHTML = ''
}

// function highlightSuggestion(e){
// 	e.target.style.backgroundColor = 'black'
// }

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
// suggestions.addEventListener('mouseover', highlightSuggestion)