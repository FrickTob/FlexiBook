class Book {
    title : string
    author : string
    releaseDate : Date
    key : string
    constructor(title : string, author : string, releaseDate : Date) {
        this.title = title
        this.author = author
        this.releaseDate = releaseDate
        this.key = title + author + releaseDate
    }
}

export default Book