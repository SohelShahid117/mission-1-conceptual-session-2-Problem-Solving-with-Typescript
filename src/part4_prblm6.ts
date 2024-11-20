{
  //https://github.com/Apollo-Level2-Web-Dev/batch3-assignment-1
  /*
    You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

Hints: Use getFullYear() method to extract the year to check the given year with current year.

// Sample Input :
const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
};
isRecentBook(book1);

// Sample Output: 
true
    */

/*
what is typeAlias?:
*/

// interface Book{
type Book = {
    title:string;
    author:string;
    publishedYear:number
}

const book1:Book={
// const book1 implements Book{
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
}
// function isRecentBook(b:object){
// function isRecentBook(b:Book){
function isRecentBook(b:Book):boolean{
    const currentYear = new Date().getFullYear() 
    // console.log(new Date().getFullYear())
    // console.log(b)
    // console.log(b.publishedYear)
    const yearGap = currentYear-b.publishedYear;
    console.log(yearGap)
    if(yearGap<=5){
        // console.log(true)
        return true;
    }
    else{
        // console.log(false)
        return false;
    }
}
isRecentBook(book1)
console.log(isRecentBook(book1))



}
