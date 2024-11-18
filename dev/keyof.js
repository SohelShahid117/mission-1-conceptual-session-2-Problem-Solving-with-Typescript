"use strict";
{
    const myBook = {
        name: "try to be an expert programmer",
        author: "sohel shahid",
        publishedYear: 2025
    };
    //T for type & K for key
    function getBookProperty(book, key) {
        return book[key];
    }
    const authorOfBook = getBookProperty(myBook, "author");
    console.log(authorOfBook);
    // console.log(getBookProperty(myBook,"author"))
}
