//declaring elements
const form = document.createElement('form');
const input1 = document.createElement('input');
input1.setAttribute('type', 'text');
const input2 = document.createElement('input');
input2.setAttribute('type', 'password');
const input3 = document.createElement('input');
input3.setAttribute('type', 'password');
const restartBtn = document.createElement('button');
restartBtn.innerText = 'Reset';
const submitBtn = document.createElement('button');
submitBtn.innerText = 'Submit';
const secondPart = document.getElementsByClassName('second-part')[0];
let formValidation = [ false, false, false ];

//appending elements to document
document.body.insertBefore(form, secondPart);
form.appendChild(input1);
form.appendChild(input2);
form.appendChild(input3);
form.appendChild(restartBtn);
form.appendChild(submitBtn);

//check input length (for username and password)
function checkInput(input) {
	if (input.value.length < 5 || input.value.length > 16) return false;
	return true;
}

//username input check
input1.addEventListener('input', function() {
	let regex = /[^A-Za-z0-9]/; //only characters and numbers
	if (!checkInput(this) || this.value.search(regex) !== -1) {
		this.style.border = '2px solid red';
		formValidation[0] = false;
	} else if (checkInput(this) && this.value.search(regex) === -1) {
		this.style.border = '2px solid green';
		formValidation[0] = true;
	}
});
//password check
input2.addEventListener('input', function() {
	if (
		this.value.search(/[A-Z]/) === -1 ||
		this.value.search(/\d/) === -1 ||
		this.value.search(/[^A-Za-z0-9]/) === -1 ||
		!checkInput(this)
	) {
		this.style.border = '2px solid red';
		formValidation[1] = false;
	} else {
		this.style.border = '2px solid green';
		formValidation[1] = true;
	}
});
//confirm password check
input3.addEventListener('input', function() {
	if (
		this.value !== input2.value ||
		this.value.search(/[A-Z]/) === -1 ||
		this.value.search(/\d/) === -1 ||
		this.value.search(/[^A-Za-z0-9]/) === -1 ||
		!checkInput(this)
	) {
		this.style.border = '2px solid red';
		formValidation[2] = false;
	} else {
		this.style.border = '2px solid green';
		formValidation[2] = true;
	}
});

//RESTART BUTTON
restartBtn.addEventListener('click', (event) => {
	event.preventDefault(); //prevents form submit on click
	formValidation = formValidation.map(function(inputField) {
		//resets validation data
		inputField = false;
	});
	input1.value = null;
	input2.value = null;
	input3.value = null;
	input1.style.border = '2px solid red';
	input2.style.border = '2px solid red';
	input3.style.border = '2px solid red';
	message.innerText = 'Successfully reset';
});

//SUBMIT BUTTON
const message = document.createElement('span');
const allInputs = document.getElementsByTagName('input');
form.insertBefore(message, form.firstElementChild);
submitBtn.addEventListener('click', (event) => {
	event.preventDefault();
	let successfull = true;
	formValidation.forEach((inputField) => (!inputField ? (successfull = false) : {}));
	successfull ? (message.innerText = 'Form data sent') : (message.innerText = 'Invalid input');
});

//GENERATE BUTTON
const generateBtn = document.getElementsByTagName('button')[2];
const list = document.createElement('ul');
secondPart.appendChild(list);
generateBtn.addEventListener('click', () => {
	let randomNumber = Math.round(Math.random() * 10);
	list.innerHTML = '';
	for (let i = 0; i < randomNumber; i++) {
		let listItem = document.createElement('li');
		if (i === 1) {
			//vodi na google
			listItem.innerHTML = "<a href='https://www.google.com' target='_blank'>Google</a>";
		} else {
			listItem.innerText = i + 1;
		}
		listItemOnHover(listItem);
		listItemOnClick(listItem);
		listItemOnDrag(listItem);
		removeItemOnClick(listItem);
		list.appendChild(listItem);
	}
	//shadow DOM i fabcebook
	const host = document.createElement('shadow-host');
	const forelastElement = list.lastElementChild.previousSibling;
	forelastElement.innerText = '';
	list.lastElementChild.previousSibling.appendChild(host);
	let shadow = host.createShadowRoot();
	shadow.innerHTML = '<a href="https://www.facebook.com">Facebook</a>';
});
//Events for list items on hover
function listItemOnHover(listItem) {
	listItem.addEventListener('mouseover', () => {
		listItem.style.color = 'gray';
	});
	listItem.addEventListener('mouseleave', () => {
		listItem.style.color = 'black';
	});
}

//COLORISE BUTTON
const coloriseBtn = document.getElementsByTagName('button')[3];
let colorise = coloriseBtn.value;
colorise = false;
//toggle colorise button
coloriseBtn.addEventListener('click', () => {
	if (colorise === false) {
		colorise = true;
		coloriseBtn.style.background = 'green';
	} else {
		colorise = false;
		coloriseBtn.style.background = 'white';
	}
});
//Items change color on click
function listItemOnClick(listItem) {
	listItem.addEventListener('click', () => {
		if (colorise === true) {
			let randomColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(
				Math.random() * 255
			)})`;
			listItem.style.border = `2px solid ${randomColor}`;
		}
	});
}

//REMOVE BUTTON
const removeBtn = document.getElementsByTagName('button')[4];
let removeEnabled = removeBtn.value;
removeEnabled = false;
//toggle remove button
removeBtn.addEventListener('click', () => {
	if (removeEnabled === false) {
		removeEnabled = true;
		removeBtn.style.background = 'green';
	} else {
		removeEnabled = false;
		removeBtn.style.background = 'white';
	}
});

//Removing items on click
function removeItemOnClick(listItem) {
	listItem.addEventListener('click', () => {
		if (removeEnabled === true) {
			listItem.remove();
		}
	});
}

//Dropzone
const dropzone = document.createElement('div');
dropzone.setAttribute('id', 'dropzone');
dropzone.style.height = '200px';
dropzone.style.width = '200px';
dropzone.style.background = 'teal';
document.body.insertBefore(dropzone, document.body.lastElementChild);

[ 'dragenter', 'dragover', 'dragleave', 'drop' ].forEach((eventName) => {
	dropzone.addEventListener(eventName, preventDefaults, false);
});
//prevent default dragging behaviour
function preventDefaults(e) {
	e.preventDefault();
	e.stopPropagation();
}

//make list items draggable and get their data
function listItemOnDrag(listItem) {
	listItem.setAttribute('draggable', 'true');
	listItem.addEventListener('dragstart', function(event) {
		console.log(this.innerText);
		event.dataTransfer.setData('text', this.innerText);
	});
}

dropzone.addEventListener('drop', function(event) {
	let data = event.dataTransfer.getData('text');
	console.log(data);
	let draggedElement = document.createElement('p');
	draggedElement.innerText = data;
	this.appendChild(draggedElement);
});
