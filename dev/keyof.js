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
    console.log(getBookProperty(myBook, "author"));
}
