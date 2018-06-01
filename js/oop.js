// create List<Book>
var books = [];
var id = 0;

for (var i = 0; i < 10; i++) {
    books[id] = {
        name: "BookName",
        pages: i
    }
    id++;

    localStorage.setItem("books", JSON.stringify(books));
}