// Book class: represents a book
class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

//UI class: handle Ui tasks
class UI {
	static displayBoooks() {
		const storedBooks = [
			{
				title: 'Book one',
				author: 'John Doe',
				isbn: '334332'
			},
			{
				title: 'Book Two',
				author: 'Jane Doe',
				isbn: '564332'
			}
		];
		const books = storedBooks;

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
                 <a href="#" class="btn btn-danger btn-small delete"><a href="" class="btn btn-danger btn-small delete">X</a>
                 </td>`;

		list.appendChild(row);
	}
}

//store Class: handles storage

//Event display books
document.addEventListener('DOMContentLoaded', UI.displayBoooks);
//event add a book
document.querySelector('#book-form').addEventListener('submit', el => {
	el.preventDefault();
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;

	//Inst
	const book = new Book(title, author, isbn);
	console.log(book);
});

//event remove a book
