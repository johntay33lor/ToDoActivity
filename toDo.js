
function addItem() {
	let li = document.createElement('li');
	let input = document.getElementById('add').value;
	let text = document.createTextNode(input);
	li.appendChild(text);

	if (input.length > 0) {
		document.getElementById('myUL').appendChild(li);
	}else{
		alert('Please enter a task!');
	}	
	
	document.getElementById('add').value = '';
}

let myList = document.getElementsByTagName('ul')[0];
let myListItems = [ ...myList.getElementsByTagName('li')];

for (myListItem of myListItems) {
	let deleteButton = document.createElement('button');
	deleteButton.type = 'button';
	deleteButton.classList.add('deleteButton');
	deleteButton.textContent = 'Delete item';
	deleteButton.addEventListener('click', (e) => e.target.parentNode.remove(), false);
	myListItem.appendChild(deleteButton);
}