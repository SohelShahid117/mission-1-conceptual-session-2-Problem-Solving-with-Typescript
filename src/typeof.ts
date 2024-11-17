{

    //typeof
    const movieName = "3 idiots";
    type MovirNam = typeof movieName;

    const movie = {
        title : "best progremmer",
        director :"sohel shahid"
    }
    type MovieType = typeof movie;

    const newMovie:MovieType = {
        title:"problem solver",
        director :"shahid"
    }

    type DetailsLog = {
        message : string,
        level : "info" | "warn" | "error"
    }

    function logMessage(inpt:string | number | DetailsLog){
        if(typeof inpt === "string"){
            console.log("input type is string:",inpt);
            // return inpt;
        }
        else if(typeof inpt === "number"){
            console.log("input type is number:",inpt);
        }
        else if("message" in inpt && "level" in inpt){  //here use in guard for type narrowing
            console.log(`level is ${inpt.level} & message is ${inpt.message}`)
        }
    }

    const test = logMessage("string type er input dilam");
    const test2 = logMessage(789);
    const test3 = logMessage({
        message:"bhai joldi google || chatgpt te jan",
        level:"error"
    });
    // console.log(test)

    //10min done 







}