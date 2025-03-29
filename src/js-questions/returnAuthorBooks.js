//Not best practice
const getBooksByAuthor = (books,authorName) => {
	const arr = [];
	books.map((book, key) => {
			if(book.author === authorName)
				arr.push(book);
			
	} )
	return arr;
}

const getBooksByAuthorFilter = (books,authorName) => {
    const arr = books.filter( book => book.author === authorName);
    return arr;
}

console.log(getBooksByAuthorFilter([
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "The Great Gatsby", author: "Jane Austen" },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen" },
  ],"Jane Austen"));


