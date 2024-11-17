{
    //now learning about typeof method
    
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

    //T for type & K for key
    function getBookProperty<T,K extends keyof T>(book:T,key:K):T[K]{
        return book[key];
    }
    const authorOfBook= getBookProperty(myBook,"author")
    console.log(authorOfBook)
    // console.log(getBookProperty(myBook,"author"))









}