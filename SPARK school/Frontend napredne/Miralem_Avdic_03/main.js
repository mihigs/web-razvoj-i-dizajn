const dropZone = document.getElementsByClassName('drop-zone')[0];

//Prevents browser defaults and propagation
[ 'dragenter', 'dragover', 'dragleave', 'drop' ].forEach((eventName) => {
	dropZone.addEventListener(eventName, preventDefaults, false);
});
function preventDefaults(e) {
	e.preventDefault();
	e.stopPropagation();
}

//Gets highlighted on drag over
dropZone.addEventListener('dragover', function(event) {
	this.classList.add('highlighted');
});
//Turns off highlight after drag leave
dropZone.addEventListener('dragleave', function(event) {
	this.classList.remove('highlighted');
});

//Get and show info about the file dropped in the drop-zone
dropZone.addEventListener('drop', function(event) {
	this.classList.remove('highlighted'); //remove highlight
	let fileInfo = event.dataTransfer.files[0]; //take only the first file
	console.log(fileInfo);
	this.innerText = `Name: ${fileInfo.name}`;
	this.innerText += `\nSize: ${fileInfo.size}KB`;
	this.innerText += `\nType: ${fileInfo.type}`;
	let today = new Date(); //mozda bespotrebne varijable, ali je citljivije
	let modified = new Date(fileInfo.lastModifiedDate);
	let daysPassed = Math.round((today.getTime() - modified.getTime()) / (1000 * 60 * 60 * 24)); //improve?
	this.innerText += `\nDays since modified: ${daysPassed}`;
});
