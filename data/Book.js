class Book {
    constructor(title, author, releaseDate) {
        this.title = title
        this.author = author
        this.releaseDate = releaseDate
        this.key = title + author + releaseDate
    }
}

export default Book