class BookCollection{
    constructor(shelfGenre, room, shelfCapacity){
        if(room === 'livingRoom' || room === 'bedRoom' || room === 'closet'){
            this.room = room;
            this.shelfGenre = shelfGenre;

            this.shelfCapacity = shelfCapacity;
            this.counter = 0;
        } else {
            throw new Error(`"Cannot have book shelf in ${room}"`)
        }
        this.shelf = [];
    }

    addBook(bookName, bookAuthor, genre){
        if (genre === undefined) {
            genre = this.shelfGenre;
        }
        let createBook = {bookName: bookName, bookAuthor: bookAuthor, genre: genre};
        if (this.shelfCapacity > this.shelf.length) {
            this.shelf.push(createBook);
        } else {
            this.shelf.shift();
            this.shelf.push(createBook);
        }
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }

    throwAwayBook(bookName){
        this.shelf = this.shelf.filter(book => book.bookName !== bookName)
    }

    showBooks(genre){
        let result = '';
        result += `Results for search "${genre}":\n`;
        for (let i = 0; i < this.shelf.length; i++) {
            if(this.shelf[i].genre === genre){
                result += `\uD83D\uDCD6 ${this.shelf[i].bookAuthor} - "${this.shelf[i].bookName}"\n`
            }
        }
        return result.trim()
    }

    get shelfCondition(){
        return this.shelfCapacity - this.shelf.length;
    }

    toString(){
        if(this.shelf.length === 0){
            return "It's an empty shelf";
        } else {
            let result = '';
            result += `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
            for (let obj of this.shelf) {
                result += `\uD83D\uDCD6 "${obj.bookName}" - ${obj.bookAuthor}\n`
            }
            return result.trim()
        }
    }

}