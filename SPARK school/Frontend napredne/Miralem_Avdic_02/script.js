// prethodni zadatak
var list = document.createElement('ul');
document.body.appendChild(list);
for (var i = 1; i < 10; i++) {
	var listItem = document.createElement('li');
	var span = document.createElement('span');
	span.innerText = i + '#element ';
	listItem.appendChild(span);
	list.appendChild(listItem);
}

//izbacit zadnjeg clana liste
list.removeChild(list.lastElementChild);

// izbaci duplikate
var itemi = {};
list.childNodes.forEach(function(item) {
	if (itemi[item] === 0) itemi[item] = 0;
	itemi[item]++;
	if (itemi[item] > 1) item.remove();
});

// zamijenit prvi i zadnji item
list.lastElementChild.replaceWith(list.firstElementChild);

// predzadnji element kao link na google
var link = document.createElement('a');
link.setAttribute('href', 'https://www.google.com');
link.setAttribute('target', '_blank');
link.innerText = 'Google page';
list.lastElementChild.previousElementSibling.firstChild.replaceWith(link);

// parni u crveno, neparni u plavo
for (var i = 0; i < list.childNodes.length; i++) {
	if (i % 2 === 0) list.childNodes[i].classList.add('red');
	else list.childNodes[i].classList.add('blue');
}
