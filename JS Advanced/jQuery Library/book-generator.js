function createBook(selector, title, author, isbn) {
    let id = 1;

    let bookId = `book${id}`;
    let createBook = $('<div>');
    createBook.attr("id", bookId);

    let createTitle = $('<p>');
    createTitle.addClass("title");
    createTitle.text(title);
    createBook.append(createTitle);

    let createAuthor = $('<p>');
    createAuthor.addClass('author');
    createAuthor.text(author);
    createBook.append(createAuthor);

    let createISBN = $('<p>');
    createISBN.addClass('isbn');
    createISBN.text(isbn);
    createBook.append(createISBN);

    let selectButton = $('<button>Select</button>');
    createBook.append(selectButton);
    selectButton.on('click', function () {
        createBook.css("border", "2px solid blue");
    });

    let deselectButton = $('<button>Deselect</button>');
    createBook.append(deselectButton);
    deselectButton.on('click', function () {
       createBook.css("border", "none");
    });

    createBook.appendTo(selector);

    id++;

}