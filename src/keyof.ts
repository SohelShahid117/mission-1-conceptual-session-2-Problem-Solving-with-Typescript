{
    type Book = {
        name:string;
        author:string;
        publishedYear:number
    }

    //use keyof to get the keys of Book type
    type BookKeys = keyof Book;


    const myBook:Book={
        name:"try to be an expert programmer",
        author:"sohel shahid",
        publishedYear:2025
    }

    //10 min done









}