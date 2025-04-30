class Book{
    constructor(title,author){
        this.title = title
        this.author = author
    }
    // to get details
    getDetails(){
        return `${this.title} and ${this.author}`
    }
}

let book1 = new Book("book 1", "book1");
let book2 = new Book("book2", "book2");

console.log(book1.getDetails());
console.log(book2.getDetails());