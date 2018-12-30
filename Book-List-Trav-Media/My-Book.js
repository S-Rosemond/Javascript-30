// Book class: represents a book
class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

//store Class: handles storage
class Store {
	static getBooks() {
		let books;
		//This checks if book is in local storage first
		if (localStorage.getItem('books') === null) {
			//if the storage is empty create an array
			books = [];
		} else {
			//If not empty parse the item from local storage
			books = JSON.parse(localStorage.getItem('books'));
		}

		return books;
	}
	static addBook(book) {
		//get method above
		const books = Store.getBooks();

		//push into arr and store
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}

	static removeBook(isbn) {
		//always get localstorage
		const books = Store.getBooks();

		//Then set item repeat method w/diff manipulation
		books.forEach((book, index) => {
			if (book.isbn === isbn) {
				books.splice(index, 1);
			}
		});

		localStorage.setItem('books', JSON.stringify(books));
	}
}

//UI class: handle Ui tasks
class UI {
	static displayBoooks() {
		//any = Store/db getMethod()
		const books = Store.getBooks();

		books.forEach(book => UI.addBookToList(book));
	}
	static addBookToList(book) {
		const list = document.querySelector('#book-list');

		const row = document.createElement('tr');

		row.innerHTML = ` 
                <td>${book.title}</td>
                <td>${book.author}</td>
                 <td>${book.isbn}</td>
                 <td>
                <a href="#" class="btn btn-danger btn-small delete">X</a>
                 </td>`;

		list.appendChild(row);
	}

	static deleteBook(el) {
		if (el.classList.contains('delete')) {
			el.parentElement.parentElement.remove();
		}
	}

	static showAlert(message, ClassName) {
		const div = document.createElement('div');
		div.className = `alert alert-${ClassName}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('.container');
		const form = document.querySelector('#book-form');
		container.insertBefore(div, form);
		//Vanish in 3 seconds
		setTimeout(() => document.querySelector('.alert').remove(), 3000);
	}

	static clearFields() {
		document.querySelector('#title').value = '';
		document.querySelector('#author').value = '';
		document.querySelector('#isbn').value = '';
	}
}

//Event display books
document.addEventListener('DOMContentLoaded', UI.displayBoooks);

//event add a book
document.querySelector('#book-form').addEventListener('submit', el => {
	el.preventDefault();
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;

	//Validate
	if (title === '' || author === '' || isbn === '') {
		UI.showAlert('Please fill in all fields', 'danger');
	}

	//Inst
	const book = new Book(title, author, isbn);
	//Add book to UI
	UI.addBookToList(book);

	//Add book to store
	Store.addBook(book);

	//Show successs message
	UI.showAlert('Book Added', 'success');

	//clear field
	UI.clearFields();
});

//event remove a book
document.querySelector('#book-list').addEventListener('click', e => {
	UI.deleteBook(e.target);
	Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
	UI.showAlert('Book Removed', 'success');
});
