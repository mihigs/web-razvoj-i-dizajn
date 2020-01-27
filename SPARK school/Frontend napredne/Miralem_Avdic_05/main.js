//We won't use this function because of two reasons:
// - "delete" shouldn't be used to remove elements from an array
// - there are built-in methods for removing elements from an array (pop(), shift())

// function deleteFirst(d) {
// 	if (d[0]) delete d[0];
// }

//group arguments in functions
function showData(...arg) {
	arg[0] = parseFloat(arg[0]);
	arg[1] = parseFloat(arg[1]);
	let f = arg[0] > arg[1] ? arg[0] / arg[1] : arg[1] / arg[0];
	f = f.toPrecision(4);
	arg[3].push(f);
	console.log(arg[3]);

	setTimeout(arg[3].shift(), 1000); //avoid using strings in setTimeout/setInterval

	//no need to declare variables again
	arg[0] = [ 1, 2, 3 ];
	arg[1] = [ 4, 5, 6 ];

	//declaring "a.length" as "length" so it isn't calculated every time
	for (let i = 0, length = arg[0].length; i < length; i++) {
		arg[1].push(arg[0][i]);
	}

	//we can use "i" as increment because it exists only in the "for" scope
	for (let i = 0, length = arg[1].length; i < length; i++) {
		arg[2][i] = arg[1][i] * 4;
	}
}

showData(12, '10.55', {}, [], new Date());

//Zadaca je malo zbunjujuca, nisam bio siguran sta trebam uraditi i da li mijenjati kod
