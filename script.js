const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//used to take the input value and compare it to the fruits array
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

//takes the input value, clears the suggestions div and then makes a list of suggestions
function searchHandler(e) {
	let results = search(input.value);
	//the next 2 lines clear out previous suggestions
	suggestions.innerHTML = '';
	suggestions.classList.remove('has-suggestions');
	showSuggestions(results, input.value); 
}

//take an array from the search function and appends new li's to a ul
function showSuggestions(results) {
	//this is to add a border box around suggestions
	suggestions.classList.add('has-suggestions')
	if (results.length === 0 || results.length > 20){
		suggestions.classList.remove('has-suggestions')
		suggestions.innerHTML = '';
	}
	else for(let suggestion of results){
		let newLi = document.createElement('li');
		newLi.innerText = suggestion
		suggestions.append(newLi);
	}
}

//this take the selected fruit show up in the search abr and removes the suggestions
function useSuggestion(e) {
	input.value = e.target.innerText
	suggestions.innerHTML = ''
	suggestions.classList.remove('has-suggestions');
}

//this is my hover highlight feature
function highlightSuggestion(e){
	for (let suggestion of suggestions.childNodes){
		if (suggestion === e.target){
			e.target.classList.add('highlight')
		}
		else suggestion.classList.remove('highlight')
	}
	
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', highlightSuggestion)