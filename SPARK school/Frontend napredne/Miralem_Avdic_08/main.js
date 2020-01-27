//OOP
class Person {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

//klasa Author nasljedjuje klasu Person
class Author extends Person {
	constructor(name, book, genre) {
		super(name); //super() se odnosi na konstruktor objekta Person
		this.book = new Book(book, genre, this);
	}
	//kako Author nasljedjuje Person, nema potrebe ponovo praviti metodu getName()
}

class Book {
	constructor(title, genre, author) {
		this.title = title;
		this.genre = genre;
		this.author = author;
	}
	getTitle() {
		return this.title;
	}
}

//module pattern
class Library {
	constructor() {
		let books = [];
		let authors = [];
		function getBooks() {
			return books;
		}

		function getAuthors() {
			return authors;
		}

		return {
			addBook: function(title, genre, author) {
				let tempBook = new Book(title, genre, author);
				getBooks().push(tempBook);
			},
			addAuthor: function(name, book, genre) {
				let tempAuthor = new Author(name, book, genre);
				getAuthors().push(tempAuthor);
			},
			searchBooks: function(searchQuery) {
				if (searchQuery === '') return books; //ako korisnik nije unio nista u search, prikazi sve knjige
				return getBooks().filter((book) => {
					return book.getTitle().match(new RegExp(searchQuery, 'i'));
				});
			},
			searchAuthors: function(searchQuery) {
				if (searchQuery === '') return authors;
				return getAuthors().filter((author) => {
					return author.getName().match(new RegExp(searchQuery, 'i'));
				});
			}
		};
	}
}

//inicijalizacija biblioteke
const library = new Library();

//DOM manipulacija
const submitAuthorBtn = document.getElementById('submit-author');
const submitBookBtn = document.getElementById('submit-book');

//akcije na submit author i book
submitAuthorBtn.addEventListener('click', (event) => {
	event.preventDefault();

	const name = document.getElementsByName('name')[0].value;
	const genre = document.getElementsByName('genre')[0].value;
	const book = document.getElementsByName('book')[0].value;

	library.addAuthor(name, book, genre);
	displayAuthors(library.searchAuthors(''));
});
submitBookBtn.addEventListener('click', (event) => {
	event.preventDefault();

	const title = document.getElementsByName('title')[0].value;
	const genre = document.getElementsByName('genre')[1].value;
	const author = document.getElementsByName('author')[0].value;

	library.addBook(title, genre, author);
	displayBooks(library.searchBooks(''));
});

//buttoni i input fields
const authorSearch = document.getElementById('author-search');
const bookSearch = document.getElementById('book-search');
const authorTable = document.getElementById('author-table');
const bookTable = document.getElementById('book-table');

//na input, rezultati se azuriraju
authorSearch.addEventListener('input', (event) => displayAuthors(library.searchAuthors(authorSearch.value)));
bookSearch.addEventListener('input', (event) => displayBooks(library.searchBooks(bookSearch.value)));

//funkcije za prikaz rezultata
function displayAuthors(authors) {
	authorTable.lastElementChild.innerHTML = '';
	authors.forEach((author) => {
		authorTable.lastElementChild.innerHTML += `<tr><td>${author.name}</td><td>${author.book.genre}</td><td>${author
			.book.title}`;
	});
}
function displayBooks(books) {
	bookTable.lastElementChild.innerHTML = '';
	books.forEach((book) => {
		bookTable.lastElementChild.innerHTML += `<tr><td>${book.title}</td><td>${book.genre}</td><td>${book.author}`;
	});
}

//Moguce koristiti u typescript-u
// interface Book {
// 	title: string;
// 	genre: string;
// 	author: string;
//   }
