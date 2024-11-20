"use strict";
{
    const book1 = {
        // const book1 implements Book{
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2022
    };
    // function isRecentBook(b:object){
    // function isRecentBook(b:Book){
    function isRecentBook(b) {
        const currentYear = new Date().getFullYear();
        // console.log(new Date().getFullYear())
        // console.log(b)
        // console.log(b.publishedYear)
        const yearGap = currentYear - b.publishedYear;
        console.log(yearGap);
        if (yearGap <= 5) {
            // console.log(true)
            return true;
        }
        else {
            // console.log(false)
            return false;
        }
    }
    isRecentBook(book1);
    console.log(isRecentBook(book1));
}
